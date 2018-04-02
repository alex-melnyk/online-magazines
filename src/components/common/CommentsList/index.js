import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from "react-native";
import uuid from "uuid";
import {Button} from "../Button/index";
import {CommentsListItem} from "../CommentsListItem/index";

import Styles from "./Styles";

/**
 *
 */
class CommentsList extends Component {
    scrollToFresh = () => {
        this.flatlist.scrollToEnd();
        this.props.scrolledToEnd && this.props.scrolledToEnd();
    };

    render() {
        return (
            <View style={Styles.container}>
                <FlatList
                    ref={(ref) => (this.flatlist = ref)}
                    data={this.props.data}
                    keyExtractor={uuid}
                    renderItem={({item}) => (
                        <CommentsListItem
                            isAuthor={item.isAuthor}
                            image={item.image}
                            message={item}
                        />
                    )}
                />
                {
                    this.props.showNewMessage &&
                    <Button
                        style={Styles.pushButton}
                        text="1 New Comment"
                        onPress={this.scrollToFresh}
                    />
                }
            </View>
        );
    }

}

CommentsList.propTypes = {
    data: PropTypes.array.isRequired,
    showNewMessage: PropTypes.bool,
    scrolledToEnd: PropTypes.func
};

export {CommentsList};