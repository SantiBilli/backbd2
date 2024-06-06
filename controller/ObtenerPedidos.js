import { obtenerPedidosSVC } from "../services/ObtenerPedidos.js"

export const obtenerPedidos = async (req, res) => {
    const bodyParams = req.body

    const pedidos = await obtenerPedidosSVC(bodyParams)

    console.log(pedidos);

    return res.json(pedidos)
}