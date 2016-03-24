# Place for my notes from reading book: https://drboolean.gitbooks.io/mostly-adequate-guide/content/

# Chapter 2: First Class Functions
https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch2.html

First part of this chapter is about remembring that functions can be assigned to variables.
Second is about seeing where there is no need for additional function. Example with `ajaxCall` makes it obvious.

Example with controller calling views and having all those functions for no reason is great as well.

Argument with generic code is great, the same function can be reused if it's name is generic eg. `compact` but not if it's called `validArticles`.

Great argument for thisless, I have lost interest in it as well. Still think about this in context of other libraries.


# Chapter 3: Pure Happines with Pure Functions

Array slice - is pure - always returns the same thing.
Array splice is inpure - it mutates the array.

Use slice.

Using closures in impure - variables outside of the function can change and as the result function is inpure. 
"reliance upon state is one of the largest contributors to system complexity".

Ok, so to create purity use Object.freeze({prop: 21}).

## Side effects may include...

"Water alone is not an inherent larvae incubator, it's the stagnant part that yields the swarms, and I assure you, side effects are a similar breeding ground in your own programs."

## 8th grade math

Function is a relation between two values: the input and the output.

## The case for purity

* memoization - cacheable
"Something to note is that you can transform some inpure functions into pure ones by delaying evaluation"
* Portable / Self-Documenting
"The problem with object-oriented languages is they've got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorrilla holding the banana... and the entire jungle" - Joe Armstrong
* Testable
* Reasonable
* Parallel Code
