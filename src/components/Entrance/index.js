import React, {Component} from 'react';
import {Image, Text, View} from "react-native";

import CoverImage from '../../../assets/images/cover.jpg';
import {Button, CloseButton, SmallButton} from "../common";
import Styles from "./Styles";

class Entrance extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <View style={Styles.headerLeft}>
                        <CloseButton
                            onPress={() => console.log('Press on "Buy Cover"')}
                        />
                    </View>
                    <View style={Styles.headerRight}>
                        <Button
                            text="Buy Cover"
                            onPress={() => console.log('Press on "Buy Cover"')}
                        />
                    </View>
                </View>
                <View style={Styles.content}>
                    <View style={Styles.contentWrapper}>
                        <Image
                            source={CoverImage}
                            resizeMode={Image.resizeMode.cover}
                            style={Styles.contentImage}

                        />
                        <View style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            paddingHorizontal: 10,
                            paddingVertical: 20,
                        }}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: '500',
                                color: '#FFFFFF'

                            }}>
                                {`THREE COUNTRIES,\nONE TRIP.\nMY REPORT`}
                            </Text>
                            <Text style={{
                                marginTop: 10,
                                fontSize: 20,
                                color: '#FFFFFF'
                            }}>
                                {`Travel with me where we haven't\ngone before`}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.footer}>
                    <SmallButton
                        text="Next"
                        onPress={() => {
                            this.props.navigation.navigate('Magazines');
                        }}
                    />
                </View>
            </View>
        );
    }
}

Entrance.propTypes = {};

export default Entrance;