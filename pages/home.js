
import Image from "next/image";
import raft from "../assets/images/Component 1.png"
import styles from "../styles/Landing.module.css"


function HomePage() {

    return (
        <>
            <div classname={styles.container}>
                <div className={styles.div1}>
                    <Image src={raft} alt="raft" className={styles.raft}></Image>
                    <p>Don't drift apart</p>
                </div>
                <div className={styles.p2}>
                    <p>drift connects users by finding availability in each other's schedules and starting group Zoom meetings.</p>
                </div>
                <div className={styles.rsc}>
                    <ul>
                        <li><a href="https://www.netflix.com/" id="netflix" target="_blank" rel="noopener noreferrer">Netflix</a></li>
                        <li><a href="https://www.hulu.com/" id="hulu" target="_blank" rel="noopener noreferrer">Hulu</a></li>
                        <li><a href="https://www.amazon.com/Prime-Video/" id="prime" target="_blank" rel="noopener noreferrer">Prime</a></li>
                        <li><a href="https://www.youtube.com/" id="youtube" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HomePage;