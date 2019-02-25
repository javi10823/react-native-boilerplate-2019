import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import colors from '../../../theme/Colors';
import Typography from '../typography/Typography';

const Button = ({
  text,
  textVariant,
  textColor,
  buttonColor,
  onPress,
  style,
  icon,
  iconOnly,
  disabled,
}) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: colors[buttonColor] }, style]}
    onPress={onPress}
    disabled={disabled}
  >
    {icon ? (
      <View style={iconOnly ? styles.iconOnly : styles.icon}>
        <Image source={icon} />
      </View>
    ) : null}
    <Typography color={textColor} variant={textVariant}>
      {text}
    </Typography>
  </TouchableOpacity>
);

Button.propTypes = {
  textColor: PropTypes.string,
  buttonColor: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
  textVariant: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  icon: PropTypes.number,
  disabled: PropTypes.bool,
  iconOnly: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  style: {},
  icon: 0,
  buttonColor: 'mango',
  textVariant: 'loginLink',
  textColor: 'white',
  disabled: false,
  text: '',
  iconOnly: false,
};

export default Button;
