import {Colors} from "../../../constants";

const styles = {
    container: {
        // flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        height: 50,
        backgroundColor: Colors.COLOR_WHITE
    },
    leftBarWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    leftBar: {
        flexDirection: 'row'
    },
    leftBarText: {
        marginTop: 5,
        height: 15,
        fontSize: 12,
        color: Colors.COLOR_DARK_GRAY
    },
    rightBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    likesLink: {
        height: 30
    }
};

export default styles;