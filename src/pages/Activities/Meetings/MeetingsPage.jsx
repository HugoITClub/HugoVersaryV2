import Carousel from "../../../components/Carousel/Carousel";
import Footer from "../../../components/Footer/Footer";
import Image from "../../../components/Image/Image";
import Skeleton from "../../../components/Skeleton/Skeleton.jsx";
import logoHugo from "../../../global/images/logo-hugo.png";
import useSheetAPI from "../../../services/google/hooks/useSheetAPI.js";
import { joinCls } from "../../../utilities/text.utils.js";
import DotsSvg from "../../Home/images/dots.svg";
import EclipseDecor3Svg from "../../Home/images/eclipse-decor-3.svg";

import Wiggle from "../../../components/Wiggle/Wiggle";
import style from "./style.module.css";

import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import meetingsMessages from "./meetingsMessages";

export default function MeetingsPage() {
	const { isLoading: isMeetingLoading, isFull: isMeetingFull, data: meetings, getMore: getMoreMeeting } = useSheetAPI("Meeting-LOCK", "A", "F", { earlyTake: 8 });
	const { data: mainImg } = useSheetAPI("Meeting-LOCK", "G", "P", { earlyTake: 20 });
	return (
		<div className="overflow-hidden">
			<div className={style["meeting"]}>
				<Carousel id="MeetingIntroCarousel" safeZone intervalTime={50000000} className={style["meeting-intro"]}>
					{mainImg.map(([id, word, quote, author, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6]) => (
						<div key={id} className={joinCls("position-relative h-100", style["meeting-header"])}>
							<div className={joinCls("position-absolute w-100 h-100", style["meeting-header-bg"])}>
								<div className={joinCls("row flex-column", style["meeting-header-sub-bg"])}>
									<div className="col-6 w-100">
										<div className={joinCls("row justify-content-between h-100 w-100 gx-5", style["group-image-row"], style["row-1"])}>
											<div className="col-4">
												<Image src={imgUrl1} className="object-fit-cover w-100" />
											</div>
											<div className="col-4">
												<Image src={imgUrl2} className="object-fit-cover w-100" />
											</div>
											<div className="col-4">
												<Image src={imgUrl3} className="object-fit-cover w-100" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="container h-100">
								<div className="row h-100 position-relative">
									<div className={joinCls("col-12 col-lg-4 order-2 order-lg-1", style["meeting-header-content"])}>
										<div className={joinCls("me-lg-5", style["quotes-area"])}>
											<div className={joinCls("mt-lg-10 f-google-san text-start fw-bold text-dark", style["describe-word"])}>{word}</div>
											<p className={joinCls("mt-3 text-start mb-0", style["quotes"])}>{quote}</p>
											<p className={joinCls(" text-end", style["quotes-author"])}>{author}</p>
										</div>
									</div>
									<div className="col-12 col-lg-8 h-50 h-lg-100 order-1 order-lg-2">
										<div className={joinCls("bg-light", style["group-image"])}>
											<div className={joinCls("row h-50 g-2 g-lg-4 py-2 py-lg-4", style["group-image-row"], style["row-1"])}>
												<div className="d-none d-lg-block col-4 h-100">
													<Image src={imgUrl1} className="object-fit-cover w-100 h-100" />
												</div>
												<div className="d-none d-lg-block col-4 h-100">
													<Image src={imgUrl2} className="object-fit-cover w-100 h-100" />
												</div>
												<div className="d-none d-lg-block col-4 h-100">
													<Image src={imgUrl3} className="object-fit-cover w-100 h-100" />
												</div>

												<div className="d-block d-lg-none col-7 h-100">
													<Image src={imgUrl1} className="object-fit-cover w-100 h-100" />
												</div>
												<div className="d-block d-lg-none col-5 h-100">
													<Image src={imgUrl2} className="object-fit-cover w-100 h-100" />
												</div>
											</div>
											<div className={joinCls("row h-50 g-2 g-lg-4 py-2 py-lg-4", style["group-image-row"], style["row-2"])}>
												<div className="d-none d-lg-block col-4 h-100">
													<Image src={imgUrl4} className="object-fit-cover w-100 h-100" />
												</div>
												<div className="d-none d-lg-block col-4 h-100">
													<Image src={imgUrl5} className="object-fit-cover w-100 h-100" />
												</div>
												<div className="d-none d-lg-block col-4 h-100">
													<Image src={imgUrl6} className="object-fit-cover w-100 h-100" />
												</div>

												<div className="d-block d-lg-none col-5 h-100">
													<Image src={imgUrl4} className="object-fit-cover w-100 h-100" />
												</div>
												<div className="d-block d-lg-none col-7 h-100">
													<Image src={imgUrl5} className="object-fit-cover w-100 h-100" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</Carousel>
				<h1 className="display-5 f-google-san fw-bolder text-center text-gradient text-uppercase my-5">
					<FormattedMessage {...meetingsMessages.meetings} />
				</h1>
				<div id="meeting" className="container position-relative">
					<div className={joinCls("position-absolute h-100 w-100", style["meeting-bg"])}>
						<Image src={logoHugo} className="position-fixed" />
					</div>
					<Wiggle className={joinCls("position-absolute", style["dots"])}>
						<Image src={DotsSvg} />
					</Wiggle>
					<Wiggle className={joinCls("position-absolute", style["eclipse-decor-3"])}>
						<Image src={EclipseDecor3Svg} />
					</Wiggle>
					<div className={joinCls("row g-2 g-md-3 g-lg-5 position-relative", style["meeting-content"])}>
						{meetings.map(([id, title, description, date, imgUrl, contentUrl]) => (
							<div className="col-lg-6 col-md-6 col-12">
								<Link key={id} to={`/posts/${contentUrl}`} className={joinCls("text-decoration-none", style["post"])}>
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
													<FormattedMessage {...meetingsMessages.readMore} />
												</p>
												<p className={joinCls("mb-0 mt-1 ms-2 d-flex text-decoration-none align-items-center justify-content-center text-gradient", style["read-btn"])}>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</div>
								</Link>
							</div>
						))}

						{isMeetingLoading && (
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

					{!isMeetingFull && (
						<div className="row justify-content-center mt-5">
							<div className="col-auto">
								<button className={joinCls("btn btn-lg btn-outline-gradient rounded-pill position-relative", style["see-more-btn"])} onClick={() => getMoreMeeting(8)}>
									<FormattedMessage {...meetingsMessages.seeMore} />
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
