export const createUIMode = (title: string, control: string) => ({
  title,
  control,
});

export const createProperty = (
  name: string,
  type: string,
  defaultValue: string,
  description: string | Array<string>
) => ({ name, type, defaultValue, description });

export const createEvent = (
  name: string,
  type: string,
  description: string
) => ({ name, type, description });
