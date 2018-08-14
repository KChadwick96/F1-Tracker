import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({children, title, actionText, onActionPress}) => {
    const transformedTitle = title.toUpperCase();

    return (
        <View style={styles.container} elevation={1}>
            <Text style={styles.title}>{transformedTitle}</Text>
            {children}
        </View>
    )
}

Card.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    actionText: PropTypes.string,
    onActionPress: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        shadowColor: '#7a7a7a',
        shadowRadius: 3,
        shadowOpacity: 0.5
    },
    title: {
        color: 'black',
        marginBottom: 15,
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 15
    }
});

export default Card;