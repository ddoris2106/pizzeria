import React from "react";
import { footerInfo } from "../data/footer_info";
import FooterListRenderer from "./FooterListRenderer";

function Footer() {
	const { storeInfo, menu, about, contact } = footerInfo;

	return (
		<footer>
			<div>
				<ul>
					{storeInfo.name}
					{storeInfo.socials.map((social) => {
						return (
							<li>
								<img alt={`Link to ${social.platform} page`} />
							</li>
						);
					})}
				</ul>
				<p>{storeInfo.address}</p>
				<p>{storeInfo.hoursOfServiceHeadline}</p>
				<p>{storeInfo.hoursOfService}</p>
			</div>
			<FooterListRenderer data={menu} />
			<FooterListRenderer data={about} />
			<FooterListRenderer data={contact} />
		</footer>
	);
}

export default Footer;
