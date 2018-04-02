import {Colors} from "../../../constants";

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: Colors.COLOR_WHITE,
        shadowColor: Colors.COLOR_SHADOW,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    },
    buttonWrapper: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        fontSize: 32,
        color: Colors.COLOR_BLACK
    },
    content: {
        paddingRight: 50,
        flex: 1,
        fontSize: 22,
        textAlign: 'center',
        color: Colors.COLOR_BLACK
    }
};

export default styles;