import {Dimensions} from 'react-native';
import {Colors} from "../../../constants";

const {
    width: screenWidth,
    height: screenHeight
} = Dimensions.get('window');

const styles = {
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: screenWidth,
        height: screenHeight
    },
    modal: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: screenHeight * 0.9,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'white'
    }
};

export default styles;