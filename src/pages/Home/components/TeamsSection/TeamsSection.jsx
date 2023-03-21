import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../../components/Image/Image";
import { joinCls } from "../../../../utilities/text.utils";
import {
	BANANA,
	BANANA_TEAM_PAGE_PATH,
	HEROES_COMPANY,
	HEROES_COMPANY_TEAM_PAGE_PATH,
	NIFFLER,
	NIFFLER_TEAM_PAGE_PATH,
	POWER_RANGERS,
	POWER_RANGERS_TEAM_PAGE_PATH,
} from "../../../Teams/constants";
import { generateSpark } from "../../../../components/Spark/helper";
import Spark from "../../../../components/Spark/Spark";
import BananaSpark from "./components/BananaSpark/BananaSpark";
import HeroesCompanySpark from "./components/HeroesCompanySpark/HeroesCompanySpark";
import PowerRangersSpark from "./components/PowerRangerSpark/PowerRangerSpark";
import NifflerSpark from "./components/NifflerSpark/NifflerSpark";
import bananaImage from "./images/banana.png";
import bananaSvg from "./images/banana.svg";
import heroesCompanyImage from "./images/heroes-company.png";
import heroesCompanySvg from "./images/heroes-company.svg";
import powerRangersImage from "./images/power-rangers.png";
import powerRangerSvg from "./images/power-rangers.svg";
import nifflerImage from "./images/niffler.png";
import nifflerSvg from "./images/niffler.svg";

import style from "./style.module.css";
import Wiggle from "../../../../components/Wiggle/Wiggle";
import Animation from "../../../../components/Animation/Animation";

const baseOrderedTeamLogoClassNames = [
	joinCls("top-50 start-100 translate-middle", style["active"]),
	joinCls("top-100 start-50 translate-middle"),
	joinCls("top-50 start-0 translate-middle"),
	joinCls("top-0 start-50 translate-middle"),
];

