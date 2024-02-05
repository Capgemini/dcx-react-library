import { FormCheckbox } from '../../src/formCheckbox/FormCheckbox';
import { useArgs } from '@storybook/preview-api';
import '../govUkStyle.css'

/**
 * In this section we're using the checkbox component providing the **GovUk style** passing the relative `className.      
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Form/Checkbox/Class based',
  component: FormCheckbox,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'] 
};

export const Checkbox = {  
  name: 'Checkbox',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const checkboxHandler = (evt) => {
      onChange(evt);
      setArgs({value:evt.currentTarget.value, defaultChecked: !args.defaultChecked });
      setChecked(!checked);
    };
    return (
      <div class="govuk-form-group">
          <fieldset class="govuk-fieldset" aria-describedby="">
            <div class="govuk-checkboxes">
              <FormCheckbox {...args} onChange={checkboxHandler} />
            </div>
          </fieldset>
      </div>
    )
   ;
  },
  args: {
    name:"lorem",
    label:"Lorem ipsum",
    value:"lorem",
    id:"lorem",
    inputClassName:'govuk-checkboxes__input',
    labelClassName:"govuk-label govuk-checkboxes__label",
    itemClassName:'govuk-checkboxes__item',
    inputProps:{
      className: 'govuk-checkboxes__input',
    },
    itemProps:{
      className: 'govuk-checkboxes__item',
    },
    labelProps:{
      className: 'govuk-label govuk-checkboxes__label',
    },
    defaultChecked:false
  },
  argTypes: { onChange: { action: 'changed' } },
};

export const Preselcted = {  
  name: 'Preselcted',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const checkboxHandler = (evt) => {
      onChange(evt);
      setArgs({value:evt.currentTarget.value, selected: !args.selected });
      setChecked(!checked);
    };
    return (
      <div class="govuk-form-group">
          <fieldset class="govuk-fieldset" aria-describedby="">
            <div class="govuk-checkboxes">
              <FormCheckbox {...args} onChange={checkboxHandler} />
            </div>
          </fieldset>
      </div>
    )
   ;
  },
  args: {
    name:"lorem-preselected",
    label:"Lorem ipsum",
    value:"lorem",
    id:"lorem-preselected",
    inputClassName:'govuk-checkboxes__input',
    labelClassName:"govuk-label govuk-checkboxes__label",
    itemClassName:'govuk-checkboxes__item',
    inputProps:{
      className: 'govuk-checkboxes__input',
    },
    itemProps:{
      className: 'govuk-checkboxes__item',
    },
    labelProps:{
      className: 'govuk-label govuk-checkboxes__label',
    },
    selected:true
  },
  argTypes: { onChange: { action: 'changed' } },
};

export const Hint = {  
  name: 'with Hint',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const checkboxHandler = (evt) => {
      onChange(evt);
      setArgs({value:evt.currentTarget.value, defaultChecked: !args.defaultChecked });
      setChecked(!checked);
    };
    return (
      <div class="govuk-form-group">
          <fieldset class="govuk-fieldset" aria-describedby="">
            <div class="govuk-checkboxes">
              <FormCheckbox {...args} onChange={checkboxHandler} />
            </div>
          </fieldset>
      </div>
    )
   ;
  },
  args: {
    name:"lorem-2",
    label:"Lorem ipsum",
    value:"lorem ipsum",
    id:"lorem-2",
    inputClassName:'govuk-checkboxes__input',
    labelClassName:"govuk-label govuk-checkboxes__label",
    itemClassName:'govuk-checkboxes__item',
    inputProps:{
      className: 'govuk-checkboxes__input',
    },
    itemProps:{
      className: 'govuk-checkboxes__item',
    },
    labelProps:{
      className: 'govuk-label govuk-checkboxes__label',
    },
    defaultChecked:false,
    hint:{
      text: 'Lorem ipsum hint text',
      className: 'govuk-hint govuk-checkboxes__hint',
      id: 'nationality-item-hint',
    },
  },
  argTypes: { onChange: { action: 'changed' } },
};

export const AboveHint = {  
  name: 'with Hint above',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const checkboxHandler = (evt) => {
      onChange(evt);
      setArgs({value:evt.currentTarget.value, defaultChecked: !args.defaultChecked });
      setChecked(!checked);
    };
    return (
      <div class="govuk-form-group">
          <fieldset class="govuk-fieldset" aria-describedby="">
            <div class="govuk-checkboxes">
              <FormCheckbox {...args} onChange={checkboxHandler} />
            </div>
          </fieldset>
      </div>
    )
   ;
  },
  args: {
    name:"lorem-2",
    label:"Lorem ipsum",
    value:"lorem ipsum",
    id:"lorem-2",
    inputClassName:'govuk-checkboxes__input',
    labelClassName:"govuk-label govuk-checkboxes__label",
    itemClassName:'govuk-checkboxes__item',
    inputProps:{
      className: 'govuk-checkboxes__input',
    },
    itemProps:{
      className: 'govuk-checkboxes__item',
    },
    labelProps:{
      className: 'govuk-label govuk-checkboxes__label',
    },
    defaultChecked:false,
    hint:{
      position: 'above',
      text: 'Lorem ipsum hint text',
      className: 'govuk-hint govuk-checkboxes__hint',
      id: 'nationality-item-hint',
    },
  },
  argTypes: { onChange: { action: 'changed' } },
};

export const Conditional = {  
  name: 'Conditional input',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const checkboxHandler = (evt, conditional) => {
      onChange(evt);
      if (conditional) {
        console.log(conditional);
        return;
      }
      setArgs({ value: evt.currentTarget.value, selected:  evt.currentTarget.checked});
      setTimeout(() => setArgs({ isLoading: false }), 2000);
    };
    return <FormCheckbox {...args} onChange={checkboxHandler} />;
  },
  args: {
    label:"checkbox label",
    value:'',
    id:"checkbox-6",
    inputProps:{
      name: 'checkbox-6',
    },
    selected:false,
    name:"contact",
    ariaDataControls:"conditional-contact",
    inputClassName:'govuk-checkboxes__input',
    labelClassName:"govuk-label govuk-checkboxes__label",
    itemClassName:'govuk-checkboxes__item',
    inputProps:{
      className: 'govuk-checkboxes__input',
    },
    itemProps:{
      className: 'govuk-checkboxes__item',
    },
    labelProps:{
      className: 'govuk-label govuk-checkboxes__label',
    },
    conditional:{
      value: '',
      name: 'conditional-6',
      label: 'condition label',
      type: 'text',
      id: 'checkbox-6',
      inputId: 'input-6',
      className: 'govuk-form-group',
      groupClassName:
        'govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden',
      inputClassName: 'govuk-input govuk-!-width-one-third',
      labelClassName: 'govuk-label',
    },
  },
  argTypes: { onChange: { action: 'changed' } },
};

export const SmallCheckbox = {  
  name: 'Small Checkbox',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const checkboxHandler = (evt) => {
      onChange(evt);
      setArgs({value:evt.currentTarget.value, defaultChecked: !args.defaultChecked });
      setChecked(!checked);
    };
    return (
      <div class="govuk-form-group">
          <fieldset class="govuk-fieldset" aria-describedby="">
            <div class="govuk-checkboxes govuk-checkboxes--small">
              <FormCheckbox {...args} onChange={checkboxHandler} />
            </div>
          </fieldset>
      </div>
    )
   ;
  },
  args: {
    name:"organisation",
    label:"HM Revenue and Customs (HMRC)",
    value:"hmrc",
    id:"organisation",
    inputClassName:'govuk-checkboxes__input',
    labelClassName:"govuk-label govuk-checkboxes__label",
    itemClassName:'govuk-checkboxes__item',
    inputProps:{
      className: 'govuk-checkboxes__input',
    },
    itemProps:{
      className: 'govuk-checkboxes__item',
    },
    labelProps:{
      className: 'govuk-label govuk-checkboxes__label',
    },
    defaultChecked:false,
  },
  argTypes: { onChange: { action: 'changed' } },
};

