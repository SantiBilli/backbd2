export const checkRol = async (req, res) => {
    const user = req.user;
    
    return res.json({
        rol: user.rol
    })
} 