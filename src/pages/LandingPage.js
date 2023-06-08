import React from "react";

import Hero from "../sub-section/Hero";
import About from "../sub-section/About";
import PopularItems from "../sub-section/PopularItems";
import Testimonial from "../sub-section/Testimonial";

function LandingPage() {
	return (
		<div>
			<Hero />
			<About />
			<PopularItems />
			<Testimonial />
		</div>
	);
}

export default LandingPage;
