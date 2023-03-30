import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../services/language/constants";

const SCOPE = "Teams";

const teamsMessages = defineMessages({
	explore: {
		id: `${SCOPE}.Explore`,
		[EN_LOCALE]: "Explore",
		[VI_LOCALE]: "Khám phá",
	},
	teamMeetings: {
		id: `${SCOPE}.TeamMeetings`,
		[EN_LOCALE]: "Team Meetings",
		[VI_LOCALE]: "Sinh hoạt",
	},
	teamMeetingsDescription: {
		id: `${SCOPE}.TeamMeetingsDescription`,
		[EN_LOCALE]: "Weekly Meetings",
		[VI_LOCALE]: "Diễn ra hàng tuần",
	},
	teamCamping: {
		id: `${SCOPE}.TeamCamping`,
		[EN_LOCALE]: "Team Camping",
		[VI_LOCALE]: "Cắm trại",
	},
	teamCampingDescription: {
		id: `${SCOPE}.TeamCampingDescription`,
		[EN_LOCALE]: "One of the most interesting activities",
		[VI_LOCALE]: "Một trong những hoạt động thú vị nhất",
	},
	extraActivities: {
		id: `${SCOPE}.ExtraActivities`,
		[EN_LOCALE]: "Extra Activities",
		[VI_LOCALE]: "Ngoại khóa",
	},
	extraActivitiesDescription: {
		id: `${SCOPE}.ExtraActivitiesDescription`,
		[EN_LOCALE]: "Other Activities",
		[VI_LOCALE]: "Các hoạt động khác",
	},
	teamMembers: {
		id: `${SCOPE}.TeamMembers`,
		[EN_LOCALE]: "Team Members",
		[VI_LOCALE]: "Thành viên",
	},
	teamMembersDescription: {
		id: `${SCOPE}.TeamMembersDescription`,
		[EN_LOCALE]: "Our beloved members",
		[VI_LOCALE]: "Những người bạn thân yêu",
	},
	recentActivities: {
		id: `${SCOPE}.RecentActivities`,
		[EN_LOCALE]: "Recent Activities",
		[VI_LOCALE]: "Hoạt động gần đây",
	},
});

export default teamsMessages;
