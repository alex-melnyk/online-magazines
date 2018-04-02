import {Colors} from "../../../constants";

const style = {
    container: {
        alignItems: 'center',
    },
    imageBack: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        width: 50,
        height: 50,
        overflow: 'hidden'
    },
    image: {
        width: 46,
        height: 46,
        borderRadius: 23,
        overflow: 'hidden'
    },
    authorLabel: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 12,
        borderRadius: 10,
        marginTop: 2
    },
    authorLabelText: {
        color: Colors.COLOR_WHITE,
        fontSize: 8
    }
};

export default style;