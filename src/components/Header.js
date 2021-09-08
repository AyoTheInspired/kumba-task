import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../appData";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Header() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<Nav className="flex-btw px-3 text-white">
			<div className="nav__left">
				<h5 className="mb-0">Logo</h5>
			</div>
			<div
				className={`${
					sidebarOpen ? "open__sidebar" : "close__sidebar"
				} nav__mid flex-btw col-lg-5 col-md-7 mx-auto my-auto`}>
				<ul className="flex-btw mx-auto col mt-1">
					{navLinks.map((link, index) => {
						const { title, icon, path } = link;
						return (
							<li key={index + 1} onClick={() => setSidebarOpen(false)}>
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
	min-height: 50px;
	max-height: 50px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
	z-index: 100;

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

	.nav__right {
		transition: var(--sht-trans);
		cursor: pointer;

		.sidebar__controls {
			font-size: 20px;
		}
	}

	.nav__link-active .nav__title {
		border-bottom: 1px solid yellow;
	}

	@media (max-width: 768px) {
		position: relative;

		.nav__mid {
			position: absolute;
			top: 40px;
			left: 0;
			width: 100vw;
			background: blue;
			height: calc(100vh - 42px);
			background: var(--pry-clr-3);
			padding: 10px 0;
			transition: var(--sht-trans);

			ul {
				flex-direction: column;
				justify-content: space-around;
				height: 60%;
				margin-bottom: auto;

				li {
					margin-left: auto;
					margin-right: 40px;
				}
			}
		}

		.close__sidebar {
			transform: translateX(-100%);
			opacity: 0;
			z-index: -999;
		}

		.open__sidebar {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;
