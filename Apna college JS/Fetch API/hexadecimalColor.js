// let ele = document.querySelector(".container")
// Math.random()



// ele.addEventListener("click", function(e){
//     // for (let i = 0; i < 100; i++) {
//         R = Math.round(Math.random()*255)
//         G = Math.round(Math.random()*255)
//         B = Math.round(Math.random()*154)
//         ele.style.backgroundColor = `rgb(${R},${G},${B})`;
//     //  }

// })

// Hexa Decimal Code Color Changer

let ele = document.querySelector(".container")
let stop = document.querySelector(".stop")

let color = "#"

let intervalId = setInterval(() => {
    ele.style.backgroundColor = "#" + (Math.round(Math.random() * 16777215).toString(16))
}, 1000)

stop.addEventListener("click", function(e){
    clearInterval(intervalId)
    // intervalId = null
})
