
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    slider: {
        width: "100%",
        display: "flex",
        overflow: 'hidden',
        padding: '0',
        position: "absolute",
        margin: "0",
        alignItems: "center",
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        height: '550px'
    },

    leftArrow: {
        position: 'absolute',
        top: '50%',
        left: '10px',
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
        right: '10px',
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