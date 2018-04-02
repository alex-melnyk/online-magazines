import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';

import {ImageHeader, ItemActions, LocationBar, SmallButton} from "../index";
import Styles from "./Styles";
import {COMMENTS_AMOUNT, LIKES_AMOUNT} from "../../../constants";

const CarouselItem = ({data, width, height, onPress, navigation}) => (
    <View style={Styles.containerWrapper}>
        <View style={[Styles.container, {
            width,
            height
        }]}>
            <TouchableOpacity
                style={Styles.contentWrapper}
                activeOpacity={1}
                onPress={() => {
                }}
            >
                <ImageHeader
                    width={width}
                    height={height - 140}
                    image={data.gallery.items[0].source}
                    topText={data.topText}
                    bottomText={data.bottomText}
                    count={data.gallery.items.length}
                />
                <ItemActions
                    enabled={false}
                    likesAmount={LIKES_AMOUNT}
                    commentsAmount={COMMENTS_AMOUNT}
                />
                {
                    data.location &&
                    <LocationBar {...data.location} />
                }
                <View style={{
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <SmallButton
                        text="Read more"
                        onPress={() => onPress({data})}
                    />
                </View>
            </TouchableOpacity>
        </View>
        <View style={Styles.bottomLabel}>
            <Text style={Styles.bottomLabelText}>{data.title}</Text>
        </View>
    </View>
);

CarouselItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.any.isRequired,
        image: PropTypes.number,
        topText: PropTypes.string,
        bottomText: PropTypes.string,
        location: PropTypes.shape({
            title: PropTypes.string.isRequired,
            place: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            till: PropTypes.string.isRequired
        })
    }).isRequired,
    width: PropTypes.any,
    height: PropTypes.any,
    onPress: PropTypes.func.isRequired
};

export {CarouselItem};