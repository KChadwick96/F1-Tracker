import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        <Text style={styles.coutdown}>12D 5H 1M 10S</Text>
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
    padding: '10px'
  },
  title: {

  },
  countdown: {

  }
});