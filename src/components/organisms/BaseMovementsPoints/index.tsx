import React from 'react';
import {View} from 'react-native';
import BaseText from '../../atoms/BaseText';
import BaseStatusBar from '../../atoms/BaseStatusBar';
import ListMovements from '../../molecules/ListMovements';
import BaseScreen from '../../atoms/BaseScreen';
import CardPoints from '../../molecules/CardPoints';
import CardPointsPlaceholder from '../../molecules/CardPointsPlaceholder';
import ListMovementsPlaceholder from '../../molecules/ListMovementsPlaceholder';
import {ItemMovementType} from '../../molecules/ItemMovement';
import {Movements} from '../../../types/base';
import styles from './styles';

type Props = {
  movements?: Movements;
  isFetchingMovements?: boolean;
  footer: React.ReactElement;
  onNavigateMovementDetails: (movement: ItemMovementType) => void;
};

const BaseMovementsPoints: React.FC<Props> = ({
  movements,
  isFetchingMovements,
  footer,
  onNavigateMovementDetails,
}) => {
  const isLoading = isFetchingMovements || !movements;
  return (
    <BaseScreen>
      <BaseStatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.content}>
        <BaseText style={styles.title} size="h3" bold>
          Bienvenido de vuelta!
        </BaseText>
        <BaseText style={styles.subtitle} size="h4">
          Ruben Rodriguez
        </BaseText>
        <BaseText style={styles.textGroup} color="secondary" size="h5" bold>
          TUS PUNTOS
        </BaseText>
        {isLoading && <CardPointsPlaceholder />}
        {!isLoading && (
          <CardPoints
            label="Diciembre"
            points={
              movements?.reduce((accum, {points}) => accum + points, 0) || 0
            }
            cardStyle={styles.card}
          />
        )}
        <BaseText style={styles.textGroup} color="secondary" size="h5" bold>
          TUS MOVIMIENTOS
        </BaseText>
        {isLoading && <ListMovementsPlaceholder />}
        {!isLoading && (
          <ListMovements
            data={movements || []}
            listStyle={styles.list}
            onPressItemMovement={onNavigateMovementDetails}
          />
        )}
      </View>
      {footer}
    </BaseScreen>
  );
};

export default BaseMovementsPoints;
