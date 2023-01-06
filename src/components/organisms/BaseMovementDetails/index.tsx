import React from 'react';
import {Image, View} from 'react-native';
import BaseScreen from '../../atoms/BaseScreen';
import BaseText from '../../atoms/BaseText';
import BaseStatusBar from '../../atoms/BaseStatusBar';
import BaseBasicButton from '../../atoms/BaseBasicButton';
import BaseCardShadow from '../../atoms/BaseCardShadow';
import formatUtcToLocale from '../../../shared/formatUtcToLocale';
import {Movement} from '../../../types/base';
import {baseColors} from '../../../styles/colors';
import styles from './styles';

type Props = {
  onGoBack: () => void;
} & Pick<Movement, 'product' | 'points' | 'image' | 'createdAt'>;

const BaseMovementDetails: React.FC<Props> = ({
  product,
  points,
  image,
  createdAt,
  onGoBack,
}) => (
  <BaseScreen>
    <BaseStatusBar
      backgroundColor={baseColors.secondary}
      barStyle="dark-content"
    />
    <View style={styles.header}>
      <BaseText size="h2" bold>
        {product}
      </BaseText>
    </View>
    <View style={styles.content}>
      <View>
        <BaseCardShadow style={styles.imageFrame}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        </BaseCardShadow>
        <BaseText style={styles.label} size="h5" bold color="secondary">
          Detalles del producto:
        </BaseText>
        <BaseText size="h4" bold>
          Comprado el{' '}
          {formatUtcToLocale(createdAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </BaseText>
        <BaseText style={styles.label} size="h5" bold color="secondary">
          Con esta compra acumulaste:
        </BaseText>
        <BaseText size="h2" bold>
          {points} puntos
        </BaseText>
      </View>
      <BaseBasicButton style={styles.button} onPress={onGoBack}>
        <BaseText color="accent" size="h6" bold>
          Aceptar
        </BaseText>
      </BaseBasicButton>
    </View>
  </BaseScreen>
);

export default BaseMovementDetails;
