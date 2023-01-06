import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MovementsPointsFooterNavigationTypes from '../molecules/MovementsPointsFooterNavigationTypes';
import BaseMovementsPoints from '../organisms/BaseMovementsPoints';
import useFetchMovements from '../../hooks/useFetchMovements';
import {RootStackParamsList} from './index';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'movementsPoints'>;
};

const MovementsPoints: React.FC<Props> = props => {
  const {movements, isFetchingMovements} = useFetchMovements();

  return (
    <BaseMovementsPoints
      movements={movements}
      isFetchingMovements={isFetchingMovements}
      footer={
        <MovementsPointsFooterNavigationTypes
          onNavigationEarned={() =>
            props.navigation.navigate('movementsPointsEarned')
          }
          onNavigationRedeemed={() =>
            props.navigation.navigate('movementsPointsRedeemed')
          }
        />
      }
      onNavigateMovementDetails={movement =>
        props.navigation.navigate('movementDetails', movement)
      }
    />
  );
};

export default MovementsPoints;
