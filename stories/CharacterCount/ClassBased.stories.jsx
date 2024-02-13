import { CharacterCount } from '../../src/characterCount';

/**
 * In this section we're using the button component providing the **GovUk style** passing the relative `className.   
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Form/CharacterCount/Class based',
  component: CharacterCount,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'] 
};

/**
 * No restriction on typing in the textbox with over limit message showing
 */
export const Basic = {  
  name: 'Basic',
  args: {
    containerClassName:"govuk-character-count",
    labelClassName:"govuk-label govuk-label--l",
    label:"Label for text area",
    hint:{
      text: 'Type more than 15 characters to see the message change',
      className: 'govuk-hint',
    },
    textareaClassName:"govuk-textarea govuk-character-count",
    textareaErrorClassName:"govuk-textarea--error",
    messageClassName:"govuk-hint",
    messageErrorClassName:"govuk-character-count__message govuk-error-message",
    maxLength:15,
    rows:5,
  }
};

/**
 * Typing in the textbox is restricted to the character limit
 */
export const Constrained = {  
  name: 'Constrained',
  args: {
    containerClassName:"govuk-character-count",
    labelClassName:"govuk-label govuk-label--l",
    label:"Label for text area",
    hint:{
      text: 'Type more than 15 characters to see the limitation',
      className: 'govuk-hint',
    },
    textareaClassName:"govuk-textarea govuk-character-count",
    textareaErrorClassName:"govuk-textarea--error",
    messageClassName:"govuk-hint",
    messageErrorClassName:"govuk-character-count__message govuk-error-message",
    maxLength:15,
    rows:5,
    constrained:true,
  }
}

/**
 * Set to 80% for 15 characters maximum length
 */
export const Threshold = {  
  name: 'Threshold',
  args: {
    containerClassName:"govuk-character-count",
    labelClassName:"govuk-label govuk-label--l",
    label:"Label for text area",
    hint:{
      text: 'Type more than 12 characters to see the message',
      className: 'govuk-hint',
    },
    textareaClassName:"govuk-textarea govuk-character-count",
    textareaErrorClassName:"govuk-textarea--error",
    messageClassName:"govuk-hint",
    messageErrorClassName:"govuk-character-count__message govuk-error-message",
    maxLength:15,
    rows:5,
    threshold:80
  }
}

export const Wordcount = {  
  name: 'Word count',
  args: {
    containerClassName:"govuk-character-count",
    labelClassName:"govuk-label govuk-label--l",
    label:"Label for text area",
    hint:{
      text: 'Type more than 15 words to see the message change',
      className: 'govuk-hint',
    },
    textareaClassName:"govuk-textarea govuk-character-count",
    textareaErrorClassName:"govuk-textarea--error",
    messageClassName:"govuk-hint",
    messageErrorClassName:"govuk-character-count__message govuk-error-message",
    maxLength:15,
    rows:5,
    limitType:"words",
  }
}


/**
 * It will allow to specify a custom message whilst the user is typing
 */
export const CustomMessage = {  
  name: 'Custom message',
  render: function (args ) {
    return <CharacterCount {...args} customMaxCharMsgFunc={(remainingCount, overLimitBy, hydrated) =>
        `this is a custom message with ${remainingCount} and ${overLimitBy} with js enabled ${hydrated}`
      }/>
  },
  args: {
    containerClassName:"govuk-character-count",
    labelClassName:"govuk-label govuk-label--l",
    label:"Label for text area",
    hint:{
      text: 'Type more than 15 characters to see the message change',
      className: 'govuk-hint',
    },
    textareaClassName:"govuk-textarea govuk-character-count",
    textareaErrorClassName:"govuk-textarea--error",
    messageClassName:"govuk-hint",
    messageErrorClassName:"govuk-character-count__message govuk-error-message",
    maxLength:15,
    rows:5,
  }
}

export const Error = {  
  name: 'error',
  args: {
    containerClassName:"govuk-character-count govuk-form-group govuk-form-group--error",
    labelClassName:"govuk-label govuk-label--l",
    label:"Label for text area",
    hint:{ 
      text: 'Optional hint', 
      className: 'govuk-hint' 
    },
    textareaClassName:"govuk-textarea govuk-character-count govuk-textarea--error",
    messageClassName:"govuk-character-count__message govuk-hint",
    messageErrorClassName:"govuk-character-count__message govuk-character-count__status govuk-error-message",
    maxLength:15,
    cols:30,
    rows:5,
    displayError:true,
    errorMessage:"There is an error",
    errorMessageClassName:"govuk-error-message",
  }
}