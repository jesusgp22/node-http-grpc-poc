import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HealthClient as _common_HealthClient, HealthDefinition as _common_HealthDefinition } from './common/Health';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  common: {
    Empty: MessageTypeDefinition
    Health: SubtypeConstructor<typeof grpc.Client, _common_HealthClient> & { service: _common_HealthDefinition }
    HealthStatus: MessageTypeDefinition
  }
}

