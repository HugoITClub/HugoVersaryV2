import Footer from "../../../components/Footer/Footer";
import Image from "../../../components/Image/Image";
import { joinCls } from "../../../utilities/text.utils";
import EclipseDecor2Svg from "../../Home/images/eclipse-decor-2.svg";
import EclipseDecor3Svg from "../../Home/images/eclipse-decor-3.svg";
import RectDecor2Svg from "../../Home/images/rect-decor-2.svg";
import AnhMinh from "./images/AnhMinh.jpg";
import ellipse10 from "./images/decors/Ellipse10.svg";
import ellipse20 from "./images/decors/Ellipse20.svg";
import ellipse21 from "./images/decors/Ellipse21.svg";
import flowerIcon1 from "./images/decors/flowerIcon1.svg";
import flowerIcon2 from "./images/decors/flowerIcon2.svg";
import quotesIcon from "./images/decors/quotesicon.svg";
import quotesIcon2 from "./images/decors/quotesicon2.svg";
import quotesIcon22 from "./images/decors/quotesIcon22.svg";
import quoteSign1 from "./images/decors/quoteSign1.svg";
import quoteSign2 from "./images/decors/quoteSign2.svg";
import DungPham from "./images/DungPham.jpg";
import HoangDung from "./images/HoangDung.jpg";
import HungVinh from "./images/HungVinh.jpg";
import KimHuynh from "./images/KimHuynh.jpg";
import NganPhung from "./images/NganPhung.jpg";
import NguyenPhuoc from "./images/NguyenPhuoc.jpg";
import QuangLoc from "./images/QuangLoc.jpg";
import TheTran from "./images/TheTran.jpg";
import ThienHuong from "./images/ThienHuong.jpg";
import TienDat from "./images/TienDat.jpg";
import TuanLe from "./images/TuanLe.jpg";
import UyenPhung from "./images/UyenPhung.jpg";
import style from "./style.module.css";

import { FormattedMessage } from "react-intl";
import projectTeamMessages from "./projectTeamMessages";

import Wiggle from "../../../components/Wiggle/Wiggle";
import useSheetAPI from "../../../services/google/hooks/useSheetAPI";

