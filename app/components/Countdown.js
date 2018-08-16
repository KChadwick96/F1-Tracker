import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

class Countdown extends React.Component {

  componentDidMount() {
    setInterval(() => {

    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.countdown}>12D 5H 1M 10S</Text>
      </View>
    );
  }
}

Countdown.propTypes = {
  title: PropTypes.string.isRequired,
  countdownTo: PropTypes.object.isRequired
};

export default Countdown;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: Platform.OS === 'ios' ? 25 : 0
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  countdown: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }
});