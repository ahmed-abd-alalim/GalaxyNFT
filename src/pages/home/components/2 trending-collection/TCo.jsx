import "./TCo.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TCo = ({ Data }) => {
  useEffect(() => {
    const $carousel = window.$("#owl-demo");
    $carousel.owlCarousel({
      navigation: true,
      autoPlay: 4000,
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 2],
      itemsTablet: [768, 2],
      itemsMobile: [479, 1],
    });
    return () => {
      $carousel.trigger("destroy.owl.carousel");
    };
  }, []);

  return (
    <section id="TCo" className="my-5">
      <div className="container">
        <div className="d-flex justify-content-center justify-content-md-start mx-3">
          <div>
            <span className="d-block F2">
              <span className="lemon">Trending</span> Collection
            </span>
            <span className="mt-2 F4">
              Get in on the action and discover the latest trends in NFTs
            </span>
          </div>
        </div>
        <div className="row mx-0 ms-md-1 mt-2 mt-md-4">
          <div className="col-12">
            <div id="owl-demo" className="owl-carousel owl-theme">
              {Data.NFTsMarket.Collections.slice(0, 3).map((item, index) => (
                <div key={index} className="item">
                  <div>
                    <img src={item.primaryImg} alt="primary Img" width="100%" />
                  </div>
                  <div className="row mt-1">
                    <div className="col-4 p-1 p-md-2">
                      <img
                        src={item.secondaryImg[0]}
                        alt="secondary Img"
                        width="100%"
                      />
                    </div>
                    <div className="col-4 p-1 p-md-2">
                      <img
                        src={item.secondaryImg[1]}
                        alt="secondary Img"
                        width="100%"
                      />
                    </div>
                    <div className="col-4 p-1 p-md-2">
                      <Link
                        to="/nfts"
                        className="F1 collectionNum w-100 h-100 d-flex justify-content-center align-items-center"
                      >
                        {item.collectionNumper}+
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2 ms-1">
                    <span className="d-block F3">{item.collectionName}</span>
                    <Link
                      to={`/user/${item.userInfo.name}`}
                      className="d-flex align-items-center gap-2 mt-2 userinfo"
                    >
                      <img
                        src={item.userInfo.img}
                        alt="user img"
                        width="28px"
                      />
                      <span className="F4">{item.userInfo.name}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TCo;
