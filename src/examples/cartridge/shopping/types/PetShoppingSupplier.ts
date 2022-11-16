import { Cartridge } from '@console-cartridge-contract/types';

import { OffersOperation, PurchaseOperation } from './operations';

export interface PetShoppingSupplier extends Cartridge {
  operations: [OffersOperation, PurchaseOperation];
}
