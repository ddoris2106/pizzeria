import { atom, selector } from "recoil";

const pageToRenderState = atom({
	key: "PageToRender",
	default: "home",
});

const showCartState = atom({
	key: "ShowCart",
	default: false,
});

export { pageToRenderState, showCartState };
