import React from "react";

import Hero from "../sub-section/Hero";
import About from "../sub-section/About";
import PopularItems from "../sub-section/PopularItems";
import Footer from "../sub-section/Footer";

function LandingPage() {
	return (
		<div>
			<Hero />
			<About />
			<PopularItems />
			<Footer />
		</div>
	);
}

export default LandingPage;
