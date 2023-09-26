import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import styles from './editProduct.module.css';
import btnStyles from '../button/button.module.css'

export default function EditPage() {
    const { id } = useParams();
    const [imgUrl, setImgUrl] = useState({ data: '', isEmpty: false, isWrong: false })
    
    const [name, setName] = useState({ data: '', isEmpty: false, isWrong: false });
    const [price, setPrice] = useState({ data: 0, isEmpty: false, isWrong: false });
    const [rating, setRating] = useState({ data: 0, isEmpty: false, isWrong: false });
    const [category, setCategory] = useState({ data: [null], isEmpty: false, isWrong: false });
    const [brand, setBrand] = useState({ data: '', isEmpty: false, isWrong: false });
    const [size, setSize] = useState({ data: '', isEmpty: false, isWrong: false });
    const [navOk, setNavOk] = useState([false, false])

    useEffect(() => {
        setImgUrl({
            ...imgUrl,
            data: new URLSearchParams(window.location.search).get('img')
        })
        fetch(`http://localhost:8000/products/${id}`).then(data => {
            return data.json()
        }).then(product => {
            setBrand({ ...brand, data: product.brand })
            setCategory({ ...category, data: product.category })
            setName({ ...name, data: product.name })
            setPrice({ ...price, data: product.price })
            setRating({ ...rating, data: product.rating })
            setSize({ ...size, data: product.size.join('-') })
        })
    }, [])
    let validate = () => {
        if (name.data === '') setName({ ...name, isEmpty: true });
        else {
            setName({ ...name, isEmpty: false, isWrong: false });
            if (name.data.match(/\d/)) {
                setName({ ...name, isWrong: true })
            }
            console.log('name true')
        }
        if (price.data === 0) setPrice({ ...price, isEmpty: true });
        else {
            setPrice({ ...price, isEmpty: false, isWrong: false });
            if (price.data > 1000 || price.data < 10) {
                setPrice({ ...price, isWrong: true })
            }
        }
        if (rating.data === 0) setRating({ ...rating, isEmpty: true });
        else {
            setRating({ ...rating, isEmpty: false, isWrong: false });
            if (rating.data > 5 || rating.data < 0) {
                setRating({ ...rating, isWrong: true })
            }
        }
        if (category.data.length === 1) setCategory({ ...category, isEmpty: true });
        else {
            setCategory({ ...category, isEmpty: false });
        }
        if (!brand.data) setBrand({ ...brand, isEmpty: true });
        else {
            setBrand({ ...brand, isEmpty: false });
            console.log('brand true')
        }
        if (size.data === '') setSize({ ...size, isEmpty: true });
        else {
            setSize({ ...size, isEmpty: false, isWrong: false });
            if (size.data.match(/\D/)) size.data.match(/\D/g).forEach(ele => ele !== '-' ? setSize({ ...size, isWrong: true }) : ele)
        }
    }
    let hundleFormValidation = async (e) => {
        e.preventDefault();
        await validate();
        console.log(name, size, price, rating, brand, category)
        if (!name.isEmpty && !name.isWrong &&
            !size.isEmpty && !size.isWrong &&
            !price.isEmpty && !price.isWrong &&
            !rating.isEmpty && !rating.isWrong &&
            !brand.isEmpty && !brand.isWrong &&
            !category.isEmpty && !category.isWrong) {
            let obj = {
                name: name.data,
                price: price.data,
                size: size.data.split('-'),
                category: (category.data[0]) ? category.data : category.data.slice(1),
                rating: rating.data,
                brand: brand.data
            };
            fetch(`http://localhost:8000/products/${id}`, {
                method: 'PUT',
                body: JSON.stringify(obj),
                headers: { "Content-Type": "application/json", }
            }).then(() => console.log('all is fine')).catch(e => console.log(e))
            setNavOk([true, true])
        }
    }
    return (
        <div className={styles["edit-page"]}>
            <img src={imgUrl.data} alt="" />
            <div className={styles["form-edit"]}>
                <form className={styles["form-edit-add"]} onSubmit={hundleFormValidation}>
                    <div className={styles["grid"]}>
                        <label htmlFor="name" >Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name.data}
                            onChange={e => setName({ ...name, data: e.target.value })}
                            placeholder='Name'
                        />
                        <span>{name.isEmpty ? "this field can't be empty" : name.isWrong ? "invalid string" : ''}</span>
                        <label htmlFor="size">Size</label>
                        <input
                            type="text"
                            name="size"
                            id="size"
                            value={size.data}
                            onChange={e => setSize({ ...size, data: e.target.value })}
                            placeholder='Size'
                        />
                        <span>{size.isEmpty ? "this field can't be empty" : size.isWrong ? "invalid sizes" : ''}</span>
                        <label htmlFor="price" >Price</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={price.data !== 0 && price.data}
                            onChange={e => setPrice({ ...price, data: (e.target.value === '') ? 0 : parseFloat(e.target.value) })}
                            placeholder='Price'
                        />
                        <span>{price.isEmpty ? "this field can't be empty" : price.isWrong ? "invalid price" : ''}</span>
                        <label htmlFor="rating" >Rating</label>
                        <input
                            type="number"
                            name="rating"
                            id="rating"
                            value={rating.data !== 0 && rating.data}
                            onChange={e => setRating({ ...rating, data: (e.target.value === '') ? 0 : parseFloat(e.target.value) })}
                            placeholder='Rating'
                        />
                        <span>{rating.isEmpty ? "this field can't be empty" : rating.isWrong ? "invalid rate" : ''}</span>
                    </div>
                    <span className={styles['title-field']}>Brand</span>
                    <div className={styles["brand-edit"]}>
                        <label htmlFor="Gucci">Gucci
                            <input
                                type="radio"
                                name="brand"
                                id="Gucci"
                                value={"Gucci" === brand.data}
                                checked={"Gucci" === brand.data}
                                onChange={e => setBrand({ ...brand, data: e.target.id })}
                            />
                        </label>
                        <label htmlFor="Addidas">Addidas
                            <input
                                type="radio"
                                name="brand"
                                id="Addidas"
                                checked={"Addidas" === brand.data}
                                value={"Addidas" === brand.data}
                                onChange={e => setBrand({ ...brand, data: e.target.id })}
                            />
                        </label>
                        <label htmlFor="Zara">Zara
                            <input
                                type="radio"
                                name="brand"
                                id="Zara"
                                checked={"Zara" === brand.data}
                                value={"Zara" === brand.data}
                                onChange={e => setBrand({ ...brand, data: e.target.id })}
                            />
                        </label>
                        <label htmlFor="Puma">Puma
                            <input
                                type="radio"
                                name="brand"
                                id="Puma"
                                checked={"Puma" === brand.data}
                                value={"Puma" === brand.data}
                                onChange={e => setBrand({ ...brand, data: e.target.id })}
                            />
                        </label>
                        <label htmlFor="H&M">H&amp;M
                            <input
                                type="radio"
                                name="brand"
                                id="H&M"
                                checked={"H&M" === brand.data}
                                value={"H&M" === brand.data}
                                onChange={e => setBrand({ ...brand, data: e.target.id })}
                            />
                        </label>
                        <label htmlFor="Tommy">Tommy
                            <input
                                type="radio"
                                name="brand"
                                id="Tommy"
                                checked={"Tommy" === brand.data}
                                value={"Tommy" === brand.data}
                                onChange={e => setBrand({ ...brand, data: e.target.id })}
                            />
                        </label>
                        <label htmlFor="Nike">Nike
                            <input
                                type="radio"
                                name="brand"
                                id="Nike"
                                checked={"Nike" === brand.data}
                                value={"Nike" === brand.data}
                                onChange={e => setBrand({ ...brand, data: e.target.id })}
                            />
                        </label>
                        <label htmlFor="others">others
                            <input
                                type="radio"
                                name="brand"
                                id="others"
                                checked={"others" === brand.data}
                                value={"others" === brand.data}
                                onChange={e => setBrand({ ...brand, data: e.target.id })}
                            />
                        </label>
                        <span>{brand.isEmpty ? "this field can't be empty" : brand.isWrong ? "invalid brand" : ''}</span>
                    </div>
                    <span className={styles['title-field']}>Category</span>
                    <div className={styles["category-edit"]}>
                        <label htmlFor="Men">Men</label>
                        <input
                            type="checkbox"
                            name="category"
                            id="Men"
                            checked={category.data.includes('Men')}
                            value={category.data.includes('Men')}
                            onChange={(e) => {
                                let arr = [...category.data, 'Men']
                                setCategory({ ...category, data: arr })
                            }}
                        />
                        <label htmlFor="Women">Women</label>
                        <input
                            type="checkbox"
                            name="category"
                            id="Women"
                            checked={category.data.includes('Women')}
                            value={category.data.includes('Women')}
                            onChange={(e) => {
                                let arr = [...category.data, 'Women']
                                setCategory({ ...category, data: arr })
                            }} />
                        <label htmlFor="Children">Children</label>
                        <input
                            type="checkbox"
                            name="category"
                            id="Children"
                            checked={category.data.includes('Children')}
                            value={category.data.includes('Children')}
                            onChange={(e) => {
                                let arr = [...category.data, 'Children']
                                setCategory({ ...category, data: arr })
                            }}
                        /><br />
                        <span>{category.isEmpty ? "this field can't be empty" : category.isWrong ? "invalid category" : ''}</span>
                    </div>
                    <button className={styles['save'] + btnStyles.btn}>Save</button>
                </form>
                {navOk[1] && <Navigate to={'/dashboard'} replace={true}></Navigate>}
            </div>
        </div>
    )
}
