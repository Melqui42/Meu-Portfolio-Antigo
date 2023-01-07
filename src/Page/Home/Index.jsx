/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable indent */
//* Importando o React
import React from "react";

//* Importando Array de Objetos
import {
	scrollSmooth,
	frontEndSkills,
	backEndSkills,
	projectsCards,
} from "./Date";

//* Importando SCSS
import Style from "./Style.module.scss";

//* Importando Icones
import { MdClose } from "react-icons/md";
import { BiMenu, BiUser, BiCodeCurly } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import {
	BsFillMoonStarsFill,
	BsSunFill,
	BsLinkedin,
	BsGithub,
	BsMouse,
	BsBriefcase,
	BsFolderCheck,
	BsCode,
} from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import {
	AiOutlineCloudDownload,
	AiOutlineArrowDown,
} from "react-icons/ai";

//* Importando Assets -> Img
import Image_1 from "../../Assets/Img/Image-1.png";
import Image_CSS from "../../Assets/Img/css.png";
import Image_HTML from "../../Assets/Img/html.png";
import Image_TYPESCRIPT from "../../Assets/Img/typescript.png";
import Image_AXIOS from "../../Assets/Img/axios.png";

//* Importando Assets -> Svg
import Singles from "../../Assets/Svg/Singles.svg";
import StatisticYear from "../../Assets/Svg/Statistic Year.svg";

//* Importando Components
import Button from "../../Components/Button/Index";
import ButtonScrollUp from "../../Components/ButtonScrollUp/Index";

