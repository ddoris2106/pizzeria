import React from "react";
import { reviewInfo } from "../data/review_info";
import Review from "./Review";

function Testimonial(props) {
	const { title, reviews } = reviewInfo;
	return (
		<div>
			<h3>{title}</h3>
			{reviews.map((review, idx) => {
				return (
					<Review
						review={review}
						key={idx}
					/>
				);
			})}
		</div>
	);
}

export default Testimonial;
