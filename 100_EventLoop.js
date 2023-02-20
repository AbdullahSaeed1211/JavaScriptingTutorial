// event loops in js
// note to self read DOcs on call stack , event loop and a callback queue

// JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

// Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.

// Run to completion= Each message is processed completely before any other message is processed.

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

setTimeout(function timer() {
    console.log('You clicked the button!');
  }, 2000); 
  
  console.log("Hi!");
  
  setTimeout(function timeout() {
    console.log("Click the button!");
  }, 5000);
  
  console.log("Welcome to loupe.");