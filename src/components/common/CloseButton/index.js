import React, {Component} from 'react';
import {Text, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";

import Styles from "./Styles";

/**
 *
 */
const CloseButton = ({onPress}) => (
    <TouchableOpacity
        style={Styles.container}
        onPress={onPress}
    >
        <Text style={Styles.content}>X</Text>
    </TouchableOpacity>
);

CloseButton.propTypes = {
    onPress: PropTypes.func.isRequired
};

export {CloseButton};