import { Cartridge } from '@console-cartridge-contract/types';

import { OffersOperation } from './operations';

export interface PetShoppingSupplier extends Cartridge {
  operations: [OffersOperation];
}
