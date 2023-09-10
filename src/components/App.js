import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
        <header className="p-4 w-100 d-flex justify-content-between align-items-center">
          <Link to="#" className="link-danger fw-bold">E-Commerce</Link>
          <div className="buttons d-flex ">
            <Link className="btn btn-dark" to="#" role="button">Sign In</Link>
            <Link className="btn btn-primary" to="#" role="button">Sign Up</Link>
          </div>
        </header>
        <section className="main-section w-100 d-flex p-3 justify-content-around">
          <div className="content ms-5">
            <p className="b">Let's</p>
            <p className="b">Explore</p>
            <p className="decoration b">Unique</p>
            <p className="b">Clothes.</p>
            <p className="parag">Live for Influential and Innovative fashion!</p>
            <Link className="btn btn-dark shop-now" to="#" role="button">Shop Now</Link>
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
            <div className="btn btn-dark mb-3" id="all">All</div>
            <div className="btn btn-light mb-3" id="men">Men</div>
            <div className="btn btn-light mb-3" id="women">ًWomen</div>
            <div className="btn btn-light mb-3" id="children">Children</div>
            <div className="btn btn-secondary mb-3" id="range">Range</div>
          </div>
          <div className="ranges-div display-none justify-content-between p-5 flex-wrap">
          </div>
          <div className="products-container d-flex justify-content-between flex-wrap">
          </div>
          <div className="page-number">
          </div>
        </section>
        <footer className="d-flex flex-wrap">
          <div className="info d-flex flex-column w-xxl-25 w-75">
            <h2>
              <a href>E-Commerce</a>
            </h2>
            <p>Complete your style with awesome clothes from us.</p>
            <div className="mt-5 social-icons d-flex justify-content-around w-xxl-25 w-sm-100">
              <div className="icon d-flex align-items-center justify-content-center rounded-3"><Link to="#"><i className="fa-brands fa-facebook-f" /></Link></div>
              <div className="icon d-flex align-items-center justify-content-center rounded-3 "><a href><i className="fa-brands fa-instagram" /></a></div>
              <div className="icon d-flex align-items-center justify-content-center rounded-3"><a href><i className="fa-brands fa-twitter" /></a></div>
              <div className="icon d-flex align-items-center justify-content-center rounded-3"><a href><i className="fa-brands fa-linkedin-in" /></a></div>
            </div>
          </div>
          <div className="footer-divs d-flex flex-column">
            <h5>Developers</h5>
            <a href>About</a>
            <a href>Contact us</a>
            <a href>Support</a>
            <a href>Careers</a>
          </div>
          <div className="footer-divs d-flex flex-column">
            <h5>Quick Link</h5>
            <a href>Share Location</a>
            <a href>Orders Tracking</a>
            <a href>Size Guide</a>
            <a href>FAQs</a>
          </div>
          <div className="footer-divs d-flex flex-column">
            <h5>Legal</h5>
            <a href>Terms &amp; conditions</a>
            <a href>Privacy Policy</a>
          </div>
        </footer>
      </div>
      
  );
}

export default App;
