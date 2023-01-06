export default (utc: string, options?: Intl.DateTimeFormatOptions) => {
  const date = new Date(utc);
  return date.toLocaleDateString('es-MX', options);
};
