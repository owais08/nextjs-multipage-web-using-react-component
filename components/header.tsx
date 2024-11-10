import styles from '../styles/style.module.css';
import Image from 'next/image';
import logo from '../logo/logo.png'
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link href={'#'}>
                    <Image className={styles.logoimg} src={logo} alt='photo' ></Image>
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul >
                    <li><Link href="#categories">Categories</Link></li>
                    <li><Link href="#gallery">Gallery</Link></li>
                    <li><Link href="#about">About Us</Link></li>
                    <li><Link href="#contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;