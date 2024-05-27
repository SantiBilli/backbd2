import mongoose, { model, Schema } from "mongoose";

const productoSchema = new Schema({
    nombreProducto: String,
    imagen: String,
    descripcion: String,
    precio: Number
},    
{
    versionKey: false
})

export const Producto = model('Producto', productoSchema)