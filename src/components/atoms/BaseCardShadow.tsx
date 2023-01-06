import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

const styles = StyleSheet.create({
  frame: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

type Props = {
  children: React.ReactNode;
} & Pick<ViewProps, 'style'>;

const BaseCardShadow: React.FC<Props> = ({children, style}) => (
  <View style={[styles.frame, style]}>{children}</View>
);

export default BaseCardShadow;
