import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../../services/language/constants";

const SCOPE = "ProjectTeam";

const projectTeamMessages = defineMessages({
	teamDescription: {
		id: `${SCOPE}.TeamDescription`,
		[EN_LOCALE]:
			"“Hugoversary, sounds familiar right? Yes, it’s exactly what has just crossed your mind. The name “Hugoversary” is the combination of “Hugo” and “Anniversary”, and that is how the project was born. As apparent as its name, this website is the product of our project, initiated by the IT Hugo Team and owned by Hugo English Club. Hugoversary website has been tailored with the aims of storing, updating, and promoting the activities, events as well as information of the club so far. The information related to the establishment and development stages of Hugo is available to all current members and former ones, even external people who are interested in our club.”",
		[VI_LOCALE]:
			"“Nghe quen quen phớ hôn, đúng rùi đó, cái tên này là sự kết hợp giữa Hugo và Anniversary, và cuối cùng dự án Hugoversary ra đời. Đúng như cái tên của nó, Website này là sản phẩm trong dự án của chúng mình, được tạo ra bởi nhóm Hugo IT và thuộc quyền sở hữu của Hugo English Club. Đây là nơi lưu giữ, cập nhật và quảng bá các hoạt động, sự kiện của CLB Hugo tính từ lúc mới hình thành đến hiện tại. Tại đây, các thành viên hiện tại của CLB, các cựu thành viên và thậm chí các cá nhân không phải thành viên CLB đều có thể tham quan, tìm hiểu và nhìn lại quá trình phát triển của Hugo.”",
	},
	ourStory: {
		id: `${SCOPE}.OurStory`,
		[EN_LOCALE]:
			"It’s exactly what you think it is! The idea of creating a website for Hugo English Club comes naturally. However, the way how it had been creating is not as easy and smooth as we thought.  After meetings to discuss the preliminary plan for the project, 5 founders decided to recruit more members to work together. Fortunately, we did recruit talented and lovely people to join the team. Just like that, after 9 months and 10 days, this website was born in our joy and officially released on March 25, 2023.",
		[VI_LOCALE]:
			"Đúng rồi, cái ý tưởng tạo một chiếc website cho Hugo chính là tự nhiên mà có thôi. Tuy vậy, hành trình tạo ra chiếc website này chẳng phải tự nhiên và dễ dàng. Sau những buổi họp bàn kế hoạch sơ lược cho project, 5 con người ấy quyết định tuyển thêm thành viên để chạy deadline cùng. Thật may mắn là bọn tui đã chiêu mộ được những nhân tài giỏi giang, đáng yêu về chung team hihi. Cứ thế sau 9 tháng 10 ngày thì chiếc website này cũng đã ra đời trong niềm vui sướng vỡ òa của chúng tui và chính thức đưa vào hoạt động vào ngày 25/03/2023.",
	},
	storyTitle: {
		id: `${SCOPE}.StoryTitle`,
		[EN_LOCALE]: "Our Story",
		[VI_LOCALE]: "Khởi nguồn",
	},
	storyQuotes: {
		id: `${SCOPE}.StoryQuotes`,
		[EN_LOCALE]: "“We just let it be”",
		[VI_LOCALE]: "“Tự nhiên mà có thôi”",
	},
	missionTitle: {
		id: `${SCOPE}.MissionTitle`,
		[EN_LOCALE]: "Mission",
		[VI_LOCALE]: "Mục tiêu",
	},
	missionContent: {
		id: `${SCOPE}.MissionContent`,
		[EN_LOCALE]:
			"With the desire to bring the image of a dynamic, fun, and useful English club closer to those who have been, are, and will become a part of Hugo English Club, the project was established based on the values: ",
		[VI_LOCALE]:
			"Với mong muốn mang hình ảnh một câu lạc bộ tiếng Anh năng động, vui vẻ và bổ ích đến gần hơn với những ai đã, đang và sẽ trở thành một phần của Hugo English Club, dự án đã được thành lập dựa trên các giá trị:",
	},
	missionQuotes: {
		id: `${SCOPE}.MissionQuotes`,
		[EN_LOCALE]: "“This is not just a website, this is autograph book to preserve the memories and people at Hugo English Club.”",
		[VI_LOCALE]: "“Đây không đơn thuần là một website, đây là một cuốn sách lưu giữ những kỉ niệm và con người tại Hugo English Club.”",
	},
	goViral: {
		id: `${SCOPE}.GoViral`,
		[EN_LOCALE]: "Go viral",
		[VI_LOCALE]: "Lan tỏa",
	},
	goViralContent: {
		id: `${SCOPE}.GoViralContent`,
		[EN_LOCALE]: "This is where memorable moments, highlights, as well as information about the club and all of Hugo's members, are shared and vividly described.",
		[VI_LOCALE]: "Đây chính là nơi những khoảnh khắc đáng nhớ, sự kiện nổi bật cũng như thông tin về câu lạc bộ và toàn bộ thành viên của Hugo được chia sẻ và tái hiện sinh động.",
	},
	connect: {
		id: `${SCOPE}.Connect`,
		[EN_LOCALE]: "Connect",
		[VI_LOCALE]: "Kết nối",
	},
	connectContent: {
		id: `${SCOPE}.ConnectContent`,
		[EN_LOCALE]:
			"Were you a member of Hugo? Or are you joining the club? Also maybe you will join the club in the future? Whoever you are, the project aspires to bring people - Hugo's unique pieces together. We hope to be able to provide necessary information about the history of the club's origin and development; previous generations as well as the next ones and spread the passion for English to everyone.",
		[VI_LOCALE]:
			"Bạn đã từng là một thành viên của Hugo? Hay bạn đang tham gia câu lạc bộ? Cũng có thể bạn sẽ tham gia câu lạc bộ trong tương lai? Dù bạn là ai, dự án mong muốn sẽ kết nối con người - những mảnh ghép độc đáo của Hugo lại với nhau. Chúng mình hi vọng có thể mang lại những thông tin cần thiết về lịch sử ra đời, quá trình phát triển của câu lạc bộ; các thế hệ đi trước cũng như những thế hệ tiếp theo và lan tỏa niềm đam mê tiếng Anh đến với tất cả mọi người.",
	},
});

export default projectTeamMessages;
