import { createProperty } from 'src/app/@shared/@factories/factories';

export const properties = [
  createProperty(
    'type',
    "InputMode: 'text' | 'tel' | 'password' | 'email' | 'textarea' | 'number' | 'chips'",
    'text',
    'Type of input component (mode)'
  ),
  createProperty('label', 'string', 'undefined', 'Sets input label'),
  createProperty(
    'placeholder',
    'string',
    '"Placeholder"',
    'Sets input placeholder'
  ),
  createProperty(
    'controlName',
    'string',
    'undefined',
    'Sets formControlName for input component, MUST BE PROVIDED for the component to operate'
  ),
  createProperty(
    'size',
    'Size: "lg" | "sm"',
    'undefined',
    'Sets input component size'
  ),
  createProperty(
    'icon',
    'string',
    'undefined',
    'Sets icon on right or left side of input, for icons refer to (http://primefaces.org/primeng/icons)'
  ),
  createProperty(
    'iconPos',
    'IconPosition: "left" | "right"',
    '"left"',
    'Sets icon position on the input component'
  ),
  createProperty(
    'toggleMask',
    'boolean',
    'false',
    'Shows/hides show password toggler icon (works only with "password" type)'
  ),
  createProperty(
    'passwordFeedback',
    'boolean',
    'false',
    'Shows/hides input password strength feedback (works only with "password" type)'
  ),
  createProperty(
    'chipSeperator',
    'string',
    '","',
    'Sets chips input seperator; ex: enter text then press , will create a new chip (works only with "chips" type)'
  ),
  createProperty(
    'styleClass',
    'string',
    '""',
    'Used to pass external css class to input component'
  ),
  createProperty(
    'autoSize',
    'boolean',
    'false',
    'Enables autoSize mode for textarea input, if activated control behavior with rows property (works only with "textarea" type)'
  ),
  createProperty(
    'rows',
    'number',
    '2',
    'Sets textarea rows, use only if autoSize is activated otherwise will not take effect (works only with "textarea" type)'
  ),
  createProperty(
    'floatLabel',
    'boolean',
    'false',
    'Shows the label provided as a floating label (refer to examples)'
  ),
];
