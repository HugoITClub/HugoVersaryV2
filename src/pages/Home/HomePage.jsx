import { FormattedMessage } from "react-intl";
import Carousel from "../../components/Carousel/Carousel";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";

import style from "./style.module.css";
import YtDecor1Svg from "./images/yt-decor-1.svg";
import YtDecor2Svg from "./images/yt-decor-2.svg";
import Slider from "../../components/Slider/Slider";
import { Link } from "react-router-dom";
import Image from "../../components/Image/Image";
import homeMessages from "./homeMessages";
import { MEETINGS_ACTIVITY_PAGE_PATH } from "../Activities/Meetings/constants";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  const images = [randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl()];
  const sliderItems = images.map((image) => ({ url: image, id: image }));

  const [isShownHugoVideo, setIsShownHugoVideo] = useState(false);

  return (
    <div className="bg-light">
      <Carousel id="HeaderCarousel" images={images} className={style.carousel} />

      <section className="container mt-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-6">
            <h1 className="display-2 text-outline-primary fw-bolder f-lato">WHAT IS</h1>
            <h1 className="display-3 f-montserrat fw-bolder text-gradient text-start">HUGO ENGLISH CLUB</h1>
            <p className={joinCls("me-5", style["description"])}>
              <FormattedMessage {...homeMessages.description} />
            </p>
            <button className="btn btn-outline-gradient rounded-pill px-4">SEE MORE</button>
          </div>
          <div className="col-auto">
            <div className={joinCls("position-relative", style["yt-play"])}>
              <img src={YtDecor1Svg} className="position-absolute bottom-0 start-0" alt="youtube-decor" />
              <img src={YtDecor2Svg} className="position-absolute top-0 end-0" alt="youtube-decor" />
              <img src="https://img.youtube.com/vi/Y9V3bgXbzi4/hqdefault.jpg" className="mw-100 p-3" alt="youtube-thumbnail" />
              <div
                className={joinCls(
                  "position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center bg-white bg-opacity-25 rounded-circle",
                  style["yt-play-btn"]
                )}
                onClick={() => setIsShownHugoVideo(true)}
              >
                <i className="fa-solid fa-2xl fa-play text-white"></i>
              </div>
            </div>
          </div>
        </div>

        <Modal className="modal-xl" dialogClassName="h-100 my-0 py-5" isShown={isShownHugoVideo} onClose={() => setIsShownHugoVideo(false)}>
          <iframe id="player" type="text/html" width="100%" height="100%" src="http://www.youtube.com/embed/Y9V3bgXbzi4?enablejsapi=1" frameBorder="0"></iframe>
        </Modal>
      </section>

      <section className="container mt-10">
        <h1 className="display-5 f-montserrat fw-bolder text-gradient text-center">TEAMS IN HUGO</h1>
      </section>

      <section className="container mt-10">
        <h1 className="display-5 f-montserrat fw-bolder text-gradient text-center">ACTIVITIES</h1>
        <Slider
          items={sliderItems}
          className="gap-3 mt-5"
          renderItem={(item) => (
            <Link
              key={item.id}
              to={MEETINGS_ACTIVITY_PAGE_PATH}
              className={joinCls("card text-decoration-none text-bg-dark border-0 rounded-3 overflow-hidden", style["activity-item"])}
            >
              <Image src={item.url} className="card-img" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="position-relative">
                  <div className={joinCls("position-absolute", style["card-header"])}>
                    <h3 className="badge text-success text-bg-light text-uppercase px-2 py-2">Special title treatment</h3>
                    <h5 className="card-text">Traveling</h5>
                  </div>
                  <p className={joinCls("card-text", style["card-sub-text"])}>With supporting text below as a natural lead-in to additional content</p>
                </div>
                <p className="card-text text-secondary fw-bold">
                  <small>May 30, 2022</small>
                </p>
              </div>
            </Link>
          )}
        />
      </section>

      <section className="container mt-10">
        <h1 className="display-5 f-montserrat fw-bolder text-gradient text-center">BLOGS</h1>
        {/* <Slider
          items={sliderItems}
          className="gap-3 mt-5"
          renderItem={(item) => (
            <Link
              key={item.id}
              to={MEETINGS_ACTIVITY_PAGE_PATH}
              className={joinCls("card text-decoration-none text-bg-dark border-0 rounded-3 overflow-hidden", style["blog-item"])}
            >
              <Image src={item.url} className="card-img" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="position-relative">
                  <div className={joinCls("position-absolute", style["card-header"])}>
                    <h3 className="badge text-success text-bg-light text-uppercase px-2 py-2">Special title treatment</h3>
                    <h5 className="card-text">Traveling</h5>
                  </div>
                  <p className={joinCls("card-text", style["card-sub-text"])}>With supporting text below as a natural lead-in to additional content</p>
                </div>
                <p className="card-text text-secondary fw-bold">
                  <small>May 30, 2022</small>
                </p>
              </div>
            </Link>
          )}
        /> */}
      </section>

      <Footer className="mt-10" />
    </div>
  );
}
