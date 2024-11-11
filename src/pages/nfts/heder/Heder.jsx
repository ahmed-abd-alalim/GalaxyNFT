import "./Heder.css";
import { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";

const Heder = ({ filterButtonHandel, setFilterButtonHandel }) => {
  useEffect(() => {
    const $carousel = window.$("#owl-filter");
    $carousel.owlCarousel({
      items: 7,
      itemsDesktop: [1000, 7],
      itemsDesktopSmall: [900, 6],
      itemsTablet: [600, 4],
      itemsMobile: [600, 3],
    });
    return () => {
      $carousel.trigger("destroy.owl.carousel");
    };
  }, []);

  const HandelMenuFilter = () => {
    if (filterButtonHandel.display === "none") {
      setFilterButtonHandel({
        display: "block",
        size: 9,
      });
    } else {
      setFilterButtonHandel({
        display: "none",
        size: 12,
      });
    }
  };

  const HandelCloseFilterButton = () => {
    document.querySelector(".FilterSliderDeep").style.transform =
      "translate(0, 0)";
  };

  return (
    <section id="Marketplace" className="mt-md-5 pt-lg-3">
      <div className="container">
        <div className="row mx-0">
          <div className="col-12">
            <span className="F1 textS1 d-block">
              <span className="lemon">Browse</span> Marketplace
            </span>
            <span className="F4 textS2 d-flex mt-1">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </span>
            <div className="d-flex align-items-center gap-1 mt-4">
              <div className="searchComponant d-flex justify-content-between align-items-center px-3 w-100">
                <input
                  type="text"
                  placeholder="Search your favorite NFTs"
                  className="py-3 mx-1 w-100"
                />
                <FiSearch className="FiSearch" />
              </div>
              <div
                className="d-flex d-lg-none justify-content-center align-items-center fristfilterButton F4 p-2"
                onClick={HandelCloseFilterButton}
              >
                <VscSettings className="VscSettings m-2" />
              </div>
            </div>
          </div>
          <div className="col-12 d-flex align-items-center mt-3">
            <div
              className="d-none d-lg-flex justify-content-center align-items-center filterButton gap-2 F4 py-2 px-4"
              onClick={HandelMenuFilter}
            >
              <VscSettings className="VscSettings" />
              <span>Filters</span>
            </div>
            <div
              id="owl-filter"
              className="owl-carousel owl-theme ms-0 ms-md-1"
            >
              <div className="item py-2">
                <span className="F4">Genre</span>
              </div>
              <div className="item py-2">
                <span className="F4">Price</span>
              </div>
              <div className="item py-2">
                <span className="F4">rarity</span>
              </div>
              <div className="item py-2">
                <span className="F4">artist</span>
              </div>
              <div className="item py-2">
                <span className="F4">theme</span>
              </div>
              <div className="item py-2">
                <span className="F4">collection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heder;
