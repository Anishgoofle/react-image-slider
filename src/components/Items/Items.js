import React from "react";
import styles from './styles.module.css';

const Items = ({ items }) => {

    return (
        <>
            {items.map((slideData, index) => {
                return (
                    <div key={index} className={index === 1 ? styles.highlight : styles.slidecontainer}>
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
