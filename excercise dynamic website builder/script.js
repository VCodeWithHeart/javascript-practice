// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
//     // Finish this function

//     title = document.getElementsByClassName("card-title");
//     cName = document.getElementsByClassName("cName");
//     views = document.getElementsByClassName("views");
//     monthsOld = document.getElementsByClassName("months");
//     thumbnail = document.getElementsByClassName("img-fluid rounded-start")

//     return title, cName, views, monthsOld, duration, thumbnail;
// }

// createCard("Mera Ruha Ruha | Suguro Geto Edit", "Suguro Geto", 15000, 7, "05:17", "ruharuha.jpeg");


function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function

    let titleEle = document.body.children[0].childNodes[1].children[1].children[0].firstElementChild;
    titleEle.innerHTML = title;
    let cNameEle = document.body.children[0].childNodes[1].children[1].children[0].children[2];
    cNameEle.innerHTML = cName;
    let viewsEle = document.body.children[0].childNodes[1].children[1].children[0].children[3];
    viewsEle.innerHTML = views;
    let monthsOldEle = document.body.children[0].childNodes[1].children[1].children[0].children[4];
    monthsOldEle.innerHTML = monthsOld;
    let durationELe = document.body.children[0].childNodes[1].children[0].children[1];
    durationELe.innerHTML = duration;
    let thumbnailEle = document.body.children[0].childNodes[1].children[0].children[0];
    thumbnail = thumbnailEle.setAttribute("src", thumbnail);

    return title, cName, views, monthsOld, duration, thumbnail;
}

createCard("Mera Ruha Ruha | Suguro Geto Edit", "Suguro Geto", 15000, 7, "05:17", "ruharuha.jpeg");
