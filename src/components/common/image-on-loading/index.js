/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Animated } from 'react-native';
import { iPhoneSE } from '../../../utils/dimensions';

class DefaultProfileImageOnLoading extends React.Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    const { opacity } = this.state;
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { opacity } = this.state;
    const { props } = this;
    const scaleRange = iPhoneSE() ? [0.8, 0.85] : [0.85, 1];

    return (
      <Animated.Image
        {...props}
        onLoad={this.onLoad}
        style={[
          {
            opacity,
            transform: [
              {
                scale: opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: scaleRange,
                }),
              },
            ],
          },
          props.style,
        ]}
      />
    );
  }
}

export default DefaultProfileImageOnLoading;
