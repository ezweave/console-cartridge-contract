import { Logger } from './Logger';
import { Operation } from './Operation';

export interface Cartridge {
  name: string;
  operations: Operation<any, any>[];
  logger: Logger;
}
