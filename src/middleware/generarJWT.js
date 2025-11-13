import jwt from "jsonwebtoken";

const generarJWT = (usuario, email)=>{
    try {
        console.log("🟡 SECRETJWT actual:", process.env.SECRETJWT);
        const payload = { usuario, email };
        const token = jwt.sign(payload, process.env.SECRETJWT, { expiresIn: "2h" });
        return token;
    } catch (error) {
        console.error("❌ Error al generar token:", error);
        throw new Error("Error al generar token");
    }
};

export default generarJWT;