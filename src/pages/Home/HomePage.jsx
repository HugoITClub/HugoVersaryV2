import Carousel from "../../components/Carousel/Carousel";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";

import style from "./style.module.css";
import YtDecor1 from "./images/yt-decor-1.svg";
import YtDecor2 from "./images/yt-decor-2.svg";

function HomePage() {
  const images = [randomImgUrl(), randomImgUrl(), randomImgUrl()];

  return (
    <div className="bg-light">
      <Carousel id="HeaderCarousel" images={images} className={style.carousel} />

      <section className="container mt-10">
        <div className="row justify-content-between align-items-center">
          <div className="col-6">
            <h1 className="display-2 text-outline-primary fw-bolder">WHAT IS</h1>
            <h1 className="display-3 f-montserrat fw-bolder text-gradient">HUGO ENGLISH CLUB</h1>
            <p className={joinCls("me-5", style["description"])}>
              Hugo English Club is an official club directly under the Student Union of the University of Science and Technology - the University of Danang. It was established on
              March 15, 2008, by the University of Science and Technology students. Our vision is to build a dynamic environment for all students, school-level students, and
              working people in Da Nang city who want to practice English, enhance personal skills, and experience new activities.
            </p>
            <button className="btn btn-outline-gradient rounded-pill px-4">SEE MORE</button>
          </div>
          <div className="col-auto">
            <div className={joinCls("position-relative", style["yt-play"])}>
              <img src={YtDecor1} className="position-absolute bottom-0 start-0" />
              <img src={YtDecor2} className="position-absolute top-0 end-0" />
              <img src="https://img.youtube.com/vi/Y9V3bgXbzi4/hqdefault.jpg" className="mw-100 p-3" />
              <div
                className={joinCls(
                  "position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center bg-white bg-opacity-25 rounded-circle",
                  style["yt-play-btn"]
                )}
              >
                <i className="fa-solid fa-2xl fa-play text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-10">
        <h1 className="display-5 f-montserrat fw-bolder text-gradient text-center">TEAMS IN HUGO</h1>
      </section>

      <section className="container mt-10">
        <h1 className="display-5 f-montserrat fw-bolder text-gradient text-center">ACTIVITIES</h1>
      </section>
    </div>
  );
}

export default HomePage;
