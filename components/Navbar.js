import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import union from "../assets/images/Union.png"

export default function Navbar() {


    return <nav className={styles.nav}>
        <Image src={union} alt="drift" href="/home" className={styles.logo}></Image>
        <ul>
            <li>
                <Link href="/home">Home</Link>
            </li>
            <li>
                <Link href="/connect/connectPage">Connect</Link>
            </li>
        </ul>

    </nav>
}