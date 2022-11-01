import {
  canOfFreshDogKibbleFixture,
  dogTuxedoFixture,
  fancyCatCollarFixture,
} from './__fixtures__';
import {
  generateProductPurchaseElementFromItem,
  transformPurchaseOperationRequest,
} from './transformPurchaseOperationRequest';

describe(generateProductPurchaseElementFromItem, () => {
  it('generates an xml element to correspond to our purchase item', () => {
    expect(
      generateProductPurchaseElementFromItem({
        quantity: 1,
        item: fancyCatCollarFixture,
      }),
    ).toMatchSnapshot();
  });
});

describe(transformPurchaseOperationRequest, () => {
  it('generates an xml payload for our purchase', () => {
    const id = 'our-transaction-id';
    expect(
      transformPurchaseOperationRequest({
        id,
        items: [
          {
            quantity: 1,
            item: fancyCatCollarFixture,
          },
          {
            quantity: 3,
            item: canOfFreshDogKibbleFixture,
          },
          {
            quantity: 1,
            item: dogTuxedoFixture,
          },
        ],
      }),
    ).toMatchSnapshot();
  });
});
