//Tienda sex discos (Prueba y Tercera Entrega)



//Creamos la class de los productos

class Articulo {
    constructor(id,imagen, banda, descripcion, categoria, precio) {
        this.id= id;
        this.imagen= imagen;
        this.banda = banda;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
    }
}

const listadoArticulos = [];


// Esta funcion nos permite crear cada uno de los articulos  y cargarlos a nuestro array listadoArticulos

function crearArticulo(id,imagen, banda, descripcion, categoria, precio) {
    const articulos =  new Articulo(id,imagen, banda, descripcion, categoria, precio);
    

    listadoArticulos.push(articulos);
}

//Preparamos nuestro inventario de articlos 

crearArticulo("v1", "./vinilos/vinil (1).jpg", "Cannibal Corpse", "Gore Obsessed", "vinilos", 15000);
crearArticulo("v2", "./vinilos/vinil (2).jpg", "Darkthrone", "Transilvanian Hunger", "vinilos", 13000);
crearArticulo("v3", "./vinilos/vinil (3).jpg", "Dismember", "Like an Ever Flowing Stream", "vinilos", 15000);
crearArticulo("v4", "./vinilos/vinil (4).jpg", "Dismember", "Pieces", "vinilos", 10000);
crearArticulo("v5", "./vinilos/vinil (5).jpg", "Electric Wizard", "Come my Fanatics...", "vinilos", 18000);
crearArticulo("v6", "./vinilos/vinil (6).jpg", "Iron Maiden", "The Number Of The Beast - Delux", "vinilos", 32000);
crearArticulo("v7", "./vinilos/vinil (7).jpg", "King Diamond", "Abigail", "vinilo", 13000);
crearArticulo("v8", "./vinilos/vinil (8).jpg", "King Diamond", "Fatal Portrait", "vinilos", 13000);
crearArticulo("v9", "./vinilos/vinil (9).jpg", "Metallica", "Master of Puppets", "vinilos", 15000);
crearArticulo("v10", "./vinilos/vinil (10).jpg", "Motorhead", "Ace of Spades - Delux", "vinilos", 30000);
crearArticulo("v11", "./vinilos/vinil (11).jpg", "Ulver", "the norwegian national opera", "vinilos", 15000);
crearArticulo("v12", "./vinilos/vinil (12).jpg", "Venom", "Welcome to hell", "vinilos", 18000);
crearArticulo("ca1", "./cassette/cassette (1).jpg", "Bathory", "Bathory", "cassettes", 8000);
crearArticulo("ca2", "./cassette/cassette (2).jpg", "Bathory", "Under the Sign of the Black Mark", "cassettes", 8000);
crearArticulo("ca3", "./cassette/cassette (3).jpg", "Cynic", "Ascension Codes", "cassettes", 10000);
crearArticulo("ca4", "./cassette/cassette (4).jpg", "Death", "The Sound of Perseverance", "cassettes", 10000);
crearArticulo("ca5", "./cassette/cassette (5).jpg", "Death", "Spiritual Healing", "cassettes", 10000);
crearArticulo("ca6", "./cassette/cassette (6).jpg", "Mayhem", "Deathcrush", "cassettes", 9000);
crearArticulo("ca7", "./cassette/cassette (7).jpg", "Napalm Death", "Box-Set", "cassettes", 29000);
crearArticulo("ca8", "./cassette/cassette (8).jpg", "Onslaught", "Power From Hell", "cassettes", 8000);
crearArticulo("ca9", "./cassette/cassette (9).jpg", "Slayer", "Hell Awaits", "cassettes", 10000);
crearArticulo("cd1","./cds/cd (1).jpg","Dismember", "Indecent & Obscene", "cds", 10000);
crearArticulo("cd1","./cds/cd (2).jpg","Amenra", "Mass I", "cds", 10000);
crearArticulo("cd1","./cds/cd (3).jpg","Kylesa", "Exhausting Fire", "cds", 9000);
crearArticulo("cd1","./cds/cd (4).jpg","Nuclear Assault", "Game Over", "cds", 12000);
crearArticulo("cd1","./cds/cd (5).jpg","Dismember", "Where Ironcrosses Grow", "cds", 9000);
crearArticulo("po1","./camisetas/camiseta (1).jpg", "Deicide", "Deicide", "camisetas", "15000")
crearArticulo("po2","./camisetas/camiseta (2).jpg", "Baroness", "Flower Face", "camisetas", "15000")
crearArticulo("po3","./camisetas/camiseta (3).jpg", "Led Zeppelin", "1977", "camisetas", "15000")
crearArticulo("po4","./camisetas/camiseta (4).jpg", "Mastodon", "Skull & Beard", "camisetas", "15000")
crearArticulo("po5","./camisetas/camiseta (5).jpg", "Black Sabbath", "Vol-4", "camisetas", "15000")
crearArticulo("po6","./camisetas/camiseta (6).jpg", "Iron Maiden", "The Trooper", "camisetas", "15000")
crearArticulo("po7","./camisetas/camiseta (7).jpg", "Slayer", "Reign in Blood", "camisetas", "15000")
crearArticulo("po7","./camisetas/camiseta (8).jpg", "Misfits", "Classic Logo", "camisetas", "15000")


//Cargamos cada producto al html modificando el DOM, recorriendo el listado de productos y anexando cada uno.

const categoria = document.querySelectorAll(".categoria");

function cargarArticulos(articulos) {
    const producto = document.querySelector("#producto");
    producto.innerHTML = "";

    articulos.forEach(articulo => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<div class="card">
             <div class="img-card"><img src="${articulo.imagen}" alt="${articulo.banda}"></div>
             <div class="desc">${articulo.descripcion}</div>
             <div class="banda">${articulo.banda}</div>
             <div class="caja">
                 <div class="precio">${articulo.precio}</div>
                 <button class="btn">Añadir al carrito</button>
             </div>
         </div>`;
        producto.append(div);
    });
}

//Funciones para cargar y guardar productos en el LS

function cargarArticulosLS() {
    const mantenerArticulos = JSON.parse(localStorage.getItem("listadoArticulos"));
    if (mantenerArticulos) {
        listadoArticulos.length = 0;
        listadoArticulos.push(...mantenerArticulos);
        cargarArticulos(listadoArticulos);
    }
}

function guardarArticulosLS() {
    localStorage.setItem("listadoArticulos", JSON.stringify(listadoArticulos));
}

// Obtenemos la categoría actual almacenada en el LS

function obtenerCategoriaActual() {
    return localStorage.getItem("categoriaActual") || "todos";
}

// Guardamos la categoría actual en el LS

function guardarCategoriaActual(categoria) {
    localStorage.setItem("categoriaActual", categoria);
}

// Cargar productos al inicio

cargarArticulosLS();
cargarArticulos(listadoArticulos);

// Obtenemos la categoría actual y cargamos  los productos correspondientes a esa categoria

const categoriaActual = obtenerCategoriaActual();
const productosFiltrados = listadoArticulos.filter(articulo => articulo.categoria === categoriaActual);
cargarArticulos(productosFiltrados);

//// Función para filtrar productos por categoría

function filtrarCategoria(event) {
    const seleccionar = listadoArticulos.filter(listado => listado.categoria === event.currentTarget.id);
    cargarArticulos(seleccionar);
    guardarCategoriaActual(event.currentTarget.id);
}

//Evento para los elementos de categoría

categoria.forEach(selCategoria => {
    selCategoria.addEventListener("click", (event) => {
        filtrarCategoria(event);
    });
});

//Guarda los cambios en LS antes de hacer refresh 

window.addEventListener("beforeunload", () => {
    guardarArticulosLS();
});
