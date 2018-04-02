import {Dimensions} from 'react-native';
import {Colors} from "../../../constants";

const {
    width: screenWidth,
    height: screenHeight
} = Dimensions.get('window');

const styles = {
    container: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 5
    },
    iconBlock: {
        flexDirection: 'column'
    },
    replyBlock: {
        flexDirection: 'row',
        flex: 1
    }
};

export default styles;