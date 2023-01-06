import React from 'react';
import {View} from 'react-native';
import BaseBasicButton from '../../atoms/BaseBasicButton';
import BaseText from '../../atoms/BaseText';
import styles from './style';

type Props = {
  onNavigateAll?: () => Promise<void> | void;
};

const MovementsPointsFooterNavigationAll: React.FC<Props> = ({
  onNavigateAll,
}) => (
  <View style={styles.frame}>
    <BaseBasicButton style={styles.button} onPress={onNavigateAll}>
      <BaseText color="accent" size="h6" bold>
        Todos
      </BaseText>
    </BaseBasicButton>
  </View>
);

export default MovementsPointsFooterNavigationAll;
