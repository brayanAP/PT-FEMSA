import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {textColors} from '../../styles/colors';

const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 14,
  h6: 12,
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Avenir',
    fontStyle: 'normal',
  },
  bold: {
    fontWeight: '800',
  },
  light: {
    fontWeight: '400',
  },
});

export type BaseTextProps = {
  children: React.ReactNode;
  bold?: boolean;
  light?: boolean;
  size: keyof typeof fontSize;
  color?: keyof typeof textColors;
} & Pick<TextProps, 'style'>;

const BaseText: React.FC<BaseTextProps> = ({
  children,
  style,
  bold,
  light,
  size,
  color = 'primary',
}) => (
  <Text
    style={[
      styles.text,
      {fontSize: fontSize[size], color: textColors[color]},
      bold ? styles.bold : undefined,
      light ? styles.light : undefined,
      style,
    ]}>
    {children}
  </Text>
);

export default BaseText;
