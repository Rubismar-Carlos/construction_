// Components
import Footer from "<prefix>/components/Footer/Footer";
import Navbar from "<prefix>/components/Navbar/Navbar";

// Style
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.layout_container}>
            <div className={styles.layout_navbar}>
                < Navbar />
            </div>
            <div className={styles.layout_main}>
                {children}
            </div>
            <div className={styles.layout_footer}>
                < Footer />
            </div>
        </div>
    )
}