import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import uuid from "uuid";
import Styles from "./Styles";

/**
 *
 */
const CommentsCounter = ({amount, images, enabled, onPress}) => (
    <TouchableOpacity
        activeOpacity={enabled ? .5 : 1}
        onPress={() => enabled && onPress && onPress()}
    >
        <View style={Styles.container}>
            <View style={Styles.images}>
                {
                    images.map((image, index) => (
                        <Image
                            key={uuid()}
                            style={[Styles.image, {
                                left: index
                                    ? (-5 * index)
                                    : 0,
                            }]}
                            source={image}
                        />
                    ))
                }
            </View>
            <Text style={Styles.text}>{amount} Comments</Text>
        </View>
    </TouchableOpacity>
);

CommentsCounter.propTypes = {
    images: PropTypes.array.isRequired,
    amount: PropTypes.number.isRequired,
    enabled: PropTypes.bool,
    onPress: PropTypes.func
};

export {CommentsCounter};