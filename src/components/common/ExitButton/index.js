import React, {Component} from 'react';
import {Animated, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from 'react-native-linear-gradient';

import {GradientColors} from "../../../constants";
import Styles from "./Styles";

/**
 *
 */
const ExitButton = ({style, onPress}) => (
    <Animated.View style={[Styles.container, style]}
    >
        <LinearGradient
            style={Styles.background}
            colors={GradientColors}
            start={{x: 0, y: 1}}
            end={{x: 0, y: .5}}
        />
        <TouchableOpacity
            onPress={onPress}
        >
            <Icon
                style={Styles.icon}
                name="sign-in"
            />
        </TouchableOpacity>
    </Animated.View>
);

ExitButton.propTypes = {
    onPress: PropTypes.func.isRequired
};

export {ExitButton};