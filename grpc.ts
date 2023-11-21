import * as grpc from "@grpc/grpc-js";
import * as healthService from "./domains/health/grpc/";

const PORT = 3001;

export const setupGrpcServer = () => {
  const server = new grpc.Server();

  server.addService(healthService.service, healthService.server);

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(`Failed to bind gRPC server on port ${port}`);
        process.exit(1);
      }
      console.log(`gRPC server started on port ${port}`);
      server.start();
    }
  );

  return server;
};
