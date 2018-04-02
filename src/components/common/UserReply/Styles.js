import {Colors} from "../../../constants";

const style = {
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 20
    },
    messageBlock: {
        flex: 1
    },
    likeBlock: {
        alignContent: 'center',
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 5,
    },
    messageHeader: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.COLOR_BLACK,
    },
    messageText: {
        marginVertical: 5,
        fontSize: 14,
        // lineHeight: 30
    },
    messageFooter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    messageDate: {
        color: Colors.COLOR_LIGHT_GRAY
    },
    messageFooterSeparator: {
        marginHorizontal: 5,
        fontSize: 5,
        color: Colors.COLOR_LIGHT_GRAY
    },
    messageReplyWrapper: {
        color: Colors.COLOR_LIGHT_GRAY
    },
    messageReply: {
        color: Colors.COLOR_LIGHT_GRAY
    }
};

export default style;