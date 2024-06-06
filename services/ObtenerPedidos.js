import { Pedido } from "./schemas.js"

export const obtenerPedidosSVC = async (bodyParams) => {

    try {
        const pedidos = await Pedido.find({"idUsuario":bodyParams.userId})
        return pedidos

    } catch(error) {
        
        return false
    }
}