import React, {Component} from 'react';
import {Text, View} from "react-native";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';

import Styles from "./Styles";

/**
 *
 */
const LocationBar = ({title, from, till, place}) => (
    <View style={Styles.container}>
        <View style={Styles.content}>
            <Text
                style={Styles.title}
                numberOfLines={2}
            >{title}</Text>
            <View style={Styles.location}>
                <Text style={Styles.locationText}>{from}</Text>
                <Icon style={Styles.locationText} name="arrow-right"/>
                <Text style={Styles.locationText}>{till}</Text>

                <Icon style={[Styles.locationText, {
                    marginLeft: 20
                }]} name="map-marker"/>
                <Text style={Styles.locationText}>{place}</Text>
            </View>
        </View>
    </View>
);

LocationBar.propTypes = {
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    till: PropTypes.string.isRequired,
};

export {LocationBar};