function one() {
    const username = "hitesh"
    
    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    // two()
}

// one()

if(true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); 
    }
    // console.log(website);
}

// console.log(username);


// Hoisting :- Interesting Concept

console.log(addOne(5))

function addOne(num) {
    return num + 1
}


console.log(addTwo(5))
// function ko variable me hold karlia aur variable ko declare karne se pehle print nahi kar sakte

const addTwo = function(num){
    return num + 2
}
