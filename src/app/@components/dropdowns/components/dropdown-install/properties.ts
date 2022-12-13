import {
  createEvent,
  createProperty,
} from 'src/app/@shared/@factories/factories';

export const properties = [
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
    'data',
    'Array<DropDownItem>',
    '[ ]',
    'Data array to be viewed in dropdown'
  ),
  createProperty(
    'showClear',
    'boolean',
    'false',
    'Shows/hides clear button for selected item'
  ),
  createProperty(
    'enableFilter',
    'boolean',
    'false',
    'Shows/hides search bar inside dropdown list'
  ),
  createProperty(
    'multiSelect',
    'boolean',
    'false',
    'Enables/disables multi selection for dropdown items (returns an array of selected items)'
  ),
  createProperty(
    'multiSelectMode',
    "MultiMode: 'chip'",
    'undefined',
    'Changes selected items mode when multiSelect flag is active, for normal mode remove property'
  ),
  createProperty(
    'autoComplete',
    'boolean',
    'false',
    'Enables/disables auto-complete when typing in dropdown'
  ),
  createProperty(
    'floatLabel',
    'boolean',
    'false',
    'Shows the label provided as a floating label (refer to examples)'
  ),
  createProperty(
    'mode',
    "DropDownMode: 'text-flag' | 'text-svg' | 'text-icon'",
    'undefined',
    'Changes viewing mode of dropdown, for normal mode remove property'
  ),
  createProperty(
    'roundedFlagIcon',
    'boolean',
    'false',
    'Enables/disables rounded flag icons, USE ONLY IN TEXT-FLAG MODE'
  ),
];

export const interfaces = [
  createEvent('key', 'string', 'Used as shown text for the dropdown'),
  createEvent('value', 'string', 'Value return when an item is selected'),
  createEvent(
    'iconURL',
    'string',
    'Directory for icon image (USE WHEN IN TEXT-SVG MODE ONLY)'
  ),
  createEvent(
    'iconName',
    'string',
    'Icon name to be placed next to items in dropdown, USE ONLY WITH TEXT-ICON MODE (refer to http://primefaces.org/primeng/icons)'
  ),
];
