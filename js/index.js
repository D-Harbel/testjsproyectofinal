const PCPC = document.querySelector('#container')
//PCPC: productos coder pan card
const Barrabuscadora = document.querySelector('#buscadortabla')
const BarraBCard = document.querySelector('#buscadorcard')
const URL = 'https://64d5ad10613ee4426d978247.mockapi.io/productos'



//card


BarraBCard.addEventListener('search', () => {
    const resultado = productoscoderpancard.filter((producto) => producto.nombre.toLowerCase().includes(BarraBCard.value.toLowerCase()))
    cargaPcard(resultado)
})




function botonbuycard() {
    const botonbuycard = document.querySelectorAll('button.boton-compra')
    botonbuycard.forEach((botonbuy) => {
        botonbuy.addEventListener("click", () => {
            let producto = productoscoderpancard.find((prod) => prod.codigo === parseInt(botonbuy.id))
            carrodecompra.push(producto)
            const msgbuy = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            msgbuy.fire({
                icon: 'info',
                title: 'agregado al carrito'
            })
            savebuyLS()
        })
    })
}

function botonfavcard() {
    const botonfavcard = document.querySelectorAll('button.boton-favorito')
    botonfavcard.forEach((boton) => {
        boton.addEventListener("click", () => {
            let producto = productoscoderpancard.find((prod) => prod.codigo === parseInt(boton.id))
            favoritos.push(producto)
            const msgfav = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            msgfav.fire({
                icon: 'info',
                title: 'Marcado como favorito'
            })
            savefavLS()
        })
    })
}

function cargaPcard(array) {
    container.innerHTML = ""
    array.forEach((producto)=> container.innerHTML += indexHTML(producto) )
    botonbuycard()
    botonfavcard()
}

async function mostrarproductos() { // await
    try {
        const response = await fetch(URL)
        const data = await response.json()
        productoscoderpancard.push(...data)
        cargaPcard(productoscoderpancard)
    } catch (error) {
        console.error("Se ha producido un error:", error)
        PCPC.innerHTML = indexerror()
    }
}

mostrarproductos()


//card fin
