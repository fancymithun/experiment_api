undefined is a very special keyword in
javascript
and it is not there in other languages
it has a lot to do with
how javascript code is executed so as we
have studied in the previous videos also
that javascript code is executed in a
different way
it creates a global execution context
and allocates memory to
all the variables and functions even
before a single line of code is executed
remember this so undefined comes into
picture
here only let us see with the code also
Code Example of undefined in JS
so suppose we created a variable
a is equals to 7 right so even before
this line of code is executed
right javascript has tried to allocate
memory to this
a right memory space to a even before
this line of code is run
okay let me show you with the help of
debugger so i am putting the debugger
right before this line is executed okay
so let us see an interesting thing so if
we refresh the page
this a this line hasn't been executed
yet
right but javascript has already
allocated memory to this
a okay so we have already reserved
memory for a now
okay so if we see here is the reserved
memory
so right now a is undefined so at this
point if you try to
in the console if you try to log what a
is see i have hold the program
i have held the program like i put a
debugger right so i have hold the
program at that state itself
so if you try to log a right now it is
undefined
so why this happened okay so when it
allocates memory to all the variables
and functions
to the variables it tries to put a
placeholder right it is like a
placeholder which is
placed in the memory okay that special
keyword is
undefined so if we try to lock this
so you get undefined in it so undefined
is
like taking memory it is it is very
different than not defined okay
so suppose if i try to access something
Code Example of not defined in JS
else right so suppose if i
try to do a console log of x over here
okay
so which we have not allocated memory to
okay if we run this code if we run this
code we have not allocated any memory to
x right
so what will happen if we try to find
x you won't find anything that is known
as
not defined but we have allocated memory
to
a if you try to console log a
we can find that so even before i put
this where
a is equals to 7 right so suppose if i
try to log a
over here even before putting 7 to a
i am trying to log this a so what
happens is
what happens is let me just run
it so in the console you will find that
we have printed undefined this a was
printed undefined
this is the value with javascript engine
allocated to a
while creating the memory okay but once
this line has been executed
after this line you will see that the
value of a has changed to
7 okay let me just remove that x if you
try to log here see it was undefined
before
this undefined was coming from the place
just because javascript engine allocated
undefined that special placeholder
to a okay not like not defined
not defined in something which has not
been allocated memory
okay so this is the difference between
undefined
and not defined okay we'll see something
more
so remember undefined is not equal to
empty some people think that
undefined means empty like it is not
taking up any memory space or something
no it is a special keyword it takes up
its own memory
but you can assume it to be like a
placeholder which is kept for the time
being
until the variable is assigned some
other value okay
till that point it will store this
placeholder known as undefined
okay and one more thing i would show you
right now
is suppose if i do um suppose this is
undefined right
so if i never put any value inside a
right like i just declared that okay
where a
and i never put any value to it so it
will throughout our whole program
have this value undefined that
placeholder kept inside a
and to show you that it is something in
javascript
we can also do something like this okay
uh so suppose
if i have my uh if
undefined vs not defined demo using code
a is equal equal equal to undefined so
equal equal equal to you might not be
aware of the syntax
but see it is just checking whether two
things are equal or not
and strictly checking we will talk about
it later in the videos okay that will be
interesting
but for now just assume that it is
checking two things are equal or not
so if we try to see that a is equal
equal to undefined
okay that undefined is a thing or not so
if we try to do a console log of
um over here let us just log it
a is undefined okay
and if we try to do something like
else we just console log
a um string a is
not undefined okay so if we try to
check like this what you will see see
a is undefined okay a is undefined it is
like
it goes into this if it meets this
condition
it go inside this if block and suppose
if i put some value in a
okay a is equals to 10 meanwhile so it
will say
that a is not undefined it has some
value in it okay
now the a is replaced that undefined is
replaced by
10. interesting right now when we are
talking about
undefined let me tell you a little bit
more about javascript and variables in
it okay
so you know javascript is a loosely
typed language
so loosely typed means that it does not
attaches
its variables to any specific data type
so suppose if i created
a and put in string in it so later on in
the program i can also put numbers in it
i can also put boolean in it
it is like very javascript is very
flexible in this case
right it is loosely typed that is known
as loosely type language
if it was strict type then just like
other languages just like c
or c plus plus if you assign a variable
that
if it is a string a so it will only hold
string
it won't hold numbers or booleans or
anything else
but it is not the case in javascript you
can put anything
and everything inside this variable okay
so
if i do a var a for the time being
it can like just hold undefined
okay if i do a console log over here it
will just hold
undefined okay and if i later on put a
is equals to 10 here
so and try to log it again so it will it
can hold numbers also
and it can also hold a string again
okay so this is a perfectly valid
javascript code okay
um i mistyped it
no issues so it is a perfectly fine
javascript code
okay and if i log this a once again
okay so see what the output will be
undefined
so until unless any value is specified
there is a placeholder undefined
when you have put in 10 so it is 10 now
and when you put in string hello world
it is hello world now
ok so javascript is very flexible in
this case
that is why javascript is known as
loosely type language
JS is a loosely typed language a.k.a weakly typed language
loosely typed language are also known as
weekly typed language
weekly type language so it does not mean
that it is weak in any sense
it does not have any deficiency or
something it is not weak at all
in fact i feel that the language is more
stronger
okay because it is handling a lot of
stuff behind the scenes okay you give it
string it handles automatically behind
the scenes it okay it's a string
you give it a number it takes it and
puts number in it and manages all these
things behind it so it is not weak at
all for sure
in fact i feel that it is more flexible
and beautiful
in this case okay so and it has to do a
lot of things
while coercion also okay when you change
one type to another type
it is doing a lot of stuff we might
cover that in the later videos
for now just understand that javascript
is a loosely typed language
and some people also call it as a weekly
type language okay
Mistake you should not make while using undefined
so let me tell you an important thing
never do this mistake okay
never do this mistake of doing something
like this
a is equal to undefined what does that
mean
see undefined is a value it is a keyword
in javascript
and it is totally possible to assign and
define to any variable
but it is kind of a mistake and it is
a bad thing to do in javascript okay you
should not do it
because see first of all what is
undefined so undefined is like a
placeholder which is
kept inside the variables
and it states that in the whole code
that variable
was not assigned anything right so it is
meant for a specific purpose
so it is not generally a good way to put
undefined like this
though it is a totally okay to do this
okay if you just
log it once again if you log a once
again you will see that okay you
you can put undefined once again but it
can lead to a lot of inconsistencies
so it is not a good practice to do this
i won't say it's a mistake
but it's not a good practice or a
healthy practice to
put undefined into any variable so don't
do this mistake right
let us just keep undefined for its own
purpose
right undefined was meant to uh
know okay that whether that variable
was assigned anything or not okay so let
it be
used for that space only and for the js
community
let us not ever put undefined into any
variable
okay so it's just a request that's all
Teaser of next video - The Scope Chain
for
now in the next video we'll be covering
the scope chain it is a very beautiful
topic i would say
and it is very hot interview topic also
okay in the interview
a lot of people ask about what is a
scope chain so definitely watch that
Thank you for watching Namaste JavaScript
video
so before moving on to that video just
like always
give this video a thumbs up and thank
you for watching namaste javascript