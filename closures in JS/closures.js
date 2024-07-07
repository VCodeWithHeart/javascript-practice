// Closures in JS

message = "Good Global"

function hello1() {
   let message = "Good Morning"
    
        // let message = "Good Afternoon"
        console.log("Hello 1 " + message);
    
    let c = function hello2(){
        console.log("i am c " + message);
        
    }
    return c
}

c = hello1()

c() 