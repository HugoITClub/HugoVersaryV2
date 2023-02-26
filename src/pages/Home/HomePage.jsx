import { FormattedMessage } from "react-intl";
import Carousel from "../../components/Carousel/Carousel";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";
import YtDecor1Svg from "./images/yt-decor-1.svg";
import YtDecor2Svg from "./images/yt-decor-2.svg";
import EclipseDecor1Svg from "./images/eclipse-decor-1.svg";
import EclipseDecor2Svg from "./images/eclipse-decor-2.svg";
import EclipseDecor3Svg from "./images/eclipse-decor-3.svg";
import EclipseDecor4Svg from "./images/eclipse-decor-4.svg";
import RectDecor1Svg from "./images/rect-decor-1.svg";
import RectDecor2Svg from "./images/rect-decor-2.svg";
import RectDecor3Svg from "./images/rect-decor-3.svg";
import ShootingStarsSvg from "./images/shooting-stars.svg";
import PuzzleStarsSvg from "./images/puzzle.svg";
import NoteSvg from "./images/note.svg";
import RocketSvg from "./images/rocket.svg";
import DotsSvg from "./images/dots.svg";
import Slider from "../../components/Slider/Slider";
import { Link } from "react-router-dom";
import Image from "../../components/Image/Image";
import homeMessages from "./homeMessages";
import { MEETINGS_ACTIVITY_PAGE_PATH } from "../Activities/Meetings/constants";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";
import TeamsSection from "./components/TeamsSection/TeamsSection";
import useSheetAPI from "../../services/google/hooks/useSheetAPI";

import style from "./style.module.css";
import Wiggle from "../../components/Wiggle/Wiggle";

