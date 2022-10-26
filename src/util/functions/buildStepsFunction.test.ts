import { toUpper } from 'lodash';

import { Operation } from '@console-cartridge-contract/types';

import {
  buildStepFunctionsFromOperation,
  buildStepsFunction,
} from './buildStepsFunction';

const transformerlessTestOperation: Operation<string, any, any, string> = {
  name: 'transformerless operation',
  steps: [
    {
      operation: async (n: string) => toUpper(n),
    },
  ],
};

const testOperation: Operation<string, any, any, string> = {
  name: 'transformerless operation',
  steps: [
    {
      operation: async (n: string) => `API-SAYS-${n}`,
      transform: {
        request: (n: string) => toUpper(n),
        response: (n: string) => `RESPONSE:${n}`,
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
describe(buildStepsFunction, () => {
  it('compiles multiple steps without transformers into one function', async () => {
    const stepsFunction = buildStepsFunction(transformerlessTestOperation);
    expect(await stepsFunction('foo')).toEqual('FOO');
  });
  it('compiles multiple steps with transformers into one function', async () => {
    const stepsFunction = buildStepsFunction(testOperation);
    expect(await stepsFunction('foo')).toEqual('RESPONSE:API-SAYS-FOO');
  });
});
