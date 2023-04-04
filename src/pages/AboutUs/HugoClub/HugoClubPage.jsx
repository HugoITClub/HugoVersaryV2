import { FormattedMessage } from "react-intl";
import Footer from "../../../components/Footer/Footer";
import Image from "../../../components/Image/Image.jsx";
import Skeleton from "../../../components/Skeleton/Skeleton";
import Slider from "../../../components/Slider/Slider";
import Wiggle from "../../../components/Wiggle/Wiggle";
import useSheetAPI from "../../../services/google/hooks/useSheetAPI.js";
import { joinCls } from "../../../utilities/text.utils.js";
import EclipseDecor5Svg from "../../Home/images/eclipse-decor-5.svg";
import EclipseDecor6Svg from "../../Home/images/eclipse-decor-6.svg";
import RectDecor1Svg from "../../Home/images/rect-decor-1.svg";
import RectDecor2Svg from "../../Home/images/rect-decor-2.svg";
import RectDecor4Svg from "../../Home/images/rect-decor-4.svg";
import Modal from "../../../components/Modal/Modal";
import hugoClubMessages from "./hugoClubMessages";

import style from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import Animation from "../../../components/Animation/Animation";

export default function AboutUsPage() {
	const { data: staffMembers } = useSheetAPI("AboutUs", "N", "S", { earlyTake: 40 });
	// const {
	// 	isIntroductionLoading,
	// 	isIntroductionFull,
	// 	data: introductionContent,
	// } = useSheetAPI("AboutUs", "S", "T", {
	// 	earlyTake: 1,
	// });

	const { isLoading: isStaffSliderLoading, data: staffSlider } = useSheetAPI("SliderStaff", "F", "G", { earlyTake: 20 });

	const staffImageAreaRef = useRef();
	const [staffsList, setStaffsList] = useState(["2022-2023", "2021-2022", "2021-2020"]);
	const handleStaffClicked = (staff) => {
		const staffIndex = staffsList.findIndex((item) => item === staff);
		setStaffsList([...staffsList.slice(staffIndex), ...staffsList.slice(0, staffIndex)]);
		window.scrollTo({
			top: staffImageAreaRef.current.getBoundingClientRect().top + window.scrollY - 72,
			behavior: "smooth",
		});
	};
	useEffect(() => {
		const newStaffsList = staffMembers.reduce((result, [id, name, imageUrl, title, motto, term]) => {
			if (!result.includes(term)) result.push(term);
			return result;
		}, []);
		setStaffsList(newStaffsList);
	}, [staffMembers]);

	const [isShownModal, setIsShownModal] = useState(false);
	const [currentImgModal, setCurrentImgModal] = useState();
	const handleModalImg = (imgUrl) => {
		setIsShownModal(true);
		setCurrentImgModal(imgUrl);
	};

	const currentStaffMembers = staffMembers.filter(([id, name, imageUrl, title, motto, term]) => term === staffsList[0]);

	return (
		<div className="position-relative overflow-hidden">
			<div className={joinCls("container position-relative", style["about-us-wrap"])}>
				<Wiggle className={joinCls("position-absolute", style["rect-decor-2-2"])}>
					<Image src={RectDecor2Svg} />
				</Wiggle>
				<Wiggle className={joinCls("position-absolute", style["rect-decor-2"])}>
					<Image src={RectDecor2Svg} />
				</Wiggle>

				<div className="row position-relative">
					<Wiggle className={joinCls("position-absolute", style["rect-decor-1"])}>
						<Image src={RectDecor1Svg} />
					</Wiggle>
					<Wiggle className={joinCls("position-absolute", style["rect-decor-1-1"])}>
						<Image src={RectDecor1Svg} />
					</Wiggle>
					<div className={joinCls("col-10 text-start f-crimson-pro", style["about-us-content"])}>
						<FormattedMessage {...hugoClubMessages.header} />
					</div>
				</div>

				<div className="mt-5 mx-4 mx-lg-0">
					{isStaffSliderLoading ? (
						<Slider
							items={[...Array(5)].map((_, index) => index)}
							className="gap-3"
							renderItem={(index) => {
								const MAX_PADDING = 3;
								const PADDING_FACTOR = 4;
								const paddingTop = index % MAX_PADDING;
								const paddingBottom = MAX_PADDING - paddingTop - 1;
								return (
									<div
										key={index}
										className={style["about-us-item"]}
										style={{ paddingTop: `${paddingTop * PADDING_FACTOR}rem`, paddingBottom: `${paddingBottom * PADDING_FACTOR}rem` }}
									>
										<Skeleton className="w-100 h-100 rounded-4" />
									</div>
								);
							}}
						/>
					) : (
						<Slider
							items={staffSlider}
							className="gap-3"
							renderItem={([id, imageUrl], index) => {
								const MAX_PADDING = 3;
								const PADDING_FACTOR = 4;
								const paddingTop = index % MAX_PADDING;
								const paddingBottom = MAX_PADDING - paddingTop - 1;
								return (
									<div
										key={id}
										className={style["about-us-item"]}
										style={{ paddingTop: `${paddingTop * PADDING_FACTOR}rem`, paddingBottom: `${paddingBottom * PADDING_FACTOR}rem` }}
									>
										<Image
											lazy={index < 5}
											src={imageUrl}
											className={joinCls("w-100 h-100 rounded-4 cursor-pointer", style["header-slide-img"])}
											onClick={() => handleModalImg(imageUrl)}
										/>
									</div>
								);
							}}
						/>
					)}
				</div>

				<div className="mt-lg-10 row">
					<div className="col-12">
						<div className={joinCls("f-crimson-pro", style["club-name"])}>Hugo English Club</div>
						<div className={joinCls("text-muted mt-3 mt-lg-5", style["club-description"])}>
							<FormattedMessage {...hugoClubMessages.hugoEnglishClubDescription} />
						</div>
					</div>
				</div>
				<div className="mt-5 mt-lg-10 row position-relative">
					<Wiggle className={joinCls("position-absolute", style["rect-decor-2-3"])}>
						<Image src={RectDecor2Svg} />
					</Wiggle>
					<div className="col-12">
						<div className={joinCls("f-crimson-pro", style["club-name"])}>
							<FormattedMessage {...hugoClubMessages.activeTime} />
						</div>
						<div className={joinCls("text-muted mt-3 mt-lg-5", style["club-description"])}>
							<ul>
								<li>
									<div className="ms-3">
										<FormattedMessage {...hugoClubMessages.meetingTime} />
									</div>
								</li>
								<li>
									<div className="ms-3">
										<FormattedMessage {...hugoClubMessages.meetingVenue} />
									</div>
								</li>
								<li>
									<div className="ms-3">
										<FormattedMessage {...hugoClubMessages.remind} />
									</div>
								</li>
								<li>
									<div className="ms-3">
										<FormattedMessage {...hugoClubMessages.receiveNotifications} />
										<ol>
											<li className="ms-3">
												<FormattedMessage {...hugoClubMessages.notificationFromEmail} />
											</li>
											<li className="ms-3">
												<FormattedMessage {...hugoClubMessages.notificationFromGroup} />
											</li>
										</ol>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="mt-5 mt-lg-10 row position-relative">
					<Wiggle className={joinCls("position-absolute", style["eclipse-decor-6"])}>
						<Image src={EclipseDecor6Svg} />
					</Wiggle>
					<div className="col-12">
						<div className={joinCls("f-crimson-pro", style["club-name"])}>
							<FormattedMessage {...hugoClubMessages.clubActivities} />
						</div>
						<div className={joinCls("mt-5", style["club-description"])}>
							<div className="row justify-content-around">
								<div className="col-12 col-lg-3 fw-bold text-start">
									<FormattedMessage {...hugoClubMessages.weeklyMeeting} />
								</div>
								<div className="col-12 col-lg-9 text-muted">
									<FormattedMessage {...hugoClubMessages.weeklyMeetingDescription} />
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">
									<FormattedMessage {...hugoClubMessages.teamMeeting} />
								</div>
								<div className="col-12 col-lg-9 text-muted">
									<FormattedMessage {...hugoClubMessages.teamMeetingDescription} />
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">
									<FormattedMessage {...hugoClubMessages.teamBuildingEvent} />
								</div>
								<div className="col-12 col-lg-9 text-muted">
									<FormattedMessage {...hugoClubMessages.teamBuildingEventDescription} />
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">
									<FormattedMessage {...hugoClubMessages.collaboration} />
								</div>
								<div className="col-12 col-lg-9 text-muted">
									<FormattedMessage {...hugoClubMessages.collaborationDescription} />
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">
									<FormattedMessage {...hugoClubMessages.englishContest} />
								</div>
								<div className="col-12 col-lg-9 text-muted">
									<FormattedMessage {...hugoClubMessages.englishContestDescription} />
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">
									<FormattedMessage {...hugoClubMessages.camping} />
								</div>
								<div className="col-12 col-lg-9 text-muted">
									<FormattedMessage {...hugoClubMessages.campingDescription} />
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">
									<FormattedMessage {...hugoClubMessages.cultureExchange} />
								</div>
								<div className="col-12 col-lg-9 text-muted">
									<FormattedMessage {...hugoClubMessages.cultureExchangeDescription} />
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">
									<FormattedMessage {...hugoClubMessages.softSkillContest} />
								</div>
								<div className="col-12 col-lg-9 text-muted">
									<FormattedMessage {...hugoClubMessages.softSkillContestDescription} />
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">
									<FormattedMessage {...hugoClubMessages.boardgame} />
								</div>
								<div className="col-12 col-lg-9 text-muted">
									<FormattedMessage {...hugoClubMessages.boardgameDescription} />
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">
									<FormattedMessage {...hugoClubMessages.group} />
								</div>
								<div className="col-12 col-lg-9 text-muted">
									<FormattedMessage {...hugoClubMessages.groupDescription} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div ref={staffImageAreaRef} className="position-relative container mt-10 z-1">
				<Wiggle className={joinCls("position-absolute", style["rect-decor-4"])}>
					<Image src={RectDecor4Svg} />
				</Wiggle>
				<div className={joinCls("text-start position-relative", style["about-human-description"])}>
					<Wiggle className={joinCls("position-absolute", style["eclipse-decor-5"])}>
						<Image src={EclipseDecor5Svg} />
					</Wiggle>

					<div className="row">
						<div className="col-auto">
							<h1 className={joinCls("f-crimson-pro me-5", style["club-name"])}>
								<span className="d-none d-lg-inline">Hugo</span> Staff {staffsList[0]}
							</h1>
						</div>
						<div className="col">
							<div className={joinCls("position-relative overflow-hidden", style["staff-option-list"])}>
								<div className="position-relative row flex-nowrap">
									{staffsList.slice(1).map((staff, index) => (
										<div key={staff + index} className="col-auto">
											<Animation animation={[{ name: "fadeIn" }]}>
												<h1 className={joinCls("f-crimson-pro", style["club-name"])} onClick={() => handleStaffClicked(staff)}>
													{staff}
												</h1>
											</Animation>
										</div>
									))}
								</div>
								<div className={joinCls("position-absolute top-0 end-0", style["fade"])} />
							</div>
						</div>
					</div>

					<div className={joinCls("text-muted mt-5", style["club-description"])}>
						<FormattedMessage {...hugoClubMessages.hugoStaffDescription} />
					</div>
				</div>
				<div className="row justify-content-center align-items-stretch mt-5">
					{currentStaffMembers.slice(0, 1).map(([id, name, imageUrl, title, motto]) => (
						<div key={id} className={joinCls("col-lg-4 col-12 col-md-6")}>
							<div className={joinCls("text-center rounded-3 overflow-hidden h-100", style["item"])}>
								<Image src={imageUrl} />
								<div className="p-2">
									<p className={joinCls("mb-0 f-google-san", style["mem-name"])}>{name}</p>
									<p className={joinCls("f-google-san text-uppercase", style["mem-title"])}>{title}</p>
									<p className={joinCls("f-google-san text-italic", style["mem-motto"])}>{motto}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="row justify-content-center align-items-stretch g-4 mt-4">
					{currentStaffMembers.slice(1).map(([id, name, imageUrl, title, motto, term]) => (
						<div key={id} className={joinCls("col-lg-3 col-12 col-md-6")}>
							<div className={joinCls("text-center rounded-3 overflow-hidden h-100", style["item"])}>
								<Image src={imageUrl} />
								<div className="p-2">
									<p className={joinCls("mb-0 f-google-san", style["mem-name"])}>{name}</p>
									<p className={joinCls("f-google-san text-uppercase", style["mem-title"])}>{title}</p>
									<p className={joinCls("f-google-san text-italic", style["mem-motto"])}>{motto}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer className="mt-10 bg-light" />
			<Modal
				className={joinCls("modal-xl vh-100 py-5", style["header-modal"])}
				contentClassName="bg-transparent h-100"
				isShown={isShownModal}
				onClose={() => setIsShownModal(false)}
			>
				<Image src={currentImgModal} className="h-100" />
			</Modal>
		</div>
	);
}

