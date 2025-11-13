import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";

const server = new Server();

// Agregar las rutas
server.app.use('/api', router);

// ⚡ Exportar la app para que Vercel la use
export default server.app;

// Solo ejecutar .listen() en local
if (!process.env.VERCEL) {
  server.listen();
}