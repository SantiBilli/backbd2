export const checkRol = async (req, res) => {
    const user = req.user;

    if (user.rol == "default") res.json({
        rol: user.rol
    })

    return res.send()
} 