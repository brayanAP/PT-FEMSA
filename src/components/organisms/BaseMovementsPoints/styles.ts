import {StyleSheet} from 'react-native';
import {wrapperColors} from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    lineHeight: 27,
  },
  subtitle: {
    lineHeight: 19,
  },
  textGroup: {
    lineHeight: 19,
    marginVertical: 20,
  },
  card: {
    alignSelf: 'center',
  },
  list: {
    backgroundColor: wrapperColors.white,
    borderRadius: 12,
    paddingVertical: 10,
  },
});
