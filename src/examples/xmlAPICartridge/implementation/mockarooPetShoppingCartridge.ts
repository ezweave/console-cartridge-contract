import { offersOperation } from './offersOperation';

import { PetShoppingSupplier } from '../types';

export const mockarooPetShoppingCartridge: PetShoppingSupplier = {
  name: 'Mockaroo',
  logger: console.log,
  operations: [offersOperation],
};
