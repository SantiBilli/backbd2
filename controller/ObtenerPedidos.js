import { obtenerPedidosSVC } from "../services/ObtenerPedidos.js"

export const obtenerPedidos = async (req, res) => {
    const bodyParams = req.body

    // console.log(req);

    const pedidos = await obtenerPedidosSVC(bodyParams)

    // console.log(pedidos);

    return res.json(pedidos)
}