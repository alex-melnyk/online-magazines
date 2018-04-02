import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Styles from "./Styles";
import {GradientColors} from "../../../constants/colors";

/**
 *
 */
const UserIcon = ({image, isAuthor}) => {
    return (
        <View style={Styles.container}>
            <LinearGradient
                style={Styles.imageBack}
                colors={GradientColors}
                start={{x: 0.05, y: 1.00}}
                end={{x: 0.65, y: 1.00}}
            >
                <Image
                    style={Styles.image}
                    source={image}
                />
            </LinearGradient>
            {
                isAuthor &&
                <LinearGradient
                    style={Styles.authorLabel}
                    colors={GradientColors}
                    start={{x: 0.05, y: 1.00}}
                    end={{x: 0.65, y: 1.00}}
                >
                    <Text style={Styles.authorLabelText}>Author</Text>
                </LinearGradient>
            }
        </View>
    );
};

UserIcon.propTypes = {
    image: PropTypes.any.isRequired,
    isAuthor: PropTypes.bool,
};

export {UserIcon};