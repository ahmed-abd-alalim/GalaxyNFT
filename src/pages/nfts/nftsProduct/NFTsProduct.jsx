import "./NFTsProduct.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  HandleStatusOfFilterButton,
  Next,
  Previse,
} from "./nftProductManiger/maniger";
import { LuMoveRight } from "react-icons/lu";
import { LuMoveLeft } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import { TbSortAscending2 } from "react-icons/tb";
import { PiCrownSimple } from "react-icons/pi";
import { LuShapes } from "react-icons/lu";

const NFTs = ({
  NfsData,
  setNfsData,
  vuierState,
  filterButtonHandel,
  setFilterButtonHandel,
}) => {
  const [Data, setData] = useState(NfsData);
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const [handelNumpercomponant, setHandelNumpercomponant] = useState(12);
  const iconnButtonFilter = {
    "Sort by:": TbSortAscending2,
    "License:": PiCrownSimple,
    "NFTs type:": LuShapes,
  };
  const lengthData = {
    NFTs: Data.NFTs.length,
    Collections: Data.Collections.length,
  };
  const [productSlider, setProductSlider] = useState({
    maxLimit: 0,
    minLimit: 0,
    numItems: 0,
  });

  useEffect(() => {
    if (NfsData.FilterItems.length === 0) {
      setData(NfsData);
    } else {
      const handleFilterContent = () =>
        NfsData.NFTs.filter((obj) =>
          obj.filter.some((item) => NfsData.FilterItems.includes(item))
        );

      setData((prevData) => ({
        ...prevData,
        NFTs: handleFilterContent(),
      }));
    }
  }, [NfsData.FilterItems]);

  useEffect(() => {
    const updateComponent = () => {
      if (window.innerWidth <= 576) {
        setHandelNumpercomponant(5);
      } else if (window.innerWidth <= 850) {
        setHandelNumpercomponant(8);
      } else {
        setHandelNumpercomponant(12);
      }
    };
    updateComponent();
    window.addEventListener("resize", updateComponent);
    return () => window.removeEventListener("resize", updateComponent);
  }, []);

  useEffect(() => {
    setProductSlider({
      maxLimit: handelNumpercomponant,
      minLimit: 0,
      numItems:
        lengthData[vuierState] > handelNumpercomponant
          ? lengthData[vuierState]
          : 0,
    });
  }, [handelNumpercomponant, vuierState, Data]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const box = boxRef.current;
      if (!container || !box) return;
      const containerRect = container.getBoundingClientRect();
      const boxHeight = box.offsetHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const minTop = containerRect.top + scrollTop;
      const maxTop = containerRect.bottom + scrollTop - boxHeight;
      let boxTop = scrollTop - minTop;
      if (boxTop < 0) {
        boxTop = 0;
      } else if (scrollTop > maxTop) {
        boxTop = maxTop - minTop;
      }
      box.style.top = `${boxTop}px`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  return (
    <section id="NFTs">
      <div className="container pb-2 pt-3">
        <div className="row">
          <div
            className={`col-lg-3 d-none d-lg-${filterButtonHandel.display} p-0`}
            ref={containerRef}
          >
            <div className="FilterSlider">
              <div className="FilterSliderDeep py-3 px-2" ref={boxRef} id="box">
                <div className="FilterSliderHeed pb-3">
                  <div className="d-flex justify-content-between align-items-center mx-2 F1 ">
                    <div className="d-flex align-items-center gap-2">
                      <VscSettings className="VscSettings" />
                      <span>Filters</span>
                    </div>
                    <div
                      onClick={HandelMenuFilter}
                      style={{ cursor: "pointer" }}
                    >
                      <CiLogout />
                    </div>
                  </div>
                </div>
                <div className="bodyOfFilterSlider mx-3 mt-4">
                  {NfsData.FilterSliderItem.map((item, Findex) => {
                    const FilterIcon = iconnButtonFilter[item.filterTitlel];
                    return (
                      <div key={Findex} className="d-flex mt-4 py-2">
                        <div className="FilterItemComponant">
                          <div className="d-flex align-items-center gap-2 F3">
                            <FilterIcon />
                            {item.filterTitlel}
                          </div>
                          <div className="d-flex flex-wrap FilterItemBody F3">
                            {item.filterItems.map((filterItem, Sindex) => (
                              <span
                                key={Sindex}
                                className={`me-3 py-2 px-3 ${filterItem.filterItemState} mt-3`}
                                onClick={() =>
                                  HandleStatusOfFilterButton(
                                    Findex,
                                    Sindex,
                                    setNfsData
                                  )
                                }
                              >
                                {filterItem.filterItemName}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-${filterButtonHandel.size}`}>
            <div className="row mx-3 mx-md-4 pb-2">
              {vuierState === "NFTs" ? (
                <>
                  {Data.NFTs.slice(
                    productSlider.minLimit,
                    productSlider.maxLimit
                  )
                    // .sort(() => Math.random() - 0.5)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="col-12 col-md-6 col-lg-4 pt-4"
                      >
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
                </>
              ) : (
                <>
                  {Data.Collections.slice(
                    productSlider.minLimit,
                    productSlider.maxLimit
                  )
                    .sort(() => Math.random() - 0.5)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="col-12 col-md-6 col-lg-4 pt-4"
                      >
                        <div className="item p-1">
                          <div>
                            <img
                              src={item.primaryImg}
                              alt="primary Img"
                              width="100%"
                            />
                          </div>
                          <div className="row mt-1 px-2">
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
                                className="collectionNum w-100 h-100 d-flex justify-content-center align-items-center"
                              >
                                {item.collectionNumper}+
                              </Link>
                            </div>
                          </div>
                          <div className="mt-2 ms-1">
                            <span className="d-block F3">
                              {item.collectionName}
                            </span>
                            <Link
                              to={`/user/${item.userInfo.name}`}
                              className="d-flex align-items-center gap-2 mt-2"
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
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-2">
          <div className="col-12 d-flex justify-content-center align-items-center gap-2">
            {productSlider.numItems ? (
              <>
                {lengthData[vuierState] === productSlider.numItems ? (
                  <div
                    onClick={() =>
                      Next(setProductSlider, handelNumpercomponant)
                    }
                    className="btnTemp d-flex align-items-center gap-2 py-2 px-3"
                  >
                    <span className="d-none d-md-block">Next Page</span>
                    <LuMoveRight className="LuMoveRight" />
                  </div>
                ) : (
                  <>
                    {productSlider.numItems > handelNumpercomponant ? (
                      <div className="d-flex gap-2">
                        <div
                          onClick={() =>
                            Previse(setProductSlider, handelNumpercomponant)
                          }
                          className="btnTemp d-flex align-items-center gap-2 py-2 px-3"
                        >
                          <LuMoveLeft className="LuMoveLeft" />
                        </div>
                        <div
                          onClick={() =>
                            Next(setProductSlider, handelNumpercomponant)
                          }
                          className="btnTemp d-flex align-items-center gap-2 py-2 px-3"
                        >
                          <span className="d-none d-md-block">Next Page</span>
                          <LuMoveRight className="LuMoveRight" />
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          Previse(setProductSlider, handelNumpercomponant)
                        }
                        className="btnTemp d-flex align-items-center gap-2 py-2 px-3"
                      >
                        <LuMoveLeft className="LuMoveLeft" />
                        <span className="d-none d-md-block">prev Page</span>
                      </div>
                    )}
                  </>
                )}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTs;
