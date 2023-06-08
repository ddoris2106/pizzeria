import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageToRenderState, showCartState } from "../recoil_state";

function Nav() {
	const setPageToRender = useSetRecoilState(pageToRenderState);
	const [showCart, setShowCart] = useRecoilState(showCartState);

	const handleClick = (page) => {
		setPageToRender(page);
	};

	// Opens cart modal on click
	const handleToggle = () => {
		setShowCart(!showCart);
	};

	return (
		<header>
			<ul>
				<li onClick={() => handleClick("menu")}>Menu</li>
				<li onClick={() => handleClick("about")}>About US</li>
				<li onClick={() => handleClick("home")}>PIZZERIA</li>
				{/* Opens cart modal on click */}
				<li onClick={() => handleToggle()}>Cart</li>
			</ul>
		</header>
	);
}

export default Nav;
