# FormCheckbox

## Description

Checkbox component ready to use in your form.

## Usage

Use the checkbox component as a single checkbox or group of checkboxes.

An example with all the available properties is:

```js
<FormCheckbox
  name="checkbox-name"
  label="checkbox-label"
  value={value}
  id="checkbox-id"
  hintText="my hint"
  hintProps={{
    className: 'class-name',
    id: 'hint-id',
  }}
  controlsProps={{
    style: { display: 'grid' },
  }}
  inputProps={{
    className: 'class-name',
  }}
  checkboxProps={{
    style: { width: 0, height: 0 },
  }}
  labelProps={{
    style: { display: 'flex' },
  }}
  labelTextProps={{
    style: { lineHeight: 1 },
  }}
  onChange={handleChange}
  disabled={true}
  defaultChecked={true}
/>
```

## Properties

the available properties are:

| Property           | Type                                               | Default | Required  | Description                                                           |
| ------------------ | -------------------------------------------------- | ------- | --------- | --------------------------------------------------------------------- |
| **id**             | string                                             | null    | **false** | id of the checkbox                                                    |
| **name**           | string                                             | null    | **true**  | name of the checkbox                                                  |
| **value**          | string                                             | null    | **true**  | value of the checkbox                                                 |
| **label**          | string                                             | null    | **false** | label of the checkbox                                                 |
| **labelProps**     | string                                             | null    | **false** | allows for customisation of the label with all the properites needed  |
| **hintText**       | string                                             | null    | **false** | hint text for the checkbox                                            |
| **hintProps**      | string                                             | null    | **false** | allows for customisation of the hint with all the properites needed   |
| **inputProps**     | string                                             | null    | **false** | allows for customisation of the inputs with all the properites needed |
| **itemProps**      | string                                             | null    | **false** | allows for customisation of the with all the properites needed        |
| **ariaLabel**      | string                                             | null    | **false** | aria-label of the checkbox                                            |
| **onChange**       | (event: React.FormEvent<HTMLInputElement>) => void | null    | **false** | Dispatch the current value of the input                               |
| **disabled**       | boolean                                            | null    | **false** | set the checkbox as disabled                                          |
| **defaultChecked** | boolean                                            | null    | **false** | preselect the checkbox                                                |
