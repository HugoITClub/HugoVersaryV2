import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../../services/language/constants";

const SCOPE = "Events";

const eventsMessages = defineMessages({
	events: {
		id: `${SCOPE}.Events`,
		[EN_LOCALE]: "Events",
		[VI_LOCALE]: "Sự kiện gần đây",
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

export default eventsMessages;
