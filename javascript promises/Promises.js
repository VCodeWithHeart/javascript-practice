// PROMISES JAVASCRIPT

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5){
        reject("No random output")
    }
    else{

        setTimeout( () => {
            console.log('Yes I am done');
            resolve("Harry");
        }, 3000)
    }

    console.log(a);
    

})

prom1.then((a) => {
    console.log(a);
}).catch((err)=>{
    console.log(err);
})