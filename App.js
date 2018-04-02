import React, {Component} from 'react';
import RootNavigator from "./src/routing/index";
import {SafeAreaView, StatusBar} from "react-native";

/**
 *
 */
const App = () => (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar
            backgroundColor="#FFFFFF"
            barStyle="dark-content"
        />
        <RootNavigator/>
    </SafeAreaView>
);

export default App;