import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../../services/language/constants";

const SCOPE = "HugoClub";

const hugoClubMessages = defineMessages({
	header: {
		id: `${SCOPE}.Header`,
		[EN_LOCALE]: "We are an English Club for <i>every students</i> in Da Nang City.",
		[VI_LOCALE]: "Câu lạc bộ tiếng Anh dành cho <i>học sinh, sinh viên</i> tại Đà Nẵng.",
		values: {
			i: (...chunks) => <i>{chunks}</i>,
		},
	},
	hugoEnglishClubDescription: {
		id: `${SCOPE}.HugoEnglishClub`,
		[EN_LOCALE]:
			"Hugo English Club was established in March 2008 by DUT students, with the motto of practicing English in dynamic, fun, and interesting ways. Besides, Hugo members not only come from DUT but also come from different universities and colleges in Da Nang, which can give us a lot of opportunities to make new friends. In addition, Hugo also organizes extra-curricular activities such as events, competitions, collaboration programs with other clubs, and charity activities,…",
		[VI_LOCALE]:
			"Hugo English Club được thành lập vào tháng 3 năm 2008 bởi những sinh viên Đại học Đà Nẵng, với sứ mệnh là học tiếng Anh một cách thú vị, hấp dẫn và động lực. Ngoài ra, Hugo không chỉ có thành viên là sinh viên Đại học Đà Nẵng mà còn có thành viên từ các trường đại học, cao đẳng khác tại Đà Nẵng, đây là cơ hội để chúng ta có thể gặp gỡ và kết bạn với những người bạn mới. Ngoài ra, Hugo còn tổ chức các hoạt động ngoại khóa như các sự kiện, cuộc thi, chương trình hợp tác với các câu lạc bộ khác, các hoạt động từ thiện,…",
	},
	activeTime: {
		id: `${SCOPE}.ActiveTime`,
		[EN_LOCALE]: "Active Time",
		[VI_LOCALE]: "Thời Gian Hoạt Động",
	},
	meetingTime: {
		id: `${SCOPE}.MeetingTime`,
		[EN_LOCALE]: "<b>Meeting time:</b> 8:00 A.M., every Sunday.",
		[VI_LOCALE]: "<b>Thời gian sinh hoạt:</b> 8:00 A.M., mỗi Chủ nhật.",
		values: {
			b: (...chunks) => <b className="text-black">{chunks}</b>,
		},
	},
	meetingVenue: {
		id: `${SCOPE}.MeetingVenue`,
		[EN_LOCALE]: "<b>Meeting venue:</b> Block C’s Yard, in front of room C116, The University of Science and Technology.",
		[VI_LOCALE]: "<b>Địa điểm sinh hoạt:</b> Sân khu C, trước phòng C116, Đại học Bách khoa - Đại học Đà Nẵng.",
		values: {
			b: (...chunks) => <b className="text-black">{chunks}</b>,
		},
	},
	remind: {
		id: `${SCOPE}.Remind`,
		[EN_LOCALE]:
			"Any adjustments to our meeting venue due to special events or extra activities will be announced via email or the Hugo English Club group. Therefore, remember to <b>check your email inbox and group notifications</b> before every meeting.",
		[VI_LOCALE]:
			"Tất cả các sự kiện đặc biệt hoặc các hoạt động ngoại khóa sẽ được thông báo qua email hoặc nhóm Hugo English Club. Do đó, hãy <b>kiểm tra hộp thư đến và thông báo nhóm</b> của bạn trước mỗi buổi sinh hoạt nhé!",
		values: {
			b: (...chunks) => <b className="text-black">{chunks}</b>,
		},
	},
	receiveNotifications: {
		id: `${SCOPE}.ReceiveNotifications`,
		[EN_LOCALE]: "How to receive notifications:",
		[VI_LOCALE]: "Cách nhận thông báo:",
	},
	notificationFromEmail: {
		id: `${SCOPE}.NotificationFromEmail`,
		[EN_LOCALE]: "Via meeting announcement email from our club. Our club’s email address: <b>hugoclub.dut@gmail.com</b>.",
		[VI_LOCALE]: "Qua email thông báo từ câu lạc bộ. Địa chỉ email của câu lạc bộ: <b>hugoclub.dut@gmail.com</b>.",
		values: {
			b: (...chunks) => <b className="text-black">{chunks}</b>,
		},
	},
	notificationFromGroup: {
		id: `${SCOPE}.NotificationFromGroup`,
		[EN_LOCALE]: "Besides, there will also be announcing posts on the <b>Hugo English Club Facebook's Group</b> with some essential information for the meeting.",
		[VI_LOCALE]: "Ngoài ra, còn có thông báo trên <b>Nhóm Facebook Hugo English Club</b> cùng với một số thông tin cần thiết cho buổi sinh hoạt.",
		values: {
			b: (...chunks) => <b className="text-black">{chunks}</b>,
		},
	},
	clubActivities: {
		id: `${SCOPE}.ClubActivities`,
		[EN_LOCALE]: "Club's Activities",
		[VI_LOCALE]: "Các Hoạt Động",
	},
	weeklyMeeting: {
		id: `${SCOPE}.WeeklyMeeting`,
		[EN_LOCALE]: "Weekly Meeting",
		[VI_LOCALE]: "Sinh Hoạt Hàng Tuần",
	},
	weeklyMeetingDescription: {
		id: `${SCOPE}.WeeklyMeetingDescription`,
		[EN_LOCALE]:
			"Every Sunday morning at 8 A.M. with ever-changing topics and formats. In the meeting, you can participate in multiple activities such as: Presenting, Acting, or Discussing with stimulating and salutary games.",
		[VI_LOCALE]:
			"Mỗi 8 giờ sáng Chủ Nhật hàng tuần với các chủ đề và cách tổ chức sinh hoạt thay đổi liên tục. Trong buổi sinh hoạt, bạn có thể tham gia nhiều hoạt động như: Thuyết trình, Diễn xuất, hoặc Thảo luận về những vấn đề thú vị và bổ ích.",
	},
	teamMeeting: {
		id: `${SCOPE}.TeamMeeting`,
		[EN_LOCALE]: "Team Meeting",
		[VI_LOCALE]: "Sinh Hoạt Team",
	},
	teamMeetingDescription: {
		id: `${SCOPE}.TeamMeetingDescription`,
		[EN_LOCALE]: "Weekly hosted by teams of Hugo. In these meetings, members can express themselves further with multiple entertainments hosted by team leaders and other members.",
		[VI_LOCALE]:
			"Buổi sinh hoạt được tổ chức bởi các team trong Hugo. Trong những buổi sinh hoạt này, các thành viên có thể thể hiện bản thân mình hơn với những hoạt động giải trí được tổ chức bởi các leader hoặc các thành viên khác.",
	},
	teamBuildingEvent: {
		id: `${SCOPE}.TeamBuildingEvent`,
		[EN_LOCALE]: "Team Building Event",
		[VI_LOCALE]: "Sự Kiện Team Building",
	},
	teamBuildingEventDescription: {
		id: `${SCOPE}.TeamBuildingEventDescription`,
		[EN_LOCALE]: "Extracurricular activities will be hosted at public spaces in order to practice common use English and members’ teamwork skills.",
		[VI_LOCALE]: "Những hoạt động ngoại khóa sẽ được tổ chức tại những nơi công cộng để các thành viên có thể thực hành tiếng Anh trong cuộc sống và kỹ năng làm việc nhóm.",
	},
	collaboration: {
		id: `${SCOPE}.Collaboration`,
		[EN_LOCALE]: "Collaboration",
		[VI_LOCALE]: "Hợp Tác",
	},
	collaborationDescription: {
		id: `${SCOPE}.CollaborationDescription`,
		[EN_LOCALE]: "Conjoining with other clubs in Danang City.",
		[VI_LOCALE]: "Kết nối với các câu lạc bộ khác tại Đà Nẵng.",
	},
	englishContest: {
		id: `${SCOPE}.EnglishContest`,
		[EN_LOCALE]: "English Contest",
		[VI_LOCALE]: "Cuộc Thi Tiếng Anh",
	},
	englishContestDescription: {
		id: `${SCOPE}.EnglishContestDescription`,
		[EN_LOCALE]:
			"Members can represent DUT by participating in the National English Olympiad taking place in October annually. During March or April, Hugo will host English Competitions to discover potential gems for the Olympiad Team.",
		[VI_LOCALE]:
			"Các thành viên có thể đại diện Đại học Bách Khoa - Đại học Đà Nẵng tham gia Cuộc thi Tiếng Anh quốc gia vào tháng 10 hàng năm. Trong tháng 3 hoặc 4, Hugo sẽ tổ chức các cuộc thi tiếng Anh để tìm kiếm những ngôi sao tiềm năng cho đội tuyển tham dự Cuộc thi Tiếng Anh quốc gia.",
	},
	camping: {
		id: `${SCOPE}.Camping`,
		[EN_LOCALE]: "Camping",
		[VI_LOCALE]: "Cắm Trại",
	},
	campingDescription: {
		id: `${SCOPE}.CampingDescription`,
		[EN_LOCALE]: "Members can participate in Team Camps and Club Camps. Whereas Hugo Camp will be the biggest event annually.",
		[VI_LOCALE]: "Các thành viên có thể tham gia các buổi cắm trại của các team và câu lạc bộ. Trong đó, Hugo Camp sẽ là sự kiện lớn nhất hàng năm.",
	},
	cultureExchange: {
		id: `${SCOPE}.CultureExchange`,
		[EN_LOCALE]: "Cultural Exchange",
		[VI_LOCALE]: "Giao Lưu Văn Hóa",
	},
	cultureExchangeDescription: {
		id: `${SCOPE}.CultureExchangeDescription`,
		[EN_LOCALE]: "Participating in cultural programs with foreigners.",
		[VI_LOCALE]: "Tham gia các chương trình văn hóa với người nước ngoài.",
	},
	softSkillContest: {
		id: `${SCOPE}.SoftSkillContest`,
		[EN_LOCALE]: "Soft-Skill Contest",
		[VI_LOCALE]: "Kỹ Năng Mềm",
	},
	softSkillContestDescription: {
		id: `${SCOPE}.SoftSkillContestDescription`,
		[EN_LOCALE]: "This will usually be a collaboration with other clubs, with the aim to enhance soft skills as well as practice in-use English.",
		[VI_LOCALE]: "Đây thường là một sự kết hợp với các câu lạc bộ khác, với mục đích tăng cường kỹ năng mềm và thực hành tiếng Anh trong cuộc sống.",
	},
	boardgame: {
		id: `${SCOPE}.Boardgame`,
		[EN_LOCALE]: "Boardgame",
		[VI_LOCALE]: "Boardgame",
	},
	boardgameDescription: {
		id: `${SCOPE}.BoardgameDescription`,
		[EN_LOCALE]: "Recreational activities,...",
		[VI_LOCALE]: "Hoạt động giải trí,...",
	},
	group: {
		id: `${SCOPE}.Group`,
		[EN_LOCALE]: "Group",
		[VI_LOCALE]: "Hoạt Động Nhóm",
	},
	groupDescription: {
		id: `${SCOPE}.GroupDescription`,
		[EN_LOCALE]: "Movements organized in the official group of Hugo English Club.",
		[VI_LOCALE]: "Các hoạt động được tổ chức trong nhóm chính thức của Hugo English Club.",
	},
	hugoStaffDescription: {
		id: `${SCOPE}.HugoStaffDescription`,
		[EN_LOCALE]:
			"To create a joyful playground for every student in Da Nang City who really passionate in English, it takes an electric group of passionate staffs. Get to know the young people leading the way at Hugo English Club this year.",
		[VI_LOCALE]:
			"Để tạo ra một không gian vui chơi cho từng học sinh - sinh viên tại Đà Nẵng thật sự yêu thích tiếng Anh, cần phải có một tổ chức đầy nhiệt huyết đứng sau đó. Họ là ai? Hãy cùng tìm hiểu dưới đây nhé.",
	},
});

export default hugoClubMessages;
