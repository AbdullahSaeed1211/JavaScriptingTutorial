// Manipulating CSS & Classes

// $("h1").css("color","red");
$("h1.title"); //grabs via class
$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title margin-50");
console.log($("h1").hasClass("margin-50")); //true

// Manipulating text

$("h1").text("Bye"); // would select all occurences
$("button").html("<em>Welp</em>");

// Manipulating Attributes
console.log($("img").attr("href", "https//www.instagram.com")); //prints source/href && sets value to whatever is specified if the second one is defined
// classes are also attributes

// Event Listeners using jQuery
$("button").click(function () {
  $("h1").css("color", "purple");
});

//Targetting keystrokes
$("input").keydown(function (event) {
  console.log(event.key);
});
//changes h1 to whatever key you press
$(document).keydown(function (event) {
  $("h1").text(event.key);
});

// more versatile way to deal with DOM
$("h1").on("mouseover", function () {
  $("h1").css("color", "green");
});

// adding or removing elements to website using jQuery
$("h1").before("<button>Inserted before h1</button>");
$("h1").after("<button>Inserted after h1</button><br>");
// .prepend -> will add new element before content and closing tag of say h1
// .append  -> will add new element after  content and beforeclosing tag of (here)h1

// Removing elements
// $("button").remove();

// Animating using JQuery
$("h2").on("click", function () {
  $("h2").slideUp().slideDown().animate({opacity: 0.5})
});
// similarly .show() shows an element
// similarly fadeIn() fades on entry of element
// fadeToggle() also exists
// slideUp() collapses
// slideDown() opens
// can define custom css for animation using .animate()
// can only add something that has a numeric value in .animate()
// can add multiple of these 