import React from 'react';
import { Animated, View, Image } from 'react-native';
import IconImage from '../../../assets/images/common/placeholder.png';
import { responsiveSize } from '../../../utils/dimensions';

const styles = {
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFF4',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 10,
  },
};

class DefaultProfileImageOnLoading extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    loaded: false,
  };

  onLoad = () => {
    const { opacity } = this.state;
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  renderAnimatedImage = (opacity, style) => (
    <Animated.Image
      {...this.props}
      onLoad={this.onLoad}
      onLoadEnd={() => this.setState({ loaded: true })}
      style={[
        {
          opacity,
          transform: [
            {
              scale: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              }),
            },
          ],
        },
        style,
      ]}
    />
  );

  render() {
    const { opacity, loaded } = this.state;
    const { withPlaceholder, style } = this.props; // eslint-disable-line react/prop-types

    if (withPlaceholder) {
      return (
        <View>
          <View style={[styles.placeholder, style, { zIndex: loaded ? -1 : 1 }]}>
            <Image source={IconImage} size={responsiveSize(50)} />
          </View>
          {this.renderAnimatedImage(opacity, style)}
        </View>
      );
    }

    return this.renderAnimatedImage(opacity, style);
  }
}

export default DefaultProfileImageOnLoading;
