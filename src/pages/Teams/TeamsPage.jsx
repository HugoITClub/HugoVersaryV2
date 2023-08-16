import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Image from "../../components/Image/Image";
import Masonry from "../../components/Masonry/Masonry";
import Modal from "../../components/Modal/Modal";
import Slider from "../../components/Slider/Slider";
import { joinCls } from "../../utilities/text.utils";
import { BANANA, HEROES_COMPANY, NIFFLER, POWER_RANGERS, TEAMS_PAGE_PATH } from "./constants";

import useSheetAPI from "../../services/google/hooks/useSheetAPI";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import teamsMessages from "./teamsMessages";
import { FormattedMessage } from "react-intl";

const sheetNameMap = {
	[BANANA]: "Banana",
	[HEROES_COMPANY]: "HeroesCompany",
	[POWER_RANGERS]: "PowerRangers",
	[NIFFLER]: "Niffler",
};
const teamMap = {
	[BANANA]: {
		className: "banana",
	},
	[HEROES_COMPANY]: {
		className: "heroes-company",
	},
	[POWER_RANGERS]: {
		className: "power-rangers",
	},
	[NIFFLER]: {
		className: "niffler",
	},
};

export default function TeamsPage() {
	const {
		params: { name },
	} = useMatch(TEAMS_PAGE_PATH);
	const { locale } = useSelector((state) => state.language);

	const { data: teamData } = useSheetAPI(sheetNameMap[name].concat("-LOCK"), "J", "M", { earlyTake: 100 });
	const { data: teamIntro } = useSheetAPI(sheetNameMap[name].concat("-LOCK"), "A", "I", { earlyTake: 1 });
	const { data: teamActivities } = useSheetAPI(sheetNameMap[name].concat("-LOCK"), "N", "T", { earlyTake: 100, earlySkip: 1 });

	const exploreCategories = [
		{
			title: teamsMessages.teamMeetings[locale],
			description: teamsMessages.teamMeetingsDescription[locale],
			images: Array.from(teamData.map(([meetingPicUrl, campingPicUrl, extraPicUrl, sharingPicUrl]) => meetingPicUrl)),
		},
		{
			title: teamsMessages.teamCamping[locale],
			description: teamsMessages.teamCampingDescription[locale],
			images: Array.from(teamData.map(([meetingPicUrl, campingPicUrl, extraPicUrl, sharingPicUrl]) => campingPicUrl)),
		},
		{
			title: teamsMessages.extraActivities[locale],
			description: teamsMessages.extraActivitiesDescription[locale],
			images: Array.from(teamData.map(([meetingPicUrl, campingPicUrl, extraPicUrl, sharingPicUrl]) => extraPicUrl)),
		},
		{
			title: teamsMessages.teamMembers[locale],
			description: teamsMessages.teamMembersDescription[locale],
			images: Array.from(teamData.map(([meetingPicUrl, campingPicUrl, extraPicUrl, sharingPicUrl]) => sharingPicUrl)),
		},
	];

	const handleButtonDown = () => {
		const teamInfo = document.querySelector("#explore");
		teamInfo.scrollIntoView();
	};

	const [isShownModal, setIsShownModal] = useState(false);
	const [currentExploreImages, setCurrentExploreImages] = useState([]);

	const handleShownExploreImages = (images) => {
		setIsShownModal(true);
		setCurrentExploreImages(images);
	};

	return (
		<div className="bg-black overflow-hidden">
			{teamIntro.map(([id, teamName, teamSlogan, meetingTime, location, logoTeam, topPicUrl, bottomPicUrl, intro]) => (
				<div>
					<section
						className={joinCls("container-fluid d-flex flex-column justify-content-end align-items-center", style["header"])}
						style={{ backgroundImage: `url(${topPicUrl})` }}
					>
						<div className={style["fade"]}></div>
						<div className={joinCls("d-flex flex-column align-items-center", style["overlay"])}>
							<h1 className={joinCls("text-uppercase", style["team-name"])}>{teamName}</h1>
							<p>{teamSlogan}</p>
							<button className={joinCls("btn d-flex justify-content-center align-items-center rounded-circle", style["icon"])} onClick={handleButtonDown}>
								<span className="fa-solid fa-xl fa-chevron-down"></span>
							</button>
						</div>
					</section>
					<section id="explore" className={joinCls("container", style["explore"])}>
						<h1 className="text-white text-center f-google-san fw-semibold">
							<FormattedMessage {...teamsMessages.explore} /> <span className={joinCls(style["title"], style[teamMap[name].className])}>{teamName}</span>
						</h1>
						<p className="text-light text-center fst-italic fs-5 mt-5">{intro}</p>
						<div className="row mt-5 gap-5 text-white justify-content-center">
							<div className="col-auto">
								<div className="d-flex gap-2 align-items-center">
									<i className="fa-solid fa-lg fa-clock"></i>
									<p className="mb-0">{meetingTime}</p>
								</div>
							</div>
							<div className="col-auto">
								<div className="d-flex gap-2 align-items-center align-items-center">
									<i className="fa-solid fa-lg fa-location-dot"></i>
									<p className="mb-0">{location}</p>
								</div>
							</div>
						</div>
					</section>
					<section className="container mt-5">
						<div className="row gx-5">
							{exploreCategories.map(({ title, description, images }) => (
								<div key={title} className="col-12 col-md-6 mt-5 col-lg-3">
									<div className={joinCls("position-relative overflow-hidden cursor-pointer", style["explore-img-area"])} onClick={() => handleShownExploreImages(images)}>
										<Image src={images[0]} className="d-flex justify-content-center align-items-end w-100" />
										<div className={joinCls("position-absolute bottom-0 w-100", style["explore-content"])}>
											<div className="position-relative w-100 mx-2">
												<h5 className="position-absolute text-white text-center w-100 mb-2">{title}</h5>
												<p className="text-white text-center mb-3">{description}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					<section className="container mt-10 px-4 px-lg-3">
						<h1 className="display-6 f-google-san fw-bolder text-white text-center">
							<FormattedMessage {...teamsMessages.recentActivities} />
						</h1>
						<Slider
							items={teamActivities}
							className="gap-3 mt-5"
							renderItem={([id, label, name, description, date, imageUrl, contentFileId]) => (
								<Link
									key={id}
									to={`/posts/${contentFileId}`}
									className={joinCls("card text-decoration-none text-bg-dark border-0 rounded-3 overflow-hidden", style["activity-item"])}
								>
									<Image src={imageUrl} className="card-img" />
									<div className="card-img-overlay d-flex flex-column justify-content-end">
										<div className="position-relative">
											<div className={joinCls("position-absolute", style["card-header"])}>
												<h3 className="text-start badge text-secondary text-bg-light text-uppercase px-2 py-2">{label}</h3>
												<h5 className="card-text text-start">{name}</h5>
											</div>
											<p className={joinCls("card-text text-ellipsis text-start", style["card-sub-text"])}>{description}</p>
										</div>
										<p className="card-text text-secondary fw-bold">
											<small className="text-uppercase text-info">{date}</small>
										</p>
									</div>
								</Link>
							)}
						/>
					</section>

					<section className={joinCls("container-fluid mt-10", style["footer"])}>
						<div className="d-flex justify-content-center align-items-center gap-5">
							<div className={style["line-decor"]} />
							<Image src={logoTeam} style={{ width: "80px" }} />
							<div className={style["line-decor"]} />
						</div>

						<div className={joinCls("position-relative w-100", style["bottom-img"])}>
							<Image src={bottomPicUrl} className="w-100 h-100" />
							<div className={joinCls("position-absolute w-100 top-0", style["fade-down"])}></div>
							<div className={joinCls("position-absolute w-100 bottom-0", style["fade-up"])}></div>
						</div>
					</section>
				</div>
			))}

			<Footer theme="dark" className="mt-10" />

			<Modal className="modal-xl" contentClassName="bg-transparent" isShown={isShownModal} onClose={() => setIsShownModal(false)}>
				<Masonry images={currentExploreImages} renderItem={(image) => <Image key={image} src={image} />} gutter={4} />
			</Modal>
		</div>
	);
}
