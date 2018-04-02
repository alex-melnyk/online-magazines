import {Colors} from "../../../constants";

const styles = {
    container: {
        position: 'absolute'
    },
    image: {
        flex: 1,
        width: null
    },
    topTextWrapper: {
        position: 'absolute',
        left: 0,
        top: 0,
        padding: 10,
        paddingTop: 20
    },
    topText: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white'
    },
    bottomTextWrapper: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        padding: 20
    },
    bottomText: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.COLOR_WHITE
    },
    pagination: {
        position: 'absolute',
        bottom: -25
    },
    paginationContainer: {
        flex: 1,
        alignItems: 'center'
    }
};

export default styles;