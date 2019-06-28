import React, { useEffect, useState } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const Nav = (...params) => {
	console.log("params", params);

	console.log("This is the nav!!!!");

	const [active, setactive] = useState("");

	useEffect(() => {
		console.log("Nav:: useEffect --------------------------");
		console.log(window.location.pathname);

		let pathname = "/";

		if (["/about"].indexOf(window.location.pathname) >= 0) {
			pathname = window.location.pathname;
		}

		setactive(pathname);

		return () => {};
	}, [typeof window !== "undefined" && window.location.pathname]);

	return (
		<div className="navbar navbar-expand-sm navbar-light bg-light">
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className={"nav-item" + (active === "/" && " active")}>
						<Link href="/">
							<a className="nav-link">1111 Home</a>
						</Link>
					</li>
					<li className={"nav-item" + (active === "/about" && " active")}>
						<Link href="/about">
							<a className="nav-link">About</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
