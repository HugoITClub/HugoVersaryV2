import Carousel from "../../components/Carousel/Carousel";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";
import useSheetAPI from "../../services/google/hooks/useSheetAPI";
import Slider from "../../components/Slider/Slider";
import Image from "../../components/Image/Image";
import { Link } from "react-router-dom";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Footer from "../../components/Footer/Footer";
import PuzzleSvg from "../Home/images/puzzle.svg";
import EclipseDecor1Svg from "../Home/images/eclipse-decor-1.svg";
import EclipseDecor2Svg from "../Home/images/eclipse-decor-2.svg";
import EclipseDecor3Svg from "../Home/images/eclipse-decor-3.svg";
import EclipseDecor4Svg from "../Home/images/eclipse-decor-4.svg";
import RectDecor1Svg from "../Home/images/rect-decor-1.svg";
import RectDecor2Svg from "../Home/images/rect-decor-2.svg";
import RectDecor3Svg from "../Home/images/rect-decor-3.svg";
import logoHugo from "../../global/Images/logoHugo.png";

import style from "./style.module.css";
import Wiggle from "../../components/Wiggle/Wiggle";

export default function BlogsPage() {
	const images = [randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl()];
	const { isLoading: isBlogIntroLoading, isFull: isBlogIntroFull, data: blogIntroData, getMore: getMoreBlogIntro } = useSheetAPI("Blogs", "S", "W", { earlyTake: 8 });

	const { isLoading: isBlogsLoading, isFull: isBlogsFull, data: blogsData, getMore: getMoreBlogsData } = useSheetAPI("Blogs", "M", "R", { earlyTake: 8 });

	const { isLoading: isAcademicLoading, isFull: isAcademicFull, data: academicData, getMore: getMoreAcademicData } = useSheetAPI("Academic", "K", "P", { earlyTake: 8 });

	return (
		<div className="position-relative overflow-hidden">
			<div className={joinCls("position-absolute h-100 w-100", style["bg"])}>
				<Image src={logoHugo} className="position-fixed" />
				<div className={joinCls("position-relative", style["fade"])} />
			</div>
			<Carousel id="BlogIntroCarousel" safeZone intervalTime={500000000} className={style["blog-intro"]}>
				{blogIntroData.map(([id, title, description, imgUrl, contentFileId]) => (
					<div key={id} className="position-relative h-100">
						<div className={joinCls("position-absolute start-0 left-0 w-100 h-50", style["blog-intro-banner"])}>
							<Image key={imgUrl} src={imgUrl} className="w-100 h-100" />
						</div>

						<div className={joinCls("position-absolute start-0 left-0 w-100", style["blog-intro-banner-text"])}>
							<h1 className="text-white ms-5 mt-3">BLOGS</h1>
						</div>

						<div className={joinCls("position-absolute start-0 left-0 w-100 h-100", style["blog-intro-poster"])}>
							<div className="row justify-content-end align-items-center h-100">
								<div className="col-12 col-lg-6 h-100">
									<div className={joinCls("m-3 m-lg-0 me-lg-4 mt-lg-5", style["poster"])}>
										<div className="d-flex justify-content-center align-items-center h-lg-100 w-100 w-lg-auto mx-lg-5 my-lg-3">
											<Wiggle disableHover maxScaleRange={0} maxRotateRange={0} transitionTime={3} className="h-100">
												<Image key={imgUrl} src={imgUrl} className="object-fit-contain mw-100 h-100" />
											</Wiggle>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="container h-100">
							<div className="row position-relative justify-content-start align-items-end h-100">
								<div className="col-12 col-lg-8">
									<div className={joinCls("rounded-3 p-5 mb-5", style["blog-intro-content"])}>
										<Link to="#" className="text-reset text-decoration-none">
											<h2 className="text-uppercase mb-3 f-google-san text-start">{title}</h2>
										</Link>
										<div className={joinCls("f-google-san text-ellipsis fs-5 mt-4", style["blog-intro-content-description"])}>{description}</div>
										<Link to={`/posts/${contentFileId}`} className="fs-6 btn btn-lg btn-outline-gradient text-uppercase rounded-pill px-4 mt-4">
											Read more
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Carousel>

			<div className="container position-relative">
				<div className={joinCls("position-absolute", style["circle-gradient-1"])} />

				<div className="blog-content position-relative mx-4 mx-lg-0">
					<div className={joinCls("text-uppercase text-gradient fw-bold text-center f-google-san display-5", style["blog-content-header"])}>hugo's academic</div>
					<Wiggle className={joinCls("position-absolute", style["puzzle"])}>
						<Image src={PuzzleSvg} />
					</Wiggle>
					<Slider
						items={academicData}
						className="gap-3 mt-5"
						renderItem={([id, title, description, time, imageUrl, contentFileId]) => (
							<Link key={id} to={`/posts/${contentFileId}`} className={joinCls("card text-reset text-decoration-none overflow-hidden", style["blog-item"])}>
								<Image src={imageUrl} className={joinCls("card-img-top p-3", style["blog-item-img"])} />
								<div className="card-body position-relative d-flex flex-column pt-0">
									<small className="d-block text-secondary text-uppercase">{time}</small>
									<h5 className={joinCls("text-ellipsis text-start", style["blog-item-title"])}>{title}</h5>
									<p className={joinCls("text-ellipsis text-start mb-4 flex-grow-1", style["blog-item-description"])}>{description}</p>
									<div className={joinCls("d-flex align-items-center gap-2", style["read-more"])}>
										<h6 className="mb-0">Read more</h6>
										<i className="fa-solid fa-arrow-right" />
									</div>
								</div>
							</Link>
						)}
					/>
				</div>
				<div className="academic-content position-relative">
					<div className={joinCls("position-absolute", style["circle-gradient-2"])} />

					<Wiggle className={joinCls("position-absolute", style["eclipse-1"])}>
						<Image src={EclipseDecor1Svg} />
					</Wiggle>
					<Wiggle className={joinCls("position-absolute", style["eclipse-3"])}>
						<Image src={EclipseDecor3Svg} />
					</Wiggle>
					<Wiggle className={joinCls("position-absolute", style["eclipse-2"])}>
						<Image src={EclipseDecor2Svg} />
					</Wiggle>
					<Wiggle className={joinCls("position-absolute", style["rect-1"])}>
						<Image src={RectDecor1Svg} />
					</Wiggle>
					<Wiggle className={joinCls("position-absolute", style["rect-2"])}>
						<Image src={RectDecor2Svg} />
					</Wiggle>
					<div className={joinCls("text-uppercase text-gradient fw-bold text-center f-google-san display-5 mb-5", style["blog-content-header"])}>hugo blogs</div>
					<div className={joinCls("row g-2 g-md-3 g-lg-5 position-relative", style["academic-content"])}>
						{blogsData.map(([id, title, description, date, imgUrl, contentUrl]) => (
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
						{isBlogsLoading && (
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
					{!isBlogsFull && (
						<div className="row justify-content-center mt-5">
							<div className="col-auto">
								<button className={joinCls("btn btn-lg btn-outline-gradient rounded-pill position-relative", style["see-more-btn"])} onClick={() => getMoreBlogsData(8)}>
									SEE MORE
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
			<Footer className="mt-10" />
		</div>
	);
}
