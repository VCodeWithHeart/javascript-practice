// Fetch Api Practice

const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.getElementById("fact")
const btn = document.querySelector("#btn")

const getFacts = async () => {
    console.log("getting Data....");

    let response = await fetch(URL)
    console.log(response);
    let data = await response.json()
    factPara.innerText = data[0].text

}

// doing the same thing using promise chaining

// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             factPara.innerText = data[0].text;
//         });
// }

btn.addEventListener("click", getFacts);











// ----------------------------------------------- Fetch Api Practice End --------------------------------------------------



