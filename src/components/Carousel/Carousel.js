import React, { useState, useEffect } from "react";
import Items from "../Items/Items";
import useStyles from './styles';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Carousel = ({ slides }) => {

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const [current, setCurrent] = useState(0);
    const [x, setX] = useState(0);

    useEffect(() => {
        if (!Array.isArray(slides) || slides.length <= 0) {
            return null;
        }
        if (current === 0) {
            setShowLeft(false);
        }
        if (current === slides.length - 3) {
            setShowRight(false);
        }
    }, [current]);



    const prevSlide = () => {
        setCurrent(current - 1);
        setShowRight(true);
        setX(x + 110);
    }

    const nextSlide = () => {
        setCurrent(current + 1);
        setShowLeft(true);
        setX(x - 110);
    }

    const classes = useStyles();
    return (
        <>
            <FaArrowAltCircleLeft className={showLeft ? classes.leftArrow : classes.hide} onClick={prevSlide} />
            <div className={classes.slider}>
                <Items items={slides} x={x} current={current} />
            </div>
            <FaArrowAltCircleRight className={showRight ? classes.rightArrow : classes.hide} onClick={nextSlide} />
        </>
    );
};

export default Carousel;
