import React from "react";
import {Animated, Image, Text, View} from "react-native";
import {Colors} from "../../../constants";
import PropTypes from "prop-types";
import Styles from "./Styles";
import {Pagination} from 'react-native-snap-carousel';

/**
 *
 */
const ImageHeader = ({width, height, image, topText, bottomText, count}) => (
    <Animated.View contentContainerStyle={[Styles.container, {
        width,
        height
    }]}>
        <View style={Styles.paginationContainer}>
            <Animated.Image
                style={[Styles.image, {
                    width,
                    height
                }]}
                source={image}
                resizeMode={Image.resizeMode.cover}
            />
            {
                count &&
                <Pagination
                    activeDotIndex={-1}
                    dotsLength={count}
                    containerStyle={Styles.pagination}
                    dotColor={Colors.COLOR_WHITE}
                    inactiveDotColor={Colors.COLOR_DOT}
                    inactiveDotOpacity={1}
                    inactiveDotScale={1}
                />
            }
        </View>
        {
            topText &&
            <View style={Styles.topTextWrapper}>
                <Text
                    style={Styles.topText}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                >{topText}</Text>
            </View>
        }
        {
            bottomText &&
            <View style={Styles.bottomTextWrapper}>
                <Text
                    style={Styles.bottomText}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                >{bottomText}</Text>
            </View>
        }
    </Animated.View>
);

ImageHeader.propTypes = {
    height: PropTypes.any,
    width: PropTypes.any,
    image: Image.propTypes.source.isRequired,
    topText: PropTypes.string,
    bottomText: PropTypes.string
};

export {ImageHeader};