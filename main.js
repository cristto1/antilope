
//! PROYECTO FINAL

//* CLASE CONSTRUCTURA PARA ARRAY DE PRODUCTOS DEFINIDOS EN EL HTML

class Accesorio {
    constructor (id, tipo, nombre, precio) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}

let accesorio1 = new Accesorio('ojoDeDios', 'Collar', 'ojo de Dios', 52000);
let accesorio2 = new Accesorio('elefante', 'Collar', 'elefante', 48000);
let accesorio3 = new Accesorio('cruz', 'Collar', 'cruz', 50000);
let accesorio4 = new Accesorio('elefanteColores', 'Collar', 'elefante colores', 52000);
let accesorio5 = new Accesorio('buho', 'Collar', 'buho', 40000);
let accesorio6 = new Accesorio('mariposa', 'Collar', 'mariposa', 40000);
let accesorio7 = new Accesorio('corazones', 'Pulsera', 'corazones', 45000);
let accesorio8 = new Accesorio('manoDeDios', 'Pulsera', 'mano de Dios', 40000);
let accesorio9 = new Accesorio('corona', 'Ear cuff', 'corona', 30000);


//---------
//* AGREGAR PRODUCTOS A CARRITO DE COMPRAS (BOLSA)

const productos = []
productos.push(accesorio1, accesorio2, accesorio3, accesorio4, accesorio5, accesorio6, accesorio7, accesorio8, accesorio9);

function comprar(){
    const carrito = []
    let cartas = document.getElementsByClassName('carta');
    for (const carta of cartas) {
        carta.onclick = (e) => {
            let accesorioSeleccionado = productos.find((accesorio) => accesorio.id === carta.id);
            swal({
                title: '¿Deseas comprar este accesorio?',
                icon: 'success',
                text: `${accesorioSeleccionado.tipo} ${accesorioSeleccionado.nombre} \n  Precio: $${accesorioSeleccionado.precio}`,
                buttons: ['Cancelar', 'Comprar'],
            }).then((confirmacion) => {
                if(confirmacion) {
                    console.log(carrito);
                    carrito.push(accesorioSeleccionado);
                    Toastify({
                        text: '¡Revisa tus accesorios seleccionados en la bolsa de la esquina superior derecha!',
                        duration: 2000,
                        style:{
                            background: '#e8dbc5',
                        },
                        offset:{
                            x:350,
                            y:250,
                        }
                    }).showToast();
                };
            });
            
        }
    }



//* FINALIZAR COMPRA EN CARRITO (BOLSA)

    let finalizar = document.getElementById('carrito')
    finalizar.onclick = () => {
        swal({
            title: '¿Deseas finalizar la compra?',
            text: `${carrito.map((a) => `${a.tipo} ${a.nombre}: $${a.precio}`).join('\n')}`,
            icon: 'http://127.0.0.1:5500/assets/image/logo-negro-2.png',
            buttons: ['Cancelar', 'Comprar'],
        }).then((confirmacion) => {
            if(confirmacion){
                Toastify({
                    text: '¡TU COMPRA SE HA REALIZADO CON EXITO!',
                    duration: 4000,
                    style:{
                        background: '#e8dbc5',
                    },
                    offset:{
                        x:450,
                        y:100,
                    }
                }).showToast();
            }
        })

        localStorage.setItem('carrito', JSON.stringify(carrito));
        const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));

        let buscar1 = carrito.filter((a) => a.nombre.includes('elefante'));
        let buscar2 = carrito.filter((a) => a.precio <= 40000);
        let buscar3 = carrito.filter((a) => a.precio > 45000);

        carrito.length === 0 && console.log('No tienes productos agregados al carrito');
        console.log(carrito.length);
        console.log(buscar1);
        console.log(buscar2);
        console.log(buscar3);
    }
}

comprar();