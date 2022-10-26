import { offersOperation } from './offersOperation';
import { purchaseOperation } from './purchaseOperation/purchaseOperation';

import { PetShoppingSupplier } from '../types';

export const mockarooPetShoppingCartridge: PetShoppingSupplier = {
  name: 'Mockaroo',
  logger: console.log,
  operations: [offersOperation, purchaseOperation],
};
