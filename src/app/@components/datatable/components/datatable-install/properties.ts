import {
  createEvent,
  createProperty,
} from 'src/app/@shared/@factories/factories';

export const properties = [
  createProperty(
    'tableColumns',
    'Array<TableColumn>',
    '[ ]',
    'Columns configuration array'
  ),
  createProperty(
    'data',
    'Array<any>',
    '[ ]',
    'Data array to be viewed in table rows'
  ),
  createProperty(
    'size',
    'Size: "lg" | "sm"',
    'undefined',
    'Sets table view size, left undefined set size to medium table size'
  ),
  createProperty(
    'gridLines',
    'boolean',
    'false',
    'Shows or hides table grid lines'
  ),
  createProperty(
    'isScrollable',
    'boolean',
    'false',
    'Activates or deactivates scroll in table (if active set scrollHeight property to take effect)'
  ),
  createProperty(
    'scrollHeight',
    'TableScrollHeight: number | "flex"',
    '"flex"',
    'Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the table, otherwise use numeric value which will set scroll height in pexels'
  ),
  createProperty(
    'showPageReport',
    'boolean',
    'false',
    'Shows/hides page report when pagination is active'
  ),
  createProperty(
    'captionMessage',
    'string',
    'undefined',
    'Sets text in table caption section'
  ),
  createProperty(
    'summaryMessage',
    'string',
    'undefined',
    'Sets text in table summary section'
  ),
  createProperty(
    'paginate',
    'boolean',
    'false',
    'Enable/disable pagination in table'
  ),
  createProperty(
    'rowsCountPerPage',
    'number',
    'undefined',
    'Sets number of shown rows when pagination is active'
  ),
  createProperty(
    'rowsPerPageOptions',
    'Array<number>',
    'undefined',
    'Sets numbers for different number of rows per page'
  ),
];

export const events = [
  createEvent(
    'stateChange',
    'State',
    'Triggered when buttons/switches are clicked returning a state object that contains the event name & current row data'
  ),
];

export const interfaces = {
  tableColumn: [
    createEvent('title', 'string', 'Table column title attribute'),
    createEvent(
      'type',
      "ColumnType: 'text' | 'image' | 'checkbox' | 'button' | 'switch' | 'link'",
      'Sets column type to change view mode in datatable'
    ),
    createEvent(
      'dataKey',
      'string?',
      "Provide your data object key for this column, so when you pass a data array the table automatically looks for the dataKey provided & parses it's data"
    ),
    createEvent(
      'btnConfig',
      'Array<ButtonConfig>?',
      'Array used when you want to create buttons in the column object, each ButtonConfig object you place in the array will create a button with the provided configuration & automatically create a state for it based on the event attribute USE ONLY WITH BUTTON TYPE'
    ),
    createEvent(
      'switchConfig',
      'State?',
      'Used to create a state for the switch, USE WITH SWITCH COLUMN TYPE ONLY'
    ),
  ],
  buttonConfig: [
    createEvent('label', 'string?', 'Text placed on button'),
    createEvent(
      'icon',
      'string?',
      'Icon to be placed on button created (refer to http://primefaces.org/primeng/icons)'
    ),
    createEvent(
      'severity',
      "Severity?: 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger'",
      'Sets button color (refer to button page for shapes)'
    ),
    createEvent(
      'event',
      'string',
      'Required for state creation, shown when event is triggered'
    ),
    createEvent('state', 'any?', 'Inital state for button'),
  ],
  state: [
    createEvent(
      'event',
      'string',
      'Required for state creation, shown when event is triggered'
    ),
    createEvent('state', 'any?', 'Inital state value'),
  ],
};
