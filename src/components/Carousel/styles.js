
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    slider: {
        width: "100%",
        display: "flex",
        overflow: 'hidden',
        padding: '0',
        height: "100vh",
        position: "relative",
        margin: "0",
        alignItems: "center",
    },

    leftArrow: {
        position: 'absolute',
        top: '50%',
        left: '0',
        fontSize: '3rem',
        color: '#ccc',
        cursor: 'pointer',
        userSelect: 'none',
        transform: 'translateY(-50%)',
        zIndex: 10,
        display: 'block',
    },

    rightArrow: {
        position: 'absolute',
        top: '50%',
        right: '0',
        fontSize: '3rem',
        color: '#ccc',
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