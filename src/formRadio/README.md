# FormRadio

## Description

Radio component ready to use in your form.

## Usage

Use the radio component when users can only select one option from a list.

An example with all the available properties is:

```js
<FormRadio
  name='radio-name'
  label='radio-label'
  value={value}
  id='radio-id'
  hintText='my hint'
  hintProps={{
    className: 'class-name', id: 'hint-id'
  }}
  controlsProps={{
    style: {display: 'grid'}
  }}
  inputProps={{
    className: 'class-name'
  }}
  radioProps={{ 
    style: {width: 0, height: 0} 
  }}
  labelProps={{
    style: {display: 'flex'}
  }}
  labelTextProps={{
    style: {lineHeight: 1}
  }}
  onChange={handleChange}
  selected={true}
  disabled={true}
/>
```

## Properties

the available properties are:

| Property             | Type                                               | Default | Required  | Description                                                           |
| -------------------- | -------------------------------------------------- | ------- | --------- | --------------------------------------------------------------------- |
| **id**               | string                                             | null    | **false** | id of the radio                                                       |
| **name**             | string                                             | null    | **true**  | name of the radio                                                     |
| **value**            | string                                             | null    | **true**  | value of the radio                                                    |
| **label**            | string                                             | null    | **false** | label of the radio                                                    |
| **labelProps**       | string                                             | null    | **false** | allows for customisation of the label with all the properites needed  |
| **hintText**         | string                                             | null    | **false** | hint text for the radio                                                    |
| **hintProps**        | string                                             | null    | **false** | allows for customisation of the hint with all the properites needed  |
| **inputProps**       | string                                             | null    | **false** | allows for customisation of the inputs with all the properites needed |
| **itemProps**        | string                                             | null    | **false** | allows for customisation of the with all the properites needed        |
| **ariaLabel**        | string                                             | null    | **false** | aria-label of the radio                                               |
| **onChange**         | (event: React.FormEvent<HTMLInputElement>) => void | null    | **false** | Dispatch the current value of the input                               |
| **selected**         | boolean                                            | null    | **false** | default checked of the radio                                          |
| **disabled**         | boolean                                            | null    | **false** | set the radio as disabled                                             |