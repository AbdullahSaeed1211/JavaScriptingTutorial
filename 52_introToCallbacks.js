// Asynchornous 
// actions are that we initiate now and they finish later 
// eg
// console.log("start")
// setTimeout(function () {
//     console.log("hey i am good");
// }, 3000)
// console.log("end");
// Sychronous
// actions that initiate and finish one by one
// eg
// let a=prompt("what is your name?");
// let b= prompt(what is your age)
// console.log(a+"is your name and "+b" is your age")

// Callback functions
// A function focused into another function as an argument
// which is then invoked inside the outer function

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      console.log("Loaded script with SRC: " + src)
      callback(null, src);
    }
    script.onerror = function() {
      console.log("Error loading script with SRC: " + src);
      callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
  }
  
  function hello(error, src) {
    if (error) {
      console.log(error)
      return
    }
    alert('Hello World!' + src);
  }
  
  
  function goodmorning(error, src) {
    
    if (error) {
      console.log(error)
      sendEmergencyMessageToCeo();
      return
    }
    alert('Good morning' + src);
  }
  
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 
