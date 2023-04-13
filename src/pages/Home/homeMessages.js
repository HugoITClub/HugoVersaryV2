import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../services/language/constants";

const SCOPE = "HomePage";

const homeMessages = defineMessages({
	seeMoreButton: {
		id: `${SCOPE}.SeeMoreButton`,
		[EN_LOCALE]: "SEE MORE",
		[VI_LOCALE]: "XEM THÊM",
	},
	next: {
		id: `${SCOPE}.Next`,
		[EN_LOCALE]: "Next",
		[VI_LOCALE]: "Tiếp theo",
	},
	hugoName1: {
		id: `${SCOPE}.Header.HugoName1`,
		[EN_LOCALE]: "WHAT IS",
		[VI_LOCALE]: "CÂU LẠC BỘ",
	},
	hugoName2: {
		id: `${SCOPE}.Header.HugoName2`,
		[EN_LOCALE]: "HUGO ENGLISH CLUB?",
		[VI_LOCALE]: "TIẾNG ANH HUGO",
	},
	description: {
		id: `${SCOPE}.Header.Description`,
		[EN_LOCALE]:
			"Hugo English Club is an official club directly under the Student Union of the University of Science and Technology - the University of Danang. It was established on March 15, 2008, by the University of Science and Technology students. Our vision is to build a dynamic environment for all students, school-level students, and working people in Da Nang city who want to practice English, enhance personal skills, and experience new activities.",
		[VI_LOCALE]:
			"CLB Tiếng Anh Hugo là một CLB chính thống trực thuộc Hội Sinh Viên Đại học Bách Khoa - Đại học Đà Nẵng, được thành lập vào ngày 15 tháng 3 năm 2008 bởi các sinh viên Trường đại học Bách Khoa. Mục tiêu của CLB là xây dựng môi trường năng động cho mọi sinh viên, học sinh và người đang làm việc trên địa bàn thành phố Đà Nẵng có mong muốn rèn luyện Tiếng Anh, nâng cao những kĩ năng mới và trải nghiệm những hoạt động mới mẻ.",
	},
	teamInHugo: {
		id: `${SCOPE}.TeamInHugo`,
		[EN_LOCALE]: "TEAMS IN HUGO",
		[VI_LOCALE]: "CÁC TEAM TRONG HUGO",
	},
	activities: {
		id: `${SCOPE}.Activities`,
		[EN_LOCALE]: "ACTIVITIES",
		[VI_LOCALE]: "HOẠT ĐỘNG NỔI BẬT",
	},
	joinUsTitle: {
		id: `${SCOPE}.JoinUsTitle`,
		[EN_LOCALE]: "BECOME AN OFFICIAL MEMBER OF{break}HUGO ENGLISH CLUB",
		[VI_LOCALE]: "TRỞ THÀNH THÀNH VIÊN CHÍNH THỨC{break}CỦA CÂU LẠC BỘ TIẾNG ANH HUGO",
		values: { break: <br /> },
	},
	joinUsSubtitle: {
		id: `${SCOPE}.JoinUsSubtitle`,
		[EN_LOCALE]: "Hugo brings English more familiar than ever before, whoever you are!",
		[VI_LOCALE]: "Tiếng anh khó, đã có Hugo lo!",
	},
	callingAction: {
		id: `${SCOPE}.CallingAction`,
		[EN_LOCALE]:
			"Do you want to immerse yourself in an environment where people practice English together?{break}Are you eager to make active and talented friends in Danang?{break}More than an English Club, let’s join us to know what's behind it!",
		[VI_LOCALE]:
			"Một môi trường năng động nơi mà bạn có thể thỏa sức trau dồi vốn tiếng Anh của mình?{break}Những người bạn dễ thương và tài năng luôn sẵn sàng đồng hành cùng bạn?{break}Bạn không nhầm đâu vì Hugo có tất cả những điều đó. Vậy thì còn chần chừ gì nữa mà không tham gia CLB ngay và luôn nào!",
		values: { break: <br /> },
	},
	callingActionButton: {
		id: `${SCOPE}.CallingActionButton`,
		[EN_LOCALE]: "Join us right now",
		[VI_LOCALE]: "Tham gia ngay",
		values: { break: <br /> },
	},
});

export default homeMessages;
