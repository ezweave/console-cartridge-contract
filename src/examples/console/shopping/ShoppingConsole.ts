import { PetShoppingSupplier } from '@console-cartridge-contract/examples/xmlAPICartridge/types';

export const purchaseDogToy = async (supplier: PetShoppingSupplier) => {
  const [offersOperation, purchaseOperation] = supplier.operations;

  console.warn(offersOperation, purchaseOperation);
  // TODO: this is not necessarily an "in order" operation... hmmm
};
