import {Colors} from "../../../constants";

const styles = {
    containerWrapper: {},
    container: {
        marginHorizontal: 10,
        backgroundColor: Colors.COLOR_WHITE,
        shadowColor: Colors.COLOR_SHADOW,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 5,
    },
    contentWrapper: {
        flex: 1,
        borderRadius: 5,
        overflow: 'hidden',
        position: 'absolute'
    },
    bottomLabel: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomLabelText: {
        fontSize: 24,
        fontWeight: '400',
        color: Colors.COLOR_LIGHT_GRAY,
        textAlign: 'center'
    },
};

export default styles;