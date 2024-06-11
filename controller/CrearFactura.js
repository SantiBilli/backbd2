import { crearFacturaSVC } from "../services/CrearFactura.js"
export const crearFactura = async (req, res) => {

    const bodyParams = req.body
    
    const registarFactura= await crearFacturaSVC(bodyParams)

    return res.send()
}