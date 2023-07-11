//////   SEGUNDA ENTREGA 


function eleccionDeProductos(){
    let productos =[];

    for (let i = 0; i<3; i++){
        let producto = prompt('Ingresa el nombre del accesorio que deseas');
        let precio = prompt('Ingresa el precio del accesorio elegido');
        const accesorio ={
            nombre: producto,
            precio: parseInt(precio)
        }
        productos.push(accesorio);
    }

    let mensaje ="Tus accesorios elegidos son:" + '\n'
    for (const producto of productos){
        mensaje += producto.nombre + ': $' + producto.precio + '\n'
    }

    console.log(productos);
    alert(mensaje.toLocaleUpperCase());
}

eleccionDeProductos();




function calcularTotal(){

    let precioTotal = 0;
    let ingresePrecio = prompt('Ingrese el precio del accesorio o "esc" para ver el precio total');

    do{
        precioTotal += parseInt(ingresePrecio);
        ingresePrecio = prompt('Ingrese el precio del accesorio o "esc" para ver el precio total');
    }while(ingresePrecio !== 'esc')
    alert('El monto total de los accesorios que vas a llevar es de ' + precioTotal);

    if(precioTotal >= 100000){
        alert('¡Tu pedido tiene el envío gratuito!');
    }else{
        let faltante = 100000 - precioTotal
        alert('¡Te faltan $' + faltante + ' para que tu pedido sea gratuito!');
    }
}

calcularTotal();




function accesoriosDisponibles(){
    const accesorios =[
        {accesorio: 'Pulsera estrella', precio: 40000},
        {accesorio: 'Collar elefante', precio: 50000},
        {accesorio: 'Ear cuff corona', precio: 20000},
        {accesorio: 'Collar angel', precio: 45000},
        {accesorio: 'Pulsera sol', precio: 35000},
    ];
    
    let buscar = accesorios.filter((el) => el.accesorio.includes('Pulsera'));
    let buscar2 = accesorios.filter((el) => el.precio < 30000);
    let buscar3 = accesorios.filter((el) => el.precio > 45000);

    console.log(buscar);
    console.log(buscar2);
    console.log(buscar3);
}

accesoriosDisponibles();