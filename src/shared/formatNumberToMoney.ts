export default (mount: number, currency?: string) =>
  `${currency || ''}${mount
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
