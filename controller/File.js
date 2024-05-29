import { Producto } from "../services/schemas.js";
import { v4 } from "uuid";

export const fileUpload = async (req, res) => {
    const bodyParams = req.body
    const imagen = req.file

    if (req.file === undefined || bodyParams.nameProd === '' || bodyParams.description === '' || bodyParams.price === '') return res.status(204).send("Error.") 

    const productId = v4()
    console.log(productId);

    const producto = new Producto({
        _id: productId,
        nombreProducto: bodyParams.nombreProducto,
        imagen: imagen.filename,
        descripcion: bodyParams.descripcion,
        precio: bodyParams.precio
    })

    producto.save()

    .then(() => {
        return res.send()
    })
    .catch(err => {
        return res.status(204).send("Error.")
    })

    return res.send()
}

export const postsList = async (req, res) => {
    try {
        const postList = await Producto.find();
        return res.json(postList);
    } catch (error) {
        console.error("Error fetching products:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}