import { apellidoUsuarioSVC, nombreUsuarioSVC } from "../services/DatosUsuarios.js"

export const obtenerDatos = async (req, res) => {
    const bodyParams = req.body

    const nombre = await nombreUsuarioSVC(bodyParams)
    const apellido = await apellidoUsuarioSVC(bodyParams)

    return res.json({
        nombre: nombre,
        apellido: apellido
    })
}