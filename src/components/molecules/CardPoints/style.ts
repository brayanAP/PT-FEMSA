import {StyleSheet} from 'react-native';
import {baseColors} from '../../../styles/colors';

export default StyleSheet.create({
  frame: {
    width: 286,
    height: 143,
    backgroundColor: baseColors.primary,
    borderRadius: 20,
    padding: 20,
  },
  title: {
    lineHeight: 22,
  },
  subtitle: {
    width: '100%',
    lineHeight: 44,
    textAlign: 'center',
  },
});
