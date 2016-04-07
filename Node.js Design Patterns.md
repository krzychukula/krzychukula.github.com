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
