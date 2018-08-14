import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const TopBackground = ({height}) => {
    const containerStyles = [styles.container, {height}];

    return (
        <View style={containerStyles} />
    )
}

TopBackground.propTypes = {
    height: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 200
    }
});

export default TopBackground;