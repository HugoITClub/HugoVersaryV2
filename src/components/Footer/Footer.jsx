import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";
import Image from "../Image/Image";
import { generateSpark } from "./components/Spark/helper";
import Spark from "./components/Spark/Spark";

import style from "./style.module.css";

export default function Footer({ className, ...props }) {
  const containerRef = useRef();
  const [sparks, setSparks] = useState([]);

  const handleSparkTransitionEnded = (key, event) => {
    const container = event.target.parentElement;
    const newSpark = generateSpark({ from: 64, to: container.clientWidth - 64 }, { from: 200, to: 500 }, { from: 2.4, to: 5 }, { from: 0, to: 360 }, { from: 4, to: 16 });

    const sparkIndex = sparks.findIndex(({ x, yEnd }) => `${x}-${yEnd}` === key);
    setSparks([...sparks.slice(0, sparkIndex), ...sparks.slice(sparkIndex + 1), newSpark]);
  };

  useEffect(() => {
    const container = containerRef.current;
    setSparks(
      [...Array(5)].map((item) =>
        generateSpark({ from: 64, to: container.clientWidth - 64 }, { from: 200, to: 500 }, { from: 2.4, to: 5 }, { from: 0, to: 360 }, { from: 4, to: 16 })
      )
    );
  }, []);

  return (
    <section ref={containerRef} className={joinCls("position-relative text-white", className)} {...props}>
      {sparks.map(({ x, yEnd, size, rotateEnd, transitionTime }) => (
        <Spark
          key={`${x}-${yEnd}`}
          x={x}
          yEnd={yEnd}
          size={size}
          rotateEnd={rotateEnd}
          transitionTime={transitionTime}
          onTransitionEnd={(event) => handleSparkTransitionEnded(`${x}-${yEnd}`, event)}
        />
      ))}

      <div className={joinCls("position-relative py-5", style["footer"])}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="d-flex flex-column">
                <Link to="#">
                  <Image src={randomImgUrl(64, 64)} className="rounded-circle" />
                </Link>
                <p>
                  This website is a product of Hugo IT club and part of the HUGOVERSARY project to celebrate the 15th birthday of Hugo English Club. This website is to store,
                  update and promote the activities and events of Hugo English Club up to the present time.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex flex-column">
                <h3 className="text-uppercase mb-4">About Us</h3>
                <Link className="text-reset text-decoration-none mb-2">Our staffs</Link>
                <Link className="text-reset text-decoration-none mb-2">Developers</Link>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex flex-column">
                <h3 className="text-uppercase mb-4">Contact</h3>
                <Link className="text-reset text-decoration-none mb-2">Email: hugoclub.dut@gmail.com</Link>
                <Link className="text-reset text-decoration-none mb-2">Phone: +84 981-770-874</Link>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex flex-column">
                <h3 className="text-uppercase mb-4">Language</h3>
                <div className="dropdown">
                  <div className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
                    English
                  </div>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">English</li>
                    <li className="dropdown-item">Vietnamese</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
