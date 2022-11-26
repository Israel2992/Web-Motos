// La pagina web se desarrolla pensando en un Ecomerce enfocado en productos y servicios de mantenimineto o personalizacion de motocicletas, ademas de vender productos relacionados al mercado.

// Voy a demostrar lógica para el control de inventario de productos como los cascos, chaquetas y guantes de motociclista



// Esto para el caso de comprar un producto

let cantidadInventario = 10
let cantidadCompra = 2
const precioProducto = 180000 

const ventaProducto = (cantidadInventario,precioProducto,cantidadCompra) => {

    if (cantidadInventario <= 0){
        return 'Producto no disponible'
    } else {
        cantidadInventario = cantidadInventario - cantidadCompra
        return `Producto disponible, actualmente tenemos ${cantidadInventario} y el precio es ${precioProducto} COP`
    } 
}

console.log(ventaProducto(cantidadInventario,precioProducto,cantidadCompra))



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Calculo de la compra total de los productos. 

let precioProducto1 = 10000
let precioProducto2 = 50000
let precioProducto3 = 10000
let precioProducto4 = 90000

const calcularTotal = (cantidadCompra, precioProducto1, precioProducto2, precioProducto3,precioProducto4) =>{

    if (cantidadCompra > 0){

        if(precioProducto1 === precioProducto2 && precioProducto1 === precioProducto3 && precioProducto1 === precioProducto4){
            let total = precioProducto1 * cantidadCompra
            return ` El costo total por los productos son: ${total} COP`
        }
        else{
            let total = precioProducto1 + precioProducto2 + precioProducto3 + precioProducto4
            return ` El costo total por los productos son: ${total} COP`
        }
    }
    else {
        return `Canasta vacia, selecciona los articulos que deseas comprar`
    }
}
console.log(calcularTotal(cantidadCompra, precioProducto1, precioProducto2, precioProducto3,precioProducto4))



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Calculando el costos de envio


const ubicacionSede = 'Medellin'            // ubicacion de la sede
const pesoMaxMedellin = 5                   // peso maximo para enviar en la misma ciudad sin sobrecosto
const pesoMaxCiudad = 10                    // peso maximo para enviar a otra ciudad sin sobrecosto 

let ubicacionEnvio = 'Cali'             // ciudad de envio
let pesoCompra = 20                         // peso de los productos 
let tarifaBasicaMedellin = 12000            // tarifa basica de envio a Medellin
let tarifaBasicaCiudades = 20000            // tarifa basica de envio a otras ciudades 
let serviciosEnvioCiudad = 2000             // costo de servicio adicional por envio 


const precioPesoExtra = 2000                // precio extra al sobrepasar el peso 
let pesoExtra = 3                           // peso extra registrado 
let calculoPesoExtra = precioPesoExtra * pesoExtra     


const calculoEnvio = (ubicacionSede,ubicacionEnvio,tarifaBasicaMedellin,tarifaBasicaCiudades,pesoCompra) => {

    if(ubicacionSede === ubicacionEnvio){               // si el lugar de envio es la misma ciudad

        if (pesoCompra <= pesoMaxMedellin){ 
            let totalEnvio = tarifaBasicaMedellin
            return `El total de envio es: ${totalEnvio}`
        }
        else{
            let totalEnvio = tarifaBasicaMedellin + calculoPesoExtra
            return `El total de envio es: ${totalEnvio}`
        }
    } 
    else{                                               // si el lugar de envio es a otra ciudad

        if(pesoCompra <= pesoMaxCiudad){
            let totalEnvio = tarifaBasicaCiudades + serviciosEnvioCiudad
            return `El total de envio es: ${totalEnvio}`
        }
        else{
            let totalEnvio = tarifaBasicaCiudades + serviciosEnvioCiudad + calculoPesoExtra
            return `El total de envio es: ${totalEnvio}`
        }
    }
}

console.log(calculoEnvio(ubicacionSede,ubicacionEnvio,tarifaBasicaMedellin,tarifaBasicaCiudades,pesoCompra))



