import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, KeyboardAvoidingView, TextInput, View} from "react-native";
import Modal from 'react-native-modalbox';

import {CommentsList, ItemActions} from "../index";
import Styles from "./Styles";
import {LIKES_AMOUNT} from "../../../constants";
import {COMMENTS_AMOUNT} from "../../../constants/index";
import {IconButton} from "../IconButton/index";
import Portrait2 from '../../../../assets/images/people/portrait_02.jpg';

import {messagesData} from "../../../data/messages";

/**
 *
 */
class CommentsModal extends Component {
    state = {
        comment: '',
        newMessageExist: false,
        data: [...messagesData]
    };

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <KeyboardAvoidingView
                style={Styles.container}
                contentContainerStyle={Styles.container}
                behavior="position"
            >
                <Modal
                    style={Styles.modal}
                    position="bottom"
                    isOpen={true}
                    backdrop={true}
                    backdropPressToClose={true}
                    swipeToClose={false}
                    onClosed={this.props.onClosed}
                >
                    <ItemActions
                        enabled={false}
                        likesValue={new Animated.Value(1)}
                        likesAmount={LIKES_AMOUNT}
                        commentsAmount={COMMENTS_AMOUNT}
                        onLikePress={() => this.setState(({liked}) => ({liked: !liked}))}
                        onCountLikesPress={() => this.props.navigation.navigate('Likes')}
                        onSharePress={() => this.props.navigation.navigate('Shares')}
                    />

                    <CommentsList
                        data={this.state.data}
                        showNewMessage={this.state.newMessageExist}
                        scrolledToEnd={() => this.setState({newMessageExist: false})}
                    />

                    <View style={{
                        height: 60,
                        paddingHorizontal: 10,
                        borderTopWidth: 1,
                        borderTopColor: '#EEEEEE',
                        backgroundColor: '#FFFFFF',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <IconButton
                            style={{marginRight: 5}}
                            iconName="camera"
                            iconColor="#AAAAAA"
                        />
                        <IconButton
                            style={{marginRight: 10}}
                            iconName="image"
                            iconColor="#AAAAAA"
                        />
                        <TextInput
                            style={{
                                marginRight: 10,
                                paddingVertical: 0,
                                paddingHorizontal: 10,
                                flex: 1,
                                height: 30,
                                borderColor: '#AAAAAA',
                                borderWidth: 2,
                                borderRadius: 20,
                                backgroundColor: '#EEEEEE',
                            }}
                            value={this.state.comment}
                            underlineColorAndroid="transparent"
                            placeholder="Write a comment"
                            returnKeyType="send"
                            onChangeText={(comment) => this.setState({comment})}
                            onSubmitEditing={() => {
                                this.setState(({data, comment}) => ({
                                    data: [...data, {
                                        image: Portrait2,
                                        authorName: 'David',
                                        text: comment,
                                        date: new Date().toLocaleTimeString()
                                    }],
                                    comment: '',
                                    newMessageExist: true
                                }));

                                this.props.onSend && this.props.onSend(this.state.comment);
                            }}
                        />

                        <IconButton
                            iconName="circle-o"
                            iconColor="#AAAAAA"
                        />
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        );
    }

}

CommentsModal.propTypes = {
    show: PropTypes.bool,
    onSend: PropTypes.func,
    onClosed: PropTypes.func.isRequired
};

export {CommentsModal};