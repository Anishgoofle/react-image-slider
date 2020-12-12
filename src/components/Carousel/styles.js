
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    carousel: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
    },

    leftArrow: {
        position: 'absolute',
        top: '50%',
        left: '8%',
        fontSize: '3rem',
        color: '#000',
        cursor: 'pointer',
        userSelect: 'none',
        transform: 'translateY(-50%)',
        zIndex: 10,
        display: 'block',
    },

    rightArrow: {
        position: 'absolute',
        top: '50%',
        right: '8%',
        fontSize: '3rem',
        color: '#000',
        cursor: 'pointer',
        userSelect: 'none',
        transform: 'translateY(-50%)',
        zIndex: 10,
        display: 'block',
    },
    hide: {
        display: 'none',
    },
}));














/*

*/