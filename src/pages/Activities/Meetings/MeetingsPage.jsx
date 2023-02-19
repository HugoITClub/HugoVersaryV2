import Skeleton from "../../../components/Skeleton/Skeleton.jsx";
import useSheetAPI from "../../../services/google/hooks/useSheetAPI.js";
import { joinCls, randomImgUrl } from "../../../utilities/text.utils.js";
import Image from "../../../components/Image/Image";

import style from "./style.module.css";
export default function MeetingsPage() {
  const {
    isLoading,
    isFull,
    data: meetings,
    getMore: getMoreMeeting,
  } = useSheetAPI("Meeting", "K", "P", { earlyTake: 8 });

  return (
    <div>
      <div className="team-meeting">
        <div className={style["header-pic"]}>
          <Image
            src={`${randomImgUrl(500)}`}
            className="object-fit-cover w-100 h-100"
          />
          <div className={style["fade"]}></div>
          <div
            className={joinCls("text-white text-center", style["header-text"])}
          >
            <h2 className="text-uppercase">hugo english club</h2>
            <h2 className="">“Light up your fire.”</h2>
          </div>
        </div>
        <h1 className="display-5 f-montserrat fw-bolder text-center text-gradient text-uppercase my-5">
          meetings
        </h1>
        <div id="team-meeting" className="container">
          <div className="row g-5">
            {meetings.map(
              ([id, title, description, date, imgUrl, contentUrl]) => (
                <div className="col-6">
                  <a
                    key={id}
                    href={contentUrl}
                    className={joinCls("text-decoration-none", style["post"])}
                  >
                    <div className="row justify-content-around">
                      <div className="col-5 p-0">
                        <img
                          src={imgUrl}
                          alt=""
                          className={style["post-image"]}
                        />
                      </div>
                      <div className="col-6">
                        <div
                          className={joinCls(
                            "text-ellipsis f-montserrat fw-bold text-black",
                            style["post-title"]
                          )}
                        >
                          {title}
                        </div>
                        <div
                          className={joinCls(
                            "text-ellipsis",
                            style["post-description"]
                          )}
                        >
                          {description}
                        </div>
                        <div
                          className={joinCls(
                            "text-uppercase mt-2",
                            style["post-date"]
                          )}
                        >
                          {date}
                        </div>
                        <div className="text-decoration-none d-flex align-items-center mt-1">
                          <p className="m-0 fw-bold text-gradient">Read more</p>
                          <p
                            className={joinCls(
                              "mb-0 mt-1 ms-2 d-flex text-decoration-none align-items-center justify-content-center text-gradient",
                              style["read-btn"]
                            )}
                          >
                            <i className="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            )}

            {isLoading && (
              <>
                <div className="col-6">
                  <div
                    className={joinCls("text-decoration-none", style["post"])}
                  >
                    <div className="row justify-content-around">
                      <div className="col-5">
                        <Skeleton height="12rem" className="rounded" />
                      </div>
                      <div className="col-6">
                        <Skeleton className="mb-3" height="3rem" />
                        <Skeleton className="mb-3" />
                        <Skeleton className="mb-3" />
                        <Skeleton className="mb-3" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className={joinCls("text-decoration-none", style["post"])}
                  >
                    <div className="row justify-content-around">
                      <div className="col-5">
                        <Skeleton height="12rem" className="rounded" />
                      </div>
                      <div className="col-6">
                        <Skeleton className="mb-3" height="3rem" />
                        <Skeleton className="mb-3" />
                        <Skeleton className="mb-3" />
                        <Skeleton className="mb-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {!isFull && (
            <div className="row justify-content-center mt-5">
              <div className="col-auto">
                <button
                  className={joinCls(
                    "btn btn-lg btn-outline-gradient rounded-pill",
                    style["see-more-btn"]
                  )}
                  onClick={() => getMoreMeeting(8)}
                >
                  SEE MORE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
