import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Styles from "./Styles";
import {GradientColors} from "../../../constants";

/**
 *
 */
const Button = ({style, text, onPress}) => (
    <TouchableOpacity
        style={style}
        onPress={onPress}
    >
        <LinearGradient
            style={Styles.container}
            colors={GradientColors}
            start={{x: 0.05, y: 1.00}}
            end={{x: 0.65, y: 1.00}}
        >
            <Text style={Styles.content}>{text}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

export {Button};