export default function ProjectTeamPage() {
	const { data: imgData } = useSheetAPI("HUGOVERSARY", "E", "H", { earlyTake: 8 });
	return (
		<div className="pt-5 overflow-hidden position-relative">
			{imgData.map(([id, imgUrl1, imgUrl2, imgUrl3]) => (
				<div key={id} className="container">
					<div className={joinCls("position-relative", style["team-introduction"])}>
						<Wiggle className={joinCls("position-absolute", style["flowerIcon1"])}>
							<Image src={flowerIcon1} />
						</Wiggle>
						<Wiggle className={joinCls("position-absolute", style["flowerIcon1-1"])}>
							<Image src={flowerIcon1} />
						</Wiggle>
						<Wiggle className={joinCls("position-absolute", style["flowerIcon2"])}>
							<Image src={flowerIcon2} />
						</Wiggle>
						<Wiggle className={joinCls("position-absolute", style["flowerIcon2-2"])}>
							<Image src={flowerIcon2} />
						</Wiggle>

						<div className={joinCls("f-google-san text-center text-dark", style["team-title"])}>Hugoversary - Hugo English Club Anniversary</div>
						<div className={joinCls("text-center mt-3", style["team-description"])}>
							<FormattedMessage {...projectTeamMessages.teamDescription} />
						</div>
					</div>
					<div className={joinCls("mt-10 position-relative", style["team-member"])}>
						<Wiggle className={joinCls("position-absolute", style["ellipse20"])}>
							<Image src={ellipse20} />
						</Wiggle>
						<Wiggle className={joinCls("position-absolute", style["ellipse20-2"])}>
							<Image src={ellipse20} />
						</Wiggle>
						<Wiggle className={joinCls("position-absolute", style["quotesIcon22"])}>
							<Image src={quotesIcon22} />
						</Wiggle>
						<Wiggle className={joinCls("position-absolute", style["eclipse-decor-2"])}>
							<Image src={EclipseDecor2Svg} />
						</Wiggle>
						<Wiggle className={joinCls("position-absolute", style["ellipse-10-member"])}>
							<Image src={ellipse10} />
						</Wiggle>
						<div className={joinCls("position-relative", style["quotes-2-area"])}>
							<Image className="" src={quotesIcon2} />
							<div className={joinCls("mt-2", style["quotes-2"])}>
								Loved Hugo yesterday, Love Hugo still,
								<br /> Always have, Always will
							</div>
						</div>
						<div className="row align-items-center g-3">
							<div className={style["col-custom"]}>
								<div className="row g-3 justify-content-center">
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={KimHuynh} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Huỳnh Hoàng Thiện Kim</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Data Collector</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={NguyenPhuoc} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Nguyễn Quang Trường Phước</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Data Collector</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={style["col-custom"]}>
								<div className="row g-3 row g-3 justify-content-center">
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={TuanLe} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Lê Phước Anh Tuấn</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Developer</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={HoangDung} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Trần Hoàng Dung</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Business Analyst</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={QuangLoc} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Trương Quang Lộc</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Developer</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={style["col-custom"]}>
								<div className="row g-3 row g-3 justify-content-center">
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={TienDat} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Nguyễn Tiến Đạt</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>UI/UX Designer/Co-Founder</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={DungPham} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Phạm Mạnh Dũng</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Founder</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={ThienHuong} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Trịnh Huỳnh Thiên Hương</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Co-Founder</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={style["col-custom"]}>
								<div className="row g-3 row g-3 justify-content-center">
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={AnhMinh} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Nguyễn Lê Anh Minh</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Developer/Co-Founder</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={NganPhung} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Phùng Lâm Kim Ngân</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Content Writer/Co-Founder</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={HungVinh} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Đặng Hùng Vĩnh</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Developer</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={style["col-custom"]}>
								<div className="row g-3 row g-3 justify-content-center">
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={TheTran} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Trần Quý Thế</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Designer</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={joinCls("col-12")}>
										<div className={joinCls("position-relative", style["project-team-member"])}>
											<Image src={UyenPhung} className="w-100 h-100 object-fit-cover rounded-4" />
											<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}>
												<div className="row h-100 align-items-end">
													<div className="col-12">
														<div className="position-relative flex-grow row flex-column align-items-center justify-content-center pb-3 pb-lg-4">
															<div className={joinCls("text-white text-center", style["member-name"])}>Phùng Ngọc Uyên</div>
															<div className={joinCls("text-info text-center", style["member-role"])}>Content Writer</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={joinCls("position-relative", style["quotes-1-area"])}>
							<Image src={quotesIcon} />
							<div className={joinCls("mt-2", style["quotes-1"])}>
								I have a dream,
								<br /> which is wearing a Hugo shirt on a VTV broadcast.
							</div>
						</div>
					</div>
					<div className={joinCls("", style["team-story"])}>
						<Wiggle className={joinCls("position-absolute", style["ellipse21"])}>
							<Image src={ellipse21} />
						</Wiggle>

						<div className="position-relative row justify-content-between">
							<div className="col-lg-6 col-12">
								<div className={joinCls("fw-bold f-google-san text-black", style["story-title"])}>
									<FormattedMessage {...projectTeamMessages.storyTitle} />
								</div>
								<div className={joinCls("text-start mt-3", style["story-content"])}>
									<FormattedMessage {...projectTeamMessages.storyQuotes} />
									<br />
									<FormattedMessage {...projectTeamMessages.ourStory} />
								</div>
							</div>
							<div className="col-lg-6 col-12">
								<Image src={imgUrl1} className={joinCls("rounded-5 shadow", style["story-img"])} />
							</div>
						</div>
					</div>
					<div className={joinCls("mt-10 position-relative", style["mission-story"])}>
						<Wiggle className={joinCls("position-absolute", style["rect-decor-2-mission"])}>
							<Image src={RectDecor2Svg} />
						</Wiggle>
						<Wiggle className={joinCls("position-absolute", style["eclipse-decor-3"])}>
							<Image src={EclipseDecor3Svg} />
						</Wiggle>
						<div className={joinCls("row justify-content-between", style["mission-wrap"])}>
							<div className="col-lg-6 col-12 d-flex justify-content-center">
								<Image src={imgUrl2} className={joinCls("mt-5 shadow", style["mission-img"])} />
							</div>
							<div className="col-lg-6 col-12">
								<div className={joinCls("fw-bold f-google-san text-black ", style["story-title"])}>
									<FormattedMessage {...projectTeamMessages.missionTitle} />
								</div>
								<div className={joinCls("text-start mt-3", style["story-content"])}>
									<span className={style["project-team-quote"]}>
										<FormattedMessage {...projectTeamMessages.missionQuotes} />
									</span>
									<br /> <FormattedMessage {...projectTeamMessages.missionContent} />
									<ul>
										<li className="mt-3">
											<span className="fw-bold text-black">
												<FormattedMessage {...projectTeamMessages.goViral} />
											</span>
											<br />
											<FormattedMessage {...projectTeamMessages.goViralContent} />
										</li>
										<li className="mt-3">
											<span className="fw-bold text-black">
												<FormattedMessage {...projectTeamMessages.connect} />
											</span>{" "}
											<br />
											<FormattedMessage {...projectTeamMessages.connectContent} />
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="position-relative">
						<Wiggle className={joinCls("position-absolute", style["ellipse-10"])}>
							<Image src={ellipse10} />
						</Wiggle>
						<img src={quoteSign1} className={joinCls("position-absolute", style["quote-sign-1"])} alt="" />
						<img src={quoteSign2} className={joinCls("position-absolute", style["quote-sign-2"])} alt="" />
						<div style={{ backgroundImage: `url(${imgUrl3})`, backgroundSize: "cover" }} className={joinCls("position-relative mt-10", style["summary-img-wrap"])}>
							{/* <Image src={imgUrl3} className={joinCls("mt-10 w-100", style["summary-img"])} /> */}

							<div className={style["fade"]}></div>
							<div className={joinCls("text-center text-white position-absolute f-google-san", style["summary-quote"])}>
								<p className="px-5">"Coming together is a beginning, staying together is progress, and working together is success."</p>
								<span className="mt-3 mt-lg-5">– Henry Ford –</span>
							</div>
						</div>

						<Wiggle className={joinCls("position-absolute", style["rect-decor-2"])}>
							<Image src={RectDecor2Svg} />
						</Wiggle>
					</div>
				</div>
			))}
			<Footer className="mt-lg-10 mt-5" />
		</div>
	);
}
