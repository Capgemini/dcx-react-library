# Progress

## Description

Progress component ready to use in your UI

## Usage

Use the progress component when users need to feedback on the progress of an event

An example with all the available properties is:

```js
<Progress
    label="Progress"
    max={100}
    className="my-class-name"
    id="my-id"
    labelClassName="label-class-name"
    value={80}
/>
```

### Properties

the available properties are:

| Property             | Type                                               | Default | Required  | Description                                                           |
| -------------------- | -------------------------------------------------- | ------- | --------- | ----------------------------------------------------------------------|
| **label**            | string                                             | null    | **true**  | label of the progress bar                                             | 
| **max**              | number                                             | null    | **true**  | max value of the progress bar                                         |
| **className**        | string                                             | null    | **false** | class name to customise the progress bar                              |
| **id**               | string                                             | null    | **false** | id used to identify the progress bar                                  |
| **labelClassName**   | string                                             | null    | **false** | label class name to customise the progress bar label                  |
| **value**            | number                                             | null    | **false** | current value of the progress bar                                     |
