import React from 'react';
import {FlatList, ViewStyle} from 'react-native';
import {Movements} from '../../types/base';
import ItemMovement, {ItemMovementType} from './ItemMovement';

type Props = {
  data: Movements;
  listStyle?: ViewStyle;
  onPressItemMovement?: (movement: ItemMovementType) => Promise<void> | void;
};

const ListMovements: React.FC<Props> = ({
  data,
  listStyle,
  onPressItemMovement,
}) => (
  <FlatList
    data={data}
    style={listStyle}
    keyExtractor={item => item.id}
    renderItem={({item}) => (
      <ItemMovement
        id={item.id}
        image={item.image}
        createdAt={item.createdAt}
        is_redemption={item.is_redemption}
        points={item.points}
        product={item.product}
        onPress={onPressItemMovement}
      />
    )}
  />
);

export default ListMovements;
