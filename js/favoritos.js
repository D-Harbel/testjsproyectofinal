const PCPC = document.querySelector('#container')
const URL = 'js/productos.json'

function MsgfavoritosVacio() {
    return `<div class="vacio">
                <h3>Favoritos está vacío</h3>
            </div>`
}

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

function QuitarDefav() {
    const botonquitarfav = document.querySelectorAll('button.boton-quitar')
    botonquitarfav.forEach((botonquitarfav)=> {
        botonquitarfav.addEventListener('click', ()=> {
            let codigo = parseInt(botonquitarfav.id)
            let indice = favoritos.findIndex((productos)=> productos.codigo === codigo)
            favoritos.splice(indice, 1)
            const msgquitarfav = Swal.mixin({
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

            msgquitarfav.fire({
                icon: 'info',
                title: 'se ha desmarcado el producto de favorito'
            })
            mostrarfav()                   
            savefavLS()          
        })
    })
}

function mostrarfav() {
    PCPC.innerHTML = ''
    if (favoritos.length > 0) {
        favoritos.forEach((productos)=> PCPC.innerHTML += favHTML(productos) )
        QuitarDefav()
        botonbuycard()
    } else {
        PCPC.innerHTML = MsgfavoritosVacio()
    }
}
mostrarfav()