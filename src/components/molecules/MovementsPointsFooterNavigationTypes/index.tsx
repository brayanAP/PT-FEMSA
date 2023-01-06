import React from 'react';
import {View} from 'react-native';
import BaseBasicButton from '../../atoms/BaseBasicButton';
import BaseText from '../../atoms/BaseText';
import styles from './style';

type Props = {
  onNavigationEarned?: () => Promise<void> | void;
  onNavigationRedeemed?: () => Promise<void> | void;
};

const MovementsPointsFooterNavigationTypes: React.FC<Props> = ({
  onNavigationEarned,
  onNavigationRedeemed,
}) => (
  <View style={styles.frame}>
    <BaseBasicButton style={styles.button} onPress={onNavigationEarned}>
      <BaseText color="accent" size="h6" bold>
        Ganados
      </BaseText>
    </BaseBasicButton>
    <BaseBasicButton style={styles.button} onPress={onNavigationRedeemed}>
      <BaseText color="accent" size="h6" bold>
        Canjeados
      </BaseText>
    </BaseBasicButton>
  </View>
);

export default MovementsPointsFooterNavigationTypes;
