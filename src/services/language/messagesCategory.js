import footerMessages from "../../components/Footer/footerMessages";
import navigatorMessages from "../../global/Navigator/navigatorMessages";
import hugoClubMessages from "../../pages/AboutUs/HugoClub/hugoClubMessages";
import eventsMessages from "../../pages/Activities/Events/eventsMessages";
import meetingsMessages from "../../pages/Activities/Meetings/meetingsMessages";
import blogsMessages from "../../pages/Blogs/blogsMessages";
import homeMessages from "../../pages/Home/homeMessages";
import teamsMessages from "../../pages/Teams/teamsMessages";
import { EN_LOCALE, VI_LOCALE } from "./constants";

function generateMessages(rawMessages, locale) {
	return rawMessages.reduce((result, rawMessage) => {
		const messages = Object.values(rawMessage);
		const enMessages = messages.reduce((subResult, message) => {
			subResult[message.id] = message[locale];
			return subResult;
		}, {});

		Object.assign(result, enMessages);
		return result;
	}, {});
}

const rawMessages = [navigatorMessages, footerMessages, homeMessages, teamsMessages, meetingsMessages, eventsMessages, blogsMessages, hugoClubMessages];

const enMessages = generateMessages(rawMessages, EN_LOCALE);
const viMessages = generateMessages(rawMessages, VI_LOCALE);

const messagesCategory = {
	[EN_LOCALE]: enMessages,
	[VI_LOCALE]: viMessages,
};

export default messagesCategory;
