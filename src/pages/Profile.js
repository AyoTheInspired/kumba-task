import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { useStateValue } from "../data-layer/StateProvider";
import { initialState } from "../data-layer/reducer";
// import { useFetchData } from "../data-layer/fetch";
import { GoLocation } from "react-icons/go";
import { FiSmartphone } from "react-icons/fi";
import BottomDiv from "../components/BottomDiv";
import UserTop from "../components/UserTop";

function Profile() {
	const [{ restaurantData }, dispatch] = useStateValue();

	return (
		<Container>
			<Row>
				<Section className="flexed py-5">
					{!restaurantData ? (
						<p className="mb-0 wait__alert">No Data...</p>
					) : (
						<UserWrap className="flex-col p-3 col-lg-6 col-md-8 col-sm-10">
							<div className="user__top">
								<img src="/ayo.jpg" width="" className="user__img" alt="" />
							</div>
							<UserTop />
							<BottomDiv />
						</UserWrap>
					)}
				</Section>
			</Row>
		</Container>
	);
}

export default Profile;

const Section = styled.section`
	min-height: calc(100vh - 50px);
`;

const UserWrap = styled.div`
	background: #fff;
	border-radius: 10px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);

	.user__img {
		object-fit: contain;
		height: 100px;
		border-radius: 50%;
	}
`;
