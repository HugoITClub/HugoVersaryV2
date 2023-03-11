import Skeleton from "../../../components/Skeleton/Skeleton.jsx";
import useSheetAPI from "../../../services/google/hooks/useSheetAPI.js";
import { joinCls, randomImgUrl } from "../../../utilities/text.utils.js";
import Image from "../../../components/Image/Image";
import Footer from "../../../components/Footer/Footer";
import DotsSvg from "../../Home/images/dots.svg";
import RectDecor3Svg from "../../Home/images/rect-decor-3.svg";
import EclipseDecor3Svg from "../../Home/images/eclipse-decor-3.svg";
import logoHugo from "../../../global/Images/logoHugo.png";
import Carousel from "../../../components/Carousel/Carousel";

import style from "./style.module.css";
import Wiggle from "../../../components/Wiggle/Wiggle";

import { Link } from "react-router-dom";
export default function MeetingsPage() {
	const images = [randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl()];
	const clubWords = ["Enthusiastic", "Dynamic", "Energetic"];
	const { isLoading: isMeetingLoading, isFull: isMeetingFull, data: meetings, getMore: getMoreMeeting } = useSheetAPI("Meeting", "K", "P", { earlyTake: 8 });
	const { isLoading: isImageLoading, isFull: isImageFull, data: mainImg, getMore: getMoreImg } = useSheetAPI("Meeting", "Q", "R", { earlyTake: 1 });
	return (
		<div className="overflow-hidden">
			<div className={style["meeting"]}>
				<Carousel id="MeetingIntroCarousel" safeZone intervalTime={50000000} className={style["meeting-intro"]}>
					{clubWords.map((word) => (
						<div key={word} className={joinCls("position-relative h-100", style["meeting-header"])}>
							<div className={joinCls("position-absolute w-100 h-100", style["meeting-header-bg"])}>
								<div className={joinCls("row flex-column", style["meeting-header-sub-bg"])}>
									<div className="col-6 w-100">
										<div className={joinCls("row justify-content-between h-100 w-100 gx-5", style["group-image-row"], style["row-1"])}>
											<div className="col-4">
												<Image src={randomImgUrl()} className="object-fit-cover w-100" />
											</div>
											<div className="col-4">
												<Image src={randomImgUrl()} className="object-fit-cover w-100" />
											</div>
											<div className="col-4">
												<Image src={randomImgUrl()} className="object-fit-cover w-100" />
											</div>
										</div>
									</div>
									{/* <div className="col-6">
										<div className={joinCls("row justify-content-between h-100", style["group-image-row"], style["row-2"])}>
											<div className="col-4">
												<Image src={randomImgUrl()} className="object-fit-cover w-100 h-100" />
											</div>
											<div className="col-4">
												<Image src={randomImgUrl()} className="object-fit-cover w-100 h-100" />
											</div>
											<div className="col-4">
												<Image src={randomImgUrl()} className="object-fit-cover w-100 h-100" />
											</div>
										</div>
									</div> */}
								</div>
							</div>
							<div className="container h-100">
								<div className="row h-100 position-relative">
									<div className={joinCls("col-4 ", style["meeting-header-content"])}>
										<div className={joinCls("me-5", style["quotes-area"])}>
											<div className={joinCls("mt-10 f-montserrat text-start fw-bold text-dark", style["describe-word"])}>{word}</div>
											<p className={joinCls("mt-3 text-start mb-0", style["quotes"])}>"Energy and persistence conquer all things."</p>
											<p className={joinCls(" text-end", style["quotes-author"])}>- Benjamin Franklin.</p>
										</div>
									</div>
									<div className="col-8 h-100">
										<div className={joinCls("bg-light row flex-column", style["group-image"])}>
											<div className="col">
												<div className={joinCls("row justify-content-between h-100", style["group-image-row"], style["row-1"])}>
													<div className="col-4">
														<Image src={randomImgUrl()} className="object-fit-cover w-100" />
													</div>
													<div className="col-4">
														<Image src={randomImgUrl()} className="object-fit-cover w-100" />
													</div>
													<div className="col-4">
														<Image src={randomImgUrl()} className="object-fit-cover w-100" />
													</div>
												</div>
											</div>
											<div className="col">
												<div className={joinCls("row justify-content-between h-100", style["group-image-row"], style["row-2"])}>
													<div className="col-4">
														<Image src={randomImgUrl()} className="object-fit-cover w-100 h-100" />
													</div>
													<div className="col-4">
														<Image src={randomImgUrl()} className="object-fit-cover w-100 h-100" />
													</div>
													<div className="col-4">
														<Image src={randomImgUrl()} className="object-fit-cover w-100 h-100" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</Carousel>
				<h1 className="display-5 f-montserrat fw-bolder text-center text-gradient text-uppercase my-5">meetings</h1>
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
					<div className={joinCls("row g-5 g-md-3 g-lg-5 position-relative", style["meeting-content"])}>
						{meetings.map(([id, title, description, date, imgUrl, contentUrl]) => (
							<div className="col-lg-6 col-md-6 col-12">
								<Link key={id} to={contentUrl} className={joinCls("text-decoration-none", style["post"])}>
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
								</Link>
							</div>
						))}

						{isMeetingLoading && (
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

					{!isMeetingFull && (
						<div className="row justify-content-center mt-5">
							<div className="col-auto">
								<button className={joinCls("btn btn-lg btn-outline-gradient rounded-pill position-relative", style["see-more-btn"])} onClick={() => getMoreMeeting(8)}>
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
