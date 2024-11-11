import "./Rankings.css";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const Trending = ({ Data }) => {
  const [randomNumper, setRandomNumper] = useState(0);
  const [buttonState, setButtonState] = useState({
    Today: "",
    "This Week": "",
    "This Month": "",
    "All Time": "active",
  });

  const HandelButtonState = (buttonName) => {
    setButtonState({
      [buttonName]: "active",
    });
  };

  useEffect(() => {
    buttonState["All Time"] === "active"
      ? setRandomNumper(0)
      : setRandomNumper(0.5);
  }, [buttonState]);

  return (
    <>
      <Helmet>
        <title>Galaxy NFT | Rankings</title>
        <meta name="description" content="Galaxy NFT | Rankings" />
      </Helmet>
      <section id="rankings">
        <div className="container mt-4 mb-5 mt-md-5 pt-lg-3">
          <div className="row mx-2 pageTitle mb-5">
            <div className="col-12">
              <span className="d-block F1 textS1">
                <span className="lemon">Top</span> Creators
              </span>
              <span className="d-block F3 textS2">
                Check out top ranking NFT artists on the NFT Marketplace.
              </span>
            </div>
          </div>
          <div className="row  mx-2 headRow">
            <div
              className={`col-3  d-flex justify-content-center pb-2 hidRowDeep ${buttonState.Today}`}
            >
              <div onClick={() => HandelButtonState("Today")}>
                <span className="d-block d-md-none">1d</span>
                <span className="d-none d-md-block">Today</span>
              </div>
            </div>
            <div
              className={`col-3  d-flex justify-content-center pb-2 hidRowDeep ${buttonState["This Week"]}`}
            >
              <div onClick={() => HandelButtonState("This Week")}>
                <span className="d-block d-md-none">7d</span>
                <span className="d-none d-md-block">This Week</span>
              </div>
            </div>
            <div
              className={`col-3  d-flex justify-content-center pb-2 hidRowDeep ${buttonState["This Month"]}`}
            >
              <div onClick={() => HandelButtonState("This Month")}>
                <span className="d-block d-md-none">30d</span>
                <span className="d-none d-md-block">This Month</span>
              </div>
            </div>
            <div
              className={`col-3  d-flex justify-content-center pb-2 hidRowDeep ${buttonState["All Time"]}`}
            >
              <div onClick={() => HandelButtonState("All Time")}>
                <span>All Time</span>
              </div>
            </div>
          </div>
          <div className="row align-items-center p-2 mx-2 mb-3 mt-4 parantRow">
            <div className="col-8 col-md-7 col-lg-6">
              <div className="d-flex align-items-center">
                <div className="me-3 ms-3">
                  <span>#</span>
                </div>
                <div className="mx-4">
                  <span>artist</span>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-5 col-lg-6">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-3 d-none d-md-block">
                  <span>Change</span>
                </div>
                <div className="col-lg-3 d-none d-lg-block">
                  <span>NFTs Sold</span>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <span>Volume</span>
                </div>
              </div>
            </div>
          </div>
          {Data.creators
            .sort((a, b) => b.NFTsSold - a.NFTsSold)
            .sort(() => Math.random() - randomNumper)
            .map((item, index) => (
              <div
                key={index}
                className="row align-items-center p-2 mx-2 my-3 cheldRow"
              >
                <div className="col-8 col-md-7 col-lg-6">
                  <div className="d-flex align-items-center gap-3">
                    {index + 1 === 1 ? (
                      <div className="rankingsImg">
                        <img
                          src="/images/rankings/frist.svg"
                          alt="frist Rankings"
                          width="40px"
                        />
                      </div>
                    ) : index + 1 === 2 ? (
                      <div className="rankingsImg">
                        <img
                          src="/images/rankings/secound.svg"
                          alt="secound Rankings"
                          width="38px"
                        />
                      </div>
                    ) : index + 1 === 3 ? (
                      <div className="rankingsImg">
                        <img
                          src="/images/rankings/theard.svg"
                          alt="thred Rankings"
                          width="36px"
                        />
                      </div>
                    ) : (
                      <div className="rankingsNumper">
                        <span>#{index + 1}</span>
                      </div>
                    )}

                    <Link
                      to={`/user/${item.userName}`}
                      className="d-flex align-items-center gap-3 userInfo"
                    >
                      <img src={item.userImg} alt="user img" width="40px" />
                      <span className="d-none d-md-block">{item.userName}</span>
                      <span className="d-block d-md-none">
                        {item.userName.split(" ")[0]}
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-4 col-md-5 col-lg-6">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-3 d-none d-md-block changeItem">
                      {item.rankingState === "up" ? (
                        <span className="up">
                          <BsArrowUp />
                          {(item.NFTsSold / item.userTotalSales - 2).toFixed(2)}
                          %
                        </span>
                      ) : (
                        <span className="down d-flex align-items-center">
                          <BsArrowDown />
                          {(item.NFTsSold / item.userTotalSales - 2).toFixed(2)}
                          %
                        </span>
                      )}
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                      <span>{item.NFTsSold}</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <span>{item.userTotalSales} ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Trending;
