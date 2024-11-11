import "./NFTLab.css";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FcOpenedFolder } from "react-icons/fc";
import { MdAdd } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

const NFTLab = ({ Data }) => {
  const [nftInfo, setNftInfo] = useState({
    itemName: "",
    itemPrice: "",
    itemCollection: "",
    itemExternamLink: "",
    itemDescription: "",
  });

  const HandeVisualMenu = () => {
    $(".itemsMenu").toggleClass("show");
  };

  const HandelCollactionButtonValue = (itemvalue) => {
    setNftInfo((prvData) => ({
      ...prvData,
      itemCollection: itemvalue.target.textContent,
    }));
    HandeVisualMenu();
  };

  return (
    <>
      <Helmet>
        <title>Galaxy NFT | Share your nft</title>
        <meta name="description" content="Galaxy NFT | Share your nft" />
      </Helmet>
      <section id="AddNFT">
        <div className="container mt-4 mb-5 mt-md-5 pt-lg-3">
          <div className="row mx-2 pageTitle mb-5">
            <div className="col-12">
              <span className="d-block F1 textS1">
                <span className="lemon">NFT</span> Lab
              </span>
              <span className="d-block F3 textS2">
                Create your Master piece.
              </span>
            </div>
          </div>
          <div className="row uploadComponant p-3 mx-2">
            <div className="col-12 d-flex justify-content-center align-align-items-center py-5">
              <div className="addLyer">
                <MdAdd />
              </div>
              <div className="text-center">
                <FcOpenedFolder className="foldeIcon" />
                <span className="d-block F4 mt-3">
                  Drop your files here. PNG, GIF, WEBP, MP4 or MP3 Max 100mb.
                  Browse
                </span>
              </div>
            </div>
          </div>
          <div className="row mx-2 itemInforamation mt-3">
            <div className="col-12 col-md-6">
              <div className="mt-3">
                <span className="d-flex mb-2">Item Name</span>
                <input
                  type="text"
                  className="d-block w-100 py-2 ps-2"
                  value={nftInfo.itemName}
                  onChange={(inbutValue) =>
                    setNftInfo((prvDate) => ({
                      ...prvDate,
                      itemName: inbutValue.target.value,
                    }))
                  }
                />
              </div>
              <div className="mt-3">
                <span className="d-flex mb-2">Price</span>
                <input
                  type="text"
                  className="d-block w-100 py-2 ps-2"
                  value={nftInfo.itemPrice}
                  onChange={(inbutValue) =>
                    setNftInfo((prvDate) => ({
                      ...prvDate,
                      itemPrice: inbutValue.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mt-3 collectionCustomComponant">
                <span className="d-flex mb-2">collection</span>
                <div onClick={HandeVisualMenu}>
                  <div
                    type="text"
                    className="w-100 ps-2 collectionCustomComponantinput d-flex align-items-center"
                  >
                    {nftInfo.itemCollection}
                  </div>
                  <IoChevronDown className="IoChevronDown" />
                </div>
                <div className="w-100 itemsMenu py-2 px-2">
                  <ul className="p-0 m-0">
                    {Data.NFTsMarket.Collections.map(
                      (collectionItem, index) => (
                        <li
                          key={index}
                          className="py-3 px-3 mb-2"
                          onClick={(itemvalue) =>
                            HandelCollactionButtonValue(itemvalue)
                          }
                        >
                          {collectionItem.collectionName}
                        </li>
                      )
                    )}
                  </ul>
                  <div className="triangle-up" />
                </div>
              </div>
              <div className="mt-3">
                <span className="d-flex mb-2">external link</span>
                <input
                  type="text"
                  className="d-block w-100 py-2 ps-2"
                  value={nftInfo.itemExternamLink}
                  onChange={(inbutValue) =>
                    setNftInfo((prvDate) => ({
                      ...prvDate,
                      itemExternamLink: inbutValue.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="mt-3">
              <span className="d-flex mb-2">description</span>
              <textarea
                name="description"
                id="description"
                className="w-100 px-2 py-2"
                value={nftInfo.itemDescription}
                onChange={(inbutValue) =>
                  setNftInfo((prvDate) => ({
                    ...prvDate,
                    itemDescription: inbutValue.target.value,
                  }))
                }
              ></textarea>
            </div>
            <div className="d-flex justify-content-center justify-content-md-end mt-4">
              {Object.values(nftInfo).every((value) => value) ? (
                <Link to="/home" className="doneButton py-3 px-4 active">
                  Create Item
                </Link>
              ) : (
                <div className="doneButton py-3 px-4" disabled>
                  Create Item
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NFTLab;
