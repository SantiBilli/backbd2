import { obtenerPedidosSVC } from "../services/ObtenerPedidos.js"

export const obtenerFacturas = async (req, res) => {
    const bodyParams = req.body

    const facturas = await obtenerPedidosSVC(bodyParams)


    return res.json(facturas)
}