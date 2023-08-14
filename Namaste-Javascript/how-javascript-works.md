Introduction to how JS works behind the scenes
Do you know how JavaScript works and how the code is executed?
Is JavaScript synchronous or asynchronous?
Is JavaScript single threaded or is it multi threaded?
Don't worry we'll cover everything, just keep watching Namaste JavaScript.
Execution Context in JS
Before I start explaining, listen to this first core fundamental.
It is: "Everything in JavaScript happens inside the Execution Context"
I repeat, Everything in JavaScript happens inside the Execution Context
You can assume this execution context to be a big box or a container
in which whole JavaScript code is executed.
So let us now see how this execution context actually looks like.
So follow along with me
Variable Environment of Execution Context
So now watch this carefully
So execution context is like a big box
and it has two components in it.
The first component is also known as the memory component
So this is the place where all the variables and functions are stored as key-value pairs
Something like this.
Key value, if suppose we have a variable 'a' which is equivalent to 10, it will be stored over here
and similarly functions are stored over here in this memory component
there is also a heavy word for this memory component
and this memory component is also known as Variable environment
Okay? so listen to this carefully. Variable environment.
So this is the sort of an environment in which all these variables and functions are stored as key-value pairs.
Thread of Execution in JavaScript
Something like that.
The second component of this execution context is the code component. Here it is.
This is the place where code is executed one line at a time.
So this is the place
So just like this memory component is also known as the variable environment,
there is also a heavy word for this code component
it is also known as Thread of execution, I repeat, Thread of execution.
So this is also known as the Thread of Execution.
So this Thread of execution is like a thread in which
the whole code is executed one line at a time
so here's the time for another core fundamental. Listen to this really very carefully.
Is JavaScript synchronous or asynchronous?
So JavaScript is a synchronous single-threaded language.
So this is really very important,
So JavaScript is a synchronous single-threaded language.
So let us see what this means.
So when I say single threaded,
that means JavaScript can only execute one command at a time
Is JavaScript a single-threaded language or multi-threaded?
and when I say synchronous single threaded,
that means that JavaScript can only execute one command at a time,
and in a specific order. Okay?
So that means that it can only go to the next line once the current line has been finished executing
So that means, synchronous single threaded language.
So let's revise once again.
So JavaScript is a synchronous single-threaded language.
I know that you must be thinking then, we have heard of something known as AJAX, right?
A stand for Asynchronous, so what does that mean?
Don't worry we'll cover everything
We'll be going slowly and we'll be understanding each of these concepts properly
as we go ahead.
So for now, just remember that
JavaScript is not possible without this beautiful execution context.
Recap of Execution Context Components
Let's just quickly recap what we studied.
This whole thing which you can see is the execution context.
The first component is known as the memory component
The second component is known as the code component
Memory component contains variables and functions as the key-value pairs.
and code component is the place where the whole JS code is executed.
Memory component is also known as the variable environment
Code component is also known as the thread of execution.
I know these are a lot of jargons
and trust me these things are really very important and nobody teaches them.
But, I am here on a mission
to make you fall in love with JavaScript
and don't worry continue along with me
and we'll be covering everything in detail.
Teaser of the next video - How code is executed in JS?
So in the next video I'll walk you through a real JS program
We will see how this whole beautiful execution context is created,
how this memory section is created
how this code is executed inside this code component
everything we'll cover in the next video.
Thank you for watching Namaste JavaScript