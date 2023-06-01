import React from "react";

import { heroInfo } from "../data/hero_info";

function Hero(props) {
	const { title, images } = heroInfo;

	console.log(images);

	return (
		<div>
			{images.map((image, idx) => (
				<img
					key={idx}
					src={image.image}
					alt={image.alt}
				/>
			))}
			<h1>{title}</h1>
		</div>
	);
}

export default Hero;
