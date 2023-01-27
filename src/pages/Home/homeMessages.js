import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../services/language/constants";

const SCOPE = "HomePage";

const homeMessages = defineMessages({
  description: {
    id: `${SCOPE}.Header.Description`,
    [EN_LOCALE]:
      "Hugo English Club is an official club directly under the Student Union of the University of Science and Technology - the University of Danang. It was established on March 15, 2008, by the University of Science and Technology students. Our vision is to build a dynamic environment for all students, school-level students, and working people in Da Nang city who want to practice English, enhance personal skills, and experience new activities.",
    [VI_LOCALE]: "Huhu 😭😭😭",
  },
});

export default homeMessages;
