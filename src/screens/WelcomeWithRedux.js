/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import colors from '../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.opacityBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class WelcomeWithRedux extends React.Component {
  static options() {
    return {
      topBar: { visible: false },
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Welcome Redux - React Native BoilerPlate 2019 0.56</Text>
      </SafeAreaView>
    );
  }
}

/* const mapStateToProps = state => ({
  prop1: state.reducer.prop,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      actionConnect: action,
    },
    dispatch
  ); */

export default compose(
  connect(
    null,
    null
  )(WelcomeWithRedux)
);
