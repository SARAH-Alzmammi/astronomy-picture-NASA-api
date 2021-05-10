import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowPhoto.css';
import Footer from './Footer';

export default function NasaPhoto() {
	const [
		photoData,
		setPhotoData
	] = useState(null);

	const apiKey = process.env.REACT_APP_NASA_KEY;
	async function fetchPhoto() {
		const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
		const data = await res.json();
		setPhotoData(data);
	}
	
	useEffect(() => {
		fetchPhoto();
	}, []);

	if (!photoData) return <div />;

	return (
		<div className="container">
			<div className="link-container">
				<Link className="link" to="/" exact>
					Home
				</Link>
			</div>
			<div className="nasa-photo">
				<div className="side2">
					<h1 className="title">{photoData.title}</h1>
					<p className="date">{photoData.date}</p>
					<p className="copyRight">
						Image Credit & Copyright :<span>{photoData.copyright}</span>
					</p>
					<p className="explanation">{photoData.explanation}</p>
				</div>
				{photoData.media_type === 'image' ? (
					<img src={photoData.url} alt={photoData.title} className="image" />
				) : (
					<iframe
						title="space-video"
						src={photoData.url}
						frameBorder="0"
						gesture="media"
						allow="encrypted-media"
						allowFullScreen
						className="nasa-photo"
					/>
				)}
			</div>

			<Footer />
		</div>
	);
}
