import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import spacings from './styles';

const Spacing = ({ variant, horizontal }) => {
  return !horizontal ? (
    <View style={{ height: variant, width: '100%' }} />
  ) : (
    <View style={{ height: '100%', width: variant }} />
  );
};

Spacing.propTypes = {
  variant: PropTypes.any,
  horizontal: PropTypes.bool,
};

Spacing.defaultProps = {
  variant: spacings.base,
  horizontal: false,
};

export default Spacing;
export { default as variants } from './styles';
