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
	const { isLoading: isBlogIntroLoading, isFull: isBlogIntroFull, data: blogIntroData, getMore: getMoreBlogIntro } = useSheetAPI("Blogs", "S", "V", { earlyTake: 8 });

	const { isLoading: isBlogsLoading, isFull: isBlogsFull, data: blogsData, getMore: getMoreBlogsData } = useSheetAPI("Blogs", "M", "R", { earlyTake: 8 });

	const { isLoading: isAcademicLoading, isFull: isAcademicFull, data: academicData, getMore: getMoreAcademicData } = useSheetAPI("Academic", "K", "P", { earlyTake: 8 });

	return (
		<div className="position-relative overflow-hidden">
			<div className={joinCls("position-absolute h-100 w-100", style["bg"])}>
				<Image src={logoHugo} className="position-fixed" />
				<div className={joinCls("position-relative", style["fade"])} />
			</div>

			<Carousel id="BlogIntroCarousel" safeZone intervalTime={5000} className={style["blog-intro"]}>
				{images.map((image) => (
					<div key={image} className="position-relative h-100">
						<div className={joinCls("position-absolute start-0 left-0 w-100 h-50", style["blog-intro-banner"])}>
							<Image key={image} src={image} className="w-100 h-100" />
						</div>

						<div className={joinCls("position-absolute start-0 left-0 w-100", style["blog-intro-banner-text"])}>
							<h1 className="text-white ms-5 mt-3">EVENT</h1>
						</div>

						<div className={joinCls("position-absolute start-0 left-0 w-100 h-100", style["blog-intro-poster"])}>
							<div className="row justify-content-end align-items-center h-100">
								<div className="col-6 h-100">
									<div className={joinCls("me-4 mt-5", style["poster"])}>
										<div className="d-flex justify-content-center align-items-center h-100">
											<Wiggle disableHover maxScaleRange={0} maxRotateRange={0} transitionTime={3} className="h-100">
												<Image key={image} src={image} className="object-fit-contain h-100" />
											</Wiggle>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="container h-100">
							<div className="row position-relative justify-content-start h-100">
								<div className={joinCls("col-8 d-flex align-items-center position-absolute", style["wrap-blog-intro-content"])}>
									<div className={joinCls("rounded-3 p-5", style["blog-intro-content"])}>
										<Link to="#" className="text-reset text-decoration-none">
											<h2 className="text-uppercase mb-3 f-montserrat text-start">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NUNC VULPUTATE LIBERO</h2>
										</Link>
										<div className={joinCls("f-lato text-ellipsis fs-5 mt-4", style["blog-intro-content-description"])}>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
											adipiscing elit. vulputate libero,Nunc vulputate libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero,Nunc vulputate libero.
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero,Nunc vulputate libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Nunc vulputate libero,Nunc vulputate libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero,Nunc vulputate libero. Lorem ipsum
											dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero,Nunc vulputate libero.
										</div>
										<Link to="#" className="fs-6 btn btn-lg btn-outline-gradient text-uppercase rounded-pill px-4 mt-4">
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

				<div className="blog-content position-relative">
					<div className={joinCls("text-uppercase text-gradient fw-bold text-center f-montserrat display-5", style["blog-content-header"])}>hugo's blog</div>
					<Wiggle className={joinCls("position-absolute", style["puzzle"])}>
						<Image src={PuzzleSvg} />
					</Wiggle>
					<Slider
						items={blogsData}
						className="gap-3 mt-5"
						renderItem={([id, title, description, time, imageUrl, contentFileId]) => (
							<Link key={id} to={contentFileId} className={joinCls("card text-reset text-decoration-none overflow-hidden", style["blog-item"])}>
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
					<div className={joinCls("text-uppercase text-gradient fw-bold text-center f-montserrat display-5 mb-5", style["blog-content-header"])}>hugo's academic</div>
					<div className={joinCls("row g-5 g-md-3 g-lg-5 position-relative", style["academic-content"])}>
						{academicData.map(([id, title, description, date, imgUrl, contentUrl]) => (
							<div className="col-lg-6 col-md-6 col-12">
								<Link key={id} to={contentUrl} className={joinCls("text-decoration-none", style["post"])}>
									<div className="row justify-content-around align-items-center">
										<div className="col-md-6 col-lg-5 p-0 col-5">
											<img src={imgUrl} alt="" className={style["post-image"]} />
										</div>
										<div className="col-6">
											<div className={joinCls("text-ellipsis text-start f-montserrat fw-bold", style["post-title"])}>{title}</div>
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
						{isAcademicLoading && (
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
					{!isAcademicFull && (
						<div className="row justify-content-center mt-5">
							<div className="col-auto">
								<button className={joinCls("btn btn-lg btn-outline-gradient rounded-pill position-relative", style["see-more-btn"])} onClick={() => getMoreAcademicData(8)}>
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
