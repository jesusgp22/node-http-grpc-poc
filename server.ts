import { Server } from "hyper-express";
import { router as healthRouter } from "./domains/health";

export default async function createServer() {
  const webserver = new Server();

  webserver.use("/health", healthRouter);

  const PORT = 3000;
  try {
    await webserver.listen(PORT);
    console.info(`HTTP server started on port ${PORT}`);
  } catch (err) {
    console.error(`Failed to start HTTP server on port ${PORT}`);
  }

  return webserver;
}