export default function Home() {
	const handleClick = (e) => {
		e.preventDefault();

		const target = e.target.getAttribute("href");
		const location = document.querySelector(target).offsetTop;

		window.scrollTo({
			left: 0,
			top: location - 5,
		});
	};

	const [menuMobile, setMenuMobile] = React.useState(false);
	const buttonMenuMobile = () => setMenuMobile(!menuMobile);

	const returnImg = (name) => {
		switch (name) {
			case "Html":
				return <img src={Image_HTML} alt="" />;
			case "Css":
				return <img src={Image_CSS} alt="" />;
			case "JavaScript":
				return <SiJavascript className={Style.Icon} />;
			case "ReactJS":
				return <SiReact className={Style.Icon} />;
			case "TypeScript":
				return <img src={Image_TYPESCRIPT} alt="" />;
			case "Sass":
				return <FaSass className={Style.Icon} />;
			case "NodeJS":
				return <SiNodedotjs className={Style.Icon} />;
			case "Axios":
				return <img src={Image_AXIOS} alt="" />;
			case "Mysql":
				return <GrMysql className={Style.Icon} />;
			default:
				break;
		}
	};

	return (
		<>
			<header>
				<nav className={Style.NavContainer}>
					<menu>
						<ul className={Style.List}>
							<li className={Style.Item}>
								<button
									className={Style.ButtonMenuMobile}
									onClick={buttonMenuMobile}
								>
									{!menuMobile ? (
										<BiMenu className={Style.Icon} />
									) : (
										<MdClose className={Style.Icon} />
									)}
								</button>
							</li>
							<li className={Style.Item}>
								<a href="#Home" className={Style.Logo}>
									Melqui Martins
								</a>
							</li>
						</ul>
						<ul
							className={
								!menuMobile
									? Style.HideMenuMobile
									: Style.ShowMenuMobile
							}
						>
							{scrollSmooth.map((Object) => {
								return (
									<li className={Style.Item}>
										<a
											href={Object.link}
											key={Object.id}
											onClick={handleClick}
										>
											{Object.text}
										</a>
									</li>
								);
							})}
						</ul>
						<div className={Style.Toogle}>
							<label className={Style.Switch}>
								<input type="checkbox" />
								<span className={Style.Slider}></span>
								<ul className={Style.List}>
									<li className={Style.Item}>
										<BsFillMoonStarsFill
											className={Style.Icon}
										/>
									</li>
									<li className={Style.Item}>
										<BsSunFill className={Style.Icon} />
									</li>
								</ul>
							</label>
						</div>
					</menu>
				</nav>
			</header>
			<div className={Style.Container}>
				<ButtonScrollUp />
				<section className={Style.SectionHome} id="Home">
					<div className={Style.Content}>
						<ul className={Style.SocialList}>
							<li className={Style.Item}>
								<a href="#" target="_blank">
									<BsLinkedin className={Style.Icon} />
								</a>
							</li>
							<li className={Style.Item}>
								<a href="#" target="_blank">
									<BsGithub className={Style.Icon} />
								</a>
							</li>
							<li className={Style.Item}>
								<a href="#" target="_blank">
									<MdOutlineMailOutline
										className={Style.Icon}
									/>
								</a>
							</li>
						</ul>
						<article>
							<h1>
								Olá, eu sou <span>Melqui Martins!</span>
							</h1>
							<p>
								Olá, me chamo Melquisedeque mas podem me chamar
								de Melqui, tenho 17 anos e iniciei meus estudos
								com programação em 2020 e ao longo desse tempo
								eu tenho estudado tecnologias voltadas para o
								Front End.
							</p>
							<Button link="https://drive.google.com/file/d/1thKLB739E36CVJXTAYWWkEljgq2c3lyp/view?usp=share_link">
								Download CV{" "}
								<AiOutlineCloudDownload
									className={Style.Icon}
								/>
							</Button>
							<a
								href="#AboutMe"
								className={Style.ButtonScroolDown}
							>
								<BsMouse className={Style.Icon} />
								Scroll Down
								<AiOutlineArrowDown className={Style.Icon} />
							</a>
						</article>
					</div>
					<div className={Style.Image}>
						<img src={Image_1} alt="" className={Style.Photo} />
						<img
							src={Singles}
							alt=""
							className={Style.FirstImage}
						/>
						<img
							src={StatisticYear}
							alt=""
							className={Style.SecondImage}
						/>
					</div>
				</section>
				<section className={Style.SectionAboutMe} id="AboutMe">
					<div className={Style.Title}>
						<h1>Sobre Mim</h1>
						<p>~ Introdução ~</p>
					</div>
					<div className={Style.Content}>
						<div className={Style.Image}>
							<img src={Image_1} alt="" className={Style.Photo} />
							<img
								src={Singles}
								alt=""
								className={Style.FirstImage}
							/>
							<img
								src={StatisticYear}
								alt=""
								className={Style.SecondImage}
							/>
						</div>
						<article>
							<ul className={Style.List}>
								<li className={Style.Item}>
									<div className={Style.Card}>
										<BsBriefcase className={Style.Icon} />
										<h1>Experiência</h1>
										<p>2 Anos de estudos</p>
									</div>
								</li>
								<li className={Style.Item}>
									<div className={Style.Card}>
										<BsFolderCheck className={Style.Icon} />
										<h1>Projetos</h1>
										<p>3 + Completados</p>
									</div>
								</li>
								<li className={Style.Item}>
									<div className={Style.Card}>
										<BiUser className={Style.Icon} />
										<h1>Suporte</h1>
										<p>8/5</p>
									</div>
								</li>
							</ul>
							<p className={Style.Text}>
								Olá, me chamo Melquisedeque mas podem me chamar
								de Melqui, tenho 17 anos e iniciei meus estudos
								com programação em 2020 e ao longo desse tempo
								eu tenho estudado tecnologias voltadas para o
								Front End.
							</p>
							<p className={Style.Text}>
								Tenho foco em desenvolvimento com JavaScript,
								ReactJS e Saas, também tenho estudado
								tecnologias voltadas para o Back End como o Node
								JS.
							</p>
							<p className={Style.Text}>
								Me considero ágil para aprender uma nova
								Linguagem de Programação, estou sempre me
								preparando para superar novos desafios e
								concluir meus objetivos e estou ansioso para
								integrar na minha primeira oportunidade de
								trabalho, onde eu posso colher conhecimentos e
								possa aplicar minhas habilidades, se eu pudesse
								me definir em 2 palavras, certamente seria:
								esforçado e otimista.
							</p>
							<Button link="https://drive.google.com/file/d/1thKLB739E36CVJXTAYWWkEljgq2c3lyp/view?usp=share_link">
								Download CV{" "}
								<AiOutlineCloudDownload
									className={Style.Icon}
								/>
							</Button>
						</article>
					</div>
				</section>
				<section className={Style.SectionSkills} id="Skills">
					<div className={Style.Title}>
						<h1>Habilidades</h1>
						<p>~ Tecnologias que uso ~</p>
					</div>
					<article className={Style.Content}>
						<div className={Style.FrontEndContainer}>
							<div className={Style.Title}>
								<BsCode className={Style.Icon} />
								<div>
									<h1>Desenvoldedor Front - End</h1>
									<p>Em 1 ano</p>
								</div>
							</div>
							<ul className={Style.List}>
								{frontEndSkills.map((Object) => {
									return (
										<li className={Style.Item}>
											<div
												className={Style.Card}
												key={Object.id}
											>
												{returnImg(Object.img)}
												<h1>{Object.text}</h1>
												<p>{Object.message}</p>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
						<div className={Style.BackEndContainer}>
							<div className={Style.Title}>
								<BiCodeCurly className={Style.Icon} />
								<div>
									<h1>Desenvoldedor Back - End</h1>
									<p>Em 1 ano</p>
								</div>
							</div>
							<ul className={Style.List}>
								{backEndSkills.map((Object) => {
									return (
										<li className={Style.Item}>
											<div
												className={Style.Card}
												key={Object.id}
											>
												{returnImg(Object.img)}
												<h1>{Object.text}</h1>
												<p>{Object.message}</p>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</article>
				</section>
				<section className={Style.SectionProjects} id="Projects">
					<div className={Style.Title}>
						<h1>Projetos</h1>
						<p>~ Criados por mim ~</p>
					</div>
					<article className={Style.Content}>
						<ul className={Style.List}>
							{projectsCards.map((Object) => {
								return (
									<li className={Style.Item}>
										<a
											href={Object.link}
											key={Object.id}
											target="_blank"
											className={Style.Card}
										>
											<span>{Object.date}</span>
											<img src={Object.img} alt="" />
											<div className={Style.Content}>
												<h1>{Object.text}</h1>
												<p>
													Vizualizar{" "}
													<FiArrowRight
														className={Style.Icon}
													/>
												</p>
											</div>
										</a>
									</li>
								);
							})}
						</ul>
					</article>
				</section>
				{/* <section className={Style.SectionServices} id="Services">
					<div className={Style.Title}>
						<h1>Serviços</h1>
						<p>~ O que eu ofereço ~</p>
					</div>
					<ul className={Style.List}>
						<li className={Style.Item}>
							<button>
								<img src={Service_1} alt="" className={Style.Icon} />
								<h1>Web Design</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
							</button>
						</li> 
						<li className={Style.Item}>
							<button>
								<img src={Service_2} alt="" className={Style.Icon} />
								<h1>Desenvolvimento Web</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
							</button>
						</li>
						<li className={Style.Item}>
							<button>
								<img src={Service_3} alt="" className={Style.Icon} />
								<h1>Desenvolvimento Mobile</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
							</button>
						</li>
					</ul>
				</section> */}
				<section
					className={Style.SectionContactMe}
					id="ContactMe"
				></section>
			</div>
		</>
	);
}
