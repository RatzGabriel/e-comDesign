import React from "react";
import { Link } from "react-router-dom";
import { companyName, navLinks, rightIcon } from "../../data/headerConfig";
import { GiHamburgerMenu } from "react-icons/gi";
import { uid } from "uid";

function Nav() {
	return (
		<nav className="flex center">
			<div className="flex alignItemsCenter height10vh spaceBetween width100">
				<GiHamburgerMenu className="marginRight1em hideOnDesktop hamburger" />
				<div className="flex alignItemsCenter companyName">
					<p className="bold fs-600 letter-spacing-2 ">{companyName}</p>
				</div>
				<div className=" flex spaceAround width30 hideOnTablet">
					{navLinks.map((navLink) => {
						return (
							<Link key={uid()} className="fs-400 hoverColor" to={navLink.link}>
								{navLink.name}
							</Link>
						);
					})}
				</div>
				<div className="rightIcon">{rightIcon}</div>
				<div className="borderBottom center flex" />
			</div>
		</nav>
	);
}

export default Nav;
