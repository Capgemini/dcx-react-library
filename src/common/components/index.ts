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
   * specifies whether the radio should be selected
   */
  selected?: boolean;
};
