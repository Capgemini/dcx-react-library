# FormInput

## Description

An Input component ready to use in your form with support for validation. For
the list of validation rules please refer to
[forgJS](https://github.com/oussamahamdaoui/forgJs)

FormInput is UI/UX agnostic so you need to provide your style to have the look
and feel you prefer.

## Usage

An example with all the available properties is:

```js
<FormInput
  name="password"
  type="text"
  value={value}
  onChange={handleChange}
  isValid={handleValidity}
  inputProps={{
    placeholder: 'enter your password',
  }}
  errorProps={{
    style: {fontSize: '10px', color: 'red', fontWeight: 'bold'},
  }}
  validation={{
    rule: {
      type: 'password',
      minLength: 8,
      uppercase: 1,
      numbers: 1,
      matchesOneOf: ['@', '_', '-', '.', '!'],
    },
    message:
      'your password need to be min 8 chars 1 Uppercase, 1 Number and one special character',
  }}
  prefix={
    <div
      style={{
        border: '1px solid #d2d2d2',
        padding: '5px',
      }}
    >
      <FontAwesomeIcon icon={faAt} />
    </div>
  }
  suffix={
    <div
      style={{
        border: '1px solid #d2d2d2',
        padding: '5px',
      }}
    >
      <FontAwesomeIcon icon={faAt} />
    </div>
  }
/>
```

## Properties

the available properties are:

| Property       | Type                                               | Default | Required  | Description                                      |
| -------------- | -------------------------------------------------- | ------- | --------- | ------------------------------------------------ |
| **name**       | string                                             | null    | **true**  | name of the input                                |
| **type**       | string                                             | null    | **true**  | type of the input                                |
| **value**      | any                                                | null    | **true**  | value of the input                               |
| **validation** | { rule: any message: string }                      | null    | **true**  | set of rules to define the validity of the input |
| **inputProps** | any                                                | null    | **false** | Extends the properties for the input             |
| **errorProps** | any                                                | null    | **false** | Extends the properties for the error message     |
| **prefix**     | any                                                | null    | **false** | Extend the input with another prefix component   |
| **suffix**     | any                                                | null    | **false** | Extend the input with another suffix component}  |
| **onChange**   | (event: React.FormEvent<HTMLInputElement>) => void | null    | **true**  | Dispatch the current value of the input          |
| **isValid**    | (valid: boolean) => void                           | null    | **true**  | Dispatch if the element is valid or not          |
