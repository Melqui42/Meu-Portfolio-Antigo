/* eslint-disable react/react-in-jsx-scope */
import ScrollToTop from "react-scroll-to-top";

import { AiOutlineArrowUp } from "react-icons/ai";

export default function ButtonScrollUp() {
	return (
		<ScrollToTop
			smooth
			component={
				<AiOutlineArrowUp
					style={{ color: "#ffffff", fontSize: "1.5rem" }}
				/>
			}
			style={{ borderRadius: "100%", backgroundColor: "#6f77e6" }}
		/>
	);
}
