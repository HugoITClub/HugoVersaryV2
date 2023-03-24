import style from "./style.module.css";
import Footer from "../../components/Footer/Footer";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";
import Image from "../../components/Image/Image";
import quotesIcon from "./images/quotesicon.svg";
import quotesIcon2 from "./images/quotesicon2.svg";
import quotes2Icon from "./images/quotes2.svg";
import flowerIcon1 from "./images/flowerIcon1.svg";
import flowerIcon2 from "./images/flowerIcon2.svg";
import ellipse20 from "./images/Ellipse20.svg";
import quotesIcon22 from "./images/quotesIcon22.svg";
import ellipse21 from "./images/Ellipse21.svg";
import ellipse10 from "./images/Ellipse10.svg";
import EclipseDecor2Svg from "../Home/images/eclipse-decor-2.svg";
import EclipseDecor3Svg from "../Home/images/eclipse-decor-3.svg";
import quoteSign1 from "./images/quoteSign1.svg";
import quoteSign2 from "./images/quoteSign2.svg";
import RectDecor2Svg from "../Home/images/rect-decor-2.svg";
import logoHugo from "../../global/Images/logoHugo.png";
import KimHuynh from "./images/KimHuynh.jpg";
import NguyenPhuoc from "./images/NguyenPhuoc.jpg";
import TuanLe from "./images/TuanLe.jpg";
import QuangLoc from "./images/QuangLoc.jpg";
import HoangDung from "./images/HoangDung.jpg";
import TienDat from "./images/TienDat.jpg";
import ThienHuong from "./images/ThienHuong.jpg";
import DungPham from "./images/DungPham.jpg";
import HungVinh from "./images/HungVinh.jpg";
import TheTran from "./images/TheTran.jpg";
import NganPhung from "./images/NganPhung.jpg";
import UyenPhung from "./images/UyenPhung.jpg";
import AnhMinh from "./images/AnhMinh.jpg";

import Wiggle from "../../components/Wiggle/Wiggle";

export default function ProjectTeamPage() {
	return (
		<div className="pt-5 overflow-hidden position-relative">
			<div className="container">
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
						“Nghe quen quen phớ hôn, đúng rùi đó, cái tên này là sự kết hợp giữa Hugo và Anniversary, và cuối cùng dự án Hugoversary ra đời. Đúng như cái tên của nó, Website này là
						sản phẩm trong dự án của chúng mình, được tạo ra bởi nhóm Hugo IT và thuộc quyền sở hữu của Hugo English Club. Đây là nơi lưu giữ, cập nhật và quảng bá các hoạt động,
						sự kiện của CLB Hugo tính từ lúc mới hình thành đến hiện tại. Tại đây, các thành viên hiện tại của CLB, các cựu thành viên và thậm chí các cá nhân không phải thành viên
						CLB đều có thể tham quan, tìm hiểu và nhìn lại quá trình phát triển của Hugo.“
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
					<div className="row align-items-center  g-3">
						<div className={style["col-custom"]}>
							<div className="row g-3 flex-column justify-content-center">
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={KimHuynh} className={joinCls("rounded-4", style[""])} />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>
									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Huỳnh Hoàng Thiện Kim</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Data Collector</div>
									</div>
								</div>
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={NguyenPhuoc} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>
									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Nguyễn Quang Trường Phước</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Data Collector</div>
									</div>
								</div>
							</div>
						</div>
						<div className={style["col-custom"]}>
							<div className="row g-3 row g-3 flex-column justify-content-center">
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={TuanLe} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>
									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Lê Phước Anh Tuấn</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Developer</div>
									</div>
								</div>
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={HoangDung} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>

									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Trần Hoàng Dung</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Business Analyst</div>
									</div>
								</div>
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={QuangLoc} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>

									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Trương Quang Lộc</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Developer</div>
									</div>
								</div>
							</div>
						</div>
						<div className={style["col-custom"]}>
							<div className="row g-3 row g-3 flex-column justify-content-center">
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={TienDat} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>

									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Nguyễn Tiến Đạt</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>UI/UX Designer/Co-Founder</div>
									</div>
								</div>
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={DungPham} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>

									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Phạm Mạnh Dũng</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Founder</div>
									</div>
								</div>
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={ThienHuong} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>

									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Trịnh Huỳnh Thiên Hương</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Co-Founder</div>
									</div>
								</div>
							</div>
						</div>
						<div className={style["col-custom"]}>
							<div className="row g-3 row g-3 flex-column justify-content-center">
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={AnhMinh} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>

									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Nguyễn Lê Anh Minh</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Developer/Co-Founder</div>
									</div>
								</div>
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={NganPhung} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>

									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Phùng Lâm Kim Ngân</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Content Writer/Co-Founder</div>
									</div>
								</div>
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={HungVinh} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>

									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Đặng Hùng Vĩnh</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Developer</div>
									</div>
								</div>
							</div>
						</div>
						<div className={style["col-custom"]}>
							<div className="row g-3 row g-3 flex-column justify-content-center">
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={TheTran} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>

									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Trần Quý Thế</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Designer</div>
									</div>
								</div>
								<div className={joinCls("col-auto p-0 mx-1 d-flex justify-content-center position-relative", style["project-team-member"])}>
									<Image src={UyenPhung} className="rounded-4" />
									<div className={joinCls("w-100 h-100 position-absolute top-0 left-0", style["overlay"])}></div>

									<div className={joinCls("position-absolute row d-none flex-column align-items-center justify-content-center", style["member-description"])}>
										<div className={joinCls("text-white text-center", style["member-name"])}>Phùng Ngọc Uyên</div>
										<div className={joinCls("text-info text-center", style["member-role"])}>Content Writer</div>
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

					<div className="row justify-content-between">
						<div className="col-6">
							<div className={joinCls("fw-bold f-google-san text-black", style["story-title"])}>Khởi nguồn</div>
							<div className={joinCls("text-start mt-3", style["story-content"])}>
								“Tự nhiên mà có thôi” <br /> Đúng rồi, cái ý tưởng tạo một chiếc website cho Hugo chính là tự nhiên mà có thôi.
								<br /> Tuy vậy, hành trình tạo ra chiếc website này chẳng phải tự nhiên và dễ dàng. Sau những buổi họp bàn kế hoạch sơ lược cho project, 5 con người ấy quyết định
								tuyển thêm thành viên để chạy deadline cùng. Thật may mắn là bọn tui đã chiêu mộ được những nhân tài giỏi giang, đáng yêu về chung team hihi. Cứ thế sau 9 tháng 10
								ngày thì chiếc website này cũng đã ra đời trong niềm vui sướng vỡ òa của chúng tui và chính thức đưa vào hoạt động vào ngày 25/03/2023.
							</div>
						</div>
						<div className="col-6">
							<Image src={randomImgUrl()} className={joinCls("h-100 rounded-5 shadow", style["story-img"])} />
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
					<div className="row justify-content-between">
						<div className="col-6">
							<Image src={randomImgUrl()} className={joinCls("rounded-5 mt-5 shadow", style["mission-img"])} />
						</div>
						<div className="col-6">
							<div className={joinCls("fw-bold f-google-san text-black ", style["story-title"])}>Mục tiêu</div>
							<div className={joinCls("text-start mt-3", style["story-content"])}>
								“Đây không đơn thuần là một website, đây là một cuốn sách lưu giữ những kỉ niệm và con người tại Hugo English Club.”
								<br /> Với mong muốn mang hình ảnh một câu lạc bộ tiếng Anh năng động, vui vẻ và bổ ích đến gần hơn với những ai đã, đang và sẽ trở thành một phần của Hugo English
								Club, dự án đã được thành lập dựa trên các giá trị:
								<br />
								Lan tỏa:
								<br />
								Đây chính là nơi những khoảnh khắc đáng nhớ, sự kiện nổi bật cũng như thông tin về câu lạc bộ và toàn bộ thành viên của Hugo được chia sẻ và tái hiện sinh động.
								<br />
								Kết nối:
								<br />
								Bạn đã từng là một thành viên của Hugo? Hay bạn đang tham gia câu lạc bộ? Cũng có thể bạn sẽ tham gia câu lạc bộ trong tương lai? Dù bạn là ai, dự án mong muốn sẽ
								kết nối con người - những mảnh ghép độc đáo của Hugo lại với nhau. Chúng mình hi vọng có thể mang lại những thông tin cần thiết về lịch sử ra đời, quá trình phát
								triển của câu lạc bộ; các thế hệ đi trước cũng như những thế hệ tiếp theo và lan tỏa niềm đam mê tiếng Anh đến với tất cả mọi người.
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
					<div style={{ backgroundImage: `url(${randomImgUrl()})`, backgroundSize: "cover" }} className={joinCls("position-relative mt-10", style["summary-img-wrap"])}>
						{/* <Image src={randomImgUrl()} className={joinCls("mt-10 w-100", style["summary-img"])} /> */}

						<div className={style["fade"]}></div>
						<div className={joinCls("text-center text-white position-absolute f-google-san", style["summary-quote"])}>
							<p className="px-5">"Coming together is a beginning, staying together is progress, and working together is success."</p>
							<span className="mt-5">– Henry Ford –</span>
						</div>
					</div>

					<Wiggle className={joinCls("position-absolute", style["rect-decor-2"])}>
						<Image src={RectDecor2Svg} />
					</Wiggle>
				</div>
			</div>
			<Footer className="mt-10" />
		</div>
	);
}
