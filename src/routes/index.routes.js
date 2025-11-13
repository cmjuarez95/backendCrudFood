import { Router } from "express";
import productosRoutes from "./productos.routes.js";
import usuariosRoutes from "./usuarios.routes.js";

const router = Router();

// http://localhost:3000/api/productos/
router.use("/productos", productosRoutes);
router.use("/usuarios", usuariosRoutes);

// 🔍 Ruta temporal para debug de entorno
router.get("/debug/env", (req, res) => {
  res.json({
    SECRETJWT: process.env.SECRETJWT ? "DEFINIDA" : "NO DEFINIDA",
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: !!process.env.VERCEL,
    ALL_ENV_KEYS: Object.keys(process.env).filter(k => k.toLowerCase().includes("jwt"))
  });
});

export default router;