import Link from "next/link"
import styles from "../styles/CNavbar.module.css"


function CNavbar() {
    return <nav className={styles.cnav}>
        <ul>
            <li>
                <Link href="/connect/availability">Availability</Link>
            </li>
            <li>
                <Link href="/connect/groups">Groups</Link>
            </li>
        </ul>

    </nav>
}

export default CNavbar;