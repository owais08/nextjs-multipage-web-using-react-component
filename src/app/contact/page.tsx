import styles from '../../../styles/style.module.css';

const Contact = () => {
    return (
        <div>
            <section id="contact" className={styles.contactUs}>
                <h2>Contact Us</h2>
                <p>Have questions or need assistance? Contact us today!</p>
                <a href="/" className={styles.btn}>Back</a>
            </section>

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
        </div>





    )
}
export default Contact;