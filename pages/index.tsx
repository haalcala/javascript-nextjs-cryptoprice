import React, { useState } from "react";
// import "../styles.scss";
import Time from "../components/Time";
import fetch from "node-fetch";

const Index = props => {
	console.log("props", props);

	const [bpi, setbpi] = useState(props.bpi);

	// setInterval(async () => {
	// 	const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
	// 	const data = await res.json();

	// 	setbpi(data.bpi);
	// }, 10000);

	return (
		<div className="title" style={{ border: "1px solid red", height: "100%", display: "flex" }}>
			<div style={{ border: "1px solid green", margin: "auto", width: "100%" }}>
				Hello Next.js
				<Time />
				BTC price at this time is {bpi && bpi.USD.code} {bpi && bpi.USD.rate}
			</div>
		</div>
	);
};

Index.getInitialProps = async function() {
	const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
	const data = await res.json();

	return {
		bpi: data.bpi
	};
};

export default Index;
