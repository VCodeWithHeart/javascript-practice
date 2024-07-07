// MY SOLUTION (Worst)

// let random = Math.floor((Math.random() * 9) + 1);
// console.log(random);

// let box1 = document.body.children[0].children[0]
// let box2 = document.body.children[0].children[1]
// let box3 = document.body.children[0].children[2]
// let box4 = document.body.children[0].children[3]
// let box5 = document.body.children[0].children[4]

// // let boxColor;
// // let boxBacCol;

// if(random <= 3){
//     box5.style.color = "black"
//     box5.style.backgroundColor = "magenta"
//     box4.style.color = "white"
//     box4.style.backgroundColor = "coral"
//     box3.style.color = "lightgreen"
//     box3.style.backgroundColor = "black"
//     box2.style.color = "coral"
//     box2.style.backgroundColor = "blueviolet"
//     box1.style.color = "purple"
//     box1.style.backgroundColor = "cyan"
// }
// else if(random >= 4 && random <= 6){
//     box5.style.color = "violet"
//     box5.style.backgroundColor = "antiquewhite"
//     box4.style.color = "beige"
//     box4.style.backgroundColor = "gold"
//     box3.style.color = "red"
//     box3.style.backgroundColor = "grey"
//     box2.style.color = "crimson"
//     box2.style.backgroundColor = "lightblue"
//     box1.style.color = "blue"
//     box1.style.backgroundColor = "lightcoral"
// }
// else{
//     box5.style.color = "pink"
//     box5.style.backgroundColor = "yellow"
//     box4.style.color = "red"
//     box4.style.backgroundColor = "silver"
//     box3.style.color = "lime"
//     box3.style.backgroundColor = "skyblue"
//     box2.style.color = "lightpink"
//     box2.style.backgroundColor = "blue"
//     box1.style.color = "snowwhite"
//     box1.style.backgroundColor = "red"
// }


// CodeWithHarry SOLUTION

// let boxes = document.getElementsByClassName("boxes")

let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomColor() {
    let val1 = Math.floor(Math.random() * 255 + 1);
    let val2 = Math.floor(Math.random() * 255 + 1);
    let val3 = Math.floor(Math.random() * 255 + 1);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})


// FORMULA FOR GENERATING RANDOM NUMBER BETWEEN ANY TWO NUMBERS

// if r = 0 then you will get a
// if r = 1 then you will get b
// and if value of r is between 0 and 1 then you will get a random number
// a + r (b-a);


// just checking the values of Math.random()

// this loop generates random number between 10 to 30

// let val4 = Math.floor(Math.random() * 255+1);

// for(let i=0;i<=100;i++){
//    val4  = Math.floor(10 + (Math.random() * 20) + 1);
//         console.log(val4);
//     }

