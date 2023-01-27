import homeMessages from "../../pages/Home/homeMessages";
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

const rawMessages = [homeMessages];

const enMessages = generateMessages(rawMessages, EN_LOCALE);
const viMessages = generateMessages(rawMessages, VI_LOCALE);

const messagesCategory = {
  [EN_LOCALE]: enMessages,
  [VI_LOCALE]: viMessages,
};

export default messagesCategory;
