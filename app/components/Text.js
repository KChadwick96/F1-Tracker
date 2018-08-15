import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Regular = ({children, style}) => {
    const combinedStyles = [styles.textRegular, style];

    return <Text style={combinedStyles}>{children}</Text>;
};

const Medium = ({children, style}) => {
    const combinedStyles = [styles.textMedium, style];

    return <Text style={combinedStyles}>{children}</Text>;
};

const Bold = ({children, style}) => {
    const combinedStyles = [styles.textBold, style];

    return <Text style={combinedStyles}>{children}</Text>;
};

export default { Regular, Medium, Bold };

const FONT_PREFIX = 'Raleway';
const styles = StyleSheet.create({
    textRegular: { fontFamily: FONT_PREFIX },
    textMedium: { fontFamily: `${FONT_PREFIX}-Medium` },
    textBold: { fontFamily: `${FONT_PREFIX}-Bold` }
});