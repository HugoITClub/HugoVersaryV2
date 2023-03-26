import { useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ABOUT_US_PAGE_PATH } from "../../pages/AboutUs/constants";
import { PROJECT_TEAM_PAGE_PATH } from "../../pages/ProjectTeam/constants";
import { changeLocale } from "../../services/language/actions";
import { EN_LOCALE, VI_LOCALE } from "../../services/language/constants";
import { joinCls } from "../../utilities/text.utils";
import Image from "../Image/Image";
import { generateSpark } from "../Spark/helper";
import Spark from "../Spark/Spark";
import FooterSpark from "./components/FooterSpark/FooterSpark";
import HugoLogoDarkSvg from "./Images/hugo-logo-full-1.svg";
import HugoLogoLightSvg from "./Images/hugo-logo-full-2.svg";
import AmericaFlagSvg from "./Images/america-flag.svg";
import VietnamFlagSvg from "./Images/vietnam-flag.svg";

import style from "./style.module.css";
import { DARK_THEME, LIGHT_THEME } from "../../services/theme/constants";

export default function Footer({ theme = LIGHT_THEME, className, ...props }) {
	const dispatch = useDispatch();
	const locale = useSelector((state) => state.language.locale, shallowEqual);

	const containerRef = useRef();
	const [sparks, setSparks] = useState([]);

	const handleSparkTransitionEnded = (key, event) => {
		const container = event.target.parentElement;
		const newSpark = generateSpark(
			{ from: 64, to: container.clientWidth - 64 },
			{ from: -540, to: -540 },
			{ from: -40, to: 0 },
			{ from: 2.4, to: 5 },
			{ from: 0, to: 360 },
			{ from: 4, to: 16 }
		);

		const sparkIndex = sparks.findIndex((spark) => spark.key === key);
		setSparks([...sparks.slice(0, sparkIndex), ...sparks.slice(sparkIndex + 1), newSpark]);
	};

	useEffect(() => {
		const container = containerRef.current;
		setSparks(
			[...Array(10)].map((item) =>
				generateSpark({ from: 64, to: container.clientWidth - 64 }, { from: -540, to: -540 }, { from: -40, to: 0 }, { from: 2.4, to: 5 }, { from: 0, to: 360 }, { from: 4, to: 16 })
			)
		);
	}, []);

	const themeContent = {
		[DARK_THEME]: {
			logo: HugoLogoLightSvg,
			titleColor: "text-white",
			textColor: "text-light",
			languageBtn: "btn-outline-light",
			bg: "bg-dark",
		},
		[LIGHT_THEME]: {
			logo: HugoLogoDarkSvg,
			titleColor: "text-black",
			textColor: "text-dark",
			languageBtn: "btn-outline-dark",
			bg: "bg-light",
		},
	};

	return (
		<section ref={containerRef} className={joinCls("position-relative", themeContent[theme].bg, className)} {...props}>
			<div className={joinCls("position-absolute bottom-100 left-0 w-100 border-bottom border-2 overflow-hidden", style["sparks-area"])}>
				<div className="position-relative w-100 h-100">
					{sparks.map(({ key, x, yStart, yEnd, size, rotateEnd, transitionTime }) => (
						<Spark
							key={key}
							x={x}
							yStart={yStart}
							yEnd={yEnd}
							size={size}
							rotateEnd={rotateEnd}
							transitionTime={transitionTime}
							onTransitionEnd={(event) => handleSparkTransitionEnded(key, event)}
							sparkComponent={FooterSpark}
						/>
					))}
				</div>
			</div>

			<div className={joinCls("position-relative py-5", style["footer"])}>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-12 ">
							<div className="d-flex flex-column align-items-lg-start align-items-center">
								<Link to="#">
									<Image src={themeContent[theme].logo} width={240} className={joinCls("px-2 mb-2")} />
								</Link>
								<p className={joinCls("mt-3 mb-0 text-center text-lg-start", themeContent[theme].textColor)}>
									This website is a product of Hugo IT club and part of the HUGOVERSARY project to celebrate the 15th birthday of Hugo English Club. This website is to store,
									update and promote the activities and events of Hugo English Club up to the present time.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-12 ">
							<div className={joinCls("d-flex flex-column align-items-lg-start align-items-center", style["staff-area"])}>
								<h3 className={joinCls("text-uppercase mt-3 mb-4", themeContent[theme].titleColor)}>About Us</h3>
								<Link to={ABOUT_US_PAGE_PATH} className={joinCls("text-decoration-none mb-2", themeContent[theme].textColor)}>
									Our Staffs
								</Link>
								<Link to={PROJECT_TEAM_PAGE_PATH} className={joinCls("text-decoration-none mb-2", themeContent[theme].textColor)}>
									HUGOVERSARY Team
								</Link>
							</div>
						</div>
						<div className="col-lg-3 col-12 ">
							<div className={joinCls("d-flex flex-column align-items-lg-start align-items-center", style["contact-area"])}>
								<h3 className={joinCls("text-uppercase mt-3 mb-4", themeContent[theme].titleColor)}>Contact</h3>
								<Link to="#" className={joinCls("text-decoration-none mb-2", themeContent[theme].textColor)}>
									Email: hugoclub.dut@gmail.com
								</Link>
								<Link to="#" className={joinCls("text-decoration-none mb-3", themeContent[theme].textColor)}>
									Phone: +84 981-770-874
								</Link>
								<div className="row align-items-center justify-content-center justify-content-lg-start w-100">
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.facebook.com/HUGOClub"
										className={joinCls("col-2 text-decoration-none fs-3 text-gradient d-flex justify-content-center justify-content-lg-start", style["contact-icon"])}
									>
										<i className="fa-brands fa-facebook"></i>
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.youtube.com/channel/UCmhyu5rOUvECgvA4YEEKnxg"
										className={joinCls("col-2 text-decoration-none fs-3 text-gradient d-flex justify-content-center justify-content-lg-start", style["contact-icon"])}
									>
										<i className="fa-brands fa-youtube"></i>
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.instagram.com/hugoenglishclub/"
										className={joinCls("col-2 text-decoration-none fs-3 text-gradient d-flex justify-content-center justify-content-lg-start", style["contact-icon"])}
									>
										<i className="fa-brands fa-instagram"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-12 mb-3">
							<div className={joinCls("d-flex flex-column align-items-lg-start align-items-center", style["language-area"])}>
								<h3 className={joinCls("text-uppercase mt-3 mb-4", themeContent[theme].titleColor)}>Language</h3>
								<div className={joinCls("dropdown", style["language-btn"])}>
									<div className={joinCls("btn dropdown-toggle d-flex gap-2 align-items-center", themeContent[theme].languageBtn)} data-bs-toggle="dropdown">
										{locale === EN_LOCALE && (
											<>
												<Image src={AmericaFlagSvg} className="me-2" />
												<h6 className="mb-0">English</h6>
											</>
										)}
										{locale === VI_LOCALE && (
											<>
												<Image src={VietnamFlagSvg} className="me-2" />
												<h6 className="mb-0">Vietnamese</h6>
											</>
										)}
									</div>
									<ul className="dropdown-menu">
										<li className="dropdown-item d-flex gap-3 align-items-center" onClick={() => dispatch(changeLocale(EN_LOCALE))}>
											<Image src={AmericaFlagSvg} />
											<h6 className="mb-0">English</h6>
										</li>
										<li className="dropdown-item d-flex gap-3 align-items-center disabled" onClick={() => dispatch(changeLocale(VI_LOCALE))}>
											<Image src={VietnamFlagSvg} />
											<h6 className="mb-0">Vietnamese</h6>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="row justify-content-center">
						<div className="col-auto">
							<p className={joinCls("opacity-25", themeContent[theme].textColor)}>Copyright © 2022 HUGO ENGLISH CLUB</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
