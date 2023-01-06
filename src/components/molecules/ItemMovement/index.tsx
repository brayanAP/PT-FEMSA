import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import BaseText from '../../atoms/BaseText';
import {Movement} from '../../../types/base';
import formatUtcToLocale from '../../../shared/formatUtcToLocale';
import styles from './style';

export type ItemMovementType = Pick<
  Movement,
  'createdAt' | 'image' | 'is_redemption' | 'points' | 'product' | 'id'
>;

type Props = ItemMovementType & {
  onPress?: (movement: ItemMovementType) => Promise<void> | void;
};

const ItemMovement: React.FC<Props> = ({
  id,
  image,
  createdAt,
  is_redemption,
  points,
  product,
  onPress,
}) => (
  <TouchableOpacity
    style={styles.frame}
    onPress={() =>
      onPress?.({id, image, createdAt, is_redemption, points, product})
    }>
    <View style={styles.leftFrame}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View>
        <BaseText style={styles.product} size="h5" bold>
          {product}
        </BaseText>
        <BaseText style={styles.createdAt} size="h6" light>
          {formatUtcToLocale(createdAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </BaseText>
      </View>
    </View>
    <BaseText style={styles.points} size="h5" bold>
      <BaseText
        style={is_redemption ? styles.redemptionTrue : styles.redemptionFalse}
        size="h5">
        {is_redemption ? '+' : '-'}
      </BaseText>
      {points}
      <BaseText size="h5">{'  >  '}</BaseText>
    </BaseText>
  </TouchableOpacity>
);

export default ItemMovement;
