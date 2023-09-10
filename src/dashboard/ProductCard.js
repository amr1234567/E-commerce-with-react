import React from 'react'
import Button from './Button'

export default function ProductCard({ src, sizes, name, categories, brand, price, hundleDelete, img, id }) {
    return (
        <div className='product-card-dash'>
            <img src={src} alt="product img" />
            <h3 className='name'>{name}</h3>
            <p className="sizes">Sizes Avaliable:&nbsp;
                <div className='container-spans'>
                    {sizes.map(ele => (<><span className='spans'>{ele}</span> &nbsp; &nbsp;</>))}
                </div>
            </p>
            <p className="categories">Categories Avaliable:&nbsp;
                <div className='container-spans'>
                    {categories.map(ele => (<><span className='spans'>{ele}</span> &nbsp; &nbsp;</>))}
                </div>
            </p>
            <p className="brand-product-box">Brand: {brand}</p>
            <p className="price-product-box">Price: ${price}</p>
            <div className="buttons-product">
                <Button
                    className={'del-btn'}
                    link={'/dashboard'}
                    text={'Delete'}
                    hundleClick={hundleDelete}
                />
                <Button
                    className={'edit-btn'}
                    link={`/editProduct/${id}?img=${img}`}
                    text={'Edit'}
                    hundleClick={() => { }}
                />
            </div>
        </div>
    )
}
