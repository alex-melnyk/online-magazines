import {Colors} from "../../../constants";

const styles = {
    container: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    circle: {
        marginVertical: 10,
        marginHorizontal: 5,
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: Colors.COLOR_DOT,
        borderColor: Colors.COLOR_SHADOW
    },
    circleActive: {
        marginVertical: 10,
        marginHorizontal: 5,
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: Colors.COLOR_WHITE,
        borderColor: Colors.COLOR_SHADOW
    }
};

export default styles;