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
    nombre: String,
    apellido: String,
    direccion: String,
    fecha: Date,
    tipoFactura: String, //Consumidor Final Factura B //Responsable Inscripto Factura A //Monotributo Factura B
    productos: [{ idProducto: String, nombreProducto: String, precio: Number, cantidad: Number, descuento: Number, _id: false}]
},    
{
    versionKey: false
})

export const Factura = model('Factura', facturaSchema)

