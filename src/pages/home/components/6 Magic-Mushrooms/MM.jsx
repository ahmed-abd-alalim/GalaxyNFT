import "./MM.css";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { useState, useEffect } from "react";

const MM = ({ Data }) => {
  const [date, setDate] = useState({
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  });

  // const targetDate = new Date(Data.userInfo.postInfo.targetDate);
  let today = new Date();
  let targetDate = new Date(today);
  targetDate.setDate(today.getDate() + 1);

  useEffect(() => {
    function CountDown() {
      const now = new Date();
      const difference = targetDate - now;
      if (difference <= 0) {
        clearInterval(intervalId);
        setDate({
          Hours: "00",
          Minutes: "00",
          Seconds: "00",
        });
        return;
      }
      const timeLeft = {
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
      setDate(timeLeft);
    }
    const intervalId = setInterval(CountDown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="auction" className="mt-5 pt-4">
      <div
        className="auctionDeep"
        style={{
          backgroundImage: `url('${Data.MM.auctionImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="gradiantColor" />
        <div className="auctionInfo">
          <div className="row d-flex align-items-center mb-0 mb-md-5 pb-0 pb-md-5">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div>
                <div className="d-flex mb-4">
                  <Link
                    to={`/user/${Data.MM.userInfo.name}`}
                    className="userInfo py-2 px-3"
                  >
                    <img
                      src={Data.MM.userInfo.img}
                      alt="user img"
                      className="me-2"
                      width="28px"
                    />
                    <span className="F3">{Data.MM.userInfo.name}</span>
                  </Link>
                </div>
                <span className="F2">Magic Mashrooms</span>
                <div className="d-none d-md-flex align-items-center mt-4">
                  <Link
                    to="/nfts"
                    className="btnTemp-outLine d-block py-2 px-4"
                  >
                    <LuEye className="LuEye me-2 my-1" />
                    See NFTS
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className=" my-1 py-3 px-4 timer">
                <span className="F4">Auction ends in:</span>
                <div className="d-flex align-items-center gap-3 text-center mt-2">
                  <div>
                    <span className="d-block me-2 F2">{date.Hours}</span>
                    <span className="F4">Hours</span>
                  </div>
                  <span className="F6 mb-4">:</span>
                  <div>
                    <span className="d-block me-2 F2">{date.Minutes}</span>
                    <span className="F4">Minutes</span>
                  </div>
                  <span className="F6 mb-4">:</span>
                  <div>
                    <span className="d-block me-2 F2">{date.Seconds}</span>
                    <span className="F4">Secounds</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-plock d-md-none mt-4">
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
      </div>
    </section>
  );
};

export default MM;
