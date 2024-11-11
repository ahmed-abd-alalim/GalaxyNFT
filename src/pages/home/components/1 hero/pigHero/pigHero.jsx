import "./pigHero.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoRocketOutline } from "react-icons/io5";

const pigHero = ({ Data }) => {
  const [counter, setCounter] = useState({
    Fcounter: 0,
    Scounter: 0,
    Tcounter: 0,
  });

  const [date, setDate] = useState({
    Days: "00",
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
          Days: "00",
          Hours: "00",
          Minutes: "00",
          Seconds: "00",
        });
        return;
      }
      const timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
      setDate(timeLeft);
    }
    const intervalId = setInterval(CountDown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateCounters = () => {
      if (
        counter.Fcounter <= Data.status.TotalSale ||
        counter.Scounter <= Data.status.Auctions ||
        counter.Tcounter <= Data.status.Artists
      ) {
        setCounter((prevState) => ({
          Fcounter:
            prevState.Fcounter +
            (prevState.Fcounter < Data.status.TotalSale ? 10 : 0),
          Scounter:
            prevState.Scounter +
            (prevState.Scounter < Data.status.Auctions ? 2 : 0),
          Tcounter:
            prevState.Tcounter +
            (prevState.Tcounter < Data.status.Artists ? 5 : 0),
        }));
      }
    };

    const timer = setTimeout(updateCounters, 100);

    return () => clearTimeout(timer);
  }, [
    counter,
    Data.status.TotalSale,
    Data.status.Auctions,
    Data.status.Artists,
  ]);

  return (
    <section id="Hero" className="mb-5 pb-2">
      <div className="container">
        <div className="row mx-2">
          <div className="col-6 d-flex align-items-center">
            <div>
              <div className="heroTitle">
                <span className="F2">
                  discover & <br />
                  collect
                  <br />
                  unique
                  <span className="lemon"> NFTs</span>
                </span>
              </div>
              <div className="mt-2">
                <span className="F4">
                  Own digital assets, invest in the future, and <br />
                  connect with other collectors. Explore to see
                  <br /> amazing NFTs from around the world.
                </span>
              </div>
              <div className="my-5">
                <Link to="/nfts" className="btnTemp px-3 py-3">
                  <IoRocketOutline className="IoRocketOutline me-2 my-2" />
                  get started
                </Link>
              </div>
              <div className="heroState">
                <ul className="list-unstyled d-flex gap-5 text-center">
                  <li>
                    <span className="d-block F6">{counter.Fcounter}k+</span>
                    <span className="F4">Total Sale</span>
                  </li>
                  <li className="mx-4">
                    <span className="d-block F6">{counter.Scounter}k+</span>
                    <span className="F4">Auctions</span>
                  </li>
                  <li>
                    <span className="d-block F6">{counter.Tcounter}k+</span>
                    <span className="F4">Artists</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="viewerCard m-0 m-auto me-0">
              <div className="viewerCardImg d-flex justify-content-center align-items-center py-2 px-5">
                <div className="position-relative mx-4">
                  <div className="heroImgg py-1 px-2">
                    <div className="mt-2 mx-1 heroImggdeep">
                      <img
                        src={Data.userInfo.postInfo.img}
                        alt="hero Img"
                        width="100%"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mx-2 mt-3">
                      <div>
                        <span className="d-block F3">
                          {date.Days ? date.Days + "d :" : ""} {date.Hours}h :{" "}
                          {date.Minutes}m : {date.Seconds}s
                        </span>
                        <span className="F4 d-flex mt-1">Remaining Time</span>
                      </div>
                      <div className="text-center">
                        <span className="d-block F3">
                          {Data.userInfo.postInfo.price} ETH
                        </span>
                        <span className="F4 d-flex mt-1 justify-content-end">
                          Highest Bid
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="heroImggporder" />
                </div>
              </div>
              <div className="my-3 ms-3 bartTow">
                <span className="F3">{Data.userInfo.postInfo.imgTitel}</span>
                <Link
                  to={`/user/${Data.userInfo.name}`}
                  className="d-flex align-items-center gap-2 mt-2 userinfo"
                >
                  <img src={Data.userInfo.img} alt="user imag" width="21px" />
                  <span className="F4">{Data.userInfo.name}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default pigHero;
