import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import Image from "../../components/Image/Image";
import Masonry from "../../components/Masonry/Masonry";
import Modal from "../../components/Modal/Modal";
import Slider from "../../components/Slider/Slider";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";
import { MEETINGS_ACTIVITY_PAGE_PATH } from "../Activities/Meetings/constants";
import { BANANA, HEROES_COMPANY, NIFFLER, POWER_RANGERS, TEAMS_PAGE_PATH } from "./constants";
import Footer from "../../components/Footer/Footer";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

import style from "./style.module.css";
import useSheetAPI from "../../services/google/hooks/useSheetAPI";
import { DARK_THEME } from "../../services/theme/constants";

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

	const { isLoading: isTeamDataLoading, isFull: isTeamDataFull, data: teamData, getMore: getMoreTeamData } = useSheetAPI(sheetNameMap[name], "AE", "AH", { earlyTake: 20 });
	const { isLoading: isTeamIntroLoading, isFull: isTeamIntroFull, data: teamIntro, getMore: getMoreTeamIntro } = useSheetAPI(sheetNameMap[name], "V", "AD", { earlyTake: 1 });
	const {
		isLoading: isTeamActivitiesLoading,
		isFull: isTeamActivitiesFull,
		data: teamActivities,
		getMore: getMoreTeamActivities,
	} = useSheetAPI(sheetNameMap[name], "AI", "AO", { earlyTake: 20 });
	const exploreCategories = [
		{
			title: "Team Meeting",
			description: "Weekly meeting",
			images: Array.from(teamData.map(([meetingPicUrl, campingPicUrl, extraPicUrl, sharingPicUrl]) => meetingPicUrl)),
		},
		{
			title: "Team Camping",
			description: "One of the most interesting activities",
			images: Array.from(teamData.map(([meetingPicUrl, campingPicUrl, extraPicUrl, sharingPicUrl]) => campingPicUrl)),
		},
		{
			title: "Extra Activities",
			description: "Other Activities",
			images: Array.from(teamData.map(([meetingPicUrl, campingPicUrl, extraPicUrl, sharingPicUrl]) => extraPicUrl)),
		},
		{
			title: "Sharing",
			description: "Sharing experiences and knowledge",
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
		<div className="bg-black">
			{teamIntro.map(([id, teamName, teamSlogan, meetingTime, location, logoTeam, topPicUrl, bottomPicUrl, intro]) => (
				<div>
					<section
						className={joinCls("container-fluid d-flex flex-column justify-content-end align-items-center", style["header"])}
						style={{ backgroundImage: `url(${topPicUrl})` }}
					>
						<div className={style["fade"]}></div>
						<div className={joinCls("d-flex flex-column align-items-center", style["overlay"])}>
							<h1 className="text-uppercase">{teamName}</h1>
							<p>{teamSlogan}</p>
							<button className={joinCls("btn d-flex justify-content-center align-items-center rounded-circle", style["icon"])} onClick={handleButtonDown}>
								<span className="fa-solid fa-xl fa-chevron-down"></span>
							</button>
						</div>
					</section>
					<section id="explore" className={joinCls("container", style["explore"])}>
						<h1 className="text-white text-center f-montserrat fw-semibold mt-10">
							Explore <span className={joinCls(style["title"], style[teamMap[name].className])}>{teamName}</span>
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
								<div key={title} className="col-3">
									<div className={joinCls("position-relative overflow-hidden cursor-pointer", style["explore-img-area"])} onClick={() => handleShownExploreImages(images)}>
										<Image src={images[0]} className="d-flex justify-content-center align-items-end rounded" />
										<div className="position-absolute bottom-0 w-100">
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

					<section className="container mt-10">
						<h1 className="display-6 f-montserrat fw-bolder text-white text-center">Recent Activities</h1>
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
												<h3 className="text-start badge text-success text-bg-light text-uppercase px-2 py-2">{label}</h3>
												<h5 className="text-start">{name}</h5>
											</div>
											<p className={joinCls("text-ellipsis text-start", style["card-sub-text"])}>{description}</p>
										</div>
										<p className="text-secondary fw-bold">
											<small className="text-uppercase">{date}</small>
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

						<div className="position-relative w-100 vh-100 mt-10">
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