export default function HomePage() {
  const images = [
    randomImgUrl(),
    randomImgUrl(),
    randomImgUrl(),
    randomImgUrl(),
    randomImgUrl(),
    randomImgUrl(),
  ];
  const sliderItems = images.map((image) => ({ url: image, id: image }));

  const {
    isLoading: isBlogsLoading,
    isFull: isBlogsFull,
    data: blogsData,
    getMore: getMoreBlogsData,
  } = useSheetAPI("Blogs", "M", "R", { earlyTake: 8 });

  const {
    isLoading: isActivitiesLoading,
    isFull: isActivitiesFull,
    data: activitiesData,
    getMore: getMoreActivitiesData,
  } = useSheetAPI("Activities", "M", "S", { earlyTake: 8 });

  const {
    isLoading: isSliderHomePageLoading,
    isFull: isSliderHomePageFull,
    data: sliderHomePageData,
    getMore: getSliderHomePageData,
  } = useSheetAPI("SliderHomePage", "H", "I", { earlyTake: 4 });

  const [isShownHugoVideo, setIsShownHugoVideo] = useState(false);
  console.log(sliderHomePageData);
  return (
    <div className="bg-light overflow-hidden">
      <Carousel
        id="HeaderCarousel"
        images={images}
        className={style.carousel}
      />
      {/* <Carousel
        id={activitiesData.map((item) => [item[0]])}
        images={activitiesData.map((item) => [item[1]])}
        className={style.carousel}
      /> */}
      <section className="position-relative mt-5">
        <Image
          src={EclipseDecor1Svg}
          className={joinCls("position-absolute", style["eclipse-decor-1"])}
        />
        <Image
          src={EclipseDecor2Svg}
          className={joinCls("position-absolute", style["eclipse-decor-2"])}
        />

        <div className="container position-relative">
          <div className="row justify-content-between align-items-center">
            <div className="col-6">
              <h1 className="display-2 text-outline-primary fw-bolder f-lato">
                WHAT IS
              </h1>
              <h1 className="display-3 f-montserrat fw-bolder text-gradient text-start">
                HUGO ENGLISH CLUB
              </h1>
              <p className={joinCls("me-5", style["description"])}>
                <FormattedMessage {...homeMessages.description} />
              </p>
              <button className="btn btn-outline-gradient rounded-pill px-4">
                <FormattedMessage {...homeMessages.seeMoreButton} />
              </button>
            </div>
            <div className="col-auto">
              <div className={joinCls("position-relative", style["yt-play"])}>
                <img
                  src={YtDecor1Svg}
                  className="position-absolute bottom-0 start-0"
                  alt="youtube-decor"
                />
                <img
                  src={YtDecor2Svg}
                  className="position-absolute top-0 end-0"
                  alt="youtube-decor"
                />
                <img
                  src="https://img.youtube.com/vi/Y9V3bgXbzi4/hqdefault.jpg"
                  className="mw-100 p-3"
                  alt="youtube-thumbnail"
                />
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
        </div>

        <Modal
          className="modal-xl"
          dialogClassName="h-100 my-0 py-5"
          isShown={isShownHugoVideo}
          onClose={() => setIsShownHugoVideo(false)}
        >
          {isShownHugoVideo && (
            <iframe
              title="Youtube Video"
              className="bg-dark"
              type="text/html"
              width="100%"
              height="100%"
              src="http://www.youtube.com/embed/Y9V3bgXbzi4?enablejsapi=1"
            ></iframe>
          )}
        </Modal>
      </section>

      <section className="position-relative mt-10">
        <div className="position-relative container">
          <h1 className="display-5 f-montserrat fw-bolder text-gradient text-center">
            TEAMS IN HUGO
          </h1>
          <TeamsSection className="mt-5" />
        </div>

        <Wiggle className={joinCls("position-absolute", style["rocket"])}>
          <Image src={RocketSvg} />
        </Wiggle>
      </section>

      <section className="position-relative mt-10">
        <Wiggle
          className={joinCls("position-absolute", style["shooting-stars"])}
        >
          <Image src={ShootingStarsSvg} />
        </Wiggle>
        <Wiggle className={joinCls("position-absolute", style["puzzle"])}>
          <Image src={PuzzleStarsSvg} />
        </Wiggle>

        <div className="position-relative container">
          <h1 className="display-5 f-montserrat fw-bolder text-gradient text-center">
            ACTIVITIES
          </h1>
          <Slider
            items={activitiesData}
            className="gap-3 mt-5"
            renderItem={([
              id,
              label,
              name,
              description,
              date,
              imageUrl,
              contentFileId,
            ]) => (
              <Link
                key={id}
                to={MEETINGS_ACTIVITY_PAGE_PATH}
                className={joinCls(
                  "card text-decoration-none text-bg-dark border-0 rounded-3 overflow-hidden",
                  style["activity-item"]
                )}
              >
                <Image src={imageUrl} className="card-img" />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div className="position-relative">
                    <div
                      className={joinCls(
                        "position-absolute",
                        style["card-header"]
                      )}
                    >
                      <h3 className="badge text-success text-bg-light text-uppercase px-2 py-2">
                        {label}
                      </h3>
                      <h5 className="card-text">{name}</h5>
                    </div>
                    <p
                      className={joinCls(
                        "card-text text-ellipsis text-start",
                        style["card-sub-text"]
                      )}
                    >
                      {description}
                    </p>
                  </div>
                  <p className="card-text text-secondary fw-bold">
                    <small className="text-uppercase">{date}</small>
                  </p>
                </div>
              </Link>
            )}
          />
        </div>
      </section>

      <section className="position-relative mt-10">
        <Image
          src={EclipseDecor4Svg}
          className={joinCls("position-absolute", style["eclipse-decor-4"])}
        />
        <Wiggle className={joinCls("position-absolute", style["note"])}>
          <Image src={NoteSvg} />
        </Wiggle>
        <Wiggle className={joinCls("position-absolute", style["rect-decor-3"])}>
          <Image src={RectDecor3Svg} />
        </Wiggle>

        <div className="position-relative container">
          <h1 className="display-5 f-montserrat fw-bolder text-gradient text-center">
            BLOGS
          </h1>
          <Slider
            items={blogsData}
            className="gap-3 mt-5"
            renderItem={([
              id,
              title,
              description,
              time,
              imageUrl,
              contentFileId,
            ]) => (
              <Link
                key={id}
                to={contentFileId}
                className={joinCls(
                  "card text-reset text-decoration-none rounded-3 overflow-hidden",
                  style["blog-item"]
                )}
              >
                <Image src={imageUrl} className="card-img-top" />
                <div className="card-body position-relative">
                  <small className="d-block text-secondary text-uppercase">
                    {time}
                  </small>
                  <h5
                    className={joinCls(
                      "text-ellipsis text-start",
                      style["blog-item-title"]
                    )}
                  >
                    {title}
                  </h5>
                  <p
                    className={joinCls(
                      "text-ellipsis text-start mb-4",
                      style["blog-item-description"]
                    )}
                  >
                    {description}
                  </p>
                  <div
                    className={joinCls(
                      "d-flex align-items-center gap-2",
                      style["read-more"]
                    )}
                  >
                    <h6 className="mb-0">Read more</h6>
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </Link>
            )}
          />
        </div>
      </section>

      <section className="position-relative container z-1 mt-10">
        <Wiggle
          className={joinCls("position-absolute", style["eclipse-decor-3"])}
        >
          <Image src={EclipseDecor3Svg} />
        </Wiggle>
        <Wiggle
          className={joinCls("position-absolute", style["rect-decor-2-1"])}
        >
          <Image src={RectDecor1Svg} />
        </Wiggle>
        <Wiggle className={joinCls("position-absolute", style["rect-decor-2"])}>
          <Image src={RectDecor2Svg} />
        </Wiggle>
        <Wiggle className={joinCls("position-absolute", style["dots"])}>
          <Image src={DotsSvg} />
        </Wiggle>

        <div
          className={joinCls("position-relative rounded-4", style["join-us"])}
        >
          <Image
            src={randomImgUrl(2000, 1000)}
            className="position-absolute top-0 left-0 w-100 h-100 rounded-4"
          />
          <div className="position-relative d-flex flex-column align-items-center">
            <h1 className="text-gradient text-center text-uppercase">
              become an official member of
              <br />
              Hugo English Club
            </h1>
            <h4 className="text-center mt-5">
              Hugo brings English more familiar than ever before, whoever you
              are!
            </h4>
            <p className="text-center f-montserrat mt-3">
              Do you want to immerse yourself in an environment where people
              practice English together?
              <br />
              Are you eager to make active and talented friends in Danang?
              <br />
              More than an English Club, let’s join us to know what's behind it!
            </p>
            <button className="btn btn-lg btn-outline-gradient rounded-pill text-uppercase px-5 py-3 mt-4">
              Join us right now
            </button>
          </div>
        </div>
      </section>

      <Footer className="mt-10" />
    </div>
  );
}
