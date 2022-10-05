export interface OperationOption<InputType, OutputType> {
  name: string,
  enabled: boolean,
  option: (inputType: InputType) => OutputType | Promise<OutputType>
}
