import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../theme/Colors';
import variants from './styles';

const Typography = ({ color, variant, children, textAlign, style, ...props }) => (
  <Text
    style={[
      {
        color: colors[color],
        ...variant,
        textAlign,
      },
      style,
    ]}
    {...props}
  >
    {children}
  </Text>
);

Typography.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.any,
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Typography.defaultProps = {
  variant: variants.midBody,
  color: 'white',
  textAlign: 'center',
  style: {},
};

export default Typography;
export { default as variants } from './styles';
