# Notes from [Node.js Design Patterns](http://www.amazon.com/Node-js-Design-Patterns-Mario-Casciaro/dp/1783287314)

1. Reminder that function should use consistent continuation passing style - synchoronous or asynchronous.

2. Most important idea so far is to use Queues with concurrency/parallelism limit of eg. 2 connections at a time.
I can help prevent generation of too many requests in case of hight traffic.
Queues can be used with promises and generators as well.
