import styles from './rangeFieldStyling.module.css'
import Button from '../button/Button';
import { useForm } from 'react-hook-form';


const RangeField = () => {
    const { control, handleSubmit, register, reset } = useForm({
        defaultValues: {
            name: '',
            brand: '',
            price: {
                max: 0,
                min: 0
            },
            size: {
                max: 0,
                min: 0
            },
            rating: {
                max: 0,
                min: 0
            },
        },
        mode: 'onBlur'
    })

    let onSubmit = (e) => {
        console.log(e)
    }
    let onError = (errors) => {
        console.log('Error List', errors)
    }
    const brandsArr = ['Gucci', 'Addidas', 'Zara', 'Puma', 'Tommy', 'Nike', 'others']
    return (
        <>
            <form noValidate onSubmit={handleSubmit(onSubmit, onError)} className={styles['main']}>
                <div>
                    <div className={styles['rating-range'] + "  d-flex flex-column align-items-center"}>
                        <h3>Name</h3>
                        <input type="text" {...register('name')} id="name" placeholder="name search" />
                    </div>
                    <div className={styles['brands-select']}>
                        <h3 style={{
                            gridArea: '1/1/2/3'
                        }}>Brands</h3>
                        {brandsArr.map(item => (
                            <div key={item} className={styles['brand-box']}>
                                <label htmlFor={item}>{item}</label>
                                <input type="radio" {...register('brand')} id={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className={styles['size-range'] + " d-flex flex-column align-items-center"}>
                        <h3>Size</h3>
                        <input type="text" {...register('size.max')} id="max-size" placeholder="Max" />
                        <input type="text" {...register('size.min')} id="min-size" placeholder="Min" />
                        <Button
                            className={styles['btn']}
                            link="#"
                            hundleClick={() => { }}
                            text={"Assendind"}
                        />
                        <Button
                            className={styles['btn']}
                            link="#"
                            hundleClick={() => { }}
                            text={"Disandding"}
                        />
                    </div>
                    <div className={styles['rating-range'] + " d-flex flex-column align-items-center"}>
                        <h3>Rating Range</h3>
                        <input type="text" {...register('rating.max')} id="max-rate" placeholder="Max" />
                        <input type="text" {...register('rating.min')} id="min-rate" placeholder="Min" />
                        <Button
                            className={styles['btn']}
                            link="#"
                            hundleClick={() => { }}
                            text={"Assendind"}
                        />
                        <Button
                            className={styles['btn']}
                            link="#"
                            hundleClick={() => { }}
                            text={"Disandding"}
                        />
                    </div>
                    <div className={styles['price-range'] + " d-flex flex-column align-items-center"}>
                        <h3>Price</h3>
                        <input type="text" {...register('price.max')} id="max-price" placeholder="Max" />
                        <input type="text" {...register('price.min')} id="min-price" placeholder="Min" />
                        <Button
                            className={styles['btn']}
                            link="#"
                            hundleClick={() => { }}
                            text={"Assendind"}
                        />
                        <Button
                            className={styles['btn']}
                            link="#"
                            hundleClick={() => { }}
                            text={"Disandding"}
                        />
                    </div>
                </div>

                <div className={styles['buttons-form'] + " d-flex mb-4"}>
                    <Button
                        className={styles['btn']}
                        link="#"
                        hundleClick={() => { reset() }}
                        text={"Clear"}
                    />
                    <button
                        className={styles['btn']}
                        type='submit'
                        style={{ width: 'fit-content' }}
                        hundleClick={() => { }}
                    > get the products</button>
                </div>

            </form>
        </>
    );
}

export default RangeField;
