// a web storage object which are not sent to server wiht each request
// this data survives a full page refresh and even a full browser restart

let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        localStorage.removeItem(key)
}

if (key == 0) {
        localStorage.clear()
}

// Keys and values must be strings 
// we can use the two JSON methods to store objects in local storage:
// JSON.Stringify(object)->converts objects to JSON strings
// JSON.Stringify(object)->Converts string to objects (must be a valid JSON)