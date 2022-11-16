import { get, join, map, toUpper } from 'lodash';

import { Operation } from '@console-cartridge-contract/types';

import {
  buildStepFunctionsFromOperation,
  buildStepsFunction,
  mapSeries,
} from './buildStepsFunction';

const transformerlessTestOperation: Operation<string, any, any, string> = {
  name: 'transformerlessOperation',
  steps: [
    {
      operation: async (n: string) => toUpper(n),
    },
  ],
};

enum Weapon {
  NUNCHUCKS = 'NUNCHUCKS',
  SAI = 'SAI',
  KATANA = 'KATANA',
  BO = 'BO',
}

enum Color {
  BLUE = 'BLUE',
  PURPLE = 'PURPLE',
  RED = 'RED',
  ORANGE = 'ORANGE',
}

enum TurtleName {
  LEONARDO = 'LEONARDO',
  DONATELLO = 'DONATELLO',
  RAPHAEL = 'RAPHAEL',
  MICHAELANGELO = 'MICHAELANGELO',
}

interface NinjaTurtle {
  name: string;
  notes?: string;
  weapon?: Weapon;
  color?: Color;
}

interface ExampleIOResponse {
  data: any;
}

/**
 * Mock a call to a system that finds a Ninja Turtle's weapon.
 *
 * @param n
 * @returns
 */
const getWeaponFromAPI = async (n: string) => {
  const ninjaTurtle = JSON.parse(n);
  const name = get(ninjaTurtle, 'name');

  const buildResponse = (weapon: Weapon) => ({
    data: JSON.stringify({
      ...ninjaTurtle,
      weapon,
    }),
  });

  switch (toUpper(name)) {
    case TurtleName.DONATELLO:
      return buildResponse(Weapon.BO);
    case TurtleName.LEONARDO:
      return buildResponse(Weapon.KATANA);
    case TurtleName.MICHAELANGELO:
      return buildResponse(Weapon.NUNCHUCKS);
    case TurtleName.RAPHAEL:
      return buildResponse(Weapon.SAI);
    default:
      throw new Error(`${name} is not a Ninja Turtle!`);
  }
};

/**
 * Mock a call to a system that finds Ninja Turtle's colors.
 *
 * @param n
 * @returns
 */
const getVocalsFromAPI = async (n: string) => {
  const ninjaTurtle = JSON.parse(n);
  const name = get(ninjaTurtle, 'name');

  const buildResponse = (color: Color) => ({
    data: JSON.stringify({
      ...ninjaTurtle,
      color,
    }),
  });

  switch (toUpper(name)) {
    case TurtleName.DONATELLO:
      return buildResponse(Color.PURPLE);
    case TurtleName.LEONARDO:
      return buildResponse(Color.BLUE);
    case TurtleName.MICHAELANGELO:
      return buildResponse(Color.ORANGE);
    case TurtleName.RAPHAEL:
      return buildResponse(Color.RED);
    default:
      throw new Error(`${name} is not a Ninja Turtle!`);
  }
};

const getNinjaTurtleInfo: Operation<NinjaTurtle, any, any, NinjaTurtle> = {
  name: 'getNinjaTurtleInfo',
  steps: [
    {
      operation: getWeaponFromAPI,
      transform: {
        request: (ninjaTurtle: NinjaTurtle) => JSON.stringify(ninjaTurtle),
        response: ({ data }: ExampleIOResponse) => JSON.parse(data),
      },
    },
    {
      operation: getVocalsFromAPI,
      transform: {
        request: (ninjaTurtle: NinjaTurtle) => JSON.stringify(ninjaTurtle),
        response: ({ data }: ExampleIOResponse) => JSON.parse(data),
      },
    },
  ],
};

describe(buildStepFunctionsFromOperation, () => {
  it('builds step functions without a transformer', async () => {
    expect(
      buildStepFunctionsFromOperation(transformerlessTestOperation),
    ).toMatchSnapshot();
  });
  it('builds step functions with transformers', async () => {
    expect(
      buildStepFunctionsFromOperation(getNinjaTurtleInfo),
    ).toMatchSnapshot();
  });
});

describe(mapSeries, () => {
  it('executes functions in series', async () => {
    const mockStepFunctions = [
      async (n) => `${n}_1`,
      async (n) => `${n}_2`,
      async (n) => `${n}_3`,
    ];
    expect(await mapSeries(mockStepFunctions, 'input')).toEqual('input_1_2_3');
  });
  it('executes non-heterogeneous functions in series', async () => {
    const mockStepFunctions = [
      async (n: string[], toUpperCase: boolean) =>
        toUpperCase ? map(n, toUpper) : n,
      async (n: string[]) => join(n, ','),
    ];
    expect(
      await mapSeries(
        mockStepFunctions,
        ['Donatello', 'Leonardo', 'Michaelangelo', 'Rafael'],
        true,
      ),
    ).toEqual('DONATELLO,LEONARDO,MICHAELANGELO,RAFAEL');
  });
});

describe(buildStepsFunction, () => {
  it('compiles multiple steps without transformers into one function', async () => {
    const stepsFunction = buildStepsFunction(transformerlessTestOperation);
    expect(await stepsFunction('foo')).toEqual('FOO');
  });
  it('compiles multiple steps with transformers into one function', async () => {
    const stepsFunction = buildStepsFunction(getNinjaTurtleInfo);
    expect(
      await stepsFunction({
        name: 'Donatello',
      }),
    ).toMatchSnapshot();
  });
  it('logs all of the steps along the way', async () => {
    const log = jest.fn();
    const stepsFunction = buildStepsFunction(getNinjaTurtleInfo, log);
    await stepsFunction({
      name: 'Michaelangelo',
    });
    expect(log.mock.calls).toMatchSnapshot();
  });
});
