export const textColors = {
  primary: '#020202',
  secondary: '#9B9898',
  accent: '#FFFFFF',
} as const;

export const baseColors = {
  primary: '#334FFA',
  secondary: '#CFD6FF',
  background: '#F8F8F8',
} as const;

export const wrapperColors = {
  white: '#FFFFFF',
  green: '#00B833',
  red: '#FF0000',
} as const;

export default {
  text: textColors,
  base: baseColors,
  wrapper: wrapperColors,
} as const;
