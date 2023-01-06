import React from 'react';
import {
  View,
  StatusBar as RNStatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBarProps,
} from 'react-native';

export const STATUSBAR_HEIGHT = RNStatusBar.currentHeight;
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  frame: {
    height: STATUSBAR_HEIGHT,
  },
});

type Props = Pick<
  StatusBarProps,
  'animated' | 'backgroundColor' | 'barStyle' | 'translucent'
>;

const BaseStatusBar: React.FC<Props> = ({
  animated,
  backgroundColor,
  barStyle,
  translucent,
}) => (
  <View style={[styles.frame, {backgroundColor}]}>
    <SafeAreaView>
      <RNStatusBar
        animated={animated}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={translucent}
      />
    </SafeAreaView>
  </View>
);

export default BaseStatusBar;
