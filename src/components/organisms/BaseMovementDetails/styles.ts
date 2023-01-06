import {StyleSheet} from 'react-native';
import {baseColors} from '../../../styles/colors';

export default StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: baseColors.secondary,
    padding: 20,
  },
  imageFrame: {
    width: 350,
    height: 350,
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
  },
  label: {
    lineHeight: 19,
    marginVertical: 10,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
});
