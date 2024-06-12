import { obtenerFacturasSVC } from "../services/ObtenerFacturas.js"

export const obtenerFacturas = async (req, res) => {
    const bodyParams = req.body

    const facturas = await obtenerFacturasSVC(bodyParams)


    return res.json(facturas)
}