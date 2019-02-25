import React from 'react';
import { Image } from 'react-native';

const defaultImage = require('../../../assets/images/common/placeholder.png');

class PlaceHolderImage extends React.Component {
  state = { loading: true };

  _onLoadEnd = () => this.setState({ loading: false });

  render() {
    const { loading } = this.state;
    const { props } = this;
    return (
      <Image
        {...props}
        source={loading ? defaultImage : props.source}
        onLoadEnd={this._onLoadEnd}
      />
    );
  }
}

export default PlaceHolderImage;
