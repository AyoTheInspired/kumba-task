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

function Profile() {
	const [{ restaurantData }, dispatch] = useStateValue();
	const user = restaurantData?.user;

	const [userData, setUserData] = useState(null);

	const fetchData = async () => {
		const response = await axios
			.get("https://indapi.kumba.io/webdev/assignment")
			.catch((err) => {
				alert(err);
			});
		if (response && response.length !== 0) {
			setUserData(response.data?.user);
		}
		// console.log(userData);
	};

	useEffect(() => {
		fetchData();
		// Object.entries(userData).map(([key, value]) => {
		// 	const { name, id, address } = value;
		// 	console.log(key);
		// });
	}, []);

	// const { name, id, address, phone, about, likes, dislikes } = userData;

	// let user = Object.entries(restaurantData?.user);

	// console.log(user);

	return (
		<Container>
			<Row>
				<Section className="flexed">
					{!restaurantData ? (
						<p className="mb-0 wait__alert">No Data...</p>
					) : (
						<UserWrap className="flex-col p-3 col-lg-6 col-md-8 col-sm-10">
							<div className="user__top">
								<img src="/ayo.jpg" width="100" className="user__img" alt="" />
							</div>

							<div className="user__mid mt-2 flex-btw flex-wrap col-10">
								<p className="mx-auto my-1 user__name ">
									<span className="user__tag">Name: </span> {user.name}
								</p>

								<p className=" mx-auto my-1 user__id ">
									<span className="user__tag">ID: </span> {user.id}
								</p>
							</div>

							<p className="text-center mb-0 my-2">
								<span className="user__tag">
									<FiSmartphone />
								</span>
								{user.phone}
							</p>

							<p className="text-center mb-0 my-2">
								<span className="user__tag">
									<GoLocation />
								</span>
								{userData.address}
							</p>

							<p className="text-center mb-0 my-2">
								<span className="user__tag">Bio: </span>
								{userData.about}
							</p>

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
`;
