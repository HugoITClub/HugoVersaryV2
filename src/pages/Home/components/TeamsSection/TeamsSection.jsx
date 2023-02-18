import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../../components/Image/Image";
import { joinCls, randomImgUrl } from "../../../../utilities/text.utils";
import {
  BANANA,
  BANANA_TEAM_PAGE_PATH,
  HEROES_COMPANY,
  HEROES_COMPANY_TEAM_PAGE_PATH,
  NIFFLER,
  NIFFLER_TEAM_PAGE_PATH,
  POWER_RANGERS,
  POWER_RANGERS_TEAM_PAGE_PATH,
} from "../../../Teams/constants";
import bananaImage from "./images/banana.png";
import heroesCompanyImage from "./images/heroes-company.png";
import powerRangersImage from "./images/power-rangers.png";
import nifflerImage from "./images/niffler.png";

import style from "./style.module.css";

const baseOrderedTeamLogoClassNames = [
  joinCls("top-50 start-100 translate-middle", style["active"]),
  joinCls("top-100 start-50 translate-middle"),
  joinCls("top-50 start-0 translate-middle"),
  joinCls("top-0 start-50 translate-middle"),
];

export default function TeamsSection({ className }) {
  const [selectedTeamKey, setSelectedTeamKey] = useState(BANANA);

  const teamMap = {
    [BANANA]: {
      image: bananaImage,
      className: "banana",
      name: "Banana",
      slogan: "We come in bunch",
      description:
        "Are you bored? Are you alone? Don't worry, you have Banana! When you are in Banana Gang, all the boredom and loneliness will disappear. All the members are super kind and careful. You will never be left out. If you need helps, just talk to the members and they are willing to lend you a helping hand. Last but not least, Banana's members have a great sense of humor, they always make you “lmao” and forget all your tiredness.",
      link: BANANA_TEAM_PAGE_PATH,
    },
    [HEROES_COMPANY]: {
      image: heroesCompanyImage,
      className: "heroes-company",
      name: "Heroes Company",
      slogan: "Stronger together",
      description:
        "When being a part of HC's family, where the elite, multi-talented, scholarship-hunting “heroes” converge, no one will be left out or lost and feel like home. Everyone always cares about each other, shares their feelings and either sorrows or happiness; strives to become stronger and better together. Given that sharing brings members much closer and cozier , Heroes Company is just what people truly want to fulfill their days.",
      link: HEROES_COMPANY_TEAM_PAGE_PATH,
    },
    [POWER_RANGERS]: {
      image: powerRangersImage,
      className: "power-rangers",
      name: "Power Rangers",
      slogan: "Justice for all",
      description:
        "Each Power Rangers's member has an unique color and that creates an unique team. But we are always willing to support and assist all others to overcome all difficulties, strive to conquer themselves and create meaningful values for society. The special thing about the PR team is that we always respect, sympathize and share together to create a sense of solidarity so that everyone is always happy and closer to each other.",
      link: POWER_RANGERS_TEAM_PAGE_PATH,
    },
    [NIFFLER]: {
      image: nifflerImage,
      className: "niffler",
      name: "Niffler",
      slogan: "Friend forever",
      description:
        "For many of the team members, Niffler is truly their second family. It’s a place where everyone can see the closeness and friendliness through the sincere sharing as well as the encouragement and super useful advice of the brothers and sisters in this lovely home. Besides, Niffler accepts and respects each member's unique personality and thoughts, which makes everyone feel comfortable being themselves.",
      link: NIFFLER_TEAM_PAGE_PATH,
    },
  };

  const teamKeys = Object.keys(teamMap);
  const selectedTeamIndex = teamKeys.findIndex((teamKey) => teamKey === selectedTeamKey);
  const handleNextBtnClicked = () => {
    setSelectedTeamKey(teamKeys[(selectedTeamIndex + 1) % teamKeys.length]);
  };

  const teamLogoClassName = teamKeys.reduce((result, teamKey, index) => {
    result[teamKey] = baseOrderedTeamLogoClassNames[index - selectedTeamIndex >= 0 ? index - selectedTeamIndex : index - selectedTeamIndex + teamKeys.length];
    return result;
  }, {});

  return (
    <div className={joinCls("d-flex align-items-center gap-5", className)}>
      <div className={style["wheel"]}>
        <div className="position-relative w-100 h-100">
          <div className={joinCls("position-relative rounded-circle border border-2 border-primary w-100 h-100", style["circle"])} />
          <Image
            src={teamMap[BANANA].image}
            className={joinCls("rounded-pill position-absolute cursor-pointer", style[teamMap[BANANA].className], teamLogoClassName[BANANA])}
            onClick={() => setSelectedTeamKey(BANANA)}
          />
          <Image
            src={teamMap[HEROES_COMPANY].image}
            className={joinCls("rounded-pill position-absolute cursor-pointer", style[teamMap[HEROES_COMPANY].className], teamLogoClassName[HEROES_COMPANY])}
            onClick={() => setSelectedTeamKey(HEROES_COMPANY)}
          />
          <Image
            src={teamMap[POWER_RANGERS].image}
            className={joinCls("rounded-pill position-absolute cursor-pointer", style[teamMap[POWER_RANGERS].className], teamLogoClassName[POWER_RANGERS])}
            onClick={() => setSelectedTeamKey(POWER_RANGERS)}
          />
          <Image
            src={teamMap[NIFFLER].image}
            className={joinCls("rounded-pill position-absolute cursor-pointer", style[teamMap[NIFFLER].className], teamLogoClassName[NIFFLER])}
            onClick={() => setSelectedTeamKey(NIFFLER)}
          />
        </div>
      </div>
      <div className="flex-grow-1">
        <div className={joinCls("position-relative rounded-4 p-5", style["team-card"])}>
          <div className="position-absolute"></div>
          <div className="position-relative">
            <h1 className={joinCls("text-uppercase", style[teamMap[selectedTeamKey].className])}>{teamMap[selectedTeamKey].name}</h1>
            <h2 className="text-uppercase">{teamMap[selectedTeamKey].slogan}</h2>
            <p className={joinCls("mt-3", style["description"])}>“{teamMap[selectedTeamKey].description}”</p>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={teamMap[selectedTeamKey].link}>
                <button className="btn btn-outline-gradient rounded-pill text-uppercase px-4 mt-3">See more</button>
              </Link>
              <div className={joinCls("d-flex align-items-center gap-2 fw-bold cursor-pointer", style["next-btn"])} onClick={handleNextBtnClicked}>
                <span>Next</span>
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
