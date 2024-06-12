import { Factura } from "./schemas.js"
export const crearFacturaSVC = async (bodyParams) => {
    
    const cantFacturas = await Factura.countDocuments()
    let tipoFactura = ""

    if (bodyParams.iva == "Consumidor Final" || bodyParams.iva == "Responsable Monotributo") {
        tipoFactura = "B"
    }
    else{
        tipoFactura = "A"
    }

    const transformedProductos = bodyParams.arrCarrito.map(item => ({
        nombreProducto: item.nombreProducto,
        cantidad: item.cantidad,
        precio: item.precio
      }));


    const factura = new Factura({
        _id: cantFacturas + 1,
        idUsuario: bodyParams.userId,
        nombre: bodyParams.nombre,
        apellido: bodyParams.apellido,
        direccion: bodyParams.direccion,
        fecha: new Date(),
        tipoFactura: tipoFactura,
        totalPagado: bodyParams.subtotal,
        productos: transformedProductos
    })

    await factura.save()

    // console.log(cantFacturas);
}