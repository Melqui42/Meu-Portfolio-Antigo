/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
//* Importando o React
import React from "react";

//* Importando SCSS
import Style from "./Style.module.scss";


export default function Button(props) {
	return (
		<a href={props.link} target="_blank" className={Style.Button}>
			{props.children}
		</a>
	);
}
