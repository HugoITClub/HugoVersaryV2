import useSheetAPI from "../../services/google/hooks/useSheetAPI.js";
import { joinCls, randomImgUrl } from "../../utilities/text.utils.js";

import style from "./style.module.css";
export default function AboutUsPage() {
  const {
    isLoading,
    isFull,
    data: staffMembers,
    getMore: getMoreStaffs,
  } = useSheetAPI("AboutUs", "M", "P", { earlyTake: 13 });
  const { data: aboutUsImg } = useSheetAPI("AboutUs", "Q", "R", {
    earlyTake: 1,
  });
  console.log(aboutUsImg.values);
  return (
    <div>
      {aboutUsImg.map(([introduction, imgUrl]) => (
        <div>
          <div className="container">
            <div
              className={joinCls(
                "row justify-content-between align-items-center"
              )}
            >
              <p
                className={joinCls(
                  "col-lg-8 col-12 mt-5 fw-bold f-montserrat",
                  style["about-introduction-title"]
                )}
              >
                Our club built base on <br />
                <span>LEARN, DEVELOP</span> <br />
                and <span>JOY.</span>
              </p>
              <div
                className={joinCls(
                  "col-lg-9 col-12 my-5 f-lato text-justify",
                  style["introduction-content"]
                )}
              >
                {introduction}
              </div>
            </div>
          </div>
          <img src={imgUrl} className="w-100"></img>
        </div>
      ))}
      <div id="staff-area" className="mt-5">
        <div className="container">
          <div
            className={joinCls(
              "pb-3 f-montserrat fw-bold text-uppercase text-center text-gradient d-flex justify-content-center",
              style["about-human-title"]
            )}
          >
            get to know <br /> hugo's human
          </div>
          <div
            className={joinCls(
              "text-center row justify-content-center",
              style["about-human-description"]
            )}
          >
            <p className={joinCls("mt-3 col-lg-6 col-8")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </div>
          <div className="row">
            {staffMembers.map(([id, name, imageUrl, title]) => (
              <div
                key={id}
                className={joinCls(
                  "col-lg-3 col-12 col-md-6 text-center",
                  style["item"]
                )}
              >
                <img
                  src={imageUrl}
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "65%" }}
                />
                <p className={joinCls("mb-0 f-montserrat", style["mem-name"])}>
                  {name}
                </p>
                <p className={joinCls("f-montserrat", style["mem-title"])}>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
