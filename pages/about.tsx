import React, { useEffect } from "react";

const AboutView = () => {
	useEffect(() => {
		console.log("AboutView:: useEffect: ");
		return () => {};
	}, []);

	return <div>This is about</div>;
};

export default AboutView;
