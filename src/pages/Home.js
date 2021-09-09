import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

function Home() {
	return (
		<Container fluid>
			<Row>
				<Section className="flexed col mx-auto text-white">
					<div className="header__wrap p-3 mx-auto d-flex flex-column justify-content-center align-items-center">
						<p className="header__top text-center">Welcome to</p>
						<h4 className="mb-0 header__bottom text-center">
							Fast Food Station!
						</h4>
					</div>
				</Section>
			</Row>
		</Container>
	);
}

export default Home;

const Section = styled.section`
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
		url("https://res.cloudinary.com/ayotheinspired/image/upload/v1625732177/random-images/hero-bgs_cosh4g.jpg")
			center/cover no-repeat fixed;
	min-height: calc(100vh - 50px);

	.header__wrap {
		background: var(--pry-clr-3);
		min-width: 30%;
		min-height: 30%;
		border-radius: 10px;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
	}

	.header__top {
		font-size: 35px;
		letter-spacing: 1px;
	}

	.header__bottom {
		font-size: 30px;
	}
`;
