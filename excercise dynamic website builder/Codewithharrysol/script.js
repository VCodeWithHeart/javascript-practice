
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function

    let viewStr;

if (views<1000000 && views>=1000){
    viewStr = views/1000 + "K";
}
else if (views>1000000){
    viewStr = views/1000000 + "M";
}
else{
    viewStr = views;
}

let html = ` <div class="card">
<div class="image">
    <img src="${thumbnail}" alt="">
    <div class="capsule">${duration}</div>
</div>
<div class="text">
    <h1>${title}</h1>
    <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
</div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}

createCard("Mera Ruha Ruha | Suguro Geto Edit", "Suguro Geto", 15000, 7, "05:17", "/excercise dynamic website builder/ruharuha.jpeg");
