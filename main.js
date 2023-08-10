/*

//! TERCERA ENTREGA

const productos =  [{ nombre: 'COLLAR BUHO', precio: 42000, boton: '¡Comprar!'},
                    { nombre: 'COLLAR ELEFANTE', precio: 40000, boton: '¡Comprar!'},
                    { nombre: 'EAR CUF CORONA', precio: 23000, boton: '¡Comprar!'},
                    { nombre: 'COLLAR MARIPOSA', precio: 38000, boton: '¡Comprar!'}];

for(const producto of productos){
    let contenedor = document.createElement('div');

    contenedor.innerHTML = `<h3> Producto: ${producto.nombre} </h3> 
                            <p> Precio: $${producto.precio} </p>
                            <button> ${producto.boton} </button>`

    document.body.appendChild(contenedor);
    }

//----------

function eleccionDeProductos(){
    class Producto{
        constructor(nombre, tipo, precio){
            this.nombre = nombre;
            this.tipo = tipo;
            this.precio = precio;
        }
    }

    const productos = [];
    for (let i = 0; i<3; i++){
        let nombre = prompt('Ingresa el nombre del accesorio que deseas');
        let tipo = prompt('Ingrese el tipo de accesorio');
        let precio = prompt('Ingresa el precio del accesorio elegido');
        let accesorioElegido ={
            nombre: nombre,
            tipo:  tipo,
            precio: parseInt(precio)
        }
        productos.push(accesorioElegido);
    }

    productos.push(new Producto('ELEFANTE', 'COLLAR', '45000'));
    productos.push(new Producto('PULSERA SIMPLE', 'PULSERA', '20000'));

    let mensaje = 'Tus accesorios elegidos son:' + '\n';
    let precioTotal = 0;
    for (const producto of productos){
        mensaje += producto.nombre + ': $' + producto.precio + '\n';
        precioTotal += parseInt(producto.precio);
    }

    let buscar = productos.filter((el) => el.tipo.includes('PULSERA'));
    let buscar2 = productos.filter((el) => el.precio < 30000);
    let buscar3 = productos.filter((el) => el.precio > 45000);

    alert(mensaje.toLocaleUpperCase());
    alert('El monto total de los accesorios que vas a llevar es de $' + precioTotal);

    if(precioTotal >= 100000){
        alert('¡Tu pedido tiene el envio gratuito!');
    }else{
        let faltante = 100000 - precioTotal;
        alert('Te faltan $' + faltante + ' para que tu pedido tenga el envio gratuito');
    }

    console.log(productos);
    console.log(productos.length);
    console.log(buscar);
    console.log(buscar2);
    console.log(buscar3);

    localStorage.setItem('Productos', JSON.stringify(productos));
}

eleccionDeProductos();

//------

*/

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

        console.log(carrito.length);
        console.log(buscar1);
        console.log(buscar2);
        console.log(buscar3);
    }
}

comprar();