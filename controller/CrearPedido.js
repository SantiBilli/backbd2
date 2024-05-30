import { crearPedidoSVC } from "../services/crearPedido.js";

export const crearPedido = async (req, res) => {

    const bodyParams = req.body

    await crearPedidoSVC(bodyParams)

    return res.status(200).send()
}