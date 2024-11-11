import "./Items.css";
import { useState } from "react";
import { HiOutlineCollection } from "react-icons/hi";
import { IoIosImages } from "react-icons/io";

const Items = ({ Data, serVuierState }) => {
  const [isActive, setIsActive] = useState({
    NFTs: "active",
    Collections: "",
  });

  const HandelActiveButton = (nameOfComponant) => {
    setIsActive({
      NFTs: nameOfComponant === "NFTs" ? "active" : "",
      Collections: nameOfComponant === "Collections" ? "active" : "",
    });
    serVuierState(nameOfComponant);
  };

  return (
    <section id="items">
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div
              className={`pt-2 pb-3  itemCATEGORY d-flex align-items-center justify-content-center gap-2 ${isActive.NFTs}`}
              onClick={() => HandelActiveButton("NFTs")}
            >
              <IoIosImages className="navIcon" />
              <span className="F3 textS3">NFTs</span>
              <span className="itemsNumpers d-flex justify-content-center align-items-center">
                {Data.NFTs.length}
              </span>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div
              className={`pt-2 pb-3 itemCATEGORY d-flex align-items-center justify-content-center gap-2 ${isActive.Collections}`}
              onClick={() => HandelActiveButton("Collections")}
            >
              <HiOutlineCollection className="navIcon" />
              <span className="textS3 F3">Collections</span>
              <span className="itemsNumpers d-flex justify-content-center align-items-center">
                {Data.Collections.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Items;
