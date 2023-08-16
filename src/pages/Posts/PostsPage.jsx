import { useEffect, useRef } from "react";
import { Link, useMatch } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Image from "../../components/Image/Image";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Wiggle from "../../components/Wiggle/Wiggle";
import useDriveDocAPI from "../../services/google/hooks/useDriveDocAPI.js";
import useSheetAPI from "../../services/google/hooks/useSheetAPI.js";
import { joinCls } from "../../utilities/text.utils";
import EclipseDecor1 from "../Home/images/eclipse-decor-1.svg";
import EclipseDecor2 from "../Home/images/eclipse-decor-2.svg";
import { POSTS_PAGE_PATH } from "./constants";
import style from "./style.module.css";

export default function PostsPage() {
	const contentRef = useRef();

	const {
		params: { fileId },
	} = useMatch(POSTS_PAGE_PATH);
	const { data, isLoading } = useDriveDocAPI(fileId);

	useEffect(() => {
		if (!data) return;

		const contentHtml = contentRef.current;
		const imgElements = contentHtml.querySelectorAll("img");
		imgElements.forEach((imgElement) => {
			const spanElement = imgElement.parentElement;
			if (!imgElement.getAttribute("alt")) {
				spanElement.style.width = "100%";
				spanElement.style.height = "unset";

				imgElement.style.width = "100%";
				imgElement.style.height = "unset";
			}

			spanElement.style.overflow = "visible";
		});
	}, [data]);

	const { data: RecommendPostsData } = useSheetAPI("RecommendPosts-LOCK", "A", "F", { earlyTake: 10 });

	return (
		<div className="bg-white pt-5 position-relative">
			<Wiggle className={joinCls("position-absolute", style["eclipse-decor-1"])}>
				<Image src={EclipseDecor1} />
			</Wiggle>
			<Wiggle className={joinCls("position-absolute", style["eclipse-decor-2"])}>
				<Image src={EclipseDecor2} />
			</Wiggle>
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-lg-7 overflow-auto">
						{isLoading ? (
							<>
								<Skeleton height="2rem" width="70%" />
								<div className="d-flex flex-column gap-3 mt-5">
									{[...Array(2)].map((_, index) => (
										<Skeleton key={index} />
									))}
									<Skeleton width="75%" />
								</div>
								<div className="d-flex flex-column gap-3 mt-5">
									{[...Array(4)].map((_, index) => (
										<Skeleton key={index} />
									))}
									<Skeleton width="75%" />
								</div>
							</>
						) : (
							<div ref={contentRef} dangerouslySetInnerHTML={{ __html: data }} />
						)}
					</div>
					<div className="col-12 col-lg-4 mt-5 mt-lg-0">
						<div className="row">
							<h5>Recommended Posts</h5>
							{RecommendPostsData.map(([id, title, description, date, imgUrl, contentFileId]) => (
								<div className="col-12 flex-column g-3">
									<Link key={id} to={`/posts/${contentFileId}`} className={joinCls("p-2 text-decoration-none", style["post"])}>
										<div className="row align-items-center gx-3">
											<div className="col-5 col-md-6">
												<img src={imgUrl} alt="" className={style["post-image"]} />
											</div>
											<div className="col-7 col-md-6">
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
						</div>
					</div>
				</div>
			</div>
			<Footer className="mt-10 bg-light" />
		</div>
	);
}
