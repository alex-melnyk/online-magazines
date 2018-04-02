import {Colors} from "../../constants";

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: Colors.COLOR_WHITE
    },
    header: {
        height: 50,
        flexDirection: 'row'
    },
    headerLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    headerRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    content: {
        flex: 0.75
    },
    contentWrapper: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    contentImage: {
        flex: 1,
        width: null,
        height: null,
        overflow: 'hidden',
        borderRadius: 5
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
};

export default styles;