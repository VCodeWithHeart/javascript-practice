alert("helllo");

var a = prompt("Enter your number");
var isTrue = confirm("Are you sure you want to leave this page");

if(isTrue){
    console.log("you are leaving the page");
}
else{
    console.log("so you are not leaving the page");
}

console.log("your entered number is: " + a);

document.title = "hey hello";

document.body.style.backgroundColor = "coral";
// adds inline css to html element

