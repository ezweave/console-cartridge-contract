import { flow, forEach, head, isEmpty, map, reduce, tail } from 'lodash';

import { Operation, Logger } from '@console-cartridge-contract/types';

type STEP_TYPE = 'operation' | 'request-transformer' | 'response-transformer';

const logStep = (log: Logger, operationName: any, n: number) => (stepType: STEP_TYPE, description: string, ...args: any[]) => log(`${operationName}-step-${n}-${stepType}`, description, ...args);

export const buildStepFunctionsFromOperation = (
  op: Operation<any, any, any, any>,
  logger: Logger = console.info,
) => {
  let count = 1;
  return map(op.steps, (step) => async (input?: any) => {
    const { operation, transform } = step;
    const log = logStep(logger, op.name, count++);

    if (transform) {
      // Request transformer
      log('request-transformer', 'input', input);
      const request = transform.request(input);
      log('request-transformer', 'output', request);

      // Operation
      log('operation', 'input', input);
      const response = await operation(request);
      log('operation', 'output', response);

      // Response transformer
      log('response-transformer', 'input', response);
      const transformedResponse = transform.response(response);
      log('response-transformer', 'output', transformedResponse);

      return transformedResponse;
    }
    // Operation
    const response = await operation(input);
    log('operation', 'output', response);
    return response;
  });
};
interface IPromise {
  (...args: any[]): Promise<any>
}

export const mapSeries = async (functions: IPromise[], ...input: any[]) => {
  const currentFunction = head(functions);
  if (currentFunction) {
    const remainingFunctions = tail(functions);
    const response = await currentFunction(...input);
    if (!isEmpty(remainingFunctions)) {
      return mapSeries(remainingFunctions, response);
    }
    return response;
  }
  return input;
}

export const buildStepsFunction = <InputType, OutputType>(
  op: Operation<InputType, any, any, OutputType>,
  log: Logger = console.info,
): ((input?: InputType) => Promise<OutputType>) => async (input: InputType | undefined) => {
  const stepFunctions = buildStepFunctionsFromOperation(op, log);
  return mapSeries(stepFunctions, input);
};

