import {Colors} from "../../../constants";

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    content: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        height: 50,
        borderColor: Colors.COLOR_DARK_WHITE,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    title: {
        fontSize: 20,
        fontWeight: '500'
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationText: {
        marginRight: 5,
        fontWeight: '500',
        fontSize: 9
    }
};

export default styles;