import React, { useState, useEffect } from "react";
import Items from "../Items/Items";
import useStyles from './styles';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Carousel = ({ slides }) => {

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const [currentSlides, setCurrentSlides] = useState(slides);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!Array.isArray(slides) || slides.length <= 0) {
            return null;
        }
        const currSlides = slides.slice(current, current + 3);
        setCurrentSlides(currSlides);
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
    }

    const nextSlide = () => {
        setCurrent(current + 1);
        setShowLeft(true);
    }

    const classes = useStyles();
    return (
        // try something different .. with arrow maybe the shift method
        <>
            <FaArrowAltCircleLeft className={showLeft ? classes.leftArrow : classes.hide} onClick={prevSlide} />
            <div className={classes.carousel} >
                <Items items={currentSlides} currentIndex={current} />
            </div>
            <FaArrowAltCircleRight className={showRight ? classes.rightArrow : classes.hide} onClick={nextSlide} />
        </>
    );
};

export default Carousel;
