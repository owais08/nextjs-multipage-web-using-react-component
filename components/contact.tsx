import styles from '../styles/style.module.css';
import Link from 'next/link';

const Contact = () => {
    return (
        <section id="contact" className={styles.contactUs}>
            <h2>Contact Us</h2>
            <p>Have questions or need assistance? Contact us today!</p>
            <Link href="contact" className={styles.btn}>
                Contact Us
            </Link>
        </section>
    )
};
export default Contact;