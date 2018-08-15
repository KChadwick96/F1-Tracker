import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Text from './Text';

const Card = ({children, name, title, description, actionText, onActionPress}) => {
    const renderActionButton = () => {
        if (!actionText) {
            return null;
        }

        let transformedActionText = actionText.toUpperCase();
        return (
            <TouchableOpacity style={styles.button} onPress={onActionPress}>
                <Text.Bold style={styles.buttonText}>{transformedActionText}</Text.Bold>
            </TouchableOpacity>
        );
    }

    const transformedName = name.toUpperCase();

    return (
        <View style={styles.container} elevation={1}>
            <Text.Medium style={styles.name}>{transformedName}</Text.Medium>
            <Text.Medium style={styles.title}>{title}</Text.Medium>
            <Text.Regular style={styles.description}>{description}</Text.Regular>>
            {children}
            {renderActionButton()}
        </View>
    )
}

Card.propTypes = {
    children: PropTypes.any,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    actionText: PropTypes.string,
    onActionPress: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        shadowColor: '#7a7a7a',
        shadowRadius: 3,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    name: {
        color: 'black',
        marginBottom: 12,
        color: 'grey',
        fontSize: 15
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 3
    },
    description: {
        fontSize: 17
    },
    button: {
        marginTop: 15
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "600",
        color: 'red',
        textAlign: 'center'
    }
});

export default Card;