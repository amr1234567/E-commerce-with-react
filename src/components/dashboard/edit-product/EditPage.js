import React, { useEffect, useId, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import styles from './editProduct.module.css';
import btnStyles from '../button/button.module.css'
import { useFormHook } from '../../../Hooks/useFormHook';

export default function EditPage() {
    const [navOk, setNavOk] = useState(false)
    const {
        name,
        price,
        size,
        brand,
        category,
        rating,
        setDataOfForm,
        setName,
        setPrice,
        setRating,
        setSize,
        setBrand,
        setCategory
    } = useFormHook()
    const { id } = useParams();
    const [imgUrl,] = useState(new URLSearchParams(window.location.search).get('img'))
    const idTemplet = useId()

    useEffect(() => {
        fetch(`http://localhost:8000/products/${id}`).then(data => {
            return data.json()
        }).then(product => {
            setDataOfForm({
                name: product.name,
                price: product.price,
                rating: product.rating,
                size: product.size.join('-'),
                category: {
                    men: product.category.includes('men'),
                    women: product.category.includes('women'),
                    childre: product.category.includes('children'),
                },
                brand: {
                    Gucci: product.brand === 'Gucci',
                    Addidas: product.brand === 'Addidas',
                    Zara: product.brand === 'Zara',
                    Puma: product.brand === 'Puma',
                    Tommy: product.brand === 'Tommy',
                    Nike: product.brand === 'Nike',
                    others: product.brand === 'others'
                }
            })
        })
    }, [])
    const brandsArr = ['Gucci', 'Addidas', 'Zara', 'Puma', 'Tommy', 'Nike', 'others']
    const categories = ['men', 'women', 'children']
    let onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        console.log(formData)
    }
    return (
        <>
            <div className={styles["edit-page"]}>
                <img src={imgUrl.data} alt="" />
                <div className={styles["form-edit"]}>
                    <form onSubmit={onSubmit} className={styles["form-edit-add"]} noValidate>

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

                            <label htmlFor="size">Size</label>
                            <input
                                type='text'
                                id="size"
                                placeholder='Size'
                                name='size'
                                onChange={(e) => setSize(e.target.value)}
                                value={size}
                            />

                            <label htmlFor="price" >Price</label>
                            <input
                                type='number'
                                id='price'
                                name='price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Price'
                            />

                            <label htmlFor="rating" >Rating</label>
                            <input
                                type='number'
                                id='rating'
                                name='rating'
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                placeholder='Rating'
                            />

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

                        </div>

                        <button className={styles['save'] + btnStyles.btn}>Save</button>

                    </form>

                    {navOk && <Navigate to={'/dashboard'} replace={true}></Navigate>}

                </div>
            </div>
        </>
    )
}
