// Everything runs under javascript runtime environment 
// we have js engine and we have web API and callstack,callback queue,microstask queue
// js engine is the heart of js runtime environment
// Even node.js is javascript runtime environment for example if we need to run robot,or smart watch or water cooler we need js runtime environment to run js engine
// some API's can be similar between web js engine and node.js engine for example setTimeout available in both and console too
//some js engines spidermonkey,chakra,v8
// v8 is js engine is also used in node.js that is crazy
//js engine is not a machine keep in mind this is software

 /* JS Engine comes with 4 things
    CODE - that we write and code will be converted into tokens and then parsed 
    PARSING - where our code will be converted into AST(abstract syntax tree)

    COMPILATION - where comes JIT(Just In Time compilation) and also whether JS is interpreted language or compile language
    EXECUTION - 
    compilation and execution goes hand in hand
    In case of interpreter it reads line by line and there is no optimization of code so interpreted laguage execute fast
    but in case of compiled code will be optimized and then executed
    old days js engine used to interpret language now a days js engine use both interpreter and compiler so this is called JIT
    combination of both goes to execution phase of js engine with byte code
    so here comes two data structures that is memory heap and call stack memory heap for storing memory and call stack we already know
    mark and sweep algorithm is used to garbage collect the memory
    kyewords used inlining,inline caching,copy elision
    for now google v8 engine is fastest among all other js engines out there
    v8 has - interpreter named ignition and have compiler called turbofan
    beauty of javascript is that it can be used as functional programming AWA object oriented programming
*/

const a = 10

// here const is one token, a is seperate token, = is another, 10 is another token