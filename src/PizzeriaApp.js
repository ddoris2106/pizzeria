import React from "react";
import { useRecoilValue } from "recoil";

import Nav from "./sub-section/Nav";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import Footer from "./sub-section/Footer";
import { pageToRenderState } from "./recoil_state";

function PizzeriaApp() {
	const currentPageToRender = useRecoilValue(pageToRenderState);

	let page;

	if (currentPageToRender === "home") {
		page = <LandingPage />;
	} else if (currentPageToRender === "menu") {
		page = <MenuPage />;
	} else if (currentPageToRender === "about") {
		// page = <AboutPage />;
	}

	return (
		<div className="App">
			{/* {Cart} */}
			<Nav />
			{page}
			<Footer />
		</div>
	);
}

export default PizzeriaApp;