export default function TeamsSection({ className }) {
	const teamMap = {
		[BANANA]: {
			image: bananaImage,
			icon: bananaSvg,
			className: "banana",
			name: "Banana",
			slogan: "We come in bunch",
			description:
				"Are you bored? Are you alone? Don't worry, you have Banana! When you are in Banana Gang, all the boredom and loneliness will disappear. All the members are super kind and careful. You will never be left out. If you need helps, just talk to the members and they are willing to lend you a helping hand. Last but not least, Banana's members have a great sense of humor, they always make you “lmao” and forget all your tiredness.",
			link: BANANA_TEAM_PAGE_PATH,
			sparkComponent: BananaSpark,
		},
		[HEROES_COMPANY]: {
			image: heroesCompanyImage,
			icon: heroesCompanySvg,
			className: "heroes-company",
			name: "Heroes Company",
			slogan: "Stronger together",
			description:
				"When being a part of HC's family, where the elite, multi-talented, scholarship-hunting “heroes” converge, no one will be left out or lost and feel like home. Everyone always cares about each other, shares their feelings and either sorrows or happiness; strives to become stronger and better together. Given that sharing brings members much closer and cozier , Heroes Company is just what people truly want to fulfill their days.",
			link: HEROES_COMPANY_TEAM_PAGE_PATH,
			sparkComponent: HeroesCompanySpark,
		},
		[POWER_RANGERS]: {
			image: powerRangersImage,
			icon: powerRangerSvg,
			className: "power-rangers",
			name: "Power Rangers",
			slogan: "Justice for all",
			description:
				"Each Power Rangers' member has a unique color and that creates a unique team. Despite those differences, we are always willing to support and assist each other to overcome any difficulties, conquer themselves and strive to create meaningful values for our club and for the betterment of society. What makes Power Rangers special is our respect, sympathy, and shared sense of solidarity, which brings happiness and closeness to everyone.",
			link: POWER_RANGERS_TEAM_PAGE_PATH,
			sparkComponent: PowerRangersSpark,
		},
		[NIFFLER]: {
			image: nifflerImage,
			icon: nifflerSvg,
			className: "niffler",
			name: "Niffler",
			slogan: "Friends forever",
			description:
				"For many of the team members, Niffler is truly their second family. It’s a place where everyone can see the closeness and friendliness through the sincere sharing as well as the encouragement and super useful advice of the brothers and sisters in this lovely home. Besides, Niffler accepts and respects each member's unique personality and thoughts, which makes everyone feel comfortable being themselves.",
			link: NIFFLER_TEAM_PAGE_PATH,
			sparkComponent: NifflerSpark,
		},
	};

	const teamCardRef = useRef();
	const [selectedTeamKey, setSelectedTeamKey] = useState(Object.keys(teamMap)[Math.floor(Math.random() * 4)]);
	const [sparks, setSparks] = useState([]);

	const handleSparkTransitionEnded = (key, event) => {
		const container = event.target.parentElement;
		const newSpark = generateSpark(
			{ from: 64, to: container.clientWidth - 64 },
			{ from: -462, to: -462 },
			{ from: -80, to: 20 },
			{ from: 2.4, to: 5 },
			{ from: 0, to: 360 },
			{ from: 4, to: 16 }
		);

		const sparkIndex = sparks.findIndex((spark) => spark.key === key);
		setSparks([...sparks.slice(0, sparkIndex), ...sparks.slice(sparkIndex + 1), newSpark]);
	};

	useEffect(() => {
		const container = teamCardRef.current;
		setSparks(
			[...Array(12)].map((item) =>
				generateSpark({ from: 64, to: container.clientWidth - 64 }, { from: -462, to: -462 }, { from: -80, to: 20 }, { from: 1, to: 2 }, { from: 0, to: 360 }, { from: 4, to: 16 })
			)
		);
	}, []);

	const teamKeys = Object.keys(teamMap);
	const selectedTeamIndex = teamKeys.findIndex((teamKey) => teamKey === selectedTeamKey);
	const handleNextBtnClicked = () => {
		setSelectedTeamKey(teamKeys[(selectedTeamIndex + 1) % teamKeys.length]);
	};

	const teamLogoClassName = teamKeys.reduce((result, teamKey, index) => {
		result[teamKey] = baseOrderedTeamLogoClassNames[index - selectedTeamIndex >= 0 ? index - selectedTeamIndex : index - selectedTeamIndex + teamKeys.length];
		return result;
	}, {});

	return (
		<div className={joinCls("position-relative d-flex align-items-center flex-wrap flex-md-nowrap gap-5", className)}>
			<div className={joinCls("position-absolute", style["circle-gradient"], style[teamMap[selectedTeamKey].className])} />

			<div className={style["wheel"]}>
				<div className="position-relative w-100 h-100">
					<div className={joinCls("position-relative rounded-circle border border-2 border-primary w-100 h-100", style["circle"])} />
					<Image
						src={teamMap[BANANA].image}
						className={joinCls("rounded-pill position-absolute cursor-pointer", style[teamMap[BANANA].className], teamLogoClassName[BANANA])}
						onClick={() => setSelectedTeamKey(BANANA)}
					/>
					<Image
						src={teamMap[HEROES_COMPANY].image}
						className={joinCls("rounded-pill position-absolute cursor-pointer", style[teamMap[HEROES_COMPANY].className], teamLogoClassName[HEROES_COMPANY])}
						onClick={() => setSelectedTeamKey(HEROES_COMPANY)}
					/>
					<Image
						src={teamMap[POWER_RANGERS].image}
						className={joinCls("rounded-pill position-absolute cursor-pointer", style[teamMap[POWER_RANGERS].className], teamLogoClassName[POWER_RANGERS])}
						onClick={() => setSelectedTeamKey(POWER_RANGERS)}
					/>
					<Image
						src={teamMap[NIFFLER].image}
						className={joinCls("rounded-pill position-absolute cursor-pointer", style[teamMap[NIFFLER].className], teamLogoClassName[NIFFLER])}
						onClick={() => setSelectedTeamKey(NIFFLER)}
					/>
				</div>
			</div>
			<div className="flex-grow-1">
				<div ref={teamCardRef} className="position-relative">
					<Animation watching={selectedTeamKey} animation={[{ name: "fadeIn" }]}>
						<Wiggle className={joinCls("position-absolute", style["team-icon"])}>
							<Image src={teamMap[selectedTeamKey].icon} />
						</Wiggle>
					</Animation>
					<div className={joinCls("position-absolute top-0 left-0 w-100 h-100 overflow-hidden", style["sparks"])}>
						<div className="position-relative w-100 h-100">
							{sparks.map(({ key, x, yStart, yEnd, size, rotateEnd, transitionTime }) => (
								<Spark
									key={key}
									sparkComponent={teamMap[selectedTeamKey].sparkComponent}
									x={x}
									yStart={yStart}
									yEnd={yEnd}
									size={size}
									rotateEnd={rotateEnd}
									transitionTime={transitionTime}
									onTransitionEnd={(event) => handleSparkTransitionEnded(key, event)}
								/>
							))}
						</div>
					</div>

					<div className={joinCls("position-relative rounded-4 p-5", style["team-card"])}>
						<Animation watching={selectedTeamKey} animation={[{ name: "fadeIn" }]}>
							<h1 className={joinCls("text-uppercase", style[teamMap[selectedTeamKey].className])}>{teamMap[selectedTeamKey].name}</h1>
							<h2 className="text-uppercase">{teamMap[selectedTeamKey].slogan}</h2>
							<p className={joinCls("mt-3", style["description"])}>“{teamMap[selectedTeamKey].description}”</p>
							<div className="d-flex justify-content-between align-items-center">
								<Link to={teamMap[selectedTeamKey].link}>
									<button className="btn btn-outline-gradient rounded-pill text-uppercase px-4 mt-3">See more</button>
								</Link>
								<div className={joinCls("d-flex align-items-center gap-2 fw-bold cursor-pointer", style["next-btn"])} onClick={handleNextBtnClicked}>
									<span>Next</span>
									<i className="fa-solid fa-arrow-right" />
								</div>
							</div>
						</Animation>
					</div>
				</div>
			</div>
		</div>
	);
}
