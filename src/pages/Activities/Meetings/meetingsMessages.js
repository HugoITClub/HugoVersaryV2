import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../../services/language/constants";

const SCOPE = "Meetings";

const meetingsMessages = defineMessages({
	meetings: {
		id: `${SCOPE}.Meetings`,
		[EN_LOCALE]: "Meetings",
		[VI_LOCALE]: "Các buổi sinh hoạt",
	},
	readMore: {
		id: `${SCOPE}.ReadMore`,
		[EN_LOCALE]: "Read more",
		[VI_LOCALE]: "Xem thêm",
	},
	seeMore: {
		id: `${SCOPE}.SeeMore`,
		[EN_LOCALE]: "See more",
		[VI_LOCALE]: "Xem thêm",
	},
});

export default meetingsMessages;
