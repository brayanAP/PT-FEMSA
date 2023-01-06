import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';
import {baseColors} from '../../styles/colors';

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: baseColors.background,
  },
});

type Props = {
  children: React.ReactNode;
} & Pick<ViewProps, 'style'>;

const BaseScreen: React.FC<Props> = ({children, style}) => (
  <View style={[styles.frame, style]}>{children}</View>
);

export default BaseScreen;
