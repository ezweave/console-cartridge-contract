import { Retriever } from './Retriever';
import { Transformer } from './Transformer';

interface IOWithoutTransformation<InputType, OutputType> {
  operation: Retriever<InputType, OutputType>;
}

interface IOWithTransformation<InputType, OutputType, RequestType, ResponseType>
  extends IOWithoutTransformation<RequestType, ResponseType> {
  transform?: {
    request: Transformer<InputType, RequestType>;
    response: Transformer<ResponseType, OutputType>;
  };
}

// type IO<InputType, OutputType, RequestType = void, ResponseType = void> =
//   | IOWithTransformation<InputType, OutputType, RequestType, ResponseType>
//   | IOWithoutTransformation<InputType, OutputType>;
interface BaseOperation {
  name: string;
}

export interface OneStepOperation<
  InputType,
  RequestType,
  ResponseType,
  OutputType,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType, OutputType, RequestType, ResponseType>,
  ];
}

export interface TwoStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
  ];
}

export interface ThreeStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
  RequestType3,
  ResponseType3,
  OutputType3,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
  ];
}

export interface FourStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
  RequestType3,
  ResponseType3,
  OutputType3,
  RequestType4,
  ResponseType4,
  OutputType4,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
  ];
}

export interface FiveStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
  RequestType3,
  ResponseType3,
  OutputType3,
  RequestType4,
  ResponseType4,
  OutputType4,
  RequestType5,
  ResponseType5,
  OutputType5,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
    IOWithTransformation<OutputType4, OutputType5, RequestType5, ResponseType5>,
  ];
}
export interface SixStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
  RequestType3,
  ResponseType3,
  OutputType3,
  RequestType4,
  ResponseType4,
  OutputType4,
  RequestType5,
  ResponseType5,
  OutputType5,
  RequestType6,
  ResponseType6,
  OutputType6,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
    IOWithTransformation<OutputType4, OutputType5, RequestType5, ResponseType5>,
    IOWithTransformation<OutputType5, OutputType6, RequestType6, ResponseType6>,
  ];
}
export interface SevenStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
  RequestType3,
  ResponseType3,
  OutputType3,
  RequestType4,
  ResponseType4,
  OutputType4,
  RequestType5,
  ResponseType5,
  OutputType5,
  RequestType6,
  ResponseType6,
  OutputType6,
  RequestType7,
  ResponseType7,
  OutputType7,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
    IOWithTransformation<OutputType4, OutputType5, RequestType5, ResponseType5>,
    IOWithTransformation<OutputType5, OutputType6, RequestType6, ResponseType6>,
    IOWithTransformation<OutputType6, OutputType7, RequestType7, ResponseType7>,
  ];
}

export interface Operation<
  InputType,
  OutputType,
  RequestType1 = any,
  ResponseType1 = any,
  OutputType1 = any,
  RequestType2 = any,
  ResponseType2 = any,
  OutputType2 = any,
  RequestType3 = any,
  ResponseType3 = any,
  OutputType3 = any,
  RequestType4 = any,
  ResponseType4 = any,
  OutputType4 = any,
  RequestType5 = any,
  ResponseType5 = any,
  OutputType5 = any,
  RequestType6 = any,
  ResponseType6 = any,
  OutputType6 = any,
  RequestType7 = any,
  ResponseType7 = any,
  OutputType7 = any,
  RequestType8 = any,
  ResponseType8 = any,
> extends BaseOperation {
  steps:
  | [
    IOWithTransformation<InputType, any, any, any>,
    ...IOWithTransformation<any, any, any, any>[],
    IOWithTransformation<any, OutputType, any, any>,
  ]
  | [
    IOWithTransformation<InputType, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
    IOWithTransformation<OutputType4, OutputType5, RequestType5, ResponseType5>,
    IOWithTransformation<OutputType5, OutputType6, RequestType6, ResponseType6>,
    IOWithTransformation<OutputType6, OutputType7, RequestType7, ResponseType7>,
    IOWithTransformation<OutputType7, OutputType, RequestType8, ResponseType8>,
  ]
  | [
    IOWithTransformation<InputType, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
    IOWithTransformation<OutputType4, OutputType5, RequestType5, ResponseType5>,
    IOWithTransformation<OutputType5, OutputType6, RequestType6, ResponseType6>,
    IOWithTransformation<OutputType6, OutputType, RequestType7, ResponseType7>,
  ]
  | [
    IOWithTransformation<InputType, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
    IOWithTransformation<OutputType4, OutputType5, RequestType5, ResponseType5>,
    IOWithTransformation<OutputType5, OutputType, RequestType6, ResponseType6>,
  ]
  | [
    IOWithTransformation<InputType, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
    IOWithTransformation<OutputType4, OutputType, RequestType5, ResponseType5>,
  ]
  | [
    IOWithTransformation<InputType, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType, RequestType4, ResponseType4>,
  ]
  | [
    IOWithTransformation<InputType, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType, RequestType3, ResponseType3>,
  ]
  | [
    IOWithTransformation<InputType, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType, RequestType2, ResponseType2>,
  ]
  | [IOWithTransformation<InputType, OutputType, RequestType1, ResponseType1>];
}

