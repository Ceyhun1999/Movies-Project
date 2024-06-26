import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./header.module.css";

function Header() {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Link className={styles.logo} href={"/"}>
                    <FaPlayCircle /> NETFILMS
                </Link>
                <nav className={styles.navigationMenu}>
                    <Link href={"/"}>Movies</Link>
                    <Link href={"/"}>Series</Link>
                    <Link href={"/"}>Kids</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
