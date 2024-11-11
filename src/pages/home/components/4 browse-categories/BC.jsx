import "./BC.css";
import { Link } from "react-router-dom";
import { PiPaintBrushLight } from "react-icons/pi";
import { PiSwatchesThin } from "react-icons/pi";
import { PiMusicNotesThin } from "react-icons/pi";
import { CiCamera } from "react-icons/ci";
import { PiVideoCameraThin } from "react-icons/pi";
import { PiMagicWandThin } from "react-icons/pi";
import { PiBasketballThin } from "react-icons/pi";
import { PiPlanetLight } from "react-icons/pi";

const CategorieIcon = {
  Art: PiPaintBrushLight,
  Collectibles: PiSwatchesThin,
  Music: PiMusicNotesThin,
  Photography: CiCamera,
  Video: PiVideoCameraThin,
  Utility: PiMagicWandThin,
  Sport: PiBasketballThin,
  "Virtual Worlds": PiPlanetLight,
};
const BC = ({ Data }) => {
  return (
    <section id="Categories" className="my-5 py-4">
      <div className="container">
        <div className="mx-3">
          <span className="d-block F2">
            <span className="lemon">Browse</span> categories
          </span>
          <span className="mt-2 F4">
            can search for your favorite Category with ease
          </span>
        </div>
        <div className="row mx-1 mt-3">
          {Data.BC.map((item, index) => {
            const CatIcon = CategorieIcon[item.CategorieName];
            return (
              <Link
                key={index}
                className="col-6 col-md-3 p-2 p-md-3"
                to="/nfts"
              >
                <div className="card">
                  <div className="cardImg">
                    <img
                      src={item.CategorieImg}
                      className="card-img-top"
                      alt="Categorie Img"
                    />
                    <div className="cardIcon">
                      <CatIcon />
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="card-text F3">{item.CategorieName}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BC;
