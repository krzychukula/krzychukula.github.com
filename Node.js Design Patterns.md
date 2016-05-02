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

Multiplexer - joins streams into one
Demultiplexer - divides them into separate streams.

Strems can be used to control flow as well - especially with some handful modules like merge.


# Proxy
Easiest thing is just to change the proxied object and overwrite the function you want to proxy.
There are also packages like https://www.npmjs.com/package/hooks that you can use.

# Decorator
Basically the same as proxy.
Some info about LevelUp database.

# Adapter
Similar as well. Can be useful

# Strategy
Used eg. by Passport.js for authentication.

# State
I think it's the first time someone explained it to me as version of Strategy pattern.

# Template
I don't like this one. Context when you use it is much more uncommon than people think.
Useless to learn about it.
Yes, streams use it but it's part of their bad API and high level of entry.

5. Writing modules
Nice example of Dependency Injection.

6. Recipes
Requiring asynchronous modules using DI looks like something you already used.
Initialization queue looks nice but it's going to work only for asynchronous API.

Preinitialization queues: Using State pattern for uninitialized and initialized states.
Commands are stored on the pending queue to be run when initialization completes.

# Asynchronous baching and caching

## batching
- can be done using queue on top of the batched API.
it's best used in high-load apps when API are slow.

## baching and caching are super easy with promises

# CPU-bound
One way is to use set immediate
Oneter to use child_process.fork() with EventEmitter communication.


7. Scalability and Architectural Patterns
cluster users child_process.fork() internally.
pm2 - as cluster/reverse proxy

Another spectrum are microservices - divide application instead of
clustering the monolith.

8. Messaging and Integration Patterns

# Fundamentals of a Messaging System
## One-way and request/reply patterns

## Message Types
* Command Message
* Event Message
* Document Message

## Asynchronous messaging and Queues

## Peer-to-peer or broker-based Messaging

## Publish Subscribe
Real time chat example
+ Redis
+ ZeroMQ to implement P2P architecture

## Durable Messages
AMQP with RabbitMQ

# Pipelines and task distribution patterns

competing consumers = fan-out = ventilator

## The ZeroMQ fan-out/fan-in pattern
sockets:
PUSH: sending Messages
PULL: for receiving
(both can work in connect mode and bind mode)
bind: better for durable nodes
connect: transient - like task workers

## Pipelines and competing consumers in AMQP
