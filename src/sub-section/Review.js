import React from "react";

function Review({ review }) {
	return (
		<div>
			<img alt={review.alt} />
			<h4>{review.name}</h4>
			<p>{review.review}</p>
		</div>
	);
}

export default Review;
