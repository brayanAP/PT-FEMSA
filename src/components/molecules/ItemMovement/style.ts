import {StyleSheet} from 'react-native';
import {wrapperColors} from '../../../styles/colors';

export default StyleSheet.create({
  frame: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginRight: 10,
  },
  leftFrame: {
    flexDirection: 'row',
  },
  product: {
    lineHeight: 19,
  },
  createdAt: {
    lineHeight: 16,
  },
  points: {
    lineHeight: 22,
  },
  redemptionTrue: {
    color: wrapperColors.green,
  },
  redemptionFalse: {
    color: wrapperColors.red,
  },
});
