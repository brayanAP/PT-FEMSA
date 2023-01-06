import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovementsPoints from './MovementsPoints';
import MovementsPointsEarned from './MovementsPointsEarned';
import MovementsPointsRedeemed from './MovementsPointsRedeemed';
import MovementDetails from './MovementDetails';
import {Movement} from '../../types/base';

export type RootStackParamsList = {
  movementsPoints: undefined;
  movementsPointsEarned: undefined;
  movementsPointsRedeemed: undefined;
  movementDetails: Pick<
    Movement,
    'createdAt' | 'image' | 'points' | 'product' | 'id'
  >;
};

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator
      initialRouteName="movementsPoints"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="movementsPoints" component={MovementsPoints} />
      <Stack.Screen
        name="movementsPointsEarned"
        component={MovementsPointsEarned}
      />
      <Stack.Screen
        name="movementsPointsRedeemed"
        component={MovementsPointsRedeemed}
      />
      <Stack.Screen name="movementDetails" component={MovementDetails} />
    </Stack.Navigator>
  );
};

export default Screens;
