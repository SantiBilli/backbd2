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

// const producto = new Producto({
//     nombreProducto: "7Up",
//     imagen: "",
//     descripcion: "Gaseosa ...",
//     precio: 400
// })

// producto.save()

// .then(result => {
//     console.log(result);
//     mongoose.connection.close()
// })
// .catch(err => {
//     console.log(err);
// })