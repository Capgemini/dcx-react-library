import React from 'react';

export type VisuallyHidden = {
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
   * id
   */
  id?: string;
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
   * conditional value
   */
  value: string;
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
   * conditional for
   */
  labelFor?: string;
  /**
   * Sets the position of the conditional element. By default if not defined it will be rendered as a child but if set to 'sibling', it will the conditional will be rendered as a sibling of the main input element.
   */
  position?: 'sibling' | undefined;
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
   * specifies an optional className for the input
   */
  inputClassName?: string;
  /**
   * specifies an optional className for the label
   */
  labelClassName?: string;
  /**
    * specifies an optional className for the item
   */
  itemClassName?: string;
};

export type HintProps = {
  /**
   * hint text
   **/
  text: string;
  /**
   * hint position
   */
  position?: 'above';
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

export type LabelProps = {
  /**
   * label text
   **/
  label?: string;
  /**
   * label class name
   */
  className?: string;
  /**
   * label html for
   */
  htmlFor?: string;
  /**
   * label properties
   */
  labelProperties?: React.LabelHTMLAttributes<HTMLLabelElement>;
}