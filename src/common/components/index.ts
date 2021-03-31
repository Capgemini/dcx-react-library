export { ErrorMessage } from './ErrorMessage';
export { Hint } from './Hint';
export { Legend } from './Legend';
type VisuallyHidden = {
  /**
   * visually hidden text
   */
  text: string;
  /**
   * classes of visually hidden text
   */
  classes?: string;
};

export enum ErrorPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export type ErrorMessageProps = {
  /**
   * error message
   */
  text: string;
  /**
   * error classes
   */
  classes?: string;
  /**
   * error id
   **/
  id?: string;
  /**
   * visually hidden text of the error
   */
  visuallyHiddenText?: VisuallyHidden;
};

export type HintProps = {
  /**
   * hint text
   **/
  text: string;
  /**
   * class names to customise hint
   **/
  classes?: string;
  /**
   * hint id
   **/
  id?: string;
};

export type LegendProps = {
  /**
   * legend text
   **/
  text: string;
  /**
   * legend class names to customise legend
   **/
  classes?: string;
  /**
   * states whether legend should be a heading
   **/
  isHeading?: boolean;
  /**
   * heading class names to customise heading
   **/
  headingClasses?: string;
};

export type FormInputProps = {
  /**
   * input name
   **/
  name: string;
  /**
   * input type
   **/
  type: string;
  /**
   * input value
   **/
  value: any;
  /**
   * pass the validation rules(please refer to forgJS) and the message you want to display
   **/
  validation?: { rule: any; message: string } | any;
  /**
   * allow to customise the input with all the properites needed
   **/
  inputProps?: any;
  /**
   * allow to customise the error message with all the properites needed
   **/
  errorProps?: any;
  /**
   * generic parameter to pass whatever element before the input
   **/
  prefix?: any;
  /**
   * generic parameter to pass whatever element after the input
   **/
  suffix?: any;
  /**
   * function that will trigger all the time there's a change in the input
   **/
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  /**
   * function that will check if is vald or not based on the validation rules
   **/
  isValid?: (valid: boolean) => void;
  /**
   * error message
   **/
  errorMessage?: any;
  /**
   * error position - top or bottom
   **/
  errorPosition?: ErrorPosition;
  /**
   * input ariaLabel
   **/
  ariaLabel?: string;
};

export type FormRadioProps = {
  /**
   * radio label
   */
  label: string;
  /**
   * radio value
   */
  value: string;
  /**
   * radio ariaLabel
   */
  ariaLabel?: string;
  /**
   * radio ariaDescribedBy
   */
  ariaDescribedBy?: string;
  /**
   * radio ariaLabelledBy
   */
  ariaLabelledBy?: string;
  /**
   * specifies whether the radio should be disabled
   */
  disabled?: boolean;
  /**
   * radio hint text
   */
  hint?: HintProps;
  /**
   * radio id
   */
  id?: string;
  /**
   * allows for customisation of the radio input with all the properites needed
   */
  inputProps?: any;
  /**
   * allows for customisation of the radio input with all the properites needed
   */
  itemProps?: any;
  /**
   * allows for customisation of the radio label with all the properites needed
   */
  labelProps?: any;
  /**
   * radio name
   */
  name?: string;
  /**
   * specifies whether the radio should be selected
   */
  selected?: boolean;
};
