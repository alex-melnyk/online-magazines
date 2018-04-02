import {Colors} from "../../../constants";

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50
    },
    buttonWrapper: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        fontSize: 32,
        color: Colors.COLOR_LIGHT_GRAY
    },
    content: {
        paddingRight: 50,
        flex: 1,
        fontSize: 26,
        fontWeight: '500',
        textAlign: 'center'
    }
};

export default styles;