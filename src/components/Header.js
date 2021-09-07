import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../appData";

function Header() {
	return (
		<Nav>
			<div className="nav__left">
				<h5 className="mb-0">Kumba</h5>
			</div>
			<div className="nav__mid">
				{navLinks.map((link, index) => {
					const { title, icon, path } = link;

					return (
						<NavLink
							key={index + 1}
							to={path}
							className="nav__link"
							activeClassName="nav__link-active">
							<div className="nav__link-wrap flexed">
								{icon} <p className="nav__link-title mb-0"> {title} </p>
							</div>
						</NavLink>
					);
				})}
			</div>
			<div className="nav__right"></div>
		</Nav>
	);
}

export default Header;

const Nav = styled.nav``;
