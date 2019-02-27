/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import colors from '../theme/Colors';
import { responsiveSize } from '../utils/dimensions';
import {
  Typography,
  Button,
  Spacing,
  TypographyVariants,
  SpacingVariants,
  Image,
  ImagePlaceholder,
} from '../components';
import { goBack } from '.';

import NextDotsLogo from '../assets/images/common/nextDotsLogo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.principal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentsContainer: {
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(10),
  },
  buttonSignIn: {
    borderColor: colors.white,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderRadius: 5,
    width: '100%',
  },
  buttonSignUp: {
    backgroundColor: colors.white,
    width: '100%',
    borderRadius: 5,
  },
  logoContainer: {
    padding: responsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
  },
  imageContainer: {
    padding: responsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: responsiveSize(220),
    height: responsiveSize(155),
    borderRadius: 13,
  },
});

class Welcome extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  render() {
    const { componentId } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.componentsContainer}>
          <Typography variant={TypographyVariants.bodyTitle}>Typography example</Typography>
          <Spacing variant={SpacingVariants.xLarge} />
          <Button text="SIGN IN" style={styles.buttonSignIn} />
          <Spacing variant={SpacingVariants.smallPlus} />
          <Button
            text="SIGN UP FOR FREE"
            style={styles.buttonSignUp}
            textColor={colors.principal}
          />
          <Spacing variant={SpacingVariants.smallPlus} />
          <View style={styles.logoContainer}>
            <Image source={NextDotsLogo} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.imageContainer}>
            <ImagePlaceholder
              source={{
                uri: 'https://www.dropbox.com/s/0gfn7kvtwkfd9t0/AWS%20Pop-up%20Loft.jpg?dl=1',
              }}
              style={styles.imageStyle}
            />
          </View>
        </View>
        <Button text="Go back" onPress={() => goBack(componentId)} />
      </SafeAreaView>
    );
  }
}

export default Welcome;
