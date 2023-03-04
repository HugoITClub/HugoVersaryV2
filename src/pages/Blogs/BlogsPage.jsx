import Carousel from "../../components/Carousel/Carousel";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";
import useSheetAPI from "../../services/google/hooks/useSheetAPI";
import Slider from "../../components/Slider/Slider";
import Image from "../../components/Image/Image";
import { Link } from "react-router-dom";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Footer from "../../components/Footer/Footer";

import style from "./style.module.css";

export default function BlogsPage() {
  const images = [randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl(), randomImgUrl()];
  const { isLoading: isBlogIntroLoading, isFull: isBlogIntroFull, data: blogIntroData, getMore: getMoreBlogIntro } = useSheetAPI("Blogs", "S", "V", { earlyTake: 8 });

  const { isLoading: isBlogsLoading, isFull: isBlogsFull, data: blogsData, getMore: getMoreBlogsData } = useSheetAPI("Blogs", "M", "R", { earlyTake: 8 });

  const { isLoading: isAcademicLoading, isFull: isAcademicFull, data: academicData, getMore: getMoreAcademicData } = useSheetAPI("Academic", "K", "P", { earlyTake: 8 });

  return (
    <div className="position-relative">
      <div className="position-relative container">
        <div className={joinCls("row mt-5", style["blog-intro"])}>
          <div className="col-6 d-flex align-items-center">
            <div className="blog-intro-content">
              <div className={joinCls("text-uppercase mb-3 f-montserrat text-start", style["blog-intro-content-title"])}>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NUNC VULPUTATE LIBERO
              </div>
              <div className={joinCls("f-lato text-ellipsis text-start", style["blog-intro-content-description"])}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. vulputate libero,Nunc vulputate libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero,Nunc vulputate libero. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero,Nunc vulputate libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero,Nunc vulputate libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero,Nunc vulputate libero. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate libero,Nunc vulputate libero.
              </div>
            </div>
          </div>
          <div className={joinCls("col-6", style["blog-intro-img"])}>
            <Carousel id="HeaderCarousel" images={images} />
          </div>
        </div>
        <div className="blog-content">
          <div className={joinCls("text-uppercase text-gradient fw-bold text-center f-montserrat display-5", style["blog-content-header"])}>hugo's blog</div>
          <Slider
            items={blogsData}
            className="gap-3 mt-5"
            renderItem={([id, title, description, time, imageUrl, contentFileId]) => (
              <Link key={id} to={contentFileId} className={joinCls("card text-reset text-decoration-none rounded-3 overflow-hidden", style["blog-item"])}>
                <Image src={imageUrl} className="card-img-top" />
                <div className="card-body position-relative">
                  <small className="d-block text-secondary text-uppercase">{time}</small>
                  <h5 className={joinCls("text-ellipsis text-start", style["blog-item-title"])}>{title}</h5>
                  <p className={joinCls("text-ellipsis text-start mb-4", style["blog-item-description"])}>{description}</p>
                  <div className={joinCls("d-flex align-items-center gap-2", style["read-more"])}>
                    <h6 className="mb-0">Read more</h6>
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </Link>
            )}
          />
        </div>
        <div className="academic-content">
          <div className={joinCls("text-uppercase text-gradient fw-bold text-center f-montserrat display-5 mb-5", style["blog-content-header"])}>hugo's academic</div>
          <div className="row g-5 g-md-3 g-lg-5">
            {academicData.map(([id, title, description, date, imgUrl, contentUrl]) => (
              <div className="col-lg-6 col-md-6 col-12">
                <Link key={id} to={contentUrl} className={joinCls("text-decoration-none", style["post"])}>
                  <div className="row justify-content-around">
                    <div className="col-md-6 col-lg-5 p-0 px-sm-2 col-5">
                      <img src={imgUrl} alt="" className={style["post-image"]} />
                    </div>
                    <div className="col-6">
                      <div className={joinCls("text-ellipsis f-montserrat fw-bold text-black", style["post-title"])}>{title}</div>
                      <div className={joinCls("text-ellipsis", style["post-description"])}>{description}</div>
                      <div className={joinCls("text-uppercase mt-2", style["post-date"])}>{date}</div>
                      <div className="text-decoration-none d-flex align-items-center mt-1">
                        <p className="m-0 fw-bold text-gradient">Read more</p>
                        <p className={joinCls("mb-0 mt-1 ms-2 d-flex text-decoration-none align-items-center justify-content-center text-gradient", style["read-btn"])}>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {isAcademicLoading && (
              <>
                <div className="col-6">
                  <div className={joinCls("text-decoration-none", style["post"])}>
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
                  <div className={joinCls("text-decoration-none", style["post"])}>
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
          {!isAcademicFull && (
            <div className="row justify-content-center mt-5">
              <div className="col-auto">
                <button className={joinCls("btn btn-lg btn-outline-gradient rounded-pill ", style["see-more-btn"])} onClick={() => getMoreAcademicData(8)}>
                  SEE MORE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer className="mt-10" />
    </div>
  );
}
