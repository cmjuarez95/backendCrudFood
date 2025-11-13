import jwt from "jsonwebtoken";

const generarJWT = (usuario, email) => {
  try {
    console.log("🔹 Variables disponibles:", Object.keys(process.env));
    console.log("🔹 Valor de SECRETJWT:", process.env.SECRETJWT ? "[OK]" : "[NO DEFINIDA]");

    const payload = { usuario, email };

    if (!process.env.SECRETJWT) {
      throw new Error("⚠️ SECRETJWT no está definida en el entorno");
    }

    const token = jwt.sign(payload, process.env.SECRETJWT, { expiresIn: "2h" });
    return token;
  } catch (error) {
    console.error("Error en generarJWT:", error.message);
    throw new Error("Error al generar token");
  }
};

export default generarJWT;