import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from "react-native";


import Styles from "./Styles";
import {UserIcon} from "../UserIcon/index";
import {UserReply} from "../UserReply/index";

/**
 *
 */
const CommentsListItem = ({isAuthor, image, message}) => (
    <View style={Styles.container}>
        <View style={Styles.iconBlock}>
            <UserIcon
                isAuthor={isAuthor}
                image={image}
            />
        </View>
        <View style={Styles.replyBlock}>
            <UserReply
                message={message}
                onPress={() => {}}
            />
        </View>
    </View>
);

CommentsListItem.propTypes = {
    isAuthor: PropTypes.bool,
    image: PropTypes.number.isRequired,
    message: PropTypes.shape({
        authorName: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })
};

export {CommentsListItem};