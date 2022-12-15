import React from "react";
import { uid } from "uid";
import FeaturedRowItem from "./FeaturedRowItem";

import imageHeadPhones from "../../../assets/cart/image-xx99-mark-one-headphones.jpg";
import imageSpeakers from "../../../assets/cart/image-zx9-speaker.jpg";
import imageEarphones from "../../../assets/cart/image-yx1-earphones.jpg";

const rowItems = [
	{
		title: "headphones",
		img: imageHeadPhones,
	},
	{
		title: "speakers",
		img: imageSpeakers,
	},
	{
		title: "earphones",
		img: imageEarphones,
	},
];

function FeaturedRow() {
	return (
		<div className="height50 width100 center flex">
			{rowItems.map((rowItem) => {
				return <FeaturedRowItem key={uid()} rowItem={rowItem} />;
			})}
		</div>
	);
}

export default FeaturedRow;
