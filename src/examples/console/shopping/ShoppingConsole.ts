import { PetShoppingSupplier } from '@console-cartridge-contract/examples/xmlAPICartridge/types';
import { PetShopInventoryItem } from '@console-cartridge-contract/examples/xmlAPICartridge/types/data';
import { buildStepsFunction } from '@console-cartridge-contract/util/functions';

interface PetShopConsole {
  listInventory: () => Promise<PetShopInventoryItem[]>;
}

export const getPetShopConsole = (
  suppiler: PetShoppingSupplier,
): PetShopConsole => ({
  listInventory: listInventory(suppiler),
});

export const listInventory = (supplier: PetShoppingSupplier) => async () => {
  const {
    logger,
    name,
    operations: [offersOperation],
  } = supplier;

  logger('Loading cartridge', name);

  return buildStepsFunction(offersOperation)();
};
