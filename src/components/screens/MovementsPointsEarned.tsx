import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MovementsPointsFooterNavigationAll from '../molecules/MovementsPointsFooterNavigationAll';
import BaseMovementsPoints from '../organisms/BaseMovementsPoints';
import useFetchMovements from '../../hooks/useFetchMovements';
import {RootStackParamsList} from './index';

type Props = {
  navigation: NativeStackNavigationProp<
    RootStackParamsList,
    'movementsPointsEarned'
  >;
};

const MovementsPointsEarned: React.FC<Props> = props => {
  const {movements, isFetchingMovements} = useFetchMovements(
    movement => movement.is_redemption,
  );

  return (
    <BaseMovementsPoints
      movements={movements}
      isFetchingMovements={isFetchingMovements}
      footer={
        <MovementsPointsFooterNavigationAll
          onNavigateAll={props.navigation.goBack}
        />
      }
      onNavigateMovementDetails={movement =>
        props.navigation.navigate('movementDetails', movement)
      }
    />
  );
};

export default MovementsPointsEarned;
