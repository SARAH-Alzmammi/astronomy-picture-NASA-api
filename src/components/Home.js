import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';
export default function Home() {
	return (
		<div className="home">
			<h1>Astronomy Picture of the Day</h1>
			<p>
				Each day a different image or photograph of our fascinating universe is featured, along with a brief
				explanation written by a professional astronomer From NASA api
			</p>
			<div className="link-container">
				<Link className="link" to="/ShowPoto">
					Go To The Photo Of The Day !
				</Link>
			</div>
			<Footer />
		</div>
	);
}
