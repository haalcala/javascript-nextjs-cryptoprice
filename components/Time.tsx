import { useState, useEffect } from "react";

const Time = () => {
	const [time, settime] = useState(new Date());

	// setInterval(() => {
	// 	settime(new Date());
	// }, 1000);

	useEffect(() => {
		console.log("mounted!");

		return () => {};
	}, []);

	return <div>{new Date().toString()}</div>;
};

export default Time;
