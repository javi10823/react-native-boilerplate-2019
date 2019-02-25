/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import colors from '../theme/Colors';
import { responsiveSize } from '../utils/dimensions';
import Spacing from '../components/common/spacing/Spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.opacityBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginHorizontal: responsiveSize(15),
  },
  subTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: responsiveSize(15),
  },
});

class Welcome extends React.Component {
  static options() {
    return {
      topBar: { visible: false },
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>React Native BoilerPlate Marzo 2019 0.56</Text>
        <Spacing size="base" />
        <Text style={styles.subTitle}>www.nextdots.com</Text>
      </SafeAreaView>
    );
  }
}

export default Welcome;
