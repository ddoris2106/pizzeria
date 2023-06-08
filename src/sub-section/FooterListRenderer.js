import React from "react";

function FooterListRenderer({ data }) {
	const handleClick = (page) => {
		console.log(`Load page/subsection ${page}`);
	};

	return (
		<ul>
			<li>{data.sectionTitle}</li>
			{data.sectionItems.map((sectionItem, idx) => {
				return (
					<li onClick={() => handleClick(sectionItem.href)}>
						{sectionItem.name}
					</li>
				);
			})}
		</ul>
	);
}

export default FooterListRenderer;
