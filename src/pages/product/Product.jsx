import "./Product.css";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = ({ Data, productName }) => {
  const navigate = useNavigate();

  const [productInfromation, setProductInfromation] = useState("");

  const GetUserArt = () => {
    const userData = Data.creators.filter(
      (item) => item.userName === productInfromation?.userInfo?.name
    );
    return userData[0]?.NFTs?.length > 1 ? true : false;
  };

  useEffect(() => {
    if (
      Data.NFTsMarket.NFTs.filter((item) => item.postTitle === productName)
        .length
    ) {
      const productData = Data.NFTsMarket.NFTs.filter(
        (item) => item.postTitle === productName
      );
      setProductInfromation(productData[0]);
    } else {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const carousel = window.$("#owlProduct, #owlCreator");
    carousel.owlCarousel({
      items: 3,
      itemsDesktop: [1000, 3],
      itemsDesktopSmall: [900, 2],
      itemsTablet: [600, 1],
      itemsMobile: false,
      navigation: true,
      autoPlay: 5000,
      navigationText: [
        '<i class="bi bi-arrow-left-short"></i>',
        '<i class="bi bi-arrow-right-short"></i>',
      ],
    });
    return () => {
      carousel.trigger("destroy.owl.carousel");
    };
  }, [GetUserArt()]);

  return (
    <>
      <Helmet>
        <title>Galaxy Product | {productName} Account</title>
        <meta name="description" content="Galaxy NFT | Account" />
      </Helmet>
      <section id="product">
        <div className="container mt-4 mb-5 mt-md-5 pt-lg-3">
          <div className="row d-flex align-items-center productData mx-2 py-3 pb-4 pb-md-3 px-md-2">
            <div className="col-12 col-lg-6 productImg">
              <img
                src={productInfromation.postImg}
                alt="product Img"
                width={"100%"}
              />
            </div>
            <div className="col-12 col-lg-6 mt-3 mt-lg-0 productInfo">
              <span className="postName">{productInfromation.postTitle}</span>
              <span className="postDescription d-block mt-2">
                {productInfromation.postdescreption}
              </span>
              <hr className="my-4" />
              <Link
                to={`/user/${productInfromation?.userInfo?.name}`}
                className="d-flex align-items-center gap-3 px-2 userInfo"
              >
                <img
                  src={productInfromation?.userInfo?.img}
                  alt="user Img"
                  className="mt-1"
                />
                <div>
                  <span className="createrTitle">Creater</span>
                  <span className="d-block userName">
                    {productInfromation?.userInfo?.name}
                  </span>
                </div>
              </Link>
              <div className="price mt-4">
                <span className="priceTitle">Price</span>
                <div>
                  <span className="ethValue">
                    {productInfromation.postPrice} ETH
                  </span>
                  <span className="ms-2 usdValue">
                    ({productInfromation.postPrice * 2807} USD)
                  </span>
                </div>
              </div>
              <div className="row buttonSection d-flex justify-content-center mt-4 mt-md-5">
                <div className="col-11 col-md-5 btnOutLine d-flex justify-content-center py-2 mx-2">
                  <span>Make Offer</span>
                </div>
                <div className="col-11 col-md-5 btnPold d-flex justify-content-center py-2 mx-2 mt-2 mt-md-0">
                  <span>Buy Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          {GetUserArt() && (
            <div className="row productForYou">
              <div className="col-12 Suggested">
                <span className="ms-2">from Same Creator</span>
                <hr className="m-auto m-0 mt-2 mb-2" />
              </div>
              <div className="col-12">
                <div id="owlCreator" className="owl-carousel owl-theme">
                  {Data.NFTsMarket.NFTs.filter(
                    (item) =>
                      item?.userInfo?.name ===
                      productInfromation?.userInfo?.name
                  )
                    .filter(
                      (item) => item.postTitle != productInfromation.postTitle
                    )
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 6)
                    .map((item, index) => (
                      <div key={index} className="item p-1">
                        <div className="card">
                          <Link
                            to={`/NFT/${item.postTitle}`}
                            className="CrdTools"
                          >
                            <img
                              src={item.postImg}
                              className="card-img-top"
                              alt="post Img"
                            />
                          </Link>
                          <div className="card-body">
                            <Link to={`/NFT/${item.postTitle}`}>
                              <span className="card-text F3 d-block">
                                {item.postTitle}
                              </span>
                            </Link>
                            <Link
                              to={`/user/${item.userInfo.name}`}
                              className="d-flex align-items-center gap-2 mt-3 userinfo"
                            >
                              <img
                                src={item.userInfo.img}
                                alt="user img"
                                width="28px"
                              />
                              <span className="F4">{item.userInfo.name}</span>
                            </Link>
                            <Link
                              to={`/NFT/${item.postTitle}`}
                              className="d-flex justify-content-between align-items-center mt-3 prodictInfo"
                            >
                              <div>
                                <span className="F4 d-block">Price</span>
                                <span className="F3">{item.postPrice} ETH</span>
                              </div>
                              <div className="text-end">
                                <span className="F4 d-block">Highest Bid</span>
                                <span className="F3">
                                  {item.postHightesBid} wETH
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
          <div className="row productForYou mt-3 mt-md-5">
            <div className="col-12 Suggested">
              <span className="ms-2">Suggested for you</span>
              <hr className="m-auto m-0 mt-2 mb-2" />
            </div>
            <div className="col-12">
              <div id="owlProduct" className="owl-carousel owl-theme">
                {Data.NFTsMarket.NFTs.filter(
                  (item) =>
                    item?.userInfo?.name != productInfromation?.userInfo?.name
                )
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 6)
                  .map((item, index) => (
                    <div key={index} className="item p-1">
                      <div className="card">
                        <Link
                          to={`/NFT/${item.postTitle}`}
                          className="CrdTools"
                        >
                          <img
                            src={item.postImg}
                            className="card-img-top"
                            alt="post Img"
                          />
                        </Link>
                        <div className="card-body">
                          <Link to={`/NFT/${item.postTitle}`}>
                            <span className="card-text F3 d-block">
                              {item.postTitle}
                            </span>
                          </Link>
                          <Link
                            to={`/user/${item.userInfo.name}`}
                            className="d-flex align-items-center gap-2 mt-3 userinfo"
                          >
                            <img
                              src={item.userInfo.img}
                              alt="user img"
                              width="28px"
                            />
                            <span className="F4">{item.userInfo.name}</span>
                          </Link>
                          <Link
                            to={`/NFT/${item.postTitle}`}
                            className="d-flex justify-content-between align-items-center mt-3 prodictInfo"
                          >
                            <div>
                              <span className="F4 d-block">Price</span>
                              <span className="F3">{item.postPrice} ETH</span>
                            </div>
                            <div className="text-end">
                              <span className="F4 d-block">Highest Bid</span>
                              <span className="F3">
                                {item.postHightesBid} wETH
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
