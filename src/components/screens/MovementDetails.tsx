import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BaseMovementDetails from '../organisms/BaseMovementDetails';
import {RootStackParamsList} from './index';
import {RouteProp} from '@react-navigation/native';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'movementDetails'>;
  route: RouteProp<RootStackParamsList, 'movementDetails'>;
};

const MovementDetails: React.FC<Props> = props => (
  <BaseMovementDetails
    product={props.route.params.product}
    points={props.route.params.points}
    image={props.route.params.image}
    createdAt={props.route.params.createdAt}
    onGoBack={props.navigation.goBack}
  />
);

export default MovementDetails;
