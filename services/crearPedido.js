import { Carrito, Pedido } from "./schemas.js"
import { v4 } from "uuid"

export const crearPedidoSVC = async (bodyParams) => {

    const transformedProductos = bodyParams.arrCarrito.map(item => ({
        nombreProducto: item.nombreProducto,
        cantidad: item.cantidad,
        precio: item.precio
      }));

    const idPedido = v4()

    const pedido = new Pedido({
        _id: idPedido,
        idUsuario: bodyParams.userId,
        nombre: bodyParams.nombre,
        apellido: bodyParams.apellido,
        direccion: bodyParams.direccion,
        iva: bodyParams.iva,
        pago: bodyParams.pago,
        subtotal: bodyParams.subtotal,
        fecha: new Date(),
        productos: transformedProductos
    })

    pedido.save()

    await Carrito.updateOne({"idUsuario":bodyParams.userId},{$set:{'productos':[]}})

}