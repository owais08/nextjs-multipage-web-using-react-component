import styles from '../styles/style.module.css';
import Image from 'next/image';
import b4 from '../images/b4.jpg';
import j2 from '../images/j2.jpg';
import b2 from '../images/b2.jpg';

const Gallery = () => {
    return (
        <section id="gallery" className={styles.gallery}>
            <h2 className={styles.galleryH2}>Gallery</h2>
            <div className={styles.galleryimages}>
                <Image className={styles.galleryimg} src={b2} alt='bottle1'></Image>
                <Image className={styles.galleryimg} src={b4} alt='bottle2'></Image>
                <Image className={styles.galleryimg} src={j2} alt='jar'></Image>
            </div>
        </section>
    )
};
export default Gallery;