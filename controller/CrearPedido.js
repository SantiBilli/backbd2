import { Carrito, Pedido } from "../services/schemas.js";
import { v4 } from "uuid";

export const crearPedido = async (req, res) => {

    const bodyParams = req.body

    console.log(bodyParams);

    const idPedido = v4()

    const transformedProductos = bodyParams.arrCarrito.map(item => ({
        nombreProducto: item.nombreProducto,
        cantidad: item.cantidad,
        precio: item.precio
      }));

    const pedido = new Pedido({
        _id: idPedido,
        nombre: bodyParams.nombre,
        apellido: bodyParams.apellido,
        direccion: bodyParams.direccion,
        iva: bodyParams.iva,
        pago: bodyParams.pago,
        subtotal: bodyParams.subtotal,
        productos: transformedProductos
    })

    pedido.save()

    await Carrito.updateOne({"idUsuario":bodyParams.userId},{$set:{'productos':[]}})

    //GENERAR FACTURA

    return res.status(200).send()
}