import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({title, countdownTo}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>12D 5H 1M 10S</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});