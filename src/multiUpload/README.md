# MultiUpload

## Description

Multi File Upload ready to use in your form.

## Usage

Use the Multi Upload component when users are to upload a document.

An example with all the available properties is:

```js
<MultiUpload 
    name="file-upload"
    acceptedFormats=".json"
    allowDirectories="allow"
    ariaLabel="aria-label"
    className="some-class-name"
    error={{
        text: "error message",
        classes: "error class names",
        id: "error-id",
        visuallyHiddenText: {
            text: "visuallyHiddenText",
            classes: "visually hidden class"
        }
    }}
    hint={{
        text: "hint text",
        classes: "classes for hint"
        id: "hint-id"
    }}
    id="multiupload-id"
    inputProperties={{
        className: "class-name"
    }}
    label="Upload Label"
    labelProperties={{
        className: "class name for label"
    }}
/>
```

## Properties

the available properties are:

| Property             | Type                                               | Default | Required  | Description                                                           |
| -------------------- | -------------------------------------------------- | ------- | --------- | --------------------------------------------------------------------- |
| **name**             | string                                             | null    | **true**  | multi upload name                                                     |
| **acceptedFormats**  | string                                             | null    | **false** | comma-separated list of file types accepted by the component          |
| **allowDirectories** | string                                             | null    | **false** | allow directories and files both to be selected in the file list      |
| **ariaLabel**        | string                                             | null    | **false** | multi upload aria label                                               |
| **className**        | string                                             | null    | **false** | multi upload class name                                               |
| **error**            | <ErrorMessageProps>                                | null    | **false** | multi upload error                                                    |
| **hint**             | <HintProps>                                        | null    | **false** | multi upload hint                                                     |
| **id**               | string                                             | null    | **false** | multi upload id                                                       |
| **inputProperties**  | <any>                                              | null    | **false** | multi upload input properties                                         |
| **label**            | string                                             | null    | **false** | multi upload label                                                    |
| **labelProperties**  | <any>                                              | null    | **false** | multi upload label properties for customisation                       |
