import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {HeaderThinFont} from "../common/HeaderThinFont";
import {ScreenList} from "../common/ScreenList";
import Styles from "./Styles";
import {sharesData} from "../../data/shares";

class Shares extends Component {
    state = {
        data: [...sharesData]
    };

    render() {
        return (
            <View style={Styles.container}>
                <HeaderThinFont
                    floatMode={true}
                    text={'Shares'}
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

export default Shares;