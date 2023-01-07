import Image1 from "../../Assets/Img/Screenshot_7.png";
import Image2 from "../../Assets/Img/Screenshot_1.png";

export const scrollSmooth = [
	{ id: 1, text: "Início", link: "#Home" },
	{ id: 2, text: "Sobre Mim", link: "#AboutMe" },
	{ id: 3, text: "Habilidades", link: "#Skills" },
	{ id: 4, text: "Projetos", link: "#Projects" },
	//{ id: 5, text: "Serviços", link: "#Services" },
	//{ id: 6, text: "Contate-me", link: "#ContactMe" },
];

export const frontEndSkills = [
	{ id: 1, img: "Html", text: "Html", message: "Avançado" },
	{ id: 2, img: "Css", text: "Css", message: "Avançado" },
	{ id: 3, img: "JavaScript", text: "JavaScript", message: "Intermediario" },
	{ id: 4, img: "ReactJS", text: "React JS", message: "Básico" },
	{ id: 5, img: "TypeScript", text: "TypeScript", message: "Básico" },
	{ id: 6, img: "Sass", text: "Sass", message: "Intermediario" },
];

export const backEndSkills = [
	{ id: 1, img: "NodeJS", text: "NodeJS", message: "Básico" },
	{ id: 2, img: "Axios", text: "Axios", message: "Básico" },
	{ id: 3, img: "Mysql", text: "Mysql", message: "Básico" },
];

export const projectsCards = [
	{
		id: 1,
		img: Image1,
		text: "Reprodutor de Música",
		link: "https://github.com/Melqui42/Reprodutor-de-musicas",
		date: "16/12/2022",
	},
	{
		id: 2,
		img: Image2,
		text: "Buscador de Cep",
		link: "https://github.com/Melqui42/Buscador-De-Cep",
		date: "16/12/2022",
	},
];
