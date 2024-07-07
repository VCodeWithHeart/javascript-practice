// Practice

// You are creating a website for your college. create a User with 2 properties, name & email. It also has a method called viewData() that allows User to view website data.

class User {

    constructor(name, email) {
        this.name = name
        this.email = email
    }

    viewData() {
        console.log("The name is", this.name, "\nThe email is", this.email);

    }
    // ye alag tarika try kiya tha but isko comment kardia maine
    // viewData(name,email){
    //     console.log("The name is",name,"\nThe email is",email);

    // }
}

let student1 = new User("naman", "namanOjha@gmail.com")
// student1.viewData("naman","namanOjha@gmail.com")

// Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website Data.

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//         this.name = name
//         this.email = email
//     }
//     editData(name,email){
//         this.name = name
//         this.email = email
//     }
// }

// let teacher = new Admin(student1.name,student1.email)

// ye upar wala mera code hain isme admin me kiye gaye changes sirf admin tak hi the

// niche wla code chat gpt ka hai isme kiye gaye changes user me bhi honge

class Admin extends User {
    constructor(name, email) {
        super(name, email);
        // this.name = name
        // this.email = email
    }
    editData(user, name, email) {
        user.name = name
        user.email = email
    }
}

let teacher = new Admin(student1.name, student1.email)

// ERROR HANDLING

a = 4
b = 5
c = 7
d = 6


try {
    console.log(sum1 = a + b)
    console.log(sum2 = a + e)
    console.log(sum3 = a + d)
    
} catch (err) {
    // console.log("The execution Stopped due to",err);
    console.log("The execution Stopped due to",err);
}
console.log(sum4 = d + c)