import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {baseColors} from '../../styles/colors';

const styles = StyleSheet.create({
  frame: {
    height: 50,
    borderRadius: 10,
    backgroundColor: baseColors.primary,
  },
});

type Props = {
  children: React.ReactNode;
  backgroundColor?: keyof typeof baseColors;
} & Pick<TouchableOpacityProps, 'style' | 'onPress'>;

const BaseBasicButton: React.FC<Props> = ({
  backgroundColor = 'primary',
  children,
  style,
  onPress,
}) => (
  <TouchableOpacity
    style={[
      styles.frame,
      {backgroundColor: baseColors[backgroundColor]},
      style,
    ]}
    onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default BaseBasicButton;
