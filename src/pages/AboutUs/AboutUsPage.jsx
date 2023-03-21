import Footer from "../../components/Footer/Footer";
import Image from "../../components/Image/Image.jsx";
import logoHugo from "../../global/Images/logoHugo.png";
import useSheetAPI from "../../services/google/hooks/useSheetAPI.js";
import { joinCls } from "../../utilities/text.utils.js";

import style from "./style.module.css";
export default function AboutUsPage() {
	const { isLoading: isAboutUsLoading, isFull: isAboutUsFull, data: staffMembers, getMore: getMoreStaffs } = useSheetAPI("AboutUs", "N", "R", { earlyTake: 13 });
	const {
		isIntroductionLoading,
		isIntroductionFull,
		data: introductionContent,
	} = useSheetAPI("AboutUs", "S", "T", {
		earlyTake: 1,
	});

	console.log(staffMembers);

	return (
		<div>
			<div className={joinCls("position-absolute h-100 w-100", style["about-us-bg"])}>
				<Image src={logoHugo} className="position-fixed" />
			</div>
			{introductionContent.map(([introduction, imgUrl]) => (
				<div>
					<div className="container">
						<div className={joinCls("row justify-content-between align-items-center")}>
							<p className={joinCls("text-start col-lg-8 col-12 mt-5 fw-bold f-google-san", style["about-introduction-title"])}>
								Our club was built based on <br />
								<span>LEARN, DEVELOP</span> <br />
								and <span>JOY.</span>
							</p>
							<div className={joinCls("col-lg-9 col-12 my-5 f-google-san text-justify", style["introduction-content"])}>{introduction}</div>
						</div>
					</div>
					<img alt="" src={imgUrl} className="w-100"></img>
				</div>
			))}
			<div className="position-relative container mt-5 z-1">
				<div className={joinCls("pb-3 f-google-san fw-bold text-uppercase text-center text-gradient d-flex justify-content-center", style["about-human-title"])}>
					get to know <br /> hugo's human
				</div>
				<div className={joinCls("text-center row justify-content-center", style["about-human-description"])}>
					<p className={joinCls("mt-3 col-lg-6 col-8")}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
						torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
					</p>
				</div>
				<div className="row justify-content-center align-items-stretch">
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
