import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./domains/health/grpc/proto/health";
import { HealthStatus } from "./domains/health/grpc/proto/common/HealthStatus";

const host = "0.0.0.0:3001";
const packageDefinition = protoLoader.loadSync(
  `${__dirname}/domains/health/grpc/proto/health.proto`
);
const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const client = new proto.common.Health(host, grpc.credentials.createInsecure());

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (error?: Error) => {
  if (error) {
    console.log(`Client connect error: ${error.message}`);
  } else {
    onClientReady();
  }
});

function onClientReady() {
  client.GetHealth(
    undefined,
    (error?: grpc.ServiceError | null, response?: HealthStatus) => {
      if (error) {
        console.error(error.message);
      } else if (response) {
        console.log(`(client) Got server message: ${response.status}`);
      }
    }
  );
}
