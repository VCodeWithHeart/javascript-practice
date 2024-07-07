// function change(){
//    let newcont = document.getElementsByClassName("box")[0];
//    let view = newcont.innerHTML = "Content Changed";

//    return view;
// }

let button = document.getElementById("btn");

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Content Changed</b>"
})

document.addEventListener("contextmenu", ()=>{
    alert("right clicked to open context menu")
})

button.addEventListener("keydown", (e)=>{
    console.log(e)
    // console.log(e.key, e.keyCode)
})
