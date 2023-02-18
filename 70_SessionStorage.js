// used less often than localstorage Properties and methods are same as local storage but:
// Local storage exists only within the current browser tab another trab with the same page will have a different storage
// The data survives a page refresh but not closing / reopening of the tab



// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")

// Storage Event
// when data gets updated in local storage or session storage, the storage event triggers  with the following properties
// 1. key
// 2. previous value
// 3. New value
// 4. Page URL
// 5. local or session storage

window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}

// Can listen the onstorage event of window which is triggered when updates are made to the same storage from other documents