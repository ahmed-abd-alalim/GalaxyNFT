import "./TCr.css";
import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const TCr = ({ Data }) => {
  const [handelcomponant, setHandelcomponant] = useState(12);
  useEffect(() => {
    const updateComponent = () => {
      if (window.innerWidth <= 576) {
        setHandelcomponant(5);
      } else if (window.innerWidth <= 850) {
        setHandelcomponant(8);
      } else {
        setHandelcomponant(12);
      }
    };
    updateComponent();
    window.addEventListener("resize", updateComponent);
    return () => window.removeEventListener("resize", updateComponent);
  }, []);

  return (
    <section id="topCreators" className="my-5">
      <div className="container">
        <div className="mx-3 d-flex justify-content-between align-items-center">
          <div>
            <span className="d-block F2">
              <span className="lemon">Top</span> creators
            </span>
            <span className="mt-2 F4">
              See who's making waves in the NFT world
            </span>
          </div>
          <div className="d-none d-md-block">
            <Link to="/rankings" className="btnTemp-outLine px-4 py-3">
              <IoRocketOutline className="IoRocketOutline me-2 my-1" />
              view rankings
            </Link>
          </div>
        </div>
        <div className="row mx-1 mx-lg-2 mt-2 mt-md-3">
          {Data.creators
            .sort((a, b) => b.NFTsSold - a.NFTsSold)
            .slice(0, handelcomponant)
            .map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3 mt-3 px-2">
                <Link
                  to={`/user/${item.userName}`}
                  className="componantCreator p-2 p-lg-3 d-flex justify-content-center"
                >
                  <div className="ratedNump d-flex justify-content-center align-items-center">
                    <span className="F7">#{index + 1}</span>
                  </div>
                  <div className="d-flex d-lg-block gap-4">
                    <div className="d-flex justify-content-center">
                      <img src={item.userImg} alt="#" width="80px" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center text-lg-center mt-lg-3  creatorInfo">
                      <div>
                        <span className="d-block F3">
                          {item.userName.split(" ")[0]}
                        </span>
                        <div className="d-flex justify-content-center gap-2">
                          <span className="F4">Total Sales:</span>
                          <span className="F3 F3cus">
                            {item.userTotalSales} ETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          <div className="d-plock d-md-none mt-4">
            <Link
              to="/rankings"
              className="d-flex btnTemp-outLine px-4 py-2 justify-content-center align-items-center"
            >
              <IoRocketOutline className="IoRocketOutline me-2 my-2" />
              view rankings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TCr;
3;
