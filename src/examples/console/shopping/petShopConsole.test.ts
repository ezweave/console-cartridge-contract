import { mockPetShopCartridge } from './__fixtures__';
import { getPetShopConsole, listInventory } from './petShopConsole';

describe(listInventory, () => {
  it('loads a pet shop cartridge and calls the correct operation', async () => {
    const list = listInventory(mockPetShopCartridge);
    expect(await list()).toMatchSnapshot();
  });
});

describe(getPetShopConsole, () => {
  it('loads the correct cartridge', () => {
    expect(getPetShopConsole(mockPetShopCartridge)).toMatchSnapshot();
  });
});
