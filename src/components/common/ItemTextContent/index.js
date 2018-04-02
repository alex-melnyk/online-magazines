import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from "react-native";

import Styles from "./Styles";

/**
 *
 */
const ItemTextContent = ({name, text, instName, onPress}) => (
    <View style={Styles.container}>
        <View style={Styles.textBlock}>
            <Text style={Styles.name}>
                {name}
            </Text>
            <Text style={Styles.instName}>
                {instName}
            </Text>
            <Text style={Styles.text}>
                {text}
            </Text>
        </View>
    </View>
);

ItemTextContent.propTypes = {
    message: PropTypes.shape({
        authorName: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        instName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }),
    onPress: PropTypes.func
};

export {ItemTextContent};