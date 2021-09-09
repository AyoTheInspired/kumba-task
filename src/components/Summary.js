import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Summary({ items, date }) {
	const [totals, setTotals] = useState({ totalBill: 0, totalTax: 0 });

	useEffect(() => {
		let tempBill = 0;
		let tempTax = 0;

		items?.map((item) => {
			tempBill += item.price;
			tempTax += item.tax_pct;

			setTotals({ ...totals, totalBill: tempBill, totalTax: tempTax });
		});
	}, []);

	return (
		<Wrap className="p-4 mb-4 col-lg-6 col-md-8 col-sm-10">
			<h4 className="header mb-3 text-center">Summary</h4>
			<div className="flex-btw mx-auto p-2">
				<p className="mb-0 total__tag">Total Items Purchased: </p>

				<h5 className="total__value mb-0"> {items.length} </h5>
			</div>

			<div className="flex-btw mx-auto p-2">
				<p className="mb-0 total__tag">Total Bill: </p>
				<h5 className="total__value mb-0"> {`₹ ${totals.totalBill}`} </h5>
			</div>

			<div className="flex-btw mx-auto p-2">
				<p className="mb-0 total__tag">Total Tax: </p>
				<h5 className="total__value mb-0">
					₹ {totals.totalBill / totals.totalTax}
				</h5>
			</div>
		</Wrap>
	);
}

export default Summary;

const Wrap = styled.div`
	background: #fff;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);

	.total__tag {
		font-weight: bold;
		font-size: 20px;
	}
`;
