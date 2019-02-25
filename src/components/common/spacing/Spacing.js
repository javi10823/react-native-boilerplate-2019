import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import spacings from './styles';

const Spacing = ({ size, horizontal }) => {
  const spacingSize = spacings[size];
  const spacing = spacingSize;
  return !horizontal ? (
    <View style={{ height: spacing, width: '100%' }} />
  ) : (
    <View style={{ height: '100%', width: spacing }} />
  );
};

Spacing.propTypes = {
  size: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
};

Spacing.defaultProps = {
  horizontal: false,
};

export default Spacing;
