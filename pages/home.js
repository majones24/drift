import Link from "next/link";
import { Fragment } from 'react';

function HomePage() {

    return (
        <Fragment>
            <h1>Home</h1>
            <h2>Resources</h2>
            <ul>
                <li><a href="https://www.netflix.com/" id="netflix" className="rscbtn" target="_blank" rel="noopener noreferrer">Netflix</a></li>
                <li><a href="https://www.hulu.com/" id="hulu" className="rscbtn" target="_blank" rel="noopener noreferrer">Hulu</a></li>
                <li><a href="https://www.amazon.com/Prime-Video/" id="prime" className="rscbtn" target="_blank" rel="noopener noreferrer">Prime</a></li>
                <li><a href="https://www.youtube.com/" id="youtube" className="rscbtn" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
        </Fragment>
    )
}

export default HomePage;