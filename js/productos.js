const productoscoderpancard = []


function savebuyLS() {
    localStorage.setItem('Carrito', JSON.stringify(carrodecompra))
}

function recoverbuyLS() {
    return JSON.parse(localStorage.getItem('Carrito')) || []
}

function savefavLS() {
    localStorage.setItem('favorito', JSON.stringify(favoritos))
}

function recoverfavLS() {
    return JSON.parse(localStorage.getItem('favorito')) || []
}

const carrodecompra = recoverbuyLS()
const favoritos = recoverfavLS()


function carroHTML(productos) {
    return `<tr>
                <td>${productos.nombre}</td>
                <td>${productos.calorias}</td>
                <td>$ ${productos.precio.toLocaleString()}</td>
                <td><button id="${productos.codigo}" class="boton-quitar">❌</button></td>
            </tr>`
}


function favHTML(productos) {
    return `
    <article id="producto1" class="card">
    <h3 class="card-title">${productos.nombre}</h3>
    <div class="card-img${productos.img}"></div>
    <h4 class="card-calorias">Nivel calorico:${productos.calorias}</h4>
    <p class=" card-precio">$ ${productos.precio}</p>
    <button id="${productos.codigo}" class="boton-compra">🛒</button>
    <button id="${productos.codigo}" class="boton-quitar">❌</button>
</article>`
}

function indexHTML({ img, codigo, nombre, precio, calorias } = producto) {
    return `
    <article id="producto1" class="card">
    <h3 class="card-title">${nombre}</h3>
    <div class="card-img${img}"></div>
    <h4 class="card-calorias">Nivel calorico:${calorias}</h4>
    <p class=" card-precio">$ ${precio}</p>
    <button id="${codigo}" class="boton-compra">🛒</button>
    <button id="${codigo}" class="boton-favorito">💓</button>
</article>`
}



function indexerror() {
    return `<div class="vacio">
                <h2>hay un error al cargar los productos</h2>
                <h3>reinicie la pagina o intente mas tarde</h3>
                <h4>⏳</h4>
            </div>`
}