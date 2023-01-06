import React from 'react';
import SkeletonPlaceholder from '../molecules/SkeletonPlaceholder';

const CardPointsPlaceholder = () => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item
      width={286}
      height={146}
      borderRadius={10}
      alignSelf="center"
    />
  </SkeletonPlaceholder>
);

export default CardPointsPlaceholder;
