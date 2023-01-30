import { useMatch } from "react-router-dom";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";
import { TEAMS_PAGE_PATH } from "./constants";

import style from "./style.module.css";

function TeamsPage() {
  const {
    params: { name },
  } = useMatch(TEAMS_PAGE_PATH);
  return (
    <div className="bg-dark">
      <section
        className={joinCls("container-fluid d-flex flex-column justify-content-end align-items-center", style["header"])}
        style={{ backgroundImage: `url(${randomImgUrl()})` }}
      >
        <div className={style["fade"]}></div>
        <div className={joinCls("d-flex flex-column align-items-center", style["overlay"])}>
          <h1>POWER RANGERS</h1>
          <p>"Justice For All"</p>
          <button className={joinCls("btn d-flex justify-content-center align-items-center rounded-circle", style["icon"])}>
            <span className="fa-solid fa-xl fa-chevron-down"></span>
          </button>
        </div>
      </section>

      <section className={joinCls("container", style["explore"])}>
        <h1 className="text-white text-center f-montserrat fw-semibold mt-10">
          Explore <span className="text-primary">Power Rangers</span>
        </h1>
        <p className="text-light text-center fst-italic fs-5 mt-5">
          "Each Power Rangers's member has an unique color and that creates an unique team. But we are always willing to support and assist all others to overcome all difficulties,
          strive to conquer themselves and create meaningful values for society. The special thing about the PRs team is that we always respect, sympathize and share together to
          create a sense of solidarity so that everyone is always happy and closer to each other."
        </p>
        <div className="row">
          <div className="col-auto"></div>
          <div className="col-auto"></div>
        </div>
      </section>
    </div>
  );
}

export default TeamsPage;
