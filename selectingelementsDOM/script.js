console.log("selecting elelments")

// class selector
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// id selector
// document.getElementById("redbox").style.backgroundColor = "red";

// queryselector
// selects the first matched element
// document.querySelector(".box").style.backgroundColor = "green";

// querySelectorAll
// selects the all matched element
// unlike queryselector returns a first element querySelectorAll returns an HTML Collection
    // console.log(document.querySelectorAll(".box"));

    // you can use any kind of loop
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
});

// so because HTML Collection is an array so we have to runs loop to select and apply style to each an every element

e = document.getElementsByTagName("div");
console.log(e);

// e[4].matches("#redbox");

// e[3].closest("#redbox");
