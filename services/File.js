import { v4 } from "uuid"
import { Producto } from "./schemas.js"

export const uploadFileSVC = async (bodyParams, imagen) => {
    
    const productId = v4()

    const producto = new Producto({
        _id: productId,
        nombreProducto: bodyParams.nombreProducto,
        imagen: imagen.filename,
        descripcion: bodyParams.descripcion,
        precio: bodyParams.precio,
        descuento: bodyParams.descuento
    })

    producto.save()
}

export const postListSVC = async () => {
    const postList = await Producto.find();
    return postList
}