import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import Button from '../components/button/Button'
import './app.css';
import stylesBtn from '../components/button/button.module.css'
import { ProductsContextProvidor, setDataWithImages } from "../context/useData";
import yellowStar from '../assets/star-yellow.svg'
import grayStar from '../assets/star-gray.svg'
import RangeField from "../components/rangeField/RangeField";
import Footer from "../components/footer/Footer";


const App = () => {
  return (
    <ProductsContextProvidor>
      <AppChild />
    </ProductsContextProvidor>
  )
}

export default App;


function AppChild() {

  return (
    <div className="App">
      <Header />
      <section className="main-section w-100 d-flex p-2 justify-content-around">
        <div className="content ms-5">
          <p className="b">Let's</p>
          <p className="b">Explore</p>
          <p className="decoration b">Unique</p>
          <p className="b">Clothes.</p>
          <p className="parag">Live for Influential and Innovative fashion!</p>
          <button
            className={stylesBtn['shop-now'] +' '+ stylesBtn['btn']}
          >
            Shop Now
          </button>
        </div>
        <img src="assets/women/main-photo.png" alt="" />
      </section>
      <ProductsContainer />
      <Footer />
    </div>

  );
}

function Header() {
  return (
    <header className="w-100 d-flex justify-content-between align-items-center">
      <Link to="#" className="fw-bold main-name">E-Commerce</Link>
      <div className="buttons d-flex ">
        <Button
          className={stylesBtn['btn']}
          link="#"
          hundleClick={() => { }}
          text={"Sign In"}
        />
        <Button
          className={stylesBtn['btn']}
          link="#"
          hundleClick={() => { }}
          text={'Sign Up'}
        />
      </div>
    </header>
  )
}


function ProductsContainer() {
  return (
    <section className="products-section d-flex flex-column align-items-center">
      <h2 className="heading-of-products">New Products</h2>
      <p className="discription mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
      </p>
      <div className="filter mt-5 d-flex justify-content-around flex-wrap align-items-center w-75">

        <NavLink to={''} className={stylesBtn['btn'] + " mb-3"}>All</NavLink>
        <NavLink to={'specific/men'} className={stylesBtn['btn'] + " mb-3"}>Men</NavLink>
        <NavLink to={'specific/women'} className={stylesBtn['btn'] + " mb-3"}>ًWomen</NavLink>
        <NavLink to={'specific/children'} className={stylesBtn['btn'] + " mb-3"}>Children</NavLink>
        <Link to={'range'} className={stylesBtn['btn'] + " mb-3"}>Range</Link>
      </div>
      <Outlet />
    </section>
  )
}






export const SpecificCategory = () => {
  const data = useLoaderData()
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
    <div>
      <div className="products-container d-flex justify-content-center flex-wrap ">
        {data.map(item => (
          <div key={item.id} className="card-product rounded-3 d-flex flex-column align-items-center p-xxl-4 p-2">
            <div className="img-container-product">
              <img src={item.img} className="card-img-top mb-3 border border-dark rounded-3" alt="..." />
            </div>
            <div className="card-content d-flex flex-column justify-content-between w-100">
              <div className="details w-100 d-flex justify-content-between align-items-start">
                <div className="name d-flex flex-column justify-content-start">
                  <p className="name-of-product">{item.name}</p>
                  <p className="category mt-2">{item.brand}</p>
                </div>
                <div className="d-flex mt-2">
                  {createStars(item.rating).map((img, index) => (
                    <img src={img} alt='...' key={index} />
                  ))}
                </div>
              </div>
              <div className="salary d-flex justify-content-between align-items-center w-100 mt-5 mb-5">
                <p className="price">${item.price}</p>
                <Link to="" className="link-to-product-page">See More Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="page-number">
      </div>
    </div>
  )
}

export async function loaderSpesific({ params }) {
  const { category } = params;
  let res = await fetch('http://localhost:8000/products')
  let data = await res.json()
  let newData = setDataWithImages(data)
  switch (category) {
    case 'men':
      return newData.filter(item => item.category.includes('men'))
    case 'women':
      return newData.filter(item => item.category.includes('women'))
    case 'children':
      return newData.filter(item => item.category.includes('children'))
    default:
      return newData;
  }
}



export function RangeProducts() {
  return (
    <div>
      <div className="ranges-div d-flex justify-content-between p-5">
        <RangeField />
      </div>
      <div className="products-container d-flex justify-content-between flex-wrap">
      </div>
      <div className="page-number">
      </div>
    </div>
  )
}