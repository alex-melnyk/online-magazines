import {Colors} from "../../../constants";

const styles = {
    container: {
        overflow: 'hidden',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        position: 'absolute',
        overflow: 'hidden',
        left: -45,
        top: -45,
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: Colors.COLOR_SHADOW,
        borderWidth: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    icon: {
        marginBottom: 5,
        marginRight: 5,
        fontSize: 20,
        color: Colors.COLOR_WHITE,
        transform: [
            {scaleX: -1}
        ]
    }
};

export default styles;