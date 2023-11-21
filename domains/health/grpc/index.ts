import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import { ProtoGrpcType } from "./proto/health";
import { HealthHandlers } from "./proto/common/Health";

const checkHealt = () => {
  return {
    status: "ok",
  };
};

const getHealth = (_call, callback) => {
  callback(null, checkHealt());
};

const handlers: HealthHandlers = {
  GetHealth: getHealth,
};

const packageDefinition = protoLoader.loadSync(
  `${__dirname}/proto/health.proto`
);

const protoDescriptor = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

export const service = protoDescriptor.common.Health.service;
export const server = handlers;
