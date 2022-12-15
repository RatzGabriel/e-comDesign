import React from "react";
import FeaturedRow from "../components/landing/featuredRow/FeaturedRow";
import LandingPageWelcomeText from "../components/landing/LandingPageWelcomeText";
import data from "../data/data.json";

function home() {
	const landingItem = data[3];
	const landinPageText = {
		newTrue: landingItem.new,
		mainText: landingItem.name,
		description: landingItem.description,
		buttonText: "SEE product",
	};

	return (
		<div className="landingPageWelcome">
			<LandingPageWelcomeText landinPageText={landinPageText} />
			<FeaturedRow />
		</div>
	);
}

export default home;
