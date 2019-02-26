import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import fonts from '../../../theme/fonts';
import Image from '../image-on-loading';
import colors from '../../../theme/Colors';

class Button extends React.Component {
  state = {
    loading: false,
  };

  onPressDefaultAction = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const {
      text,
      textColor,
      buttonColor,
      onPress: onPressProps,
      style,
      iconStyle,
      textContainerStyle,
      icon,
      iconRight,
      disabled,
      disabledMoreVisible,
      frozen,
      loading: propsLoading,
    } = this.props;
    const { loading: stateLoading } = this.state;
    const loading = propsLoading === null ? stateLoading : propsLoading;
    const onPress = onPressProps || this.onPressDefaultAction;

    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: buttonColor,
            opacity: !(disabled || frozen || loading) ? 1 : disabledMoreVisible ? 0.6 : 0.3,
          },
          style,
        ]}
        onPress={onPress}
        disabled={disabled || frozen || loading}
      >
        <View style={[styles.buttonContent, { display: loading ? 'none' : 'flex' }]}>
          {icon ? (
            <View style={[styles.icon, iconStyle]}>
              <Image source={icon} />
            </View>
          ) : null}
          <View style={[styles.textContainer, textContainerStyle]}>
            <Text style={[styles.label, { color: textColor, fontFamily: fonts.regular }]}>
              {text}
            </Text>
          </View>
          {iconRight ? (
            <View style={[styles.iconRight, iconStyle]}>
              <Image source={iconRight} />
            </View>
          ) : null}
        </View>
        <View style={[styles.spinnerContainer, { display: loading ? 'flex' : 'none' }]}>
          <ActivityIndicator color={textColor} />
        </View>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  textColor: PropTypes.string,
  buttonColor: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  iconStyle: PropTypes.any,
  textContainerStyle: PropTypes.any,
  icon: PropTypes.number,
  iconRight: PropTypes.number,
  disabled: PropTypes.bool,
  disabledMoreVisible: PropTypes.bool,
  loading: PropTypes.bool,
  frozen: PropTypes.bool,
};

Button.defaultProps = {
  onPress: null,
  style: {
    width: '80%',
  },
  textColor: colors.white,
  buttonColor: '#00000020',
  iconStyle: {},
  textContainerStyle: {},
  text: 'Button Text',
  icon: 0,
  iconRight: 0,
  disabled: false,
  disabledMoreVisible: false,
  loading: null,
  frozen: false,
};

export default Button;
