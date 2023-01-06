import React from 'react';
import {ViewStyle} from 'react-native';
import BaseText from '../../atoms/BaseText';
import BaseCardShadow from '../../atoms/BaseCardShadow';
import formatNumberToMoney from '../../../shared/formatNumberToMoney';
import styles from './style';

type Props = {
  label: string;
  points: number;
  cardStyle: ViewStyle;
};

const CardPoints: React.FC<Props> = ({label, points, cardStyle}) => (
  <BaseCardShadow style={[styles.frame, cardStyle]}>
    <BaseText style={styles.title} size="h4" color="accent" bold>
      {label}
    </BaseText>
    <BaseText style={styles.subtitle} size="h1" color="accent" bold>
      {formatNumberToMoney(points)} pts
    </BaseText>
  </BaseCardShadow>
);

export default CardPoints;
