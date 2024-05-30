import { agregarProductoCarritoSVC, borrarProductoSVC, cambiarCantidadSVC, getCarritoSVC } from "../services/carrito.js";

export const getCarrito = async (req, res) => {
    const bodyParams = req.body

    const carrito = await getCarritoSVC(bodyParams)

    if (carrito == false) return res.status(500).send("Error");

    return res.json(carrito[0]);
}

export const agregarProductoCarrito = async (req, res) => {
    const bodyParams = req.body

    const agregar = await agregarProductoCarritoSVC(bodyParams)

    if (agregar == false) return res.status(500).send("Error");
    
    return res.status(200).send();
}

export const cambiarCantidad = async (req, res) => {
    
    const bodyParams = req.body

    const cantidad = await cambiarCantidadSVC(bodyParams)

    if (cantidad == false) return res.status(500).send("Error");
    
    return res.status(200).send();
}

export const borrarProducto = async (req, res) => {
    
    const bodyParams = req.body
    
    const borrado = await borrarProductoSVC(bodyParams)

    if (borrado == false) return res.status(500).send("Error");
    
    return res.status(200).send();
}