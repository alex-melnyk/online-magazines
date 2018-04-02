import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, Dimensions, Image, NativeModules, PanResponder, Platform, Share, ScrollView, Text, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import YouTube from 'react-native-youtube';

import {CommentsModal, ExitButton, ImageHeader, ItemActions, LocationBar, SmallButton} from "../index";
import Styles from "./Styles";
import {COMMENTS_AMOUNT, LIKES_AMOUNT} from "../../../constants";
import uuid from "uuid";
import {Colors} from "../../../constants";
import {GALLERY_TYPE_IMAGE, GALLERY_TYPE_VIDEO} from "../../../data/magazines";
import {API_KEY} from "../../../constants/index";

const {
    width: screenWidth,
    height: screenHeight,
} = Dimensions.get("window");

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const spaceHeight = screenHeight - STATUSBAR_HEIGHT;

class ScreenItem extends Component {
    scrollPosition = 0;
    scrollOffset = 0;
    pullDownOffset = 0.15;
    pullMultiplier = 200;

    state = {
        animation: false,
        scrollable: true,
        showComments: false,
        bound: new Animated.Value(0),
        size: new Animated.Value(0),
        activeSlide: 0
    };

    checkPullDown = ({vy}) => (
        this.scrollOffset <= 0 && vy > this.pullDownOffset
    );

    animateCollapsing = (time = 300) => {
        this.setState({
            animation: true
        });

        Animated.parallel([
            Animated.timing(this.state.bound, {
                toValue: 0,
                duration: time
            }),
            Animated.timing(this.state.size, {
                toValue: 0,
                duration: time
            })
        ]).start(() => {
            this.setState({
                animation: false
            });

            this.props.onCollapsed();
        });
    };

    animateExanding = (time = 500) => {
        this.setState({
            animation: true
        });

        Animated.parallel([
            Animated.timing(this.state.size, {
                toValue: 1,
                duration: time / 250
            }),
            Animated.spring(this.state.bound, {
                toValue: 1,
                duration: time
            })
        ]).start(() => {
            this.setState({
                animation: false
            });
        });
    };

    continueClosing = () => {
        this.scrollOffset = 0;
        this.setState({scrollable: true});

        if (this.state.bound._value >= .75) {
            this.animateExanding(150);
        } else {
            this.animateCollapsing();
        }
    };

    automaticClose = () => {
        if (!this.state.animation) {
            this.scrollView.scrollTo({x: 0, y: 0, animated: true});
            this.animateCollapsing();
        }
    };

    normalizeAnimationValue = (value) => {
        if (value < 0) {
            return 0;
        } else if (value > 1) {
            return 1;
        }

        return value;
    };

    renderCarouselItem = (item, imageHeight) => {
        switch (item.type) {
            case GALLERY_TYPE_IMAGE:
                return (
                    <Animated.Image
                        resizeMode={Image.resizeMode.cover}
                        source={item.source}
                        style={{
                            width: screenWidth,
                            height: imageHeight
                        }}
                    />
                );
            case GALLERY_TYPE_VIDEO:
                return (
                    <YouTube
                        apiKey={API_KEY}
                        videoId={item.source}
                        play={true}
                        hidden={false}
                        playsInline={true}
                        style={{
                            width: screenWidth,
                            height: 300,
                            backgroundColor: Colors.COLOR_BLACK
                        }}
                    />
                );
            default:
                return null;
        }
    };

    componentWillMount() {
        this.scrollPanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => this.checkPullDown(gestureState),
            onStartShouldSetPanResponderCapture: (evt, gestureState) => this.checkPullDown(gestureState),
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => this.checkPullDown(gestureState),
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                this.scrollOffset = this.scrollPosition;
                return this.checkPullDown(gestureState);
            },
            onPanResponderMove: (evt, {dy}) => {
                if (this.scrollPosition <= 0) {
                    if (this.state.scrollable) {
                        this.setState({
                            scrollable: false
                        });
                    }

                    const delta = 1 - (dy - this.scrollOffset) / this.pullMultiplier;

                    this.state.bound.setValue(this.normalizeAnimationValue(delta));
                    this.state.size.setValue(this.normalizeAnimationValue(delta));
                }
            },
            onPanResponderTerminationRequest: this.continueClosing,
            onPanResponderRelease: this.continueClosing
        });
    }

    componentDidMount() {
        this.animateExanding();
    }

    componentDidUpdate() {
        this.carousel && this.carousel.snapToItem(this.state.activeSlide, false);
    }

    render() {
        const {
            data,
            initialWidth,
            initialHeight
        } = this.props;

        const {
            bound,
            size,
            activeSlide
        } = this.state;

        const interMargin = bound.interpolate({
            inputRange: [0, 1],
            outputRange: [10, 0]
        });

        const interWidth = bound.interpolate({
            inputRange: [0, 1],
            outputRange: [initialWidth, screenWidth]
        });

        const interHeight = bound.interpolate({
            inputRange: [0, 1],
            outputRange: [initialHeight, spaceHeight]
        });

        const imageHeight = bound.interpolate({
            inputRange: [0, 1],
            outputRange: [initialHeight - 140, 300]
        });

        const closeOpacity = size.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        const readMoreOpacity = size.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        });

        const readMoreCollapse = size.interpolate({
            inputRange: [0, 1],
            outputRange: [40, 0]
        });

        const corners = size.interpolate({
            inputRange: [0, 1],
            outputRange: [5, 0]
        });

        return (
            <Animated.View
                style={[Styles.containerWrapper, {
                    width: screenWidth,
                    height: spaceHeight,
                    marginLeft: interMargin
                }]}
            >
                <Animated.View style={{
                    width: screenWidth,
                    height: spaceHeight,
                    opacity: closeOpacity,
                    position: 'absolute',
                    backgroundColor: 'white'
                }}/>
                <Animated.View style={[Styles.contentContainer, {
                    width: interWidth,
                    height: interHeight,
                    borderRadius: corners
                }]}>
                    <ScrollView
                        ref={(ref) => this.scrollView = ref}
                        {...this.scrollPanResponder.panHandlers}
                        scrollEventThrottle={5}
                        scrollEnabled={this.state.scrollable && !this.state.animation}
                        onScroll={({nativeEvent: {contentOffset: {y}}}) => this.scrollPosition = y}
                    >
                        {
                            this.state.animation ? (
                                <ImageHeader
                                    width={interWidth}
                                    height={imageHeight}
                                    topText={data.topText}
                                    bottomText={data.bottomText}
                                    image={data.gallery.items[0].source}
                                />
                            ) : (
                                <Carousel
                                    ref={(ref) => this.carousel = ref}
                                    keyExtractor={uuid}
                                    data={data.gallery.items}
                                    itemWidth={screenWidth}
                                    sliderWidth={screenWidth}
                                    useScrollView={false}
                                    onSnapToItem={(index) => this.setState({activeSlide: index})}
                                    renderItem={({item}) => this.renderCarouselItem(item, imageHeight)}
                                />
                            )
                        }
                        <View style={Styles.paginationContainer}>
                            <Pagination
                                activeDotIndex={activeSlide}
                                dotsLength={data.gallery.items.length}
                                containerStyle={Styles.pagination}
                                dotColor={Colors.COLOR_WHITE}
                                inactiveDotColor={Colors.COLOR_DOT}
                                inactiveDotOpacity={1}
                                inactiveDotScale={1}
                            />
                        </View>
                        <ItemActions
                            enabled={true}
                            likesValue={closeOpacity}
                            liked={this.state.liked}
                            likesAmount={LIKES_AMOUNT}
                            commentsAmount={COMMENTS_AMOUNT}
                            onLikePress={() => this.setState(({liked}) => ({liked: !liked}))}
                            onCountLikesPress={() => this.props.navigation.navigate('Likes')}
                            onSharePress={() => this.props.navigation.navigate('Shares')}
                            onShareLongPress={() => Share.share({title: 'Shareable', message: data.content})}
                            onCommentsPress={() => this.setState({showComments: true})}
                        />
                        <LocationBar {...data.location}/>
                        <Animated.View style={{
                            height: readMoreCollapse,
                            opacity: readMoreOpacity,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <SmallButton
                                text="Read more"
                                onPress={() => {
                                }}
                            />
                        </Animated.View>
                        <Animated.View style={[Styles.content, {
                            opacity: closeOpacity
                        }]}>
                            <Text style={Styles.contentText}>{data.content}</Text>

                            <Animated.View style={{
                                marginVertical: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <SmallButton
                                    text="Content"
                                    onPress={this.automaticClose}
                                />
                            </Animated.View>
                        </Animated.View>
                    </ScrollView>

                    <ExitButton
                        style={[Styles.exitButton, {
                            opacity: closeOpacity
                        }]}
                        onPress={this.automaticClose}
                    />
                </Animated.View>

                <CommentsModal
                    show={this.state.showComments}
                    onClosed={() => this.setState({showComments: false})}
                    navigation={this.props.navigation}
                />
            </Animated.View>
        );
    }
}

ScreenItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.any.isRequired,
        gallery: PropTypes.shape({
            items: PropTypes.array
        }),
        topText: PropTypes.string,
        bottomText: PropTypes.string,
        content: PropTypes.string,
        location: PropTypes.shape({
            title: PropTypes.string.isRequired,
            place: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            till: PropTypes.string.isRequired
        })
    }).isRequired,
    initialWidth: PropTypes.number.isRequired,
    initialHeight: PropTypes.number.isRequired,
    onCollapsed: PropTypes.func.isRequired
};

export {ScreenItem};