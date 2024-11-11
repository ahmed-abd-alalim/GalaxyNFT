import "./DNN.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";

const DNN = ({ Data }) => {
  const [handelcomponant, setHandelcomponant] = useState(3);
  useEffect(() => {
    const updateComponent = () => {
      if (window.innerWidth <= 576) {
        setHandelcomponant(3);
      } else if (window.innerWidth <= 850) {
        setHandelcomponant(2);
      } else {
        setHandelcomponant(3);
      }
    };
    updateComponent();
    window.addEventListener("resize", updateComponent);
    return () => window.removeEventListener("resize", updateComponent);
  }, []);

  return (
    <section id="DisNewNFTs" className="my-5">
      <div className="container">
        <div className="mx-3 d-flex justify-content-between align-items-center">
          <div>
            <span className="d-block F2">
              <span className="lemon">Discover</span> New NFTs
            </span>
            <span className="mt-2 F4">
              Discover the latest NFT drops and stay ahead of the curve
            </span>
          </div>
          <div className="d-none d-md-block">
            <Link to="/nfts" className="btnTemp-outLine px-5 py-3">
              <LuEye className="LuEye me-2 my-1" />
              see all
            </Link>
          </div>
        </div>
        <div className="row mx-1 mt-3 mt-md-4">
          {Data.NFTsMarket.NFTs.slice(0, handelcomponant).map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 ps-2 ps-md-3 pe-2 pe-md-3 pb-3 pt-2"
            >
              <div className="card">
                <Link to={`/NFT/${item.postTitle}`} className="CrdTools">
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
                    <img src={item.userInfo.img} alt="user img" width="28px" />
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
                      <span className="F3">{item.postHightesBid} wETH</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="d-plock d-md-none mt-2">
            <Link
              to="/nfts"
              className="d-flex btnTemp-outLine px-4 py-2 justify-content-center align-items-center"
            >
              <LuEye className="LuEye me-2 my-2" />
              see all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DNN;
