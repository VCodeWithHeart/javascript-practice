const createTodo = async (todo) => {

let options = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo),
}

let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response) => response.json())
    .then((json) => console.log(json));
    let response = await p.json()
    return response
}

const mainFunc = async() => {
    let todo = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    let todor = await createTodo(todo)
    console.log(todor);
    console.log(await getTodo(567));
    
}

const getTodo = async (id) => {
 let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
 let r = response.json()
 return r
}

mainFunc() 