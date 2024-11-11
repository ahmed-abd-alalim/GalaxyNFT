import "./UserProducts.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineCollection } from "react-icons/hi";
import { IoIosImages } from "react-icons/io";

const UserProducts = ({ rowData }) => {
  const [vuierState, setVuierState] = useState("NFTs");

  return (
    <section id="UserProducts">
      <div className="productNave">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div
                className={`d-flex justify-content-center align-items-center gap-2 pb-2 parontComponant ${
                  vuierState === "NFTs" && `active`
                }`}
                onClick={() => setVuierState("NFTs")}
              >
                <IoIosImages className="navIcon" />
                <span className="naveItemTitle">created</span>
                <span className="naveItenNumper d-flex justify-content-center align-items-center">
                  {rowData.Access.systemRequerd.NFTs?.length}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div
                className={`d-flex justify-content-center align-items-center gap-2 pb-2 parontComponant ${
                  vuierState === "collection" && `active`
                }`}
                onClick={() => setVuierState("collection")}
              >
                <HiOutlineCollection className="navIcon" />
                <span className="naveItemTitle">collection</span>
                <span className="naveItenNumper d-flex justify-content-center align-items-center">
                  {rowData.Access.systemRequerd.collection?.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productCartComponant py-4">
        <div className="container">
          <div className="row mx-3 mx-md-4 pb-2">
            {vuierState === "NFTs" ? (
              <>
                {rowData?.NFTsMarket?.NFTs?.filter((nftItem) =>
                  rowData.Access.systemRequerd?.NFTs?.includes(nftItem.id)
                ).map((item, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-4 pt-4">
                    <div to={`/NFT/${item.postTitle}`} className="card">
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
                {rowData?.NFTsMarket?.Collections?.filter((collectionItem) =>
                  rowData.Access.systemRequerd?.collection?.includes(
                    collectionItem.id
                  )
                ).map((item, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-4 pt-4">
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
                            className="F1 collectionNum w-100 h-100 d-flex justify-content-center align-items-center"
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
    </section>
  );
};

export default UserProducts;
