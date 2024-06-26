import Link from "next/link";
import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            Made with ❤️ by&nbsp;
            <Link href="https://twitter.com/_mehmetpekcan" target="_blank">
                Mehmet Pekcan
            </Link>
        </footer>
    );
}

export default Footer;
