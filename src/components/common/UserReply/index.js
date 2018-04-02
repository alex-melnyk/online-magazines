import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from "react-native";

import Styles from "./Styles";
import {IconButton} from "../IconButton";
import Icon from "react-native-vector-icons/FontAwesome";

/**
 *
 */
const UserReply = ({message, onPress}) => (
    <View style={Styles.container}>
        <View style={Styles.messageBlock}>
            <Text style={Styles.messageHeader}>
                {message.authorName}
            </Text>
            <Text style={Styles.messageText}>
                {message.text}
            </Text>
            <View style={Styles.messageFooter}>
                <Text style={Styles.messageDate}>
                    {message.date}
                </Text>
                <Icon
                    style={Styles.messageFooterSeparator}
                    name="circle"
                />
                <TouchableOpacity onPress={() => {
                    onPress && onPress(message);
                }}>
                    <Text style={Styles.messageReply}>
                        Reply
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={Styles.likeBlock}>
            <IconButton
                style={{marginRight: 10}}
                iconName="heart-o"
                iconColor="#D24C5A"
                enabled={true}
                onPress={() => {
                }}
            />
        </View>
    </View>
);

UserReply.propTypes = {
    message: PropTypes.shape({
        authorName: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }),
    onPress: PropTypes.func
};

export {UserReply};