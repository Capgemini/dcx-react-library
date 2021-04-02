# FormRadio

## Description

Radio component ready to use in your form.

## Usage

Use the radio component when users can only select one option from a list.

An example with all the available properties is:

```js
<FormRadio
  label='radio-label'
  name='radio-name'
  value={value}
  ariaLabel='aria-label'
  ariaDataControls='aria-data-controls'
  ariaDescribedBy='aria-described-by'
  ariaLabelledBy='aria-labelled-by'
  disabled={true}
  hint={
    text: 'hint text',
    classes: 'class names',
    id: 'hint-id'
  }
  id='radio-id'
  inputProps={{
    className: 'class-name',
    onChange: handleChange
  }}
  itemProps={{
    className: 'class-name'
  }}
  labelProps={{
    style: {display: 'flex'}
  }}
  selected={true}
  onChange={handleChangeHandler}
/>
```

## Properties

the available properties are:

| Property             | Type                                               | Default | Required  | Description                                                           |
| -------------------- | -------------------------------------------------- | ------- | --------- | --------------------------------------------------------------------- |
| **label**            | string                                             | null    | **true**  | label of the radio                                                    |
| **value**            | string                                             | null    | **true**  | value of the radio                                                    |
| **ariaLabel**        | string                                             | null    | **false** | aria-label of the radio                                               |
| **ariaDataControls** | string                                             | null    | **false** | aria-data-controls of the radio                                       |
| **conditionaly**     | <conditionalProps>                                 | null    | **false** | conditional reveal for input field                                    |
| **ariaDescribedBy**  | string                                             | null    | **false** | aria-described-by of the radio                                        |
| **disabled**         | boolean                                            | null    | **false** | set the radio as disabled                                             |
| **hint**             | <HintProps>                                        | null    | **false** | hint text for the radio                                               |
| **id**               | string                                             | null    | **false** | id of the radio                                                       |
| **inputProps**       | <any>                                              | null    | **false** | allows for customisation of the inputs with all the properites needed |
| **itemProps**        | <any>                                              | null    | **false** | allows for customisation of the container with properties needed      |
| **labelProps**       | <any>                                              | null    | **false** | allows for customisation of the label with all the properites needed  |
| **name**             | string                                             | null    | **false** | name of the radio                                                     |
| **selected**         | boolean                                            | null    | **false** | default checked of the radio                                          |
| **onChange**         | (event: React.FormEvent<HTMLInputElement>) => void | null    | **true**  | Dispatch the current value of the input                               |