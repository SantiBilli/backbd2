import { Producto } from "../services/schemas.js";

export const fileUpload = async (req, res) => {
    const bodyParams = req.body
    const imagen = req.file

    console.log(imagen);
    console.log(bodyParams);

    if (req.file === undefined || bodyParams.nameProd === '' || bodyParams.description === '' || bodyParams.price === '') return res.status(204).send("Error.") 

    const image = imagen.buffer.toString('base64')

    const producto = new Producto({
        nombreProducto: bodyParams.nombreProducto,
        imagen: image,
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