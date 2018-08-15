import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({children, name, title, description, actionText, onActionPress}) => {
    const renderActionButton = () => {
        if (!actionText) {
            return null;
        }

        let transformedActionText = actionText.toUpperCase();
        return (
            <TouchableHighlight style={styles.button} onPress={onActionPress}>
                <Text style={styles.buttonText}>{transformedActionText}</Text>
            </TouchableHighlight>
        );
    }

    const transformedName = name.toUpperCase();

    return (
        <View style={styles.container} elevation={1}>
            <Text style={styles.name}>{transformedName}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
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
        borderRadius: 4,
        backgroundColor: 'white',
        shadowColor: '#7a7a7a',
        shadowRadius: 3,
        shadowOpacity: 0.5
    },
    name: {
        color: 'black',
        marginBottom: 15,
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 15
    },
    title: {
        fontSize: 25,
        fontWeight: '700'
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