let CompanyName = "";

let adj = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let sname = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

let aword = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

// My Solution

for (let index = 1; index < 4; index++) {

    let random = Math.floor((Math.random() * 3) + 1);

    console.log(random)

    if(index == 1){
        CompanyName += adj[random]
    }
    else if(index == 2){
        CompanyName += sname[random]
    }
    else{
        CompanyName += aword[random]
    }

}

console.log(CompanyName)

