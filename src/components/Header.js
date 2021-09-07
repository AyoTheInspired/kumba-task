import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../appData";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Header() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<Nav className="flex-btw px-3 py-1 text-white">
			<div className="nav__left">
				<h5 className="mb-0">Kumba</h5>
			</div>
			<div
				className={`${
					sidebarOpen && "open__sidebar"
				} nav__mid flex-btw col-lg-5 mx-auto`}>
				<ul className="flex-btw mx-auto col mt-1">
					{navLinks.map((link, index) => {
						const { title, icon, path } = link;
						return (
							<li key={index + 1}>
								<NavLink
									to={path}
									className="nav__link"
									activeClassName="nav__link-active">
									<div className="nav__link-wrap flexed">
										<span className="nav__icon mb-1">{icon}</span>
										<p className="nav__title mb-0"> {title} </p>
									</div>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
			<div
				className="nav__right flexed d-lg-none"
				onClick={() => setSidebarOpen(!sidebarOpen)}>
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
	background: var(--pry-clr-3);
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
	z-index: 50;

	ul {
		li {
			list-style-type: none;
		}

		.nav__link {
			text-decoration: none;
		}

		.nav__icon {
			font-size: 20px;
			color: yellow;
		}

		.nav__title {
			color: yellow;
			font-size: 18px;
			margin-left: 8px;
			font-weight: 500;
		}
	}

	@media (max-width: 768px) {
		position: relative;
		/* width: 100%; */

		.nav__mid {
			position: absolute;
			top: 40px;
			left: 0;
			right: 0;
			margin: 0;
			min-height: calc(100vh - 40px);
			background: green;
			transform: translateX(100%);
			opacity: 0;
			z-index: -100;
			transition: var(--sht-trans);

			ul {
				flex-direction: column;
				height: 100%;
				margin: 0;
			}
		}

		.open__sidebar {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;
