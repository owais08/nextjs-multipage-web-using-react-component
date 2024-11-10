import styles from '../styles/style.module.css';


const Section_hero = () => {
    return (
        <section className={styles.hero}>
            <div >
                <h1>Discover Sustainable Plastic Solutions</h1>
                <p>Explore our wide range of eco-friendly plastic and glass products.</p>
                <a href="#categories" className={styles.btn}>Shop Now</a>
            </div>
        </section>
    )
};
export default Section_hero;