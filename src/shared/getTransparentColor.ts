import getColorType from './getColorType';

export default (color: string) => {
  const type = getColorType(color);

  if (type === 'hex') {
    if (color.length < 6) {
      return color.substring(0, 4) + '0';
    }
    return color.substring(0, 7) + '00';
  }
  //@ts-ignore
  const [r, g, b] = color.match(/\d+/g);
  return `rgba(${r},${g},${b},0)`;
};
