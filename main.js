let precioTotal = 0;
let ingresePrecio = prompt('Ingrese el precio del accesorio y una vez terminado, escriba: Finalizar');

do{
    precioTotal += parseInt(ingresePrecio);
    ingresePrecio = prompt('Ingrese el precio del accesorio y una vez terminado, escriba: Finalizar');
}while(ingresePrecio !== 'Finalizar')
alert('El monto total de los accesorios que vas a llevar es de ' + precioTotal);
    
if(precioTotal >= 100000){
    alert('¡Tu pedido tiene el envío gratuito!');
}else{
    let faltante = 100000 - precioTotal
    alert('¡Te faltan $' + faltante + ' para que tu pedido sea gratuito!');
}
