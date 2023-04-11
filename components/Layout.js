import Navbar from "./Navbar";
import styles from "../styles/Navbar.module.css"


function Layout({ children }) {
    return <>
        <Navbar />
        <main>{children}</main>
        <footer className={styles.footer}></footer>
    </>
}

export default Layout;