import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../services/language/constants";

const SCOPE = "Footer";

const footerMessages = defineMessages({
	description: {
		id: `${SCOPE}.Description`,
		[EN_LOCALE]:
			"This website is a product of Hugo IT club and part of the HUGOVERSARY project to celebrate the 15th birthday of Hugo English Club. This website is to store, update and promote the activities and events of Hugo English Club up to the present time.",
		[VI_LOCALE]:
			"Website này là sản phẩm của Hugo IT club, nằm trong dự án HUGOVERSARY nhằm kỷ niệm 15 năm sinh nhật Clb Tiếng Anh Hugo. Đây là nơi lưu giữ, cập nhật và quảng bá các hoạt động, sự kiện của CLB Hugo cho đến thời điểm hiện tại.",
	},
	aboutUsTitle: {
		id: `${SCOPE}.AboutUsTitle`,
		[EN_LOCALE]: "ABOUT US",
		[VI_LOCALE]: "GIỚI THIỆU",
	},
	contacts: {
		id: `${SCOPE}.Contacts`,
		[EN_LOCALE]: "CONTACTS",
		[VI_LOCALE]: "LIÊN HỆ",
	},
	languages: {
		id: `${SCOPE}.Languages`,
		[EN_LOCALE]: "LANGUAGES",
		[VI_LOCALE]: "NGÔN NGỮ",
	},
	english: {
		id: `${SCOPE}.English`,
		[EN_LOCALE]: "English",
		[VI_LOCALE]: "Tiếng Anh",
	},
	vietnamese: {
		id: `${SCOPE}.Vietnamese`,
		[EN_LOCALE]: "Vietnamese",
		[VI_LOCALE]: "Tiếng Việt",
	},
});

export default footerMessages;
