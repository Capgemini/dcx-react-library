import React from 'react';
import {Rule} from '@cesium133/forgjs';

interface Validation {
  rule: any
  message: string
}

/**
 * Check if is valid or not
 * @param validation
 * @param value
 */
const isValid = (validation: Validation, value: string) => {
  const floatRule: any = new Rule(validation.rule, validation.message)
  let rule: any = value
  if (validation.rule.type === 'float' || validation.rule.type === 'int') {
    rule = parseFloat(value)
  }
  return {
    valid: floatRule.test(rule),
    floatRule,
  }
}

/**
 * This custom hooks accept in input the element to validate and the validation rule
 * to pass the input in case of HTMLInputElement you can use useRef hooks.
 * For a list of Validation rules have a look on: https://github.com/oussamahamdaoui/forgJs
 * @Example
 * const validation = {
 *    rule: {
 *      type: 'float',
 *      min: 100,
 *     },
 *     message: 'the value have to be float and more then 100',
 * }
 * const inputEl = React.useRef<HTMLInputElement | null>(null)
 * const {validity} = useValidation(
 *  inputEl.current ? inputEl.current.value : '',
 *  validation,
 * )
 * @param value
 * @param validation
 */
const useValidation = (value: string, validation: Validation) => {
  const [validity, setValid] = React.useState({valid: true, message: ''})
  React.useEffect(() => {
    const {valid, floatRule} = isValid(validation, value)
    setValid({
      valid,
      message: floatRule.error,
    })
  }, [value])

  return {
    validity,
    setValid,
  }
}

/**
 * This custom hooks accept in input a validation rule and provide in
 * output the validity or not of the element.
 * For a list of Validation rules have a look on: https://github.com/oussamahamdaoui/forgJs
 * @Example
 * const {validity, onValueChange} = useValidationOnChange({
 *   rule: {
 *     type: 'float',
 *     min: 100,
 *    },
 *    message: 'the value have to be float and more then 100',
 *  })
 *  return (<input onChange={onValueChange}/>
 * @param validation
 */

const useValidationOnChange = (validation: Validation) => {
  const [validity, setValid] = React.useState({valid: true, message: ''})

  const onValueChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const {valid, floatRule} = isValid(validation, evt.currentTarget.value)
    setValid({
      valid,
      message: floatRule.error,
    })
  }

  return {validity, onValueChange}
}

export {useValidation, useValidationOnChange}
