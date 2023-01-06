import React from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  LayoutRectangle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import getTransparentColor from '../../shared/getTransparentColor';

const WINDOW_WIDTH = Dimensions.get('window').width;

type SkeletonPlaceholderProps = {
  children: React.ReactElement[] | React.ReactElement;
  backgroundColor?: string;
  highlightColor?: string;
  speed?: number;
  direction?: 'left' | 'right';
  borderRadius?: number;
  angle?: number;
  shimmerWidth?: number;
};

type SkeletonPlaceholderItemProps = ViewStyle & {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const SkeletonPlaceholder: React.FC<SkeletonPlaceholderProps> & {
  Item: React.FC<SkeletonPlaceholderItemProps>;
} = ({
  children,
  backgroundColor = '#E1E9EE',
  highlightColor = '#F2F8FC',
  speed = 800,
  direction = 'right',
  borderRadius,
  shimmerWidth,
}) => {
  const [layout, setLayout] = React.useState<LayoutRectangle>();
  const animatedValueRef = React.useRef(new Animated.Value(0));
  const isAnimationReady = Boolean(speed && layout?.width && layout?.height);

  React.useEffect(() => {
    if (!isAnimationReady) {
      return;
    }

    const loop = Animated.loop(
      Animated.timing(animatedValueRef.current, {
        toValue: 1,
        duration: speed,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [isAnimationReady, speed]);

  const animatedGradientStyle = React.useMemo(() => {
    const animationWidth = WINDOW_WIDTH + (shimmerWidth ?? 0);
    return {
      ...StyleSheet.absoluteFillObject,
      flexDirection: 'row' as const,
      transform: [
        {
          translateX: animatedValueRef.current.interpolate({
            inputRange: [0, 1],
            outputRange:
              direction === 'right'
                ? [-animationWidth, animationWidth]
                : [animationWidth, -animationWidth],
          }),
        },
      ],
    };
  }, [direction, shimmerWidth]);

  const placeholders = React.useMemo(() => {
    return (
      <View style={styles.placeholderContainer}>
        {transformToPlaceholder(children, backgroundColor, borderRadius)}
      </View>
    );
  }, [backgroundColor, children, borderRadius]);

  const transparentColor = React.useMemo(
    () => getTransparentColor(highlightColor.replace(/ /g, '')),
    [highlightColor],
  );

  if (!layout?.width || !layout.height) {
    return (
      <View onLayout={event => setLayout(event.nativeEvent.layout)}>
        {placeholders}
      </View>
    );
  }

  return (
    <MaskedView
      style={{height: layout.height, width: layout.width}}
      maskElement={placeholders}>
      <View style={[StyleSheet.absoluteFill, {backgroundColor}]} />

      {isAnimationReady &&
        highlightColor !== undefined &&
        transparentColor !== undefined && (
          <Animated.View style={animatedGradientStyle}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{...StyleSheet.absoluteFillObject, width: shimmerWidth}}
              colors={[transparentColor, highlightColor, transparentColor]}
            />
          </Animated.View>
        )}
    </MaskedView>
  );
};

SkeletonPlaceholder.Item = props => (
  <View style={getItemStyle(props)}>{props.children}</View>
);
SkeletonPlaceholder.Item.displayName = 'SkeletonPlaceholderItem';

const getItemStyle = ({
  children: _,
  style,
  ...styleFromProps
}: React.PropsWithChildren<SkeletonPlaceholderItemProps>) => {
  return style ? [style, styleFromProps] : styleFromProps;
};

//@ts-ignore
const transformToPlaceholder = (
  rootElement: JSX.Element | JSX.Element[] | null,
  backgroundColor: string | undefined,
  radius: number | undefined,
) => {
  if (!rootElement) {
    return null;
  }

  return React.Children.map(
    rootElement,
    (element: JSX.Element | null, index: number) => {
      if (!element) {
        return null;
      }

      if (element.type === React.Fragment) {
        return (
          <>
            {transformToPlaceholder(
              element.props?.children,
              backgroundColor,
              radius,
            )}
          </>
        );
      }

      const isPlaceholder =
        !element.props?.children ||
        typeof element.props.children === 'string' ||
        (Array.isArray(element.props.children) &&
          element.props.children.every(
            (x: any) => x == null || typeof x === 'string',
          ));
      const props = element.props;
      const style =
        element.type?.displayName === SkeletonPlaceholder.Item.displayName
          ? getItemStyle(element.props)
          : element.props.style;

      const borderRadius = props?.borderRadius ?? style?.borderRadius ?? radius;
      const width = props?.width ?? style?.width;
      const height =
        props?.height ??
        style?.height ??
        props?.lineHeight ??
        style?.lineHeight ??
        props?.fontSize ??
        style?.fontSize;

      const finalStyle = [
        style,
        isPlaceholder
          ? [styles.placeholder, {backgroundColor}]
          : styles.placeholderContainer,
        {
          height,
          width,
          borderRadius,
        },
      ];

      return (
        <View
          key={index}
          style={finalStyle}
          children={
            isPlaceholder
              ? undefined
              : transformToPlaceholder(
                  element.props.children,
                  backgroundColor,
                  borderRadius,
                )
          }
        />
      );
    },
  );
};

const styles = StyleSheet.create({
  placeholderContainer: {
    backgroundColor: 'transparent',
  },
  placeholder: {
    overflow: 'hidden',
  },
});

export default SkeletonPlaceholder;
