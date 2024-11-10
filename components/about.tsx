import styles from '../styles/style.module.css';
import Link from 'next/link';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <h2>About Us</h2>
            <p className={styles.aboutP}>At PolySite, we are dedicated to providing high-quality plastic products that meet your packaging needs.
                Learn more about our mission and values.</p>
            <Link href="about" className={styles.btn}>
                Read More
            </Link>
        </section>
    )
};
export default About;