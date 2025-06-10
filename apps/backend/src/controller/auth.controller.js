const jwt = require("jsonwebtoken");

const login = (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "123456") {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Solo HTTPS en producción
            sameSite: "lax",
            maxAge: 60 * 60 * 1000,
        });

        return res.json({ message: "Login exitoso" });
    }

    res.status(401).json({ message: "Credenciales inválidas" });
};
