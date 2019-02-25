import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../theme/Colors';
import variants from './styles';

const Typography = ({ color, variant, children, numberOfLines, textAlign, style }) => (
  <Text
    style={[
      {
        color: colors[color],
        ...variants[variant],
        textAlign,
      },
      style,
    ]}
    numberOfLines={numberOfLines}
  >
    {children}
  </Text>
);

Typography.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  numberOfLines: PropTypes.number,
  textAlign: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Typography.defaultProps = {
  variant: 'midBody',
  color: 'white',
  numberOfLines: null,
  textAlign: 'center',
  style: {},
};

export default Typography;
