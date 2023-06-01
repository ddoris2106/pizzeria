import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import PizzeriaApp from "./PizzeriaApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<RecoilRoot>
		<PizzeriaApp />
	</RecoilRoot>
);
