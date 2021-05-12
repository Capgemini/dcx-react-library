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

type HeadingProps = {
  /**
   * heading priority
   */
  priority: number;
  /**
   * heading class names to customise heading
   **/
  className?: string;
};

export type ConditionalInputProps = {
  /**
   * conditional input name
   **/
  name: string;
  /**
   * conditional input label
   */
  label: string;
  /**
   * conditional input type
   **/
  type: string;
  /**
   *  wrapper conditional class name
   */
  className?: string;
  /**
   * group class names
   */
  groupClassName?: string;
  /**
   * wrapper conditional input id
   */
  id?: string;
  /**
   * conditional input class name
   */
  inputClassName?: string;
  /**
   * conditional input id
   */
  inputId?: string;
  /**
   * conditional label input class name
   */
  labelClassName?: string;
  /**
   * conditional input value
   */
  value?: any;
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
   * radio ariaDataControls
   */
  ariaDataControls?: string;
  /**
   * radio ariaDescribedBy
   */
  ariaDescribedBy?: string;
  /**
   * radio ariaLabelledBy
   */
  ariaLabelledBy?: string;
  /**
   * radio conditionally input field
   */
  conditional?: ConditionalInputProps;
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
  /**
   * function that will trigger all the time there's a change in the radio
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

export type FormCheckboxProps = {
  /**
   * checkbox name
   **/
  name: string;
  /**
   * checkbox label
   **/
  label: string;
  /**
   * checkbox value
   **/
  value: string;
  /**
   * function that will trigger all the time there's a change on the checkbox
   **/
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  /**
   * checkbox id
   **/
  id?: string;
  /**
   * checkbox ariaLabel
   **/
  ariaLabel?: string;
  /**
   * checkbox ariaLabel
   **/
  ariaDescribedBy?: string;
  /**
   * checkbox ariaLabel
   **/
  ariaLabelledBy?: string;
  /**
   * checkbox ariaLabel
   **/
  ariaDataControls?: string;
  /**
   * checkbox hint properties
   **/
  hint?: HintProps;
  /**
   * checkbox hint position value 'above' or 'below'
   **/
  hintPosition?: string;
  /**
   * allows for customisation of the checkbox input with all the properites needed
   **/
  inputProps?: any;
  /**
   * allows for customisation of the checkbox input with all the properites needed
   **/
  itemProps?: any;
  /**
   * allows for customisation of the checkbox label with all the properites needed
   **/
  labelProps?: any;
  /**
   * specifies whether the checkbox should be disabled
   */
  disabled?: boolean;
  /**
   * specifies whether the checkbox should be pre-checked
   */
  selected?: boolean;
  /**
   * checkbox conditionally input field
   */
  conditional?: ConditionalInputProps;
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
  className?: string;
  /**
   * legend heading
   */
  heading?: HeadingProps;
};
