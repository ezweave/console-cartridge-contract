import { flow, map } from 'lodash';

import { Operation, Logger } from '@console-cartridge-contract/types';

export const buildStepFunctionsFromOperation = (
  op: Operation<any, any, any, any>,
  log: Logger = console.info,
) =>
  map(op.steps, (step) => async (input?: any) => {
    const { operation, transform } = step;

    if (transform) {
      log('Local request', input);
      const request = transform.request(input);
      log('Transformed request', request);
      const response = await operation(request);
      log('Remote response', response);
      const transformedResponse = transform.response(response);
      log('Transformed response', transformedResponse);
      return transformedResponse;
    }
    log('Request', input);
    const response = await operation(input);
    log('Response', response);
    return response;
  });

export const buildStepsFunction = <InputType, OutputType>(
  op: Operation<InputType, any, any, OutputType>,
  log: Logger = console.info,
): ((input?: InputType) => Promise<OutputType>) => {
  const stepFunctions = buildStepFunctionsFromOperation(op, log);
  return flow(stepFunctions);
};
