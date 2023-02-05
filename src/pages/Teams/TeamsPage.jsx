import { Link, useMatch } from "react-router-dom";
import Image from "../../components/Image/Image";
import Slider from "../../components/Slider/Slider";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";
import { MEETINGS_ACTIVITY_PAGE_PATH } from "../Activities/constants";
import { TEAMS_PAGE_PATH } from "./constants";

import style from "./style.module.css";

function TeamsPage() {
  const {
    params: { name },
  } = useMatch(TEAMS_PAGE_PATH);

  const exploreCategories = [
    {
      title: "Team Meeting",
      description: "Weekly meeting every Thursday evening",
      images: Array.from(new Array(7)).map(randomImgUrl),
    },
    {
      title: "Team Camping",
      description: "One of the most interesting activities",
      images: Array.from(new Array(7)).map(randomImgUrl),
    },
    {
      title: "Extra Activities",
      description: "Another Activities",
      images: Array.from(new Array(7)).map(randomImgUrl),
    },
    {
      title: "Sharing",
      description: "Sharing experiences and knowledge",
      images: Array.from(new Array(7)).map(randomImgUrl),
    },
  ];

  const sliderItems = Array.from(new Array(7))
    .map(randomImgUrl)
    .map((image) => ({ url: image, id: image }));
  console.log(sliderItems);

  return (
    <div className="bg-black">
      <section
        className={joinCls("container-fluid d-flex flex-column justify-content-end align-items-center", style["header"])}
        style={{ backgroundImage: `url(${randomImgUrl()})` }}
      >
        <div className={style["fade"]}></div>
        <div className={joinCls("d-flex flex-column align-items-center mb-5", style["overlay"])}>
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
        <div className="row mt-5 gap-5 text-white justify-content-center">
          <div className="col-auto">
            <div className="d-flex gap-2 align-items-center">
              <i className="fa-solid fa-lg fa-clock"></i>
              <p className="mb-0">19:30 - Every Friday</p>
            </div>
          </div>
          <div className="col-auto">
            <div className="d-flex gap-2 align-items-center align-items-center">
              <i className="fa-solid fa-lg fa-location-dot"></i>
              <p className="mb-0">44 Ho Tuong, Thanh Khe, Da Nang</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row gx-5">
          {exploreCategories.map(({ title, description, images }) => (
            <div key={title} className="col-3">
              <div className={joinCls("position-relative overflow-hidden cursor-pointer", style["explore-img-area"])}>
                <Image src={randomImgUrl()} className="d-flex justify-content-center align-items-end rounded" />
                <div className="position-absolute bottom-0 w-100">
                  <div className="position-relative w-100 mx-2">
                    <h5 className="position-absolute text-white text-center w-100 mb-2">{title}</h5>
                    <p className="text-white text-center mb-3">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-10">
        <h1 className="display-6 f-montserrat fw-bolder text-white text-center">Recent Activities</h1>
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

      <section className={joinCls("container-fluid mt-10", style["footer"])}>
        <div className="d-flex justify-content-center align-items-center gap-5">
          <div className={style["line-decor"]} />
          <Image src={randomImgUrl(80)} />
          <div className={style["line-decor"]} />
        </div>

        <div className="position-relative w-100 vh-100 mt-10">
          <Image src={randomImgUrl()} className="w-100 h-100" />
          <div className={joinCls("position-absolute w-100 top-0", style["fade-down"])}></div>
          <div className={joinCls("position-absolute w-100 bottom-0", style["fade-up"])}></div>
        </div>
      </section>
    </div>
  );
}

export default TeamsPage;
