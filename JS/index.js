const posts = document.querySelector (".posts")
const post = document.querySelectorAll (".post")
const countpost = document.querySelector ("#countpost") /*Los ID se llaman con #*/
const showpost = document.querySelector ("#showpost")

posts.style.display = "none"
countpost.innerHTML = post.length
showpost.addEventListener ("click", function (){
posts.style.display = "grid"
})

fetch ("https://jsonplaceholder.typicode.com/users")
.then(response => response.json()) /*lo que hace console log, es que devuelve lo que hace la consoloa, es para garantizar que este bien*/
/* función o método se pone panteresis como línea 13*/
.then(json =>{ /*aqui va un comentario importante*/
    let template = ``
    json.forEach(element => {
        template+=`
            <div class="post">
            <h2>${element.name}</h2>
            <h3>${element.username}</h3>
            </p>${element.email}</p>
            </div>`
            
        });
        posts.innerHTML = template
})

const albums = document.querySelector (".albums")
const album = document.querySelectorAll (".album")
const countalbum =document.querySelector ("#countalbum")
const showalbum = document.querySelector ("#showalbum")

albums.style.display = "none"
countalbum.innerHTML = album.length
showalbum.addEventListener ("click", function (){
albums.style.display = "grid"
})

fetch ("https://jsonplaceholder.typicode.com/albums")
.then(response => response.json ())
.then(json =>{
    let template = ``
    json.forEach (element=> {
        template+=`
            <div class="album">
            <h2>${element.userId}</h2>
            <h3>${element.id}</h3>
            <p>${element.title}</p>
            </div>
        `
    });

    albums.innerHTML = template
})

const posts2 = document.querySelector (".posts2")
const post2 = document.querySelectorAll (".post2")
const countpost2 = document.querySelector ("#countpost2")
const showpost2 = document.querySelector ("#showpost2")

posts2.style.display = "none"
countpost2.innerHTML = post2.length
showpost2.addEventListener ("click", function (){
posts2.style.display = "grid"
})

fetch ("https://jsonplaceholder.typicode.com/posts")
.then (response => response.json ())
.then (json =>{
    let template = ``
    json.forEach (element => {
        template+= `
            <div class="post2">
                <h2>${element.id}</h2>
                <h3>${element.title}</h3>
                <p>${element.body}</p>
            </div>
        `
    })
    posts2.innerHTML = template
})

const todos = document.querySelector (".todos")
const todo = document.querySelectorAll (".todo")
const counttodo = document.querySelector ("#counttodo")
const showtodo = document.querySelector ("#showtodo")

todos.style.display = "none"
counttodo.innerHTML = todo.length
showtodo.addEventListener ("click", function (){
todos.style.display = "grid"
})

fetch ("https://jsonplaceholder.typicode.com/todos")
.then (response => response.json ())
.then (json =>{
    let template = ``
    json.forEach (element => {
        template+= `
            <div class="todo">
                <h2>${element.userId}</h2>
                <h3>${element.id}</h3>
                <p>${element.title}</p>
            </div>
        `
    })
    todos.innerHTML = template
})

const fotos = document.querySelector (".fotos")
const foto = document.querySelectorAll (".foto")
const countfoto = document.querySelector ("#countfoto")
const showfoto = document.querySelector ("#showfoto")

fotos.style.display = "none"
countfoto.innerHTML = foto.length
showfoto.addEventListener ("click", function (){
fotos.style.display = "grid"
})

fetch ("https://jsonplaceholder.typicode.com/photos")
.then (response => response.json ())
.then (json =>{
    let template = ``
    json.forEach (element => {
        template+= `
            <div class="foto">
                <h2>${element.id}</h2>
                <h3>${element.title}</h3>
                <p>${element.url}</p>
                <p>${element.thumbnailUrl}</p>
            </div>
        `
    })
    fotos.innerHTML = template
})