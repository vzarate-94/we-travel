import React from 'react';
import { Link } from 'react-router-dom'


import styles from './ImageCard.module.css'


function ImageCard({countryPic}){
    return (
        <div className={styles.container}>
                    <Link to={`/inspirations/${countryPic.alpha3Code}`}>
                        <div className={styles.card}>
                                <div className={styles.imageBanner}>
                                    <img src={countryPic.pics.structures} alt="" className={styles.imageBanner}/>
                                </div>
                                <div className={styles.cardHeader}>
                                    <h3>{countryPic.country}</h3>
                                </div>
                                <div className={styles.cardBody}>
                                    <button className={styles.cardButton}>Travel Here</button>
                                </div>
                        </div>
                    </Link>
            </div>
    )
}

export default ImageCard