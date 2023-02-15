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

import style from "./style.module.css";

export default function TeamsSection({ className }) {
  const [orderedTeamKeys, setOrderedTeamKeys] = useState([BANANA, HEROES_COMPANY, POWER_RANGERS, NIFFLER]);

  const teamMap = {
    [BANANA]: {
      image: randomImgUrl(400, 400),
      className: "banana",
      name: "Banana",
      slogan: "We come in bunch",
      description:
        "Are you bored? Are you alone? Don't worry, you have Banana! When you are in Banana Gang, all the boredom and loneliness will disappear. All the members are super kind and careful. You will never be left out. If you need helps, just talk to the members and they are willing to lend you a helping hand. Last but not least, Banana's members have a great sense of humor, they always make you “lmao” and forget all your tiredness.",
      link: BANANA_TEAM_PAGE_PATH,
    },
    [HEROES_COMPANY]: {
      image: randomImgUrl(400, 400),
      className: "heroes-company",
      name: "Heroes Company",
      slogan: "Stronger together",
      description:
        "When being a part of HC's family, where the elite, multi-talented, scholarship-hunting “heroes” converge, no one will be left out or lost and feel like home. Everyone always cares about each other, shares their feelings and either sorrows or happiness; strives to become stronger and better together. Given that sharing brings members much closer and cozier , Heroes Company is just what people truly want to fulfill their days.",
      link: HEROES_COMPANY_TEAM_PAGE_PATH,
    },
    [POWER_RANGERS]: {
      image: randomImgUrl(400, 400),
      className: "power-rangers",
      name: "Power Rangers",
      slogan: "Justice for all",
      description:
        "Each Power Rangers's member has an unique color and that creates an unique team. But we are always willing to support and assist all others to overcome all difficulties, strive to conquer themselves and create meaningful values for society. The special thing about the PR team is that we always respect, sympathize and share together to create a sense of solidarity so that everyone is always happy and closer to each other.",
      link: POWER_RANGERS_TEAM_PAGE_PATH,
    },
    [NIFFLER]: {
      image: randomImgUrl(400, 400),
      className: "niffler",
      name: "Niffler",
      slogan: "Friend forever",
      description:
        "For many of the team members, Niffler is truly their second family. It’s a place where everyone can see the closeness and friendliness through the sincere sharing as well as the encouragement and super useful advice of the brothers and sisters in this lovely home. Besides, Niffler accepts and respects each member's unique personality and thoughts, which makes everyone feel comfortable being themselves.",
      link: NIFFLER_TEAM_PAGE_PATH,
    },
  };

  const handleNextBtnClicked = () => {
    setOrderedTeamKeys([...orderedTeamKeys.slice(1), orderedTeamKeys[0]]);
  };

  return (
    <div className={joinCls("d-flex align-items-center gap-5", className)}>
      <div className={style["wheel"]}>
        <div className="position-relative w-100 h-100">
          <div className={joinCls("position-relative rounded-circle border border-2 border-primary w-100 h-100", style["circle"])} />
          <Image
            key={orderedTeamKeys[0]}
            src={teamMap[orderedTeamKeys[0]].image}
            className={joinCls("rounded-pill position-absolute top-50 start-100 translate-middle", style["active"])}
          />
          <Image key={orderedTeamKeys[1]} src={teamMap[orderedTeamKeys[1]].image} className={joinCls("rounded-pill position-absolute top-100 start-50 translate-middle")} />
          <Image key={orderedTeamKeys[2]} src={teamMap[orderedTeamKeys[2]].image} className={joinCls("rounded-pill position-absolute top-50 start-0 translate-middle")} />
          <Image key={orderedTeamKeys[3]} src={teamMap[orderedTeamKeys[3]].image} className={joinCls("rounded-pill position-absolute top-0 start-50 translate-middle")} />
        </div>
      </div>
      <div className="flex-grow-1">
        <div className={joinCls("position-relative rounded-4 p-5", style["team-card"])}>
          <div className="position-absolute"></div>
          <div className="position-relative">
            <h1 className={joinCls("text-uppercase", style[teamMap[orderedTeamKeys[0]].className])}>{teamMap[orderedTeamKeys[0]].name}</h1>
            <h2 className="text-uppercase">{teamMap[orderedTeamKeys[0]].slogan}</h2>
            <p className={joinCls("mt-3", style["description"])}>“{teamMap[orderedTeamKeys[0]].description}”</p>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={teamMap[orderedTeamKeys[0]].link}>
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
