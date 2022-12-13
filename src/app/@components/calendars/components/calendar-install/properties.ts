import { createProperty } from 'src/app/@shared/@factories/factories';

export const properties = [
  createProperty(
    'mode',
    "CalendarMode: 'min-max' | 'range' | 'month' | 'time' | 'date-time' | 'year'",
    'undefined',
    "Sets calendar mode, for basic mode don't set value for property"
  ),
  createProperty('label', 'string', 'undefined', 'Sets input label'),
  createProperty(
    'placeholder',
    'string',
    "'Pick Date'",
    'Sets input placeholder'
  ),
  createProperty(
    'controlName',
    'string',
    'undefined',
    'Sets formControlName for input component, MUST BE PROVIDED for the component to operate'
  ),
  createProperty(
    'floatLabel',
    'boolean',
    'false',
    'Shows the label provided as a floating label (refer to examples)'
  ),
  createProperty(
    'showCalendarIcon',
    'boolean',
    'false',
    'Shows/hides calendar icon (refer to examples)'
  ),
  createProperty(
    'readOnly',
    'boolean',
    'true',
    'Enables/disables user eding on calendar input selection'
  ),
  createProperty(
    'timeFormat',
    "HourFormat: '12' | '24'",
    '"12"',
    'Sets hour format for modes that have time support ("time","date-time") only'
  ),
  createProperty(
    'showButtons',
    'boolean',
    'false',
    'Shows/hides today & clear buttons in date picking'
  ),
  createProperty(
    'showWeeks',
    'boolean',
    'false',
    'Shows/hides week numbers in date picking (not supported in "month", "time" & "year" modes)'
  ),
  createProperty(
    'minDate',
    'Date',
    'undefined',
    'Used in "min-max" mode only to set min date in date picking'
  ),
  createProperty(
    'maxDate',
    'Date',
    'undefined',
    'Used in "min-max" mode only to set max date in date picking'
  ),
  createProperty('dateFormat', 'string', 'dd-mm-yy', [
    'd - day of month (no leading zero)',
    'dd - day of month (two digit)',
    'o - day of the year (no leading zeros)',
    'oo - day of the year (three digit)',
    'D - day name short',
    'DD - day name long',
    'm - month of year (no leading zero)',
    'mm - month of year (two digit)',
    'M - month name short',
    'MM - month name long',
    'y - year (two digit)',
    'yy - year (four digit)',
    '@ - Unix timestamp (ms since 01/01/1970)',
    '! - Windows ticks (100ns since 01/01/0001)',
    "'...' - literal text",
    "'' - single quote",
    'anything else - literal text',
  ]),
];
