import React from "react";
import {Animated, TouchableOpacity, View} from "react-native";
import PropTypes from "prop-types";

import Portrait1 from '../../../../assets/images/people/portrait_01.jpg';
import Portrait2 from '../../../../assets/images/people/portrait_02.jpg';
import Portrait3 from '../../../../assets/images/people/portrait_03.jpg';

import {IconButton} from "../IconButton";
import {CommentsCounter} from "../CommentsCounter";
import Styles from "./Styles";

/**
 *
 */
const ItemActions = ({enabled, liked, likesValue, likesAmount, commentsAmount, onLikePress, onSharePress, onShareLongPress, onBookmarkPress, onCommentsPress, onCountLikesPress}) => {
    const inter = likesValue || new Animated.Value(likesValue || 0);

    const height = inter.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 18]
    });

    return (
        <View style={Styles.container}>
            <View style={Styles.leftBarWrapper}>
                <View style={Styles.leftBar}>
                    <IconButton
                        style={{marginRight: 5}}
                        iconName={liked ? 'heart' : 'heart-o'}
                        iconColor="#D24C5A"
                        enabled={!!onLikePress}
                        onPress={onLikePress}
                    />
                    <IconButton
                        style={{marginRight: 5}}
                        iconName="share-alt"
                        iconColor="#000000"
                        enabled={!!onSharePress}
                        onPress={onSharePress}
                        onLongPress={onShareLongPress}
                    />
                    <IconButton
                        iconName="bookmark"
                        iconColor="#000000"
                        enabled={enabled}
                        onPress={onBookmarkPress}
                    />
                </View>
                <Animated.View style={[Styles.leftBar, {
                    height: height,
                    opacity: inter
                }]}>
                    <TouchableOpacity
                        style={Styles.likesLink}
                        onPress={onCountLikesPress}
                    >
                        <Animated.Text style={Styles.leftBarText}>{likesAmount} Likes</Animated.Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
            <View style={Styles.rightBar}>
                <CommentsCounter
                    images={[
                        Portrait1,
                        Portrait2,
                        Portrait3
                    ]}
                    amount={commentsAmount}
                    enabled={enabled}
                    onPress={onCommentsPress}
                />
            </View>
        </View>
    );
};

ItemActions.propTypes = {
    enabled: PropTypes.bool,
    liked: PropTypes.bool,
    likesAmount: PropTypes.number.isRequired,
    commentsAmount: PropTypes.number.isRequired,
    likesValue: PropTypes.any,
    onLikePress: PropTypes.func,
    onSharePress: PropTypes.func,
    onShareLongPress: PropTypes.func,
    onBookmarkPress: PropTypes.func,
    onCommentsPress: PropTypes.func,
    onCountLikesPress: PropTypes.func
};

export {ItemActions};