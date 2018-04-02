import React, {Component} from 'react';
import {Dimensions, NativeModules, Platform, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import uuid from 'uuid';

import {magazinesData} from '../../data';
import {CarouselItem, Header, ScreenItem} from "../common";
import Styles from "./Styles";

const {StatusBarManager} = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const magazines = magazinesData.map((item) => ({
    ...item,
    id: uuid()
}));

const {
    width: screenWidth,
    height: screenHeight
} = Dimensions.get("window");

const itemWidth = screenWidth * 0.75;
const imageHeight = (screenHeight - STATUSBAR_HEIGHT) * 0.75;

class Magazines extends Component {
    state = {
        previewMode: false,
        previewItem: magazines[0]
    };

    contentItemWillExpand = () => {
        this.setState({
            previewMode: true
        })
    };

    contentItemDidCollapse = () => {
        this.setState({
            previewMode: false
        })
    };

    renderItem = ({item}) => (
        <CarouselItem
            id={item.id}
            data={item}
            width={itemWidth - 20}
            height={imageHeight}
            onPress={({data}) => {
                this.state.previewItem === data &&
                this.contentItemWillExpand();
            }}
            navigation={this.props.navigation}
        />
    );

    render() {
        return (
            <View style={Styles.container}>
                <Header
                    floatMode={true}
                    text={'CONTENTS'}
                    onBack={() => {
                        this.props.navigation.goBack();
                    }}
                />
                <Carousel
                    slideStyle={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    data={magazines}
                    useScrollView={true}
                    sliderWidth={screenWidth}
                    itemWidth={itemWidth}
                    renderItem={this.renderItem}
                    activeSlideAlignment="start"
                    onSnapToItem={(index) => this.setState({
                        previewItem: magazines[index]
                    })}
                />
                {
                    this.state.previewMode &&
                    this.state.previewItem &&
                    <ScreenItem
                        data={this.state.previewItem}
                        initialWidth={itemWidth - 20}
                        initialHeight={imageHeight}
                        onCollapsed={this.contentItemDidCollapse}
                        navigation={this.props.navigation}
                    />
                }
            </View>
        );
    }
}

export default Magazines;