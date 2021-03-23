# FormGroup

## Description

Group of form components e.g. radios ready to use in your form.

## Usage

Use the group component when users are to select one or more options from a list.

An example with all the available properties is:

```js
<FormGroup
  name='radio-name'
  items={[
    {
      label: 'label-name',
      value: 'value',
      ariaLabel: 'aria-label',
      disabled: false,
      hint: {
        text: 'hint-text',
        classes: 'classes',
        id: 'hint id'
      },
      id: 'item id',
      inputProps: {
        class: 'my-class-for-input'
      },
      itemProps: {
        style: {
          display: 'block'
        }
      },
      labelProps: {
        style: {
          fontWeight: '10px'
        }
      },
      selected: true
    }
  ]}
  ariaDescribedBy='aria-described-by'
  error={{
     text: 'error message'
     classes: 'error-classes'
     id: 'error-id',
     visuallyHiddenText: {
         classes='visually-hidden-classes',
         text='visually hidden text'
     }
  }}
  fieldsetClasses='fieldset-classes'
  groupClasses='group-classes'
  hint={{
      text='hint-text',
      classes: 'class names',
      id: 'hint-id'
  }}
  id='id'
  itemsClasses='items-classes'
  legend={
    text='heading text',
    classes='classes for legend',
    isHeading=true,
    headingClasses='classes for heading'
  }
  onChange={handleChange}
/>
```

## Properties

the available properties are:

| Property             | Type                                               | Default | Required  | Description                                                           |
| -------------------- | -------------------------------------------------- | ------- | --------- | --------------------------------------------------------------------- |
| **name**             | string                                             | null    | **true**  | name of the group                                                     |
| **items**            | <T>                                                | null    | **true**  | list of items in group                                                |
| **ariaDescribedBy**  | string                                             | null    | **false** | IDs of the elements that describe the object                          |
| **error**            | <ErrorProps>                                       | null    | **false** | validation errors in the group                                        |
| **fieldsetClasses**  | string                                             | null    | **false** | allows for customisation of group's fieldset                          |
| **groupClasses**     | string                                             | null    | **false** | allows for customisation of the entire group                          |
| **hint**             | <HintProps>                                        | null    | **false** | hint text for the group                                               |
| **id**               | string                                             | null    | **false** | id of the group                                                       |
| **itemClasses**      | string                                             | null    | **false** | allows for customisation of the group of items                        |
| **legend**           | <LegendProps>                                      | null    | **false** | title of the form group                                               |
| **onChange**         | (event: React.FormEvent<HTMLInputElement>) => void | null    | **false** | Dispatch the current value of the input                               |