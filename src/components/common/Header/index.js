import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Styles from "./Styles";

const Header = ({text, onBack}) => (
    <View style={Styles.container}>
        <TouchableOpacity
            style={Styles.buttonWrapper}
            onPress={onBack}
        >
            <Icon
                style={Styles.button}
                name="angle-left"
            />
        </TouchableOpacity>
        <Text style={Styles.content}>{text}</Text>
    </View>
);

Header.propTypes = {
    floatMode: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
};

export {Header};