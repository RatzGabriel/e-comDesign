import React from "react";

function FeaturedRowItem({ rowItem }) {
	console.log(rowItem);
	return (
		<div>
			{rowItem.name}
			<img alt={rowItem.name} src={rowItem.img}></img>
		</div>
	);
}

export default FeaturedRowItem;
