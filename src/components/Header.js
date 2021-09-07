import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../appData";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Header() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<Nav className="flex-btw px-3 py-2">
			<div className="nav__left">
				<h5 className="mb-0">Kumba</h5>
			</div>
			<div className="nav__mid flex-btw col-lg-5 mx-auto">
				<ul className="flex-btw mx-auto col">
					{navLinks.map((link, index) => {
						const { title, icon, path } = link;
						return (
							<li key={index + 1}>
								<NavLink
									to={path}
									className="nav__link"
									activeClassName="nav__link-active">
									<div className="nav__link-wrap flexed">
										{icon} <p className="nav__link-title mb-0"> {title} </p>
									</div>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="nav__right">
				{sidebarOpen ? (
					<FaTimes className="sidebar__controls" />
				) : (
					<GiHamburgerMenu className="sidebar__controls" />
				)}
			</div>
		</Nav>
	);
}

export default Header;

const Nav = styled.nav`
	position: sticky;
	top: 0;
	width: 100%;
	background: blue;

	@media (max-width: 768px) {
		position: relative;
		/* width: 100%; */

		.nav__mid {
			position: absolute;
			top: 40px;
			left: 0;
			right: 0;
			/* width: 99%; */
			margin: 0;
			/* overflow-x: hidden; */
			/* height: 100%; */
			min-height: calc(100vh - 40px);
			background: green;

			ul {
				flex-direction: column;
				height: 100%;
				/* background: red; */
				margin: 0;
			}
		}
	}
`;
