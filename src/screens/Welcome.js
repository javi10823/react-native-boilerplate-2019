/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import colors from '../theme/Colors';
import { Typography, Button, Spacing, TypographyVariants, SpacingVariants } from '../components';
import { responsiveSize } from '../utils/dimensions';
import { goToPage } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.principal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(80),
  },
});

class Welcome extends React.Component {
  static options() {
    return {
      topBar: { visible: false },
    };
  }

  render() {
    const { componentId } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Typography variant={TypographyVariants.bodyTitle}>
            React Native BoilerPlate Marzo 2019 0.56
          </Typography>
          <Spacing variant={SpacingVariants.smallPlus} />
          <Typography>nextdots.com</Typography>
        </View>
        <Button text="Show components" onPress={() => goToPage(componentId, 'componentsExample')} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.example.isFetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // actionConnect: action,
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Welcome)
);
