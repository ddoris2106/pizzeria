import React from "react";

import { popularItemsInfo } from "../data/popular_items_info";

function PopularItems(props) {
	const { headline, buttonText, landscapeImages, portraitImages } =
		popularItemsInfo;

	return (
		<div>
			<div>
				<img
					src={landscapeImages[0].image}
					alt={landscapeImages[0].alt}
				/>
				<img
					src={portraitImages[0].image}
					alt={portraitImages[0].alt}
				/>
			</div>
			<div>
				<img
					src={landscapeImages[1].image}
					alt={landscapeImages[1].alt}
				/>
				<img
					src={portraitImages[1].image}
					alt={portraitImages[1].alt}
				/>
			</div>
			<div>
				<h3>{headline}</h3>
				<button onClick>{buttonText}</button>
			</div>
			<div>
				<img
					src={landscapeImages[2].image}
					alt={landscapeImages[2].alt}
				/>
				<img
					src={portraitImages[2].image}
					alt={portraitImages[2].alt}
				/>
			</div>
			<div>
				<img
					src={landscapeImages[3].image}
					alt={landscapeImages[3].alt}
				/>
				<img
					src={portraitImages[3].image}
					alt={portraitImages[3].alt}
				/>
			</div>
		</div>
	);
}

export default PopularItems;
