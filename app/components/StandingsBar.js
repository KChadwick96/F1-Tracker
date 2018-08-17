import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Text from './Text';

const StandingsBar = ({ width, backgroundColor, color, points, name }) => {
    const containerStyles = [styles.container, {backgroundColor, width }];
    const nameTextStyles = [styles.text, { color }];
    const pointsTextStyles = [styles.text, styles.pointsText, { color }];

    const transformedName = name.toUpperCase();

    return (
        <View style={containerStyles}>
            <Text.Bold style={nameTextStyles}>{transformedName}</Text.Bold>
            <Text.Bold style={pointsTextStyles}>{points}</Text.Bold>
        </View>
    );
}

StandingsBar.propTypes = {
    width: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        height: 23,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        paddingHorizontal: 5,
        flexDirection: 'row'
    },
    text: {
        lineHeight: 23
    },
    pointsText: {
        textAlign: 'right',
        flex: 1
    }
});

export default StandingsBar;