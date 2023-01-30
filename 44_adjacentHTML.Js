// Adjacent HTML
// before end as the name specifies inserts right before closing tag of (here) div
first.insertAdjacentHTML("beforeend","<div class='test'>beforeend</div>")
// before begin as the name specifies
first.insertAdjacentHTML("beforebegin","<div class='test'>beforebegin</div>")
// after end as the name specifies
first.insertAdjacentHTML("afterend","<div class='test'>afterend</div>")
// after begin as the name specifies
first.insertAdjacentHTML("afterbegin","<div class='test'>afterbegin</div>")

// The second parameter here inserts HTML 

// Node removal
first.remove()
// this methods is used to remove a certain specified element from the DOM