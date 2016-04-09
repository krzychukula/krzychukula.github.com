# Notes from [Node.js Design Patterns](http://www.amazon.com/Node-js-Design-Patterns-Mario-Casciaro/dp/1783287314)

1. Reminder that function should use consistent continuation passing style - synchoronous or asynchronous.

2. Most important idea so far is to use Queues with concurrency/parallelism limit of eg. 2 connections at a time.
I can help prevent generation of too many requests in case of hight traffic.
Queues can be used with promises and generators as well.

3. Streams
```
var fs = require('fs');
var zlib = require('zlib')
var file = process.argv[2]

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', function() {
      console.log('File successfully compressed')
  });
```

Adding crypto layer is really easy (with gzip used and read/write streams)
```
var crypto = require('crypto');

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(crypto.createCipher('aes192', 'a_shared_key'))
  .pipe(req)

req
  .pipe(crypto.createDecipher('aes192', 'a_shared_key'))
  .pipe(zlib.greateGunzip())
  .pipe(fs.createWriteStream(filename))

```

* stream.Readable
* stream.Writable
* stream.Duplex
* stream.Transform

(instances of EventEmitter)

* binary mode
* object mode

Transform stream is most advanced. You have to implement
`_transform(chunk, encoding, callback)` and `_flush()`

```
var stream = require('stream')
var util = require('util')

function ReplaceStream(searchString, replaceString){
  stream.Transform.call(this, {
    decodeDtrings: false
  })
  this.searchString = searchString
  this.replaceString = replaceString
  this.tailPiece = ''
}
util.inherits(ReplaceStream, stream.Transform)

ReplaceStream.prototype._transform = function(chunk, encoding, callback){
  var pieces = (this.tailPiece + chunk)
    .split(this.searchString)

  var lastPiece = pieces[pieces.length - 1]
  var tailPieceLength = this.searchString.length - 1

  //in case there is first part of searchString a the end of data chunk
  this.tailPiece = lastPiece.slice(-tailPieceLength)
  pieces[pieces.length - 1] = lastPiece.slice(0, -tailPieceLength)

  this.push(pieces.join(this.replaceString))
  callback()
}

ReplaceStream.prototype._flush = function(){
  this.push(this.tailPiece)
  callback()
}
module.exports = ReplaceStream


// how to use:

var ReplaceStream = require('./replaceStream')

var rs = new ReplaceStream('World', 'Node.js')
rs.on('data', function(chunk){
  console.log(chunk)
})

rs.write('Hello W')
rs.write('orld!');
rs.end()

//Hel
//lo Node.js
//!

```

There is also stream.PassThrough - it's like transform but does not change the data
