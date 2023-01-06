import React from 'react';
import SkeletonPlaceholder from '../molecules/SkeletonPlaceholder';

const ListMovementsPlaceholder = () => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item
      width="100%"
      height={250}
      borderRadius={10}
      alignSelf="center"
    />
  </SkeletonPlaceholder>
);

export default ListMovementsPlaceholder;
