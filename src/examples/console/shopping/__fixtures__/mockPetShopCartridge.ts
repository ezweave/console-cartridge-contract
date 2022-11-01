import { PetShoppingSupplier } from "@console-cartridge-contract/examples/cartridge/shopping/types";
import { OffersOperation, PurchaseOperation } from "@console-cartridge-contract/examples/cartridge/shopping/types/operations";

const offersOperation: OffersOperation = {
  name: 'OffersOperation',
  steps: [
    {
      operation: async (_input: string) => JSON.stringify({
        sku: 'PET-BB-PUR-01',
        name: 'Dog Toy',
        price: 10,
        description: 'Dog Chew Toy',
      }),
      transform: {
        request: () => 'offers',
        response: JSON.parse
      }
    },
  ],
};

const purchaseOperation: PurchaseOperation = {
  name: 'PurchaseOperation',
  steps: [
    {
      operation: async (data: string) => '',
      transform: {
        request: (_n: any[]) => '',
        response: (_n: string) => ({
          id: 'our-trace-id',
          total: '2026.72',
          xId: '1234',
        }),
      },
    },
  ],
};


export const mockPetShopCartridge: PetShoppingSupplier = {
  name: 'Mockaroo',
  logger: console.log,
  operations: [offersOperation, purchaseOperation],
};