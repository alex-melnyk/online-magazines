import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {HeaderThinFont} from "../common/HeaderThinFont";
import {ScreenList} from "../common/ScreenList";
import Styles from "./Styles";
import {likesData} from "../../data/likes";

class Likes extends Component {
    state = {
        data: [...likesData]
    };

    render() {
        return (
            <View style={Styles.container}>
                <HeaderThinFont
                    floatMode={true}
                    text={'Likes'}
                    onBack={() => {
                        this.props.navigation.goBack();
                    }}
                />
                <ScrollView>
                    <ScreenList
                        data={this.state.data}
                    />
                </ScrollView>
            </View>
        )
            ;
    }
}

export default Likes;