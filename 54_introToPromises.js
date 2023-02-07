// Intro to Promises
// solution to callback hell
// a promise of code execution
// used for parallel execution
// code either executes or fails but in both the cases the user will be notified
let promise = new Promise(function (resolve, reject) {
    console.log("helo")
    resolve(56)

})
console.log("hello1")
setTimeout(function () {
    console.log("hello2 in 2 sec")
}, 2000)
console.log("My name is" + "Hello Three")
console.log(promise)
// The promise object returned by the Promise constructor has 2 properties
// State:Initially pending then changes to either fulfilleld when "resolved" is call or 'rejected' when reject is called
// Result: Initially undefined then changes to value og resolved or error when rejected 