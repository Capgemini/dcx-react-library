import React from 'react';

type VisuallyHidden = {
  /**
   * visually hidden text
   */
  text: string;
  /**
   * classes of visually hidden text
   */
  className?: string;
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
   * conditional value
   */
  value?: string;
  /**
   * conditional input onChange event
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ErrorMessageProps = {
  /**
   * error message
   */
  text: string;
  /**
   * error className
   */
  className?: string;
  /**
   * error id
   **/
  id?: string;
  /**
   * visually hidden text of the error
   */
  visuallyHiddenText?: VisuallyHidden;
};

export type FormRadioCheckboxProps = {
  /**
   * label
   */
  label: string;
  /**
   * value
   */
  value: string;
  /**
   * specify if the type is radio or checkbox
   */
  type?: 'checkbox' | 'radio';
  /**
   * id
   */
  id: string;
  /**
   * define the role as radio or checkbox
   */
  role?: string;
  /**
   * ariaLabel
   */
  ariaLabel?: string;

  /**
   * ariaDataControls
   */
  ariaDataControls?: string;
  /**
   * ariaDescribedBy
   */
  ariaDescribedBy?: string;
  /**
   * ariaLabelledBy
   */
  ariaLabelledBy?: string;
  /**
   * conditionally input field
   */
  conditional?: ConditionalInputProps;
  /**
   * specifies whether the radio should be disabled
   */
  disabled?: boolean;
  /**
   * hint text
   */
  hint?: HintProps;
  /**
   * Position the hint
   */
  hintPosition?: 'below' | 'above';
  /**
   * allows for customisation of the input with all the properites needed
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * allows for customisation of the input with all the properites needed
   */
  itemProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * allows for customisation of the label with all the properites needed
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * name
   */
  name?: string;
  /**
   * renders a nested radio within a label tag
   */
  nested?: boolean;
  /**
   * specifies whether the radio should be selected
   */
  selected?: boolean;
  /**
   * function that will trigger all the time there's a change in the radio
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

export type HintProps = {
  /**
   * hint text
   **/
  text: string;
  /**
   * class names to customise hint
   **/
  className?: string;
  /**
   * hint id
   **/
  id?: string;
  /**
   * hint as label
   */
  useLabel?: boolean;
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
