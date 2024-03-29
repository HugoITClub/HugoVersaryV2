import Carousel from "../../../components/Carousel/Carousel";
import Footer from "../../../components/Footer/Footer";
import Image from "../../../components/Image/Image";
import Skeleton from "../../../components/Skeleton/Skeleton.jsx";
import logoHugo from "../../../global/images/logo-hugo.png";
import useSheetAPI from "../../../services/google/hooks/useSheetAPI.js";
import { joinCls } from "../../../utilities/text.utils.js";
import DotsSvg from "../../Home/images/dots.svg";
import EclipseDecor3Svg from "../../Home/images/eclipse-decor-3.svg";
import RectDecor3Svg from "../../Home/images/rect-decor-3.svg";

import Wiggle from "../../../components/Wiggle/Wiggle";
import style from "./style.module.css";
import { FormattedMessage } from "react-intl";
import eventsMessages from "./eventsMessages";

function EventsPage() {
	const { isLoading: isEventLoading, isFull: isEventFull, data: events, getMore: getMoreEvent } = useSheetAPI("Event-LOCK", "A", "F", { earlyTake: 8 });
	const { data: mainImg } = useSheetAPI("Event-LOCK", "G", "I", { earlyTake: 8 });
	return (
		<div className="overflow-hidden">
			<div className="event">
				<Carousel id="EventsIntroCarousel" intervalTime={5000} className={style["event-intro"]}>
					{mainImg.map(([id, eventName, imgUrl]) => (
						<div key={id} className={joinCls("position-relative", style["header-pic"])}>
							<Image src={imgUrl} className="object-fit-cover w-100 h-100" />
						</div>
					))}
				</Carousel>

				<h1 className="display-5 f-google-san fw-bolder text-center text-gradient text-uppercase my-5">
					<FormattedMessage {...eventsMessages.events} />
				</h1>
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
					<div className={joinCls("row g-2 g-md-3 g-lg-5 position-relative", style["event-content"])}>
						{events.map(([id, title, description, date, imgUrl, contentUrl]) => (
							<div className="col-lg-6 col-md-6 col-12">
								<a key={id} href={`/posts/${contentUrl}`} className={joinCls("text-decoration-none", style["post"])}>
									<div className="row justify-content-around align-items-center">
										<div className="col-md-6 col-lg-5 p-0 col-5">
											<img src={imgUrl} alt="" className={style["post-image"]} />
										</div>
										<div className="col-6">
											<div className={joinCls("text-ellipsis text-start f-google-san fw-bold", style["post-title"])}>{title}</div>
											<div className={joinCls("text-ellipsis text-start", style["post-description"])}>{description}</div>
											<div className={joinCls("text-uppercase mt-2", style["post-date"])}>{date}</div>
											<div className="text-decoration-none d-flex align-items-center mt-1">
												<p className="m-0 fw-bold text-gradient">
													<FormattedMessage {...eventsMessages.readMore} />
												</p>
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
								<div className="col-12 col-lg-6">
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
								<div className="col-12 col-lg-6">
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
									<FormattedMessage {...eventsMessages.seeMore} />
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
