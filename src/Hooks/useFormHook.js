import { useReducer } from "react"

const ACTIONS = {
    INITIAL_SET_DATA: 'initial-set-data',
    SET_NAME: 'set-name',
    SET_PRICE: 'set-price',
    SET_RATING: 'set-rating',
    SET_SIZE: 'set-size',
    SET_BRAND: 'set-brand',
    SET_CATEGORY: 'set-category',
    SET_ERROR: 'set-error',
    SET_ISPENDING: 'set-isPending',
    SET_CONFIRMED: 'set-confirmed'
}
function reduce(formData, action) {
    switch (action.type) {
        case ACTIONS.INITIAL_SET_DATA:
            return {
                name: action.payload.name,
                price: action.payload.price,
                rating: action.payload.rating,
                size: action.payload.size,
                brand: action.payload.brand,
                category: action.payload.category,
            }
        case ACTIONS.SET_NAME:
            return {
                ...formData,
                name: action.payload.name
            }
        case ACTIONS.SET_PRICE:
            return {
                ...formData,
                price: action.payload.price
            }
        case ACTIONS.SET_RATING:
            return {
                ...formData,
                rating: action.payload.rating
            }
        case ACTIONS.SET_SIZE:
            return {
                ...formData,
                size: action.payload.size
            }
        case ACTIONS.SET_BRAND:
            return {
                ...formData,
                brand: action.payload
            }
        case ACTIONS.SET_CATEGORY:
            return {
                ...formData,
                category: action.payload
            }
        case ACTIONS.SET_ERROR:
            return {
                ...formData, errors: action.payload
            }
        case ACTIONS.SET_ISPENDING:
            return { ...formData, isPending: !formData.isPending }
        case ACTIONS.SET_CONFIRMED:
            return { ...formData, confirmed: !formData.confirmed }
        default:
            return formData;
    }
}

export const useFormHook = (method) => {
    const [{ name, price, rating, size, brand, category, errors, isPending, confirmed }, dispatch] = useReducer(reduce, {
        name: '',
        price: 0,
        rating: 0.0,
        size: '',
        brand: {
            Gucci: false,
            Addidas: false,
            Zara: false,
            Puma: false,
            Tommy: false,
            Nike: false,
            others: false
        },
        category: {
            men: false,
            women: false,
            children: false,
        },
        errors: {
            nameError: '',
            priceError: '',
            ratingError: '',
            brandError: '',
            categoryError: '',
        },
        isPending: false,
        confirmed: false
    })

    let setDataOfForm = (data) => {
        dispatch({ type: ACTIONS.INITIAL_SET_DATA, payload: data })
    }

    function setName(name) {
        dispatch({ type: ACTIONS.SET_NAME, payload: { name: name } })
    }

    function setPrice(name) {
        dispatch({ type: ACTIONS.SET_PRICE, payload: { price: name } })
    }

    function setRating(name) {
        dispatch({ type: ACTIONS.SET_RATING, payload: { rating: name } })
    }

    function setSize(name) {
        dispatch({ type: ACTIONS.SET_SIZE, payload: { size: name } })
    }

    function setBrand(name) {
        let keys = Object.keys(brand);
        let obj = { ...brand }
        keys.forEach(i => { obj[i] = false })
        obj[name] = true;
        dispatch({ type: ACTIONS.SET_BRAND, payload: obj })
    }

    function setCategory(name) {
        let obj = { ...category }
        obj[name] = !category[name];
        dispatch({ type: ACTIONS.SET_CATEGORY, payload: obj })
    }
    function validate(e, id) {
        e.preventDefault()
        let obj = {
            ...errors
        }

        if (name === '') obj.nameError = 'Can\'t be Empty';
        else if (name.match(/[0-9]/g)) obj.nameError = 'Can\'t hold numbers';
        else obj.nameError = '';

        if (price === '') obj.priceError = 'Can\'t be Empty or hold characters';
        else if (price <= 10 || price >= 3000) obj.priceError = 'out of the range';
        else obj.priceError = '';

        if (rating === '') obj.ratingError = 'Can\'t be Empty or hold characters';
        else if (rating < 0 || rating > 5) obj.ratingError = 'out of the range';
        else obj.ratingError = '';

        if (size === '') obj.sizeError = 'Can\'t be Empty';
        else if (size.match(/[^0123456789-]/)) obj.sizeError = 'Can\'t hold string';
        else if (size.charAt(0) === '-') obj.sizeError = 'it should start with at least one size';
        else obj.sizeError = '';

        let checkTrue = (obj) => {
            let check = false;
            let keys = Object.keys(obj)
            keys.forEach(i => { obj[i] && (check = true); })
            return check
        }

        if (!checkTrue(brand)) obj.brandError = 'you must choose something';
        else obj.brandError = '';

        if (!checkTrue(category)) obj.categoryError = 'you must choose something';
        else obj.categoryError = '';

        dispatch({ type: ACTIONS.SET_ERROR, payload: obj });
        if (obj.categoryError === '' &&
            obj.brandError === '' &&
            obj.nameError === '' &&
            obj.priceError === '' &&
            obj.sizeError === '' &&
            obj.ratingError === '') {
            dispatch({ type: ACTIONS.SET_ISPENDING })
            fetch(method === 'POST' ? `http://localhost:8000/products` : method === 'PATCH' ? `http://localhost:8000/products/${id}` : null, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    price: price,
                    rating: rating,
                    size: size.split('-'),
                    brand: Object.keys(brand).filter(i => brand[i])[0],
                    category: Object.keys(category).filter(i => category[i])
                })
            })
                .then(() => {
                    method === 'PATCH' && console.log("edited")
                    method === 'POST' && console.log('Added a new product')
                    dispatch({ type: ACTIONS.SET_ISPENDING })
                    dispatch({ type: ACTIONS.SET_CONFIRMED })
                })
                .catch(e => {
                    console.log(e)
                    dispatch({ type: ACTIONS.SET_ISPENDING })
                })
        }
    }
    return {
        name, price, rating, size, brand, category, errors, isPending, confirmed,
        setDataOfForm, setName, setPrice, setRating, setSize, setBrand, setCategory, validate
    }
}