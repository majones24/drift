import Link from "next/link"

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="driftlogo">drift_logo</a>
        <ul>
            <li>
                <Link href="/home">Home</Link>
            </li>
            <li>
                <Link href="/connect">Connect</Link>
            </li>
        </ul>

    </nav>
}