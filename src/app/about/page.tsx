import styles from '../../../styles/style.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <h2>About Us</h2>
            <p>At PolySite, we are dedicated to providing high-quality plastic products that meet your packaging needs.
                Learn more about our mission and values.</p>
            <a href="/" className={styles.btn}>Back</a>
        </section>
    )
}
export default About;