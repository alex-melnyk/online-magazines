import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import {UserIcon} from "../UserIcon/index";
import Styles from './Styles';
import {ItemTextContent} from "../ItemTextContent";
import {SmallButton} from "../SmallButton";

const ScreenListItem = ({item}) => (
    <View style={Styles.container}>
        <View
            style={Styles.iconBlock}>
            <UserIcon
                isAuthor={false}
                image={item.image}
            />
        </View>
        <ItemTextContent
            name={item.name}
            instName={item.instName}
            text={item.text}
            onPress={() => {
            }}
        />
        <View style={Styles.followBlock}>
            <SmallButton
                text="Follow"
                onPress={() => {
                }}
            />
        </View>
    </View>
);

ScreenListItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
        instName: PropTypes.string.isRequired
    })
};

export {ScreenListItem};