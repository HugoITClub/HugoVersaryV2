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

function FAQPage() {
	return (
		<div className="overflow-hidden mt-10">
			<div className="container">
				<h1 className={joinCls("f-crimson-pro", style["faq-title"])}>Các câu hỏi thường gặp</h1>
				<ol>
					<div className="mt-5">
						<h2 className="">1. Hugo là gì?</h2>
						<hr className={joinCls("", style["line"])}></hr>
						<div className={joinCls("text-muted mt-3", style["hugo-content"])}>
							Hugo là một nhân vật nổi tiếng trên truyền hình ở Việt Nam trong thập niên 2000. Những năm 2004, 2005 là thời điểm mà các gameshow dành cho thanh thiếu niên bắt đầu
							nở rộ tại Việt Nam. Một trong những cái tên đình đám nhất lúc bấy giờ và vẫn để lại dư âm cho đến tận hôm nay chính là "Vui cùng Hugo". “Vui cùng Hugo" là một trong
							những gameshow mà người chơi chỉ cần ngồi tại nhà là đã có thể tham gia được với chương trình. Hình ảnh chú lùn Hugo đã đi vào ký ức của nhiều 8X, 9X. Hình tượng Hugo
							thể hiện cho văn hoá đại chúng giới trẻ thời bấy giờ. Do đó, những sinh viên sáng lập nên câu lạc bộ Hugo đã chọn hình tượng chú lùn này cho CLB, để thể hiện sự năng
							động, khôn khéo, dũng cảm và ham học hỏi của thành viên CLB, giống như hình tượng Hugo vậy.
						</div>
					</div>
					<div className="mt-5">
						<h2 className="">2. Làm thế nào để tham gia CLB Tiếng Anh Hugo?</h2>
						<hr className={joinCls("", style["line"])}></hr>
						<div className={joinCls("text-muted mt-3", style["hugo-content"])}>
							Nếu bạn đang có mong muốn gia nhập CLB, hoặc muốn giới thiệu đến người thân, bạn bè của mình, đọc kỹ những thông tin bên dưới nhé:
							<ul>
								<li className="ms-5">
									<span className="fw-bold text-black">Tuyển thành viên:</span> Mỗi năm CLB có hai mùa tuyển thành viên, mùa xuân (tháng 2 ~ tháng 3) và mùa thu (tháng 8 ~ tháng 9)
									<ol>
										<li>Hình thức tuyển: Vòng đơn Online - Vòng Phỏng vấn trực tiếp.</li>
										<li>Số lượng tuyển: 30~40 thành viên cho mỗi đợt.</li>
									</ol>
								</li>
								<li className="ms-5">
									<span className="fw-bold text-black">Sau khi trở thành thành viên CLB:</span> Bạn sẽ được tham gia group Hugo English Club, có các đặc quyền và cơ hội trải nghiệm
									nhiều hoạt động của CLB, cùng với đó là gia nhập một trong bốn team (Power Rangers, Heroes Company, Banana và Niffler).
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-5">
						<h2 className="">3. Quyền lợi của thành viên CLB Hugo</h2>
						<hr className={joinCls("", style["line"])}></hr>
						<div className={joinCls("text-muted mt-3", style["hugo-content"])}>
							<ol>
								<li>Có môi trường rèn luyện Tiếng Anh giao tiếp. Được chỉ dẫn bởi nhiều thành viên, cựu thành viên trong CLB.</li>
								<li>
									Làm quen được nhiều bạn bè từ khắp nơi đang học tập, làm việc và sinh sống trên địa bàn thành phố Đà Nẵng. Thành viên CLB bao gồm từ học sinh THPT, sinh viên Đại
									học cho đến người đã đi làm.
								</li>
								<li>Có đặc quyền, cơ hội tham gia các hoạt động do CLB Tiếng Anh Hugo tổ chức, cũng như các hoạt động liên kết khác.</li>
								<li>Được tiếp cận các nguồn thông tin về Tình nguyện viên, Du học, và các công việc liên quan đến sử dụng Ngoại ngữ.</li>
								<li>Được ưu tiên tham gia các hoạt động, đặc biệt có cấp giấy chứng nhận, chứng chỉ.</li>
								<li>Tham gia các hoạt động giao lưu văn hoá với người nước ngoài.</li>
							</ol>
						</div>
					</div>
					<div className="mt-5">
						<h2 className="">4. Thông tin ban chủ nhiệm</h2>
						<hr className={joinCls("", style["line"])}></hr>
						<div className={joinCls("text-muted mt-3", style["hugo-content"])}>
							<ul>
								<li>Chủ nhiệm CLB: Nguyễn Đức Quang</li>
								<li>Trưởng ban Sự kiện: Huỳnh Kim Hoàng</li>
								<li>Trưởng ban Nhân sự: Huỳnh Hoàng Thiện Kim</li>
								<li>Trưởng ban Truyền thông: Trần Qúy Thế</li>
								<li>Trưởng ban Chuyên môn: Phùng Ngọc Uyên</li>
							</ul>
						</div>
					</div>
				</ol>
			</div>
			<Footer className="mt-10 bg-light" />
		</div>
	);
}

export default FAQPage;
