# FormRadio

## Description

Radio component ready to use in your form.

## Usage

Use the radio component when users can only select one option from a list.

An example with all the available properties is:

```js
<FormRadio
  id="radio-1"
  name="group1"
  value={value}
  label="Radio 1 label text"
  onChange={handleChange}
  inputProps={{
    defaultChecked: true,
  }}
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
| **inputProps**       | string                                             | null    | **false** | allows for customisation of the inputs with all the properites needed |
| **itemProps**        | string                                             | null    | **false** | allows for customisation of the with all the properites needed        |
| **ariaLabel**        | string                                             | null    | **false** | aria-label of the radio                                               |
| **onChange**         | (event: React.FormEvent<HTMLInputElement>) => void | null    | **false** | Dispatch the current value of the input                               |
| **selected**         | boolean                                            | null    | **false** | default checked of the radio                                          |
| **disabled**         | boolean                                            | null    | **false** | set the radio as disabled                                             |