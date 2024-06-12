import { Factura } from "./schemas.js"

export const obtenerFacturasSVC = async (bodyParams) => {

    try {
        const facturas = await Factura.find({"idUsuario":bodyParams.userId})
        return facturas

    } catch(error) {
        
        return false
    }
}