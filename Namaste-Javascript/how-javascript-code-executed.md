What happens when you run JavaScript Code?
Do you know? When your run a JavaScript program
there are a lot of things happening behind the scenes inside the JavaScript engine
we'll be covering everything right now just keep watching Namaste🙏 JavaScript
Remember in the last video we discussed that
everything in JavaScript happens inside an Execution Context
Remember?
and JavaScript isn't possible without this beautiful Execution Context.
So here's one question for you.
So what happens when you run a JavaScript program?
Yes, you are right
An execution context is created.
So let us now see how this beautiful execution context is created with the help of a JavaScript program.
Code Example for Execution Context Creation
So we have this variable 'n' which is 2
and there is a function square which returns the square of a number
which is being passed inside this function
and there are two other variables, square2 & square4
which are just invoking this already created function.
Okay?
So now let us see how this whole JavaScript code is run behind the scenes.
So when you run this whole code,
Global Execution Context Creation
A global execution context is created.
Let us create this execution context
So remember we told that it's like a big box and it has two components.
These two components are the Memory Component & the Code component
Memory Allocation Phase & Code Execution Phase
Now listen to this very carefully.
This execution context is created in two phases.
The first phase is also known as the creation phase.
Remember this.
This is also known as the memory creation phase. Okay?
This is a very critical phase
So, memory creation phase.
Let us see how this phase is done
and afterwards, the second phase, that is the code execution phase. Okay?
So let us first see the first phase.
So if you have this code, in first phase of memory creation
JavaScript will allocate memory to all the variables and functions.
So as soon as JS encounters this line 1,
It allocates memory to n
So let us now allocate memory to n. How will it allocate?
It will reserve a memory space here for n
Similarly, now JavaScript goes to line 2
It sees that there is a function, which is names square
So it will allocate memory to square.
So now it allocates some memory to square.
So now, let me tell you what does it store.
When it allocates memory to n,
it stores a special value
which is known as undefined.
So in this, it stores a special value
which is known as undefined.
In the first phase and in case of functions,
it literally stores the whole code
of the function inside this memory space
so let me just show you
I know it's a little tricky, but
it stores the whole code
literally, when I say it stores the whole code,
that means that this whole code of this function
is stored over here
in this memory space of square
and now it will also allocate memory
to square2 and square4
and as there are another variables,
it will again store undefined for them
(reiterates) undefined
it's a bit tricky let me give you a quick recap
so in the first phase, JS skims through the whole program
line by line
and it allocates memory to all the variables and functions
as soon as it encounters 'n', it reserves memory for it
and allocates a special value, undefined, to it
Remember this value undefined,
we'll be talking a lot about this
I'll make a seperate video altogether for undefined
but for now, just understand
undefined is placed over here. Okay?
It's like a placeholder, a special keyword in JS
and, in case of functions, (functions are very beautiful)
in case of functions,
this function square
this whole function code is literally
(you can assume it to be) copied over here in the memory space
Okay? So that's how it is
and for the remaining two variables
again allocates memory and stores this special keyword
undefined, to them, in the first phase.
Let us see what happens in the phase two
The second phase is the code execution phase
(reiterates) It is the code execution phase
So let's see how this code is executed
after the memory allocation.
So JavaScript, once again runs through
this whole JS program line by line
and it executes the code now.
So this is the point when all these
functions and every calculation in the program is done. Okay?
So as soon as it encounters this first line, n=2,
it actually places the '2' inside the 'n'
So till now, the value of n was undefined
Now in the second phase of creation of Execution Context,
i.e. the Code execution phase,
in this phase, this 2 value over here of n,
is now being placed actually in this placeholder
or the identifier, which is 'n'. Okay?
So now this 2, in this second phase,
is now allocated here.
So let me just remove this undefined for a while,
Okay?
and now replace this with
the special value which we got, 2.
And, this is in the phase two. Remember this carefully.
After finishing line one, it goes to line two and sees that
We have nothing to do here. Right?
So line number two to five,
there is nothing to execute literally.
So it moves to line number 6
Function Invocation and Execution Context Creation
Line number 6 is the most amazing part.
Here, we invoke a function
Here's a function invocation
What do you mean by a function invocation?
Whenever you see a function name, with these parantheses,
with these round brackets,
it means that the function is now being executed.
functions are the heart of JavaScript
and, you know, they behave very differently
in JavaScript than any other language. Okay?
So functions over here are like a mini program,
and whenever a new function is invoked,
you know, a mini program is invoked,
an altogether new execution context is created.
Remember? That whole thing that we were running,
this whole program
was inside the global execution context,
now, when you run a function,
or when you invoke a function,
this function, a brand new execution context is created.
Okay? So let us see
This is gonna be interesting. Just keep following.
So here, a brand new execution context
inside this is created. Okay?
Now let us see
and this execution context again,
has these two components, which is the
memory component and a code component. Got it?
So now, we will again go through
the creation of this execution context
and there will again be two phases involved.
Remember? What were these two phases?
So let us see it. It will be interesting
So, the first phase is the memory creation phase
Remember? Memory creation phase.
In the memory creation phase,
Now we will be talking about this function invocation. Okay?
So we will be concerned about this piece of code only.
When we are executing this square(n),
we are only concerned about this piece of code. Remember?
So now, let us see how the memory is allocated here in the first phase
The phase one. Okay?
In the phase one, first of all,
don't forget that the memory is allocated to
variables and functions inside this function.
And when I say variables and functions,
it involves the parameters, like the 'num',
and the other variables
and we don't have a function so no need.
so we will be allocating memory to num
and ans over here, in this case.
So let us do that.
So we will be allocating memory to num, okay?
So here is num,
and, we will also allocate memory to ans, okay?
ans. Okay?
So now, what will happen is,
Remember? What will be stored in this?
The special placeholder which we had?
Yes. You are right.
We will be storing undefined in the phase one.
You know?
You will understand this concept of undefined
very better, just following along in these upcoming videos, okay?
For now, just keep in mind that this undefined is a very special keyword
We will be covering this in detail later on in the videos. Okay?
So we will be putting undefined over here.
and undefined is being allocated in phase one.
Now comes the part of phase two. Okay?
So, the phase two is the code execution phase.
Remember? Code execution
In this, we will be executing each line. Okay?
We'll be executing each line here. Okay?
So what happens when you execute the code? Okay?
So when this function is invoked,
first of all, this value of n, over here,
which is 2, is passed to num. Okay?
so this n is passed to num.
So that means, this value 2,is passed to num.
Got it?
So let me tell you one more concept.
Num over here is known as parameter of the function,
and, n over here is the argument. Okay?
So this is the argument, and,
the value of n is 2 right now.
So, remember, over here the value of n is 2
which will come over here in place of undefined.
So let us put the value 2 in num,
and the code will then move to the next line. Okay?
So now, we have moved to this line, line number 3.
In line 3, it will do the calculation,
and put the value of num*num inside ans.
It's like executing the code inside this code block, okay?
num into (multiplied by) num
and whatever the value will be there, will now go to this,
and undefined will be replaced by num*num, and the value.
So num*num, which is 4,like 2*2, which is 4
will now replace this undefined. Okay?
And will take a place in this memory space. Okay?
So the ans will now become 4.
Got it?
So that is how the code will be executed.
And now let me just remove it
So now, after finishing line number 3,
What happens while executing return statement
the control goes to line number 4.
Here, we encounter the special keyword return, and ans.
So, whenever you see a return and ans,
This return keyword tells this function,
that you are done with your work now,
just return the control back to the execution context,
where the function was invoked.
So remember, this is very important. Okay?
This return keyword states that,
now return the control of the program, to the place where this function was invoked.
So where the function was invoked?
Function was invoked here,
So return the value of ans, to the place where it was
the control, now the control goes here, to line 6 again.
How does that happen? Let me tell you.
As soon as we encounter this return statement,
we have this return of ans,
so it finds the value of ans inside this local memory.
This is known as the local memory, so local memory has 4,
So this return ans now returns the control back over here
and, okay in the line number 6,
and this value of ans, which was here 4, will now replace undefined of square2.
Got it?
This is how we are slowly executing the code.
The value will become 4 now. Okay?
So 4 will be stored over here. Got it?
One more thing that happens when the whole function is executed,
is that, this whole execution context, for that instance of that function, will be deleted.
That means that this whole execution context will now be completely deleted.
So now there won't be the execution context as soon as we return the value
So this whole thing wll be deleted. Okay?
And the control moves to line number 6.
After this replacement, we will go to line number 7
So in line number 7 we are again invoking a function, right,
and just the difference is, we are now passing in 4 over here as an argument directly. That's it.
Nothing will change.
Similarly, what will happen now?
As soon as this function invocation happens,
Again, a brand new execution context will be created, so let us create one, quickly and see how things are working.
So the brand new execution context is created.
Apologies for this drawing, I'm not very good at drawing (standard teacher dialogue lol)
This execution context is created,
Again it will have this memory
Again it will have a code component, remember?
And now, it will again go through those two phases.
Let's quickly do that, it will be fun.
So now it again goes back to this function here, right?
So this function. Now remember what happens?
Firstly memory is allocated to num, okay?
num will store the value undefined. Remember?
So let me zoom in.
Undefined
And, one more thing happens is, we allocate memory to ans, which is again, undefined.
Right?
Our first phase is done.
Now in the second phase,
In the code execution phase,
What will happen is, num will get this argument, from the invocation in line number 7,
num will get this value 4.
So num parameter will get the argument 4.
So here the argument is 4.
Okay?
In the code execution,this undefined will be replaced by (in the code execution phase) 4.
Right?
So it will be 4. Right?
And, what will happen after that, it will go to line number 3. Right?
So while invocation it will go to line number 3.
It will execute num*num, which is 4*4, 16
and this 16 will now replace this undefined value inside the ans. Right?
So we'll now replace this with 16. Got it?
So now it'll store 16.
The control moves to line number 4. After 3 is done.
So now, this return statement takes back the control to line number 7, where, the function was actually invoked.
Now the value 16 will replace undefined in the square4 variable. Okay?
So let us do that
Let us quickly do that. It will now get value 16 over here. Okay?
As soon as we are done with the function execution, this whole execution context is now deleted.
So this will be deleted.
So now line 7 is also executed, now there is nothing more.
So JS is done with all it's work.
So once JS is done with all it's work, now the program is finished,
The whole global execution context also deletes; goes off. Okay?
So that is how the whole code is executed.
Recap of Code Execution synchronously
I know this was all a lot, and it will take some time to digest, but quickly revise everything once again
it will be super fun. Okay?
As soon as the whole JavaScript program is run,
the execution context is created.
The global execution context is created.
It has two components, memory & code, as you know
and it is created in two phases.
Phase 1, was the memory creation phase.
In the memory creation phase, we were allocating memory to all the variables and functions inside the global space.
So, inside this whole program.
We are allocating this memory.
And what we allocated these variables with?
We allocated them with undefined,right?
In case of functions, we just copied
literally it just stores the whole function. Okay?
The code of whole function inside the memory space.
So that is the first phase
In the second phase,
the code execution phase, now the JS program is executed line by line,
it goes over here, it sees that 2 is here, so it replaces undefined with 2.
And it will now invoke the function, as control goes to line number 6, it'll invoke the function
and it'll invoke the another function.
When you invoke this function,execution context is created,
again there are two phases, the memory allocation phase, num and ans are allocated memory,
and in the code execution phase, again this whole thing is run,
the ans, num*num is executed, and num*num is now stored in ans.
and return statement is executed.
In the return statement, we take back the control over here,
to square2, and now square2 is populated with a new value which is coming from this function invocation, which was the ans.
ans was 4, so square2 was 4.
*sighs*
So it will happen again over here in this function execution,
So a new execution context is created,
and again the same cycle repeates, and that's how this function repeates 16 over here, and square4 is 16.
So that is how the whole thing works.
But don't you think that all this is too much to manage for the JS engine?
Execution context is created one by one, inside one, and all these things are very tough to manage, right?
And suppose if there was a function invocation inside the function, so what would have happened is
you would have created an execution context INSIDE an execution context over here,
and maybe again an invocation so it can go to any deep level right?
function invocation inside that again function invocation, and all these things.
Call Stack in JavaScript
So it is very difficult for JS engine to manage, and it does it very beautifully.
So let me tell you how it does it.
This is the last part of this video,
It handles everything to manage this execution context creation, deletion, and the control
It manages a stack.
This is known as the call stack.
This is the beautiful thing in JavaScript.
It has it's own call stack.
Let me show you call stack.
What is a call stack?
Let me show you
The call stack is like a stack, okay?
It is a stack
Every time
in the bottom of the stack we have our global execution context.
That means, whenever any JS program is run, this call stack is populated with this Global execution context.
This whole execution context is pushed inside this stack. Okay?
Remember this. Whenever a function is invoked, or a new execution context is created,
as in case here,
in line number 6,
we created this execution context,
So this execution context is put inside the stack.
So let me just denote it by E1, which is the execution context 1.
This is how it happens.
Once we are done with executing this function, we return the ans,
So what happened, now this E1 is moved out.
E1 is popped out of the stack, and the control goes back to the global execution context, where it left.
So the control goes back to line number 6. Okay? Got it?
This is how it works.
This will again literally pop out of the stack
Now E1 will be popped off the stack,
and then we move on to line number 7, where the new function was invoked,
and a new Execution context was created,
and similarly this E2, will move up to the stack. Okay?
This E2 was popped inside the stack.
Once the whole function was executed, then E2 will also move out of stack,
and the control goes back to Global Execution Context (GEC).
So this call stack is only for managing these Execution contexts.
Whenever an Execution context is created,
it is pushed into the stack
and whenever an Execution context is deleted, it will move out of the stack.
So that is how the whole control is being managed
This whole Execution context creation deletion everything is managed by JavaScript
After this whole thing is executed, the call stack gets empty.
The GEC is also gone from this call stack
And we are done with our JavaScript program :)
So that is how the whole code inside the JS Engine is executed.
Other names of the Call Stack in JS
With this let me take you to another core concept,
which is, Call stack maintains the order of execution of Execution contexts.
Now I'll tell you one more interesting thing.
That call stack is also known by very fancy names. There are lot of fancy names which you will see on web
That is why JS is the most confusing language.
It is most misunderstood language.
Call stack is also known as, Execution context stack, Program stack, Control stack, Runtime stack, Machine stack
All various names are used for this call stack.
But it is all the same thing
This beautiful call stack which will just maintain the order of execution of the Execution context.
I know this is too much to digest in a single video,
but thank you for all your paitence.


