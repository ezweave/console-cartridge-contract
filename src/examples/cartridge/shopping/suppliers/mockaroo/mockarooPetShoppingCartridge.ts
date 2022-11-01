import { PetShoppingSupplier } from '@console-cartridge-contract/examples/cartridge/shopping/types';

import { offersOperation } from './offersOperation';
import { purchaseOperation } from './purchaseOperation/purchaseOperation';


export const mockarooPetShoppingCartridge: PetShoppingSupplier = {
  name: 'Mockaroo',
  logger: console.log,
  operations: [offersOperation, purchaseOperation],
};
