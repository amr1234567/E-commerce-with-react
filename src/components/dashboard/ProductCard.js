import React from 'react'
import Button from '../button/Button'
import styles from './dashboardStyle.module.css'
import { useProducts } from '../../context/useData'
import grayStar from '../../assets/star-gray.svg'
import yellowStar from '../../assets/star-yellow.svg'
export default function ProductCard({ itemData }) {
    const { deleteProduct } = useProducts()
    if (!itemData) {
        return <h2>Data is undefined or null</h2>
    }
    let createStars = (rating) => {
        let stars = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            stars.push(yellowStar)
        }
        for (let i = 0; i < 5 - Math.floor(rating); i++) {
            stars.push(grayStar)
        }
        return stars;
    }
    return (
        <div className={styles['product-card-dash'] + " card-product rounded-3 d-flex flex-column align-items-center p-xxl-4 p-2"}>
            <div className="img-container-product test">
                <img src={itemData.img} className="card-img-top mb-3 border border-dark rounded-3" alt="..." />
            </div>
            <div className="card-content d-flex flex-column justify-content-between w-100">
                <h3 className={styles['name-of-product'] + " name-of-product"}>{itemData.name}</h3>
                <p className={styles["sizes"]}>Sizes Avaliable:&nbsp;
                    <div className={styles['container-spans']}>
                        {itemData.size.map((ele, index) => (<><span key={index} className={styles['spans']}>{ele}</span> &nbsp; &nbsp;</>))}
                    </div>
                </p>
                <p className={styles["categories"]}>Categories Avaliable:&nbsp;
                    <div className={styles['container-spans']}>
                        {itemData.category.map(ele => (<><span className={styles['spans']}>{ele}</span> &nbsp; &nbsp;</>))}
                    </div>
                </p>
                <p className={styles['brand-product-box'] + " mt-2"}>Brand:&nbsp; &nbsp; <span>{itemData.brand}</span></p>
                <p className={styles["price-product-box"]}>Price: &nbsp; &nbsp;$<span>{itemData.price}</span></p>
                <div className="d-flex mt-2">
                    {createStars(itemData.rating).map((img, index) => (
                        <img src={img} alt='...' key={index} />
                    ))}
                </div>
                <div className={styles["buttons-product"]}>
                    <Button
                        className={''}
                        link={'/dashboard'}
                        text={'Delete'}
                        hundleClick={() => deleteProduct(itemData.id)}
                    />
                    <Button
                        className={''}
                        link={`/editProduct/${itemData.id}?img=${itemData.img}`}
                        text={'Edit'}
                        hundleClick={() => { }}
                    />
                </div>
            </div>
        </div>
    )
}
