import React from "react";

// newTrue:Boolean,
// mainText:String,
// description:String,
// buttonText:String

function LandingPageWelcomeText({ landinPageText }) {
	const { newTrue, mainText, description, buttonText } = landinPageText;
	return (
		<div className="landingPageWelcomeText">
			<p className="textTitle">{newTrue ? "NEW PRODUCT" : null}</p>
			<h3 className="textMain">{mainText}</h3>
			<p className="textDescription">{description}</p>
			<div className="buttonCenter">
				<button className="buttonLanding">{buttonText}</button>
			</div>
		</div>
	);
}

export default LandingPageWelcomeText;
