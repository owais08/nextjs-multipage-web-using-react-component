import styles from '../styles/style.module.css';
import Image from 'next/image';
import b1 from '../images/b1.jpg';
import j1 from '../images/j1.jpg';
import Link from 'next/link';

const Product_categories = () => {
    return (
        <section id="categories" className={styles.product}>
            <h2 className={styles.productH2}>Product Categories</h2>
            <div className={styles.category}>
                <Image className={styles.categoryimg} src={b1} alt='Bottles_img' >
                </Image>
                <h3>Bottles</h3>
                <p>Explore our collection of plastic bottles.</p>
                <Link href='products/bottles' className={styles.btn}>
                    View Bottles
                </Link>
            </div>
            <div className={styles.category}>
                <Image className={styles.categoryimg} src={j1} alt='Jars_img' >
                </Image>
                <h3>Jars</h3>
                <p>Discover our versatile plastic jars.</p>
                <a href='products/jars' className={styles.btn}>View Jars</a>
            </div>
        </section>
    )
};
export default Product_categories;