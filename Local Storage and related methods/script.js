let key = prompt("enter key you want to set: ")
let value = prompt("enter value you want to set: ")

localStorage.setItem(key,value)

console.log(`the value entered for ${key} is ${value}`)

if(key == "red" || key == "blue") {
    localStorage.clear()
}

if(key == 0 || key == null || key == ''){
    localStorage.remove(key)
}

