import { Function1, get, join, map, toLower, toUpper } from 'lodash';

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

enum Instrument {
  BASS = 'BASS',
  LEAD_GUITAR = 'LEAD_GUITAR',
  RHYTHM_GUITAR = 'RHYTHM_GUITAR',
  DRUMS = 'DRUMS',
  NONE = 'NONE'
}

enum Vocals {
  LEAD = 'LEAD',
  BACKGROUND = 'BACKGROUND',
  RINGO = 'RINGO',
  NONE = 'NONE'
}

interface BandMember {
  name: string,
  notes?: string,
  instrument?: Instrument,
  vocals?: Vocals,
}

interface ExampleIOResponse {
  data: any,
}

/**
 * Mock a call to a system that finds a Beatles instrument.
 * 
 * @param n 
 * @returns 
 */
const getInstrumentFromAPI = async (n: string) => {
  const bandMember = JSON.parse(n);
  const name = get(bandMember, 'name');

  const buildResponse = (instrument: Instrument) => ({
    data: JSON.stringify({
      ...bandMember,
      instrument
    })
  });

  switch (toUpper(name)) {
    case 'JOHN':
      return buildResponse(Instrument.RHYTHM_GUITAR);
    case 'GEORGE':
      return buildResponse(Instrument.LEAD_GUITAR);
    case 'PAUL':
      return buildResponse(Instrument.BASS);
    case 'RINGO':
      return buildResponse(Instrument.DRUMS);
    default:
      throw new Error(`${name} is not a Beatle!`);
  }
}

/**
 * Mock a call to a system that finds a Beatles vocals.
 * 
 * @param n 
 * @returns 
 */
const getVocalsFromAPI = async (n: string) => {
  const bandMember = JSON.parse(n);
  const name = get(bandMember, 'name');

  const buildResponse = (vocals: Vocals) => ({
    data: JSON.stringify({
      ...bandMember,
      vocals
    })
  });

  switch (toUpper(name)) {
    case 'JOHN':
      return buildResponse(Vocals.LEAD);
    case 'GEORGE':
      return buildResponse(Vocals.BACKGROUND);
    case 'PAUL':
      return buildResponse(Vocals.LEAD);
    case 'RINGO':
      return buildResponse(Vocals.RINGO);
    default:
      throw new Error(`${name} is not a Beatle!`);
  }
}

const testOperation: Operation<BandMember, any, any, BandMember> = {
  name: 'transformerOperation',
  steps: [
    {
      operation: getInstrumentFromAPI,
      transform: {
        request: (bandMember: BandMember) => JSON.stringify(bandMember),
        response: ({ data }: ExampleIOResponse) => JSON.parse(data),
      },
    },
    {
      operation: getVocalsFromAPI,
      transform: {
        request: (bandMember: BandMember) => JSON.stringify(bandMember),
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
    expect(buildStepFunctionsFromOperation(testOperation)).toMatchSnapshot();
  });
});

describe(mapSeries, () => {
  it('executes functions in series', async () => {
    const mockStepFunctions = [
      async (n) => `${n}_1`,
      async (n) => `${n}_2`,
      async (n) => `${n}_3`,
    ];
    expect(await mapSeries(mockStepFunctions, 'input')).toEqual('input_1_2_3')
  })
  it('executes non-heterogeneous functions in series', async () => {
    const mockStepFunctions = [
      async (n: string[], toUpperCase: boolean) => toUpperCase ? map(n, toUpper) : n,
      async (n: string[]) => join(n, ','),
    ];
    expect(await mapSeries(mockStepFunctions, [
      'John',
      'George',
      'Paul',
      'Ringo'
    ], true)).toEqual('JOHN,GEORGE,PAUL,RINGO');
  })
})

describe(buildStepsFunction, () => {
  it('compiles multiple steps without transformers into one function', async () => {
    const stepsFunction = buildStepsFunction(transformerlessTestOperation);
    expect(await stepsFunction('foo')).toEqual('FOO');
  });
  it('compiles multiple steps with transformers into one function', async () => {
    const stepsFunction = buildStepsFunction(testOperation);
    expect(await stepsFunction({
      name: 'George'
    })).toMatchSnapshot();
  });
  it('logs all of the steps along the way', async () => {
    const log = jest.fn();
    const stepsFunction = buildStepsFunction(testOperation, log);
    await stepsFunction({
      name: 'Ringo'
    });
    expect(log.mock.calls).toMatchSnapshot();
  });
});
