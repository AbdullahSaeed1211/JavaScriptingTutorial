let p1 = new Promise((resolve, reject) => {
    console.log("pending rn")
    setTimeout(() => {
        // alert("I am a rejcted promise");
        // resolve(true);
        reject(new Error(" I am a new error"));
    }, 5000)

})
let p2 = new Promise((resolve, reject) => {
    console.log("pending rn");
    setTimeout(() => {
        // alert("I am a fulfilled promise");
        resolve(true);
        // reject(new Error(" I am a new error"));
    }, 5000)

})

p1.then((value) => {
    console.log(value);
})

p2.catch((error) => {
    console.log("Some error occured in p2");
})
// console.log(p);