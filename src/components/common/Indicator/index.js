import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {View} from "react-native";
import Styles from "./Styles";

/**
 *
 */
const Indicator = ({amount, active}) => (
    <View style={Styles.container}>
        {
            [...new Array(amount)].map((val, idx) => (
                <View
                    style={active && active === idx
                        ? Styles.circleActive
                        : Styles.circle
                    }
                />
            ))
        }
    </View>
);

Indicator.propTypes = {
    amount: PropTypes.number.isRequired,
    active: PropTypes.number
};

export {Indicator};