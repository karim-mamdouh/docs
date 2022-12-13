import { createProperty } from 'src/app/@shared/@factories/factories';

export const properties = [
  createProperty(
    'severity',
    "Severity: 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger'",
    '"info"',
    'Sets button color (refer to examples)'
  ),
  createProperty('label', 'string', 'undefined', 'Text to be placed on button'),
  createProperty(
    'btnIcon',
    'string',
    'undefined',
    'Icon placed on button (refer to http://primefaces.org/primeng/icons'
  ),
  createProperty(
    'size',
    "Size: 'sm' | 'lg'",
    'undefined',
    'Sets button size, remove property for medium size'
  ),
  createProperty(
    'isRaised',
    'boolean',
    'false',
    'Changes button shape to raised shape (refer to examples for shapes)'
  ),
  createProperty(
    'isRounded',
    'boolean',
    'false',
    'Changes button shape to rounded shape (refer to examples for shapes)'
  ),
  createProperty(
    'isText',
    'boolean',
    'false',
    'Changes button shape to text shape (refer to examples for shapes)'
  ),
  createProperty(
    'isOutline',
    'boolean',
    'false',
    'Changes button shape to outline shape (refer to examples for shapes)'
  ),
  createProperty(
    'btnType',
    "ButtonType: 'button' | 'submit'",
    '"button"',
    'Sets button type, for forms set type to submit'
  ),
  createProperty(
    'mode',
    'ButtonMode: "badge"',
    'undefined',
    'Sets button mode, for normal mode remove attribute'
  ),
  createProperty(
    'badgeValue',
    'string',
    '"0"',
    'Sets badge value, WORKS ONLY WHEN MODE IS SET TO BADGE'
  ),
  createProperty(
    'badgeSeverity',
    "Severity: 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger'",
    '"info"',
    'Sets badge color, WORKS ONLY WHEN MODE IS SET TO BADGE'
  ),
  createProperty(
    'iconPos',
    "ButtonIconPosition: 'left' | 'right' | 'top' | 'bottom'",
    '"left"',
    'Sets icon position if icon is provided'
  ),
];
