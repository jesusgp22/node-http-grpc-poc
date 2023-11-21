// Original file: domains/health/grpc/health.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _common_Empty,
  Empty__Output as _common_Empty__Output,
} from "./Empty";
import type {
  HealthStatus as _common_HealthStatus,
  HealthStatus__Output as _common_HealthStatus__Output,
} from "./HealthStatus";

export interface HealthClient extends grpc.Client {
  GetHealth(
    argument: _common_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_common_HealthStatus__Output>
  ): grpc.ClientUnaryCall;
  GetHealth(
    argument: _common_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_common_HealthStatus__Output>
  ): grpc.ClientUnaryCall;
  GetHealth(
    argument: _common_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_common_HealthStatus__Output>
  ): grpc.ClientUnaryCall;
  GetHealth(
    argument: _common_Empty,
    callback: grpc.requestCallback<_common_HealthStatus__Output>
  ): grpc.ClientUnaryCall;
  getHealth(
    argument: _common_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_common_HealthStatus__Output>
  ): grpc.ClientUnaryCall;
  getHealth(
    argument: _common_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_common_HealthStatus__Output>
  ): grpc.ClientUnaryCall;
  getHealth(
    argument: _common_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_common_HealthStatus__Output>
  ): grpc.ClientUnaryCall;
  getHealth(
    argument: _common_Empty,
    callback: grpc.requestCallback<_common_HealthStatus__Output>
  ): grpc.ClientUnaryCall;
}

export interface HealthHandlers extends grpc.UntypedServiceImplementation {
  GetHealth: grpc.handleUnaryCall<_common_Empty__Output, _common_HealthStatus>;
}

export interface HealthDefinition extends grpc.ServiceDefinition {
  GetHealth: MethodDefinition<
    _common_Empty,
    _common_HealthStatus,
    _common_Empty__Output,
    _common_HealthStatus__Output
  >;
}
