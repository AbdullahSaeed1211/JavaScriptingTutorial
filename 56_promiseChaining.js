// promise chaining resolves the problem of callback hell
p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds")
        resolve(50)
    }, 2000)
})
p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 2")
        }, 2000)
    })
    return p2
}).then((value) => {
    console.log("we is done")
    return 2
}).then((value) => {
    console.log("Definetely done now")
})
