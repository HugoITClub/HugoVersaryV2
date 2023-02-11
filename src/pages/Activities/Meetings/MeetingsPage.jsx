import useSheetAPI from "../../../services/google/hooks/useSheetAPI.js";
import { joinCls, randomImgUrl } from "../../../utilities/text.utils.js";

import style from "./style.module.css";
export default function MeetingsPage() {
  const { isLoading, data: meetings, getMore: getMoreMeeting } = useSheetAPI("Meeting", "A", "F", { earlyTake: 8 });

  console.log(meetings);

  return (
    <div>
      <div className="team-meeting">
        <div
          className={style["header-pic"]}
          id="header-pic"
          style={{
            backgroundImage: `url(${randomImgUrl(500)})`,
          }}
        >
          <div className={style["fade"]}></div>
          <div className={joinCls("text-white text-center", style["overlay"])}>
            <h2 className="text-uppercase">hugo english club</h2>
            <h2 className="">“Light up your fire.”</h2>
          </div>
        </div>
        <h1 className="display-5 f-montserrat fw-bolder text-center text-gradient text-uppercase my-5">meetings</h1>
        <div id="team-meeting" className="container justify-content-around">
          <div className="row">
            <a href="#" className={joinCls("col-5 text-decoration-none", style["post"])}>
              <div className="row justify-content-around">
                <div className="col-5 p-0">
                  <img src={randomImgUrl(500)} alt="" className={style["post-image"]} />
                </div>
                <div className="col-6">
                  <div className={joinCls("text-ellipsis f-montserrat fw-bold text-black", style["post-title"])}>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nunc vulputate libero
                  </div>
                  <div className={joinCls("text-ellipsis", style["post-description"])}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero,Nunc vulputate libero Nunc vulputate libero,Nunc vulputate libero Nunc vulputate
                    libero,Nunc vulputate libero
                  </div>
                  <div className={joinCls("text-uppercase mt-2", style["post-date"])}>May 25, 2023</div>
                  <div className="text-decoration-none d-flex align-items-center mt-1">
                    <p className="m-0 fw-bold text-gradient">Read more</p>
                    <p className={joinCls("mb-0 mt-1 ms-2 d-flex text-decoration-none align-items-center justify-content-center text-gradient", style["read-btn"])}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
