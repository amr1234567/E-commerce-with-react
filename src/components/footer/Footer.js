import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import styles from './footerStyle.module.css'

const Footer = () => {
    return (
        <footer className="d-flex">
            <div className={styles['info'] + " d-flex flex-column"}>
                <h2>
                    <Link to={''}>E-Commerce</Link>
                </h2>
                <p>Complete your style with awesome clothes from us.</p>
                <div className={styles['social-icons'] + " mt-5 d-flex justify-content-around"}>
                    <div className={styles['icon'] + " d-flex align-items-center justify-content-center rounded-3"}>
                        <Link to="#">
                            {/* "fa-brands fa-facebook-f" */}
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                    </div>
                    <div className={styles['icon'] + " d-flex align-items-center justify-content-center rounded-3"}>
                        <Link to={''}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                    </div>
                    <div className={styles['icon'] + " d-flex align-items-center justify-content-center rounded-3"}>
                        <Link to={''}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                    </div>
                    <div className={styles['icon'] + " d-flex align-items-center justify-content-center rounded-3"}>
                        <Link to={''}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles['footer-divs']+" d-flex flex-column"}>
                <h5>Developers</h5>
                <Link to={''}>About</Link>
                <Link to={''}>Contact us</Link>
                <Link to={''}>Support</Link>
                <Link to={''}>Careers</Link>
            </div>
            <div className={styles['footer-divs'] + " d-flex flex-column"}>
                <h5>Quick Link</h5>
                <Link to={''}>Share Location</Link>
                <Link to={''}>Orders Tracking</Link>
                <Link to={''}>Size Guide</Link>
                <Link to={''}>FAQs</Link>
            </div>
            <div className={styles['footer-divs'] + " d-flex flex-column"}>
                <h5>Legal</h5>
                <Link to={''}>Terms &amp; conditions</Link>
                <Link to={''}>Privacy Policy</Link>
            </div>
        </footer>
    );
}

export default Footer;
