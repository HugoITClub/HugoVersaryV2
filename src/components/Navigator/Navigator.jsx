import FakeImage from "../../assets/images/Fake.png";
import Image from "../UI/Image/Image";
import { Link } from "react-router-dom";
import { HOME_PAGE_PATH } from "../../pages/Home/constants";
import Button from "../UI/Button/Button";
import style from "./style.module.css";
import { joinCls } from "../../utilities/text.utils";

const navLinks = [
  {
    name: "HOME",
    path: HOME_PAGE_PATH,
  },
];

export default function Navigator() {
  return (
    <nav className={joinCls("navbar navbar-expand-lg bg-dark navbar-dark", style["navbar"])}>
      <div className="container align-items-stretch">
        <Link to={HOME_PAGE_PATH} className="navbar-brand">
          <Image src={FakeImage} width={48} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse align-items-stretch">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
            {navLinks.map((navLink) => (
              <li key={navLink.name} className={joinCls("position-relative nav-item nav-element d-flex align-items-center h-100", style["nav-item"])}>
                <Link href={navLink.path} className="nav-link active text-white nav-home">
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="row align-items-center">
            <div className="col-auto">
              <Link to="#" class="text-decoration-none">
                <Button className="btn-dark px-3">JOIN US</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
