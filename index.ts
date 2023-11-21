import { setupGrpcServer } from "./grpc";
import createServer from "./server";

function setup() {
  createServer();
  setupGrpcServer();
}

setup();
