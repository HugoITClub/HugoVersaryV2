import Skeleton from "../../../components/Skeleton/Skeleton.jsx";
import useSheetAPI from "../../../services/google/hooks/useSheetAPI.js";
import { joinCls, randomImgUrl } from "../../../utilities/text.utils.js";
import Image from "../../../components/Image/Image";
import Footer from "../../../components/Footer/Footer";
import bananaSvg from "../../Home/components/TeamsSection/images/banana.svg";
import heroesCompanySvg from "../../Home/components/TeamsSection/images/heroes-company.svg";
import powerRangerSvg from "../../Home/components/TeamsSection/images/power-rangers.svg";
import nifflerSvg from "../../Home/components/TeamsSection/images/niffler.svg";
import DotsSvg from "../../Home/images/dots.svg";
import RectDecor3Svg from "../../Home/images/rect-decor-3.svg";
import EclipseDecor3Svg from "../../Home/images/eclipse-decor-3.svg";
import logoHugo from "../../../global/Images/logoHugo.png";
import Carousel from "../../../components/Carousel/Carousel";

import style from "./style.module.css";
import Wiggle from "../../../components/Wiggle/Wiggle";
import Animation from "../../../components/Animation/Animation.jsx";

function EventsPage() {
	const { isLoading: isEventLoading, isFull: isEventFull, data: events, getMore: getMoreEvent } = useSheetAPI("Event", "K", "P", { earlyTake: 8 });
	const { isLoading: isImageLoading, isFull: isImageFull, data: mainImg, getMore: getMoreImg } = useSheetAPI("Event", "R", "T", { earlyTake: 8 });
	return (
		<div className="overflow-hidden">
			<div className="event">
				<Carousel id="EventsIntroCarousel" safeZone intervalTime={5000} className={style["event-intro"]}>
					{mainImg.map(([id, eventName, imgUrl]) => (
						<div key={id} className={joinCls("position-relative", style["header-pic"])}>
							<Image src={imgUrl} className="object-fit-cover w-100 h-100" />
							<Animation animation={[{ name: "fadeInRight" }]}>
								<h1 className={joinCls("text-outline-primary text-start fw-bolder f-lato position-absolute", style["event-name"])}>{eventName}</h1>
							</Animation>
						</div>
					))}
				</Carousel>
				<h1 className="display-5 f-montserrat fw-bolder text-center text-gradient text-uppercase my-5">events</h1>
				<div id="event" className={joinCls("container position-relative", style["event"])}>
					<div className={joinCls("position-absolute h-100 w-100", style["event-bg"])}>
						<Image src={logoHugo} className="position-fixed" />
					</div>
					<Wiggle className={joinCls("position-absolute", style["dots"])}>
						<Image src={DotsSvg} />
					</Wiggle>
					<Wiggle className={joinCls("position-absolute", style["rect-decor-3"])}>
						<Image src={RectDecor3Svg} />
					</Wiggle>
					<Wiggle className={joinCls("position-absolute", style["eclipse-decor-3"])}>
						<Image src={EclipseDecor3Svg} />
					</Wiggle>
					<div className={joinCls("row g-5 g-md-3 g-lg-5 position-relative", style["event-content"])}>
						{events.map(([id, title, description, date, imgUrl, contentUrl]) => (
							<div className="col-lg-6 col-md-6 col-12">
								<a key={id} href={contentUrl} className={joinCls("text-decoration-none", style["post"])}>
									<div className="row justify-content-around">
										<div className="col-md-6 col-lg-5 p-0 px-sm-2 col-5">
											<img src={imgUrl} alt="" className={style["post-image"]} />
										</div>
										<div className="col-6">
											<div className={joinCls("text-ellipsis f-montserrat fw-bold", style["post-title"])}>{title}</div>
											<div className={joinCls("text-ellipsis", style["post-description"])}>{description}</div>
											<div className={joinCls("text-uppercase mt-2", style["post-date"])}>{date}</div>
											<div className="text-decoration-none d-flex align-items-center mt-1">
												<p className="m-0 fw-bold text-gradient">Read more</p>
												<p className={joinCls("mb-0 mt-1 ms-2 d-flex text-decoration-none align-items-center justify-content-center text-gradient", style["read-btn"])}>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</div>
								</a>
							</div>
						))}

						{isEventLoading && (
							<>
								<div className="col-6">
									<div className={joinCls("text-decoration-none", style["post"])}>
										<div className="row justify-content-around">
											<div className="col-5">
												<Skeleton height="12rem" className="rounded" />
											</div>
											<div className="col-6">
												<Skeleton className="mb-3" height="3rem" />
												<Skeleton className="mb-3" />
												<Skeleton className="mb-3" />
												<Skeleton className="mb-3" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className={joinCls("text-decoration-none", style["post"])}>
										<div className="row justify-content-around">
											<div className="col-5">
												<Skeleton height="12rem" className="rounded" />
											</div>
											<div className="col-6">
												<Skeleton className="mb-3" height="3rem" />
												<Skeleton className="mb-3" />
												<Skeleton className="mb-3" />
												<Skeleton className="mb-3" />
											</div>
										</div>
									</div>
								</div>
							</>
						)}
					</div>

					{!isEventFull && (
						<div className="row justify-content-center mt-5">
							<div className="col-auto">
								<button className={joinCls("btn btn-lg btn-outline-gradient rounded-pill position-relative", style["see-more-btn"])} onClick={() => getMoreEvent(8)}>
									SEE MORE
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
			<Footer className="mt-10 bg-light" />
		</div>
	);
}

export default EventsPage;
