export const isEmpty = (value: any) =>
  value === (undefined || null) ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);
