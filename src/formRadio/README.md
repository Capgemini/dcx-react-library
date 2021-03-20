# FormRadio

## Description

Radio component ready to use in your form.

## Usage

Use the radio component when users can only select one option from a list.

An example with all the available properties is:

```js
<FormRadio
  label='radio-label'
  value={value}
  ariaLabel='aria-label'
  disabled={true}
  hint={
    text: 'hint text',
    classes: 'class names',
    id: 'hint-id'
  }
  id='radio-id'
  inputProps={{
    className: 'class-name'
  }}
  itemProps={{
    className: 'class-name'
  }}
  labelProps={{
    style: {display: 'flex'}
  }}
  name='radio-name'
  selected={true}
  onChange={handleChange}
/>
```

## Properties

the available properties are:

| Property             | Type                                               | Default | Required  | Description                                                           |
| -------------------- | -------------------------------------------------- | ------- | --------- | --------------------------------------------------------------------- |
| **label**            | string                                             | null    | **false** | label of the radio                                                    |
| **value**            | string                                             | null    | **true**  | value of the radio                                                    |
| **ariaLabel**        | string                                             | null    | **false** | aria-label of the radio                                               |
| **disabled**         | boolean                                            | null    | **false** | set the radio as disabled                                             |
| **hint**             | <HintProps>                                        | null    | **false** | hint text for the radio                                               |
| **id**               | string                                             | null    | **false** | id of the radio                                                       |
| **inputProps**       | string                                             | null    | **false** | allows for customisation of the inputs with all the properites needed |
| **itemProps**        | string                                             | null    | **false** | allows for customisation of the with all the properites needed        |
| **labelProps**       | string                                             | null    | **false** | allows for customisation of the label with all the properites needed  |
| **name**             | string                                             | null    | **true**  | name of the radio                                                     |
| **selected**         | boolean                                            | null    | **false** | default checked of the radio                                          |
| **onChange**         | (event: React.FormEvent<HTMLInputElement>) => void | null    | **false** | Dispatch the current value of the input                               |