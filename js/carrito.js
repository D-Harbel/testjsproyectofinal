const tableBody = document.querySelector('tbody')
const PCPC = document.querySelector('#container')
const botoncomprar = document.querySelector('button#btnComprar')
const URL = 'js/productos.json'

function MsgCarroVacio() {
    return `<div class="vacio">
                <h3>El carro está vacío</h3>
            </div>`
}

function mostrarcarrito() {
    tableBody.innerHTML = ''
    if (carrodecompra.length > 0) {
        carrodecompra.forEach((productos) => tableBody.innerHTML += carroHTML(productos))
        tableBody.innerHTML += preciototal(carrodecompra)
        Quitardelcarro()
    } else {
        PCPC.innerHTML = MsgCarroVacio()
    }
}
mostrarcarrito()

function Quitardelcarro() {
    const botonquitarbuy = document.querySelectorAll('button.boton-quitar')
    botonquitarbuy.forEach((botonquitarbuy)=> {
        botonquitarbuy.addEventListener('click', ()=> {
            let codigo = parseInt(botonquitarbuy.id)
            let indice = carrodecompra.findIndex((productos)=> productos.codigo === codigo)
            carrodecompra.splice(indice, 1)
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
            mostrarcarrito()                 
            savebuyLS()         
        })
    })
}


function preciototal(carro) {
    let totalcompra = carro.length > 0 ? carro.reduce((acc, productos) => acc + productos.precio, 0)
        : 0.00

    return `<tr>
                <td></td>
                <td><strong>Total Carrito:</strong></td>
                <td><strong>$ ${totalcompra.toLocaleString()}</strong></td>
                <td></td>
            </tr>`
}


botoncomprar.addEventListener('click', () => {
    Swal.fire({
        title: '¿Confirmas la compra de los productos?',
        icon: 'question',
        showDenyButton: true,
        confirmButtonText: 'CONFIRMAR',
        denyButtonText: 'CANCELAR'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('Carrito')
            carrodecompra.length = 0
            Swal.fire('Compra exitosa, muchas gracias por elegirnos!', '', 'success')
            PCPC.innerHTML = MsgCarroVacio()
        }
    })
})
