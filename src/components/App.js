import { Link } from "react-router-dom";
import Button from './dashboard/button/Button'
import './app.css';
import styles from './dashboard/button/button.module.css'

function App() {
  return (
    <div className="App">
      <header className="p-4 w-100 d-flex justify-content-between align-items-center">
        <Link to="#" className="fw-bold main-name">E-Commerce</Link>
        <div className="buttons d-flex ">
          <Button className={styles['btn']} link="#" hundleClick={() => { }} text={"Sign In"} />
          <Button className={styles['btn']} link="#" hundleClick={() => { }} text={'Sign Up'} />
        </div>
      </header>
      <section className="main-section w-100 d-flex p-3 justify-content-around">
        <div className="content ms-5">
          <p className="b">Let's</p>
          <p className="b">Explore</p>
          <p className="decoration b">Unique</p>
          <p className="b">Clothes.</p>
          <p className="parag">Live for Influential and Innovative fashion!</p>
          <Button className={' shop-now'} link="#" text={'Shop Now'} hundleClick={() => { }} />
        </div>
        <img src="assets/women/main-photo.png" alt="" />
      </section>
      <section className="products-section d-flex flex-column align-items-center">
        <h2 className="heading-of-products">New Products</h2>
        <p className="discription mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
          sollicitudin aliquam sem.
          Scelerisque duis ultrices sollicitudin
        </p>
        <div className="filter mt-5 d-flex justify-content-around flex-wrap align-items-center w-75">
          <div className={styles['btn'] + " mb-3"} id="all">All</div>
          <div className={styles['btn'] + " mb-3"} id="men">Men</div>
          <div className={styles['btn'] + " mb-3"} id="women">ًWomen</div>
          <div className={styles['btn'] + " mb-3"} id="children">Children</div>
          <div className={styles['btn'] + " mb-3"} id="range">Range</div>
        </div>
        <div className="ranges-div display-none justify-content-between p-5 flex-wrap">
        </div>
        <div className="products-container d-flex justify-content-between flex-wrap">
        </div>
        <div className="page-number">
        </div>
      </section>
      <footer className="d-flex flex-wrap">
        <div className="info d-flex flex-column w-25">
          <h2>
            <a href='/'>E-Commerce</a>
          </h2>
          <p>Complete your style with awesome clothes from us.</p>
          <div className="mt-5 social-icons d-flex justify-content-around w-xxl-25 w-sm-100">
            <div
              className="icon d-flex align-items-center justify-content-center rounded-3">
              <Link to={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  height="1em" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </Link>
            </div>
            <div
              className="icon d-flex align-items-center justify-content-center rounded-3 ">
              <Link to={'/'}>
                <i className="fa-brands fa-instagram" />
              </Link>
            </div>
            <div
              className="icon d-flex align-items-center justify-content-center rounded-3">
              <Link to={'/'}>
                <i className="fa-brands fa-twitter" />
              </Link>
            </div>
            <div
              className="icon d-flex align-items-center justify-content-center rounded-3">
              <Link to={'/'}>
                <i className="fa-brands fa-linkedin-in" />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-divs d-flex flex-column">
          <h5>Developers</h5>
          <a href='/'>About</a>
          <a href='/'>Contact us</a>
          <a href='/'>Support</a>
          <a href='/'>Careers</a>
        </div>
        <div className="footer-divs d-flex flex-column">
          <h5>Quick Link</h5>
          <a href='/'>Share Location</a>
          <a href='/'>Orders Tracking</a>
          <a href='/'>Size Guide</a>
          <a href='/'>FAQs</a>
        </div>
        <div className="footer-divs d-flex flex-column">
          <h5>Legal</h5>
          <a href='/'>Terms &amp; conditions</a>
          <a href='/'>Privacy Policy</a>
        </div>
      </footer>
    </div>

  );
}

export default App;
