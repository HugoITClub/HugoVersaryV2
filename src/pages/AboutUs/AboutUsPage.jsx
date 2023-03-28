import Footer from "../../components/Footer/Footer";
import Image from "../../components/Image/Image.jsx";
import Skeleton from "../../components/Skeleton/Skeleton";
import Slider from "../../components/Slider/Slider";
import Wiggle from "../../components/Wiggle/Wiggle";
import useSheetAPI from "../../services/google/hooks/useSheetAPI.js";
import { joinCls } from "../../utilities/text.utils.js";
import EclipseDecor5Svg from "../Home/images/eclipse-decor-5.svg";
import EclipseDecor6Svg from "../Home/images/eclipse-decor-6.svg";
import RectDecor1Svg from "../Home/images/rect-decor-1.svg";
import RectDecor2Svg from "../Home/images/rect-decor-2.svg";
import RectDecor4Svg from "../Home/images/rect-decor-4.svg";

import style from "./style.module.css";

export default function AboutUsPage() {
	const { isLoading: isAboutUsLoading, isFull: isAboutUsFull, data: staffMembers, getMore: getMoreStaffs } = useSheetAPI("AboutUs", "N", "R", { earlyTake: 13 });
	// const {
	// 	isIntroductionLoading,
	// 	isIntroductionFull,
	// 	data: introductionContent,
	// } = useSheetAPI("AboutUs", "S", "T", {
	// 	earlyTake: 1,
	// });

	const { isLoading: isStaffSliderLoading, isFull: isStaffSliderFull, data: staffSlider, getMore: getMoreStaffSlider } = useSheetAPI("SliderStaff", "F", "G", { earlyTake: 20 });

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
						We are an English Club for <span className="">every students</span> in Da Nang City.
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
										<Image lazy={index < 5} src={imageUrl} className="w-100 h-100 rounded-4" />
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
							Hugo English Club was established in March 2008 by DUT students, with the motto of practicing English in dynamic, fun, and interesting ways. Besides, Hugo members not
							only come from DUT but also come from different universities and colleges in Da Nang, which can give us a lot of opportunities to make new friends. In addition, Hugo
							also organizes extra-curricular activities such as events, competitions, collaboration programs with other clubs, and charity activities,…
						</div>
					</div>
				</div>
				<div className="mt-5 mt-lg-10 row position-relative">
					<Wiggle className={joinCls("position-absolute", style["rect-decor-2-3"])}>
						<Image src={RectDecor2Svg} />
					</Wiggle>
					<div className="col-12">
						<div className={joinCls("f-crimson-pro", style["club-name"])}>Active Time</div>
						<div className={joinCls("text-muted mt-3 mt-lg-5", style["club-description"])}>
							•<span className="text-dark ms-3 fw-bold">Meeting time:</span> 8:00 A.M., every Sunday.
							<br /> •<span className="text-dark ms-3 fw-bold">Meeting venue:</span> Block C’s Yard, in front of room C116, The University of Science and Technology.
							<br /> •
							<span className="text-muted ms-3">
								Any adjustments to our meeting venue due to special events or extra activities will be announced via email or the Hugo English Club group. Therefore, remember to
							</span>
							<span className="text-dark ms-2 fw-bold">check your email inbox and group notifications</span> before every meeting.
							<br /> • <span className="text-dark ms-3 fw-bold">How to receive notifications:</span>
							<br /> <span className="ms-5 text-start"> a. Via meeting announcement email from our club.</span>
							<br /> <span className="ms-5 text-start"> b. Our club’s email address: hugoclub.dut@gmail.com.</span>
							<br />{" "}
							<span className="text-dark ms-5 text-start">
								{" "}
								c. Besides, there will also be announcing posts on the Hugo English Club group with some essential information for the meeting.
							</span>
						</div>
					</div>
				</div>
				<div className="mt-5 mt-lg-10 row position-relative">
					<Wiggle className={joinCls("position-absolute", style["eclipse-decor-6"])}>
						<Image src={EclipseDecor6Svg} />
					</Wiggle>
					<div className="col-12">
						<div className={joinCls("f-crimson-pro", style["club-name"])}>Club's Activities</div>
						<div className={joinCls("mt-5", style["club-description"])}>
							<div className="row justify-content-around">
								<div className="col-12 col-lg-3 fw-bold text-start">Weekly Meeting</div>
								<div className="col-12 col-lg-9 text-muted">
									Every Sunday morning at 8 A.M. with ever-changing topics and formats. In the meeting, you can participate in multiple activities such as: Presenting, Acting, or
									Discussing with stimulating and salutary games.
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">Team Meeting</div>
								<div className="col-12 col-lg-9 text-muted">
									Weekly hosted by teams of Hugo. In these meetings, members can express themselves further with multiple entertainments hosted by team leaders and other members.
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">Team Building Event</div>
								<div className="col-12 col-lg-9 text-muted">
									Extracurricular activities will be hosted at public spaces in order to practice common use English and members’ teamwork skills.
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">Collaboration</div>
								<div className="col-12 col-lg-9 text-muted">Conjoining with other clubs in Danang City.</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">English Contest</div>
								<div className="col-12 col-lg-9 text-muted">
									Members can represent DUT by participating in the National English Olympiad taking place in October annually. During March or April, Hugo will host English
									Competitions to discover potential gems for the Olympiad Team.
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">Camping</div>
								<div className="col-12 col-lg-9 text-muted">Members can participate in Team Camps and Club Camps. Whereas Hugo Camp will be the biggest event annually.</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">Cultural Exchange</div>
								<div className="col-12 col-lg-9 text-muted">Participating in cultural programs with foreigners.</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">Soft-Skill Contest</div>
								<div className="col-12 col-lg-9 text-muted">
									This will usually be a collaboration with other clubs, with the aim to enhance soft skills as well as practice in-use English.
								</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">Boardgame</div>
								<div className="col-12 col-lg-9 text-muted">Recreational activities,...</div>
							</div>
							<div className="row justify-content-around mt-5">
								<div className="col-12 col-lg-3 fw-bold text-start">Group</div>
								<div className="col-12 col-lg-9 text-muted">Movements organized in the official group of Hugo English Club.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="position-relative container mt-10 z-1">
				<Wiggle className={joinCls("position-absolute", style["rect-decor-4"])}>
					<Image src={RectDecor4Svg} />
				</Wiggle>
				<div className={joinCls("text-start row justify-content-center position-relative", style["about-human-description"])}>
					<Wiggle className={joinCls("position-absolute", style["eclipse-decor-5"])}>
						<Image src={EclipseDecor5Svg} />
					</Wiggle>
					<div className={joinCls("f-crimson-pro", style["club-name"])}>Hugo Staff 2022 - 2023</div>
					<div className={joinCls("text-muted mt-3 mt-lg-5", style["club-description"])}>
						To create a joyful playground for every student in Da Nang City who really passionate in English, it takes an electric group of passionate staffs. Get to know the young
						people leading the way at Hugo English Club this year.
					</div>
				</div>
				<div className="row justify-content-center align-items-stretch mt-5">
					{staffMembers.slice(0, 1).map(([id, name, imageUrl, title, motto]) => (
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
					{staffMembers.slice(1).map(([id, name, imageUrl, title, motto]) => (
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
		</div>
	);
}
