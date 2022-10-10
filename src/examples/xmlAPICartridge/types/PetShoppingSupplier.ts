import { Cartridge } from '@console-cartridge-contract/types';

import { PurchaseOperation } from './operations/PurchaseOperation';

export interface PetShoppingSupplier extends Cartridge {
  operations: [PurchaseOperation];
}
