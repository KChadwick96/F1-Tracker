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

    const renderTitle = () => {
        if (!title) {
            return null;
        }

        return <Text.Medium style={styles.title}>{title}</Text.Medium>;
    }

    const renderDescription = () => {
        if (!description) {
            return null;
        }

        return <Text.Regular style={styles.description}>{description}</Text.Regular>;
    }

    const transformedName = name.toUpperCase();

    return (
        <View style={styles.container} elevation={1}>
            <Text.Medium style={styles.name}>{transformedName}</Text.Medium>
            {renderTitle()}
            {renderDescription()}
            {children}
            {renderActionButton()}
        </View>
    );
}

Card.propTypes = {
    children: PropTypes.any,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    actionText: PropTypes.string,
    onActionPress: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
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
        marginLeft: 12,
        color: 'grey',
        fontSize: 13
    },
    title: {
        fontSize: 23,
        fontWeight: '700',
        marginBottom: 3,
        marginLeft: 12
    },
    description: {
        fontSize: 15,
        marginLeft: 12
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