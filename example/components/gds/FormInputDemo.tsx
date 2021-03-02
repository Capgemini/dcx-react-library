import * as React from "react";
import { useState } from 'react';
import { FormInput } from '../../../dist';
import "./FormInput.css";

export const GOVUKInputDemo = () => {
    const [value, setValue] = useState("")
    const handleChange = event => {
        setValue(event.currentTarget.value)
    }
    const handleValidity = valid => {
        console.log(valid)
    }
    const [value1, setValue1] = useState("")
    const handleChange1 = event => {
        setValue1(event.currentTarget.value)
    }
    const handleValidity1 = valid => {
        console.log(valid)
    }
    return (
        <div>
            <FormInput
                name="text"
                type="text"
                inputProps = {{
                    className: "govuk-input"
                }}
                value={value}
                onChange={handleChange}
                isValid={handleValidity}
                aria-label="standard-input"
            />
            <FormInput
                name="text0"
                type="text"
                inputProps = {{
                    className: "govuk-input"
                }}
                value={value}
                onChange={handleChange}
                isValid={handleValidity}
                suffix={
                    <div className="govuk-input__suffix" aria-hidden="true">kg</div>
                }
                aria-label="standard-input-suffix"
            />
            <FormInput
                name="text1"
                type="text"
                inputProps = {{
                    className: "govuk-input"
                }}
                value={value}
                onChange={handleChange}
                isValid={handleValidity}
                prefix={
                    <div className="govuk-input__prefix" aria-hidden="true">£</div>
                }
                aria-label="standard-input-prefix"
            />
            <FormInput
                name="text2"
                type="text"
                inputProps = {{
                    className: "govuk-input"
                }}
                value={value}
                onChange={handleChange}
                isValid={handleValidity}
                suffix={
                    <div className="govuk-input__suffix" aria-hidden="true">per item</div>
                }
                prefix={
                    <div className="govuk-input__prefix" aria-hidden="true">£</div>
                }
                aria-label="standard-input-pre-post-fix"
            />

        <FormInput
            name="text3"
            type="text"
            value={value1}
            onChange={handleChange1}
            isValid={handleValidity1}
            inputProps = {{
                className: "govuk-input"
            }}
            errorProps={{
                "className": "govuk-error-message"
            }}
            validation={{
                rule: {
                type: 'string',
                minLength: 1,
                },
                message:
                'Enter an event name',
            }}
            errorMessage={{
                "className": "govuk-error-message"
            }}
            errorPosition= "top"
            aria-label="standard-input-validation"
        />
    </div>
    )
}
