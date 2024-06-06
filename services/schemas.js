import { model, Schema } from "mongoose";

const productoSchema = new Schema({
    _id: String,
    nombreProducto: String,
    imagen: String,
    descripcion: String,
    precio: Number,
    descuento: Number
},    
{
    versionKey: false
})
export const Producto = model('Producto', productoSchema)

const carritoSchema = new Schema({
    _id: String,
    idUsuario: String,
    productos: [{ idProducto: String, nombreProducto: String, precio: Number, cantidad: Number, descuento: Number, _id: false}]
},    
{
    versionKey: false
})

export const Carrito = model('Carrito', carritoSchema)

const pedidoSchema = new Schema({
    _id: String,
    idUsuario: String,
    nombre: String,
    apellido: String,
    direccion: String,
    iva: String,
    pago: String,
    subtotal: Number,
    fecha: Date,
    productos: [{nombreProducto: String, cantidad: Number, precio: Number, _id: false}]
},    
{
    versionKey: false
})

export const Pedido = model('Pedido', pedidoSchema)

const facturaSchema = new Schema({
    _id: Number,
    idUsuario: String,
    nombre: String,
    apellido: String,
    fecha: Date,
    tipoFactura: String, //Consumidor Final Factura B //Responsable Inscripto Factura A //Monotributo Factura B
    productos: [{ idProducto: String, nombreProducto: String, precio: Number, cantidad: Number, descuento: Number, _id: false}]
},    
{
    versionKey: false
})

export const Factura = model('Factura', facturaSchema)

// const carrito = new Carrito({
//     _id: "ea1ce3f8-01e3-4989-a44e-8c0e217f3575",
//     idUsuario: "af6b78eb-127b-48ba-8c87-a8410b93a0b3",
//     productos: [{idProducto:"721337ab-7557-48d6-b0c6-c3e37b94b196", nombreProducto: "Pepsi", precio: 800, cantidad: 4}]
// })

// carrito.save()
