import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

function ItemsOrdered({ items }) {
	return (
		<Wrap className="flexed flex-wrap bg-success py-3">
			{!items ? (
				<p> No Items... </p>
			) : (
				items.map((item, index) => {
					const { name, category, price, currency, tax_pct, quantity } = item;

					return (
						<StyledCol lg={4} md={5} sm={8} className="mx-2 my-2 p-3">
							<div className="item__top flex-btw">
								<p className="mb-0 item__name">
									<span className="item__tag">Name: </span>
									{name}{" "}
								</p>

								<p className="mb-0 item__price">{`₹ ${price}`}</p>
							</div>

							<div className="item__mid mt-2 flex-btw">
								<p className="item__tag">Category: </p>
								<p className="mb-0 item__category">{category}</p>
							</div>

							<div className="item__bottom flex-btw">
								<p className="item__tag mb-0">
									<span className="item__tag">Tax: </span> {`${tax_pct}%`}{" "}
								</p>

								<p className="item__tax mb-0"></p>
							</div>
						</StyledCol>
					);
				})
			)}
		</Wrap>
	);
}

export default ItemsOrdered;

const Wrap = styled.div`
	width: 100%;
`;

const StyledCol = styled(Col)`
	background: #fff;
`;
