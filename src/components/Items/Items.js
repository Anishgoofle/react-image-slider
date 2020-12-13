import React from "react";
import styles from './styles.module.css';

const Items = ({ items, x, current }) => {

    return (
        <>
            {items.map((slideData, index) => {
                return (
                    <div key={index} className={index === current + 1 ? styles.highlight : styles.slide} style={{ transform: index === current + 1 ? `translateX(${x}%) scale(1.1)` : `translateX(${x}%)` }}>
                        <div className={styles.slideimg}>
                            <img className={styles.image} src={slideData.image} alt={slideData.name} />
                        </div>
                        <div className={styles.slideDetails}>
                            <div className={styles.type}>
                                <a href="#">{slideData.name}</a>
                                <span>{slideData.category}</span>
                            </div>
                            <a className={styles.price} href="#">{slideData.price}</a>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Items;
