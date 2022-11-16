import { Logger } from './Logger';
import { Operation } from './Operation';

export interface Cartridge {
  name: string;
  operations: Operation<unknown, unknown, unknown, unknown>[];
  logger: Logger;
}
