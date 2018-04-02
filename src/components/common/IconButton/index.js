import React, {Component} from 'react';
import {TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import Styles from "./Styles";

/**
 *
 */
const IconButton = ({style, iconName, iconColor, enabled, onPress, onLongPress}) => (
    <TouchableOpacity
        style={[Styles.container, style]}
        activeOpacity={enabled ? .5 : 1}
        onPress={() => enabled && onPress && onPress()}
        onLongPress={() => enabled && onLongPress && onLongPress()}
    >
        <Icon
            style={[Styles.icon, {
                color: iconColor || '#333333'
            }]}
            name={iconName}
        />
    </TouchableOpacity>
);

IconButton.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    enabled: PropTypes.bool,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func
};

export {IconButton};