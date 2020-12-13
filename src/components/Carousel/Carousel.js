import React, { useState, useEffect } from "react";
import Items from "../Items/Items";
import useStyles from './styles';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Filter from '../Filter/Filter';

const Carousel = ({ slides }) => {

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const [current, setCurrent] = useState(0);
    const [x, setX] = useState(0);
    const [filters, setFilters] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        const slideFilters = slides.reduce((p, slideData) => {
            Object.keys(slideData).map((key, _) => {
                if (key === 'category' && !p.includes(slideData[key])) p.push(slideData[key]);
            });
            return p;
        }, []);

        const obj = slideFilters.reduce((obj, filter) => {
            obj[filter] = {
                selected: false
            }
            return obj;
        }, {});

        setFilters(slideFilters);
        setSelectedFilters(obj);
    }, []);


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
        setX(x + 132);
    }

    const nextSlide = () => {
        setCurrent(current + 1);
        setShowLeft(true);
        setX(x - 132);
    }

    const onFilterChange = (data) => {
        setSelectedFilters(prevState => ({
            ...prevState,
            [data]: {
                selected: !prevState[data].selected
            }
        }));
    }

    const classes = useStyles();

    return (
        <>
            <Filter filters={filters} onFilterChange={onFilterChange} selectedFilters={selectedFilters} />
            <FaArrowAltCircleLeft className={showLeft ? classes.leftArrow : classes.hide} onClick={prevSlide} />
            <div className={classes.slider}>
                <Items items={slides} x={x} current={current} />
            </div>
            <FaArrowAltCircleRight className={showRight ? classes.rightArrow : classes.hide} onClick={nextSlide} />
        </>
    );
};

export default Carousel;
