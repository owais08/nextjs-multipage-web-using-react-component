import styles from '../styles/style.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.additionalLinks}>
                <ul className={styles.additionalLinksUl}>
                    <li className={styles.additionalLinksUlLi}>
                        <Link className={styles.additionalLinksUlLiLink} href="#sitemap">
                            Site Map
                        </Link>
                    </li>
                    <li className={styles.additionalLinksUlLi}>
                        <Link className={styles.additionalLinksUlLiLink} href="#queries">
                            Queries
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.advertisement}>
                <h3 className={styles.advertisementH3}>Advertisement</h3>
                <p>Information on various facilities and services provided by PolySite to attract potential clients and
                    partners.</p>
            </div>
            <div className={styles.contact}>
                <h3>Contact Us</h3>
                <p>Contact information and a form for direct communication with the company.</p>
                <form className={styles.contactForm} action="" method="POST">
                    <input type="text" name="name" placeholder="Your Name" required>
                    </input>
                    <input type="email" name="email" placeholder="Your Email" required>
                    </input>
                    <textarea name="message" placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </footer>
    )
};
export default Footer;