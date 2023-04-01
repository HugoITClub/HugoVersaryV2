import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../services/language/constants";

const SCOPE = "Navigator";

const navigatorMessages = defineMessages({
	home: {
		id: `${SCOPE}.Home`,
		[EN_LOCALE]: "HOME",
		[VI_LOCALE]: "TRANG CHỦ",
	},
	teams: {
		id: `${SCOPE}.Teams`,
		[EN_LOCALE]: "TEAMS",
		[VI_LOCALE]: "TEAMS",
	},
	activities: {
		id: `${SCOPE}.Activities`,
		[EN_LOCALE]: "ACTIVITIES",
		[VI_LOCALE]: "HOẠT ĐỘNG",
	},
	meetings: {
		id: `${SCOPE}.Meetings`,
		[EN_LOCALE]: "MEETINGS",
		[VI_LOCALE]: "SINH HOẠT",
	},
	events: {
		id: `${SCOPE}.Events`,
		[EN_LOCALE]: "EVENTS",
		[VI_LOCALE]: "SỰ KIỆN",
	},
	blogs: {
		id: `${SCOPE}.Blogs`,
		[EN_LOCALE]: "BLOGS",
		[VI_LOCALE]: "BLOGS",
	},
	aboutUs: {
		id: `${SCOPE}.AboutUs`,
		[EN_LOCALE]: "ABOUT US",
		[VI_LOCALE]: "GIỚI THIỆU",
	},
	joinUsButton: {
		id: `${SCOPE}.JoinUsButton`,
		[EN_LOCALE]: "JOIN US",
		[VI_LOCALE]: "ĐĂNG KÝ",
	},
});

export default navigatorMessages;
