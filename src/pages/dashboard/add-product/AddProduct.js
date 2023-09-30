import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import styles from './addProduct.module.css';
import btnStyles from '../../../components/button/button.module.css'
import { useFormHook } from '../../../Hooks/useFormHook';

export default function AddProduct() {
    const {
        name,
        price,
        size,
        brand,
        category,
        rating,
        errors,
        isPending,
        confirmed,
        setName,
        setPrice,
        setRating,
        setSize,
        setBrand,
        setCategory,
        validate
    } = useFormHook('POST')
    const { id } = useParams();

    const brandsArr = ['Gucci', 'Addidas', 'Zara', 'Puma', 'Tommy', 'Nike', 'others']
    const categories = ['men', 'women', 'children']
    return (
        <>
            <div className={styles["edit-page"]}>
                <div className={styles["form-edit"]}>
                    <form onSubmit={e => validate(e, id)} className={styles["form-edit-add"]} noValidate>

                        <div className={styles["grid"]}>

                            <label htmlFor="name" >Name</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={name}
                                placeholder='Name'
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className={styles.error}>{errors && errors.nameError}</span>

                            <label htmlFor="size">Size</label>
                            <input
                                type='text'
                                id="size"
                                placeholder='Size'
                                name='size'
                                onChange={(e) => setSize(e.target.value)}
                                value={size}
                            />
                            <span className={styles.error}>{errors && errors.sizeError}</span>
                            <label htmlFor="price" >Price</label>
                            <input
                                type='number'
                                id='price'
                                name='price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Price'
                            />
                            <span className={styles.error}>{errors && errors.priceError}</span>
                            <label htmlFor="rating" >Rating</label>
                            <input
                                type='number'
                                id='rating'
                                name='rating'
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                placeholder='Rating   0 --> 5'
                            />
                            <span className={styles.error}>{errors && errors.ratingError}</span>
                        </div>

                        <span className={styles['title-field']}>Brand</span>

                        <div className={styles["brand-edit"]}>
                            {brandsArr.map((item, index) => (
                                <label key={index} htmlFor={item}>{item}
                                    <input

                                        type="radio"
                                        name='brand'
                                        id={item}
                                        onChange={e => {
                                            setBrand(e.target.id)
                                        }}
                                        checked={brand[item]}
                                    />
                                </label>
                            ))}
                            <br />
                            <span className={styles.error}>{errors && errors.brandError}</span>
                        </div>

                        <span className={styles['title-field']}>Category</span>

                        <div className={styles["category-edit"]}>
                            {categories.map((item, index) => (
                                <>
                                    <label htmlFor={item}>{item}</label>
                                    <input
                                        type="checkbox"

                                        name='category'
                                        checked={category[item]}
                                        id={item}
                                        onChange={e => setCategory(e.target.id)}
                                    />
                                </>
                            ))}
                            <br />
                            <span className={styles.error}>{errors && errors.categoryError}</span>
                        </div>

                        <button disabled={isPending} className={styles['save'] + btnStyles.btn}>{isPending ? 'Saving' : 'Save'}</button>

                    </form>

                    {confirmed && <Navigate to={'/dashboard'} replace={true}></Navigate>}

                </div>
            </div>
        </>
    )
}
