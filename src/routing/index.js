import {StackNavigator} from 'react-navigation';

import Entrance from "../components/Entrance";
import Magazines from "../components/Magazines";
import Likes from "../components/Likes";
import Shares from "../components/Shares";

const RootNavigator = new StackNavigator({
    Entrance: {
        screen: Entrance
    },
    Magazines: {
        screen: Magazines
    },
    Likes: {
        screen: Likes
    },
    Shares: {
        screen: Shares
    }
}, {
    initialRouteName: 'Magazines',
    headerMode: 'none',
    cardStyle: {
        shadowRadius: 0,
        shadowOpacity: 0
    }
});

export default RootNavigator;