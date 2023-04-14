import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../services/language/constants";

const SCOPE = "Blogs";

const blogsMessages = defineMessages({
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
	hugoAcademic: {
		id: `${SCOPE}.HugoAcademic`,
		[EN_LOCALE]: "Hugo's Academic",
		[VI_LOCALE]: "Hugo Học thuật",
	},
	hugoBlogs: {
		id: `${SCOPE}.HugoBlogs`,
		[EN_LOCALE]: "Hugo Blogs",
		[VI_LOCALE]: "Hugo Blogs",
	},
});

export default blogsMessages;
