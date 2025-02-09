import "./SomleNavbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { BiSolidCastle } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { GiBrodieHelmet } from "react-icons/gi";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

const SomleNavbar = ({ rowData }) => {
  const [menuNav, setMenuNav] = useState(false);
  const Data = {
    navIcon: "/images/GalaxyNFT.png",
    navLink: [
      { name: "Home", icon: BiSolidCastle, link: "/home" },
      { name: "Account", icon: FaRegCircleUser, link: "/account" },
      { name: "Marketplace", icon: GiBrodieHelmet, link: "/nfts" },
      { name: "Rankings", icon: FaRankingStar, link: "/rankings" },
      { name: "Support", icon: MdOutlineSupportAgent, link: "/support" },
    ],
  };

  function HandelMenu() {
    if (menuNav === false) {
      setMenuNav(true);
      document.querySelector("#Smenu").style.display = "block";
      document.querySelectorAll(".menuBar").forEach((element) => {
        element.style.visibility = "hidden";
      });
      document.querySelector("#Menu").style.transform = "translate(-50.2%, 3%)";
    } else {
      setMenuNav(false);
      document.querySelector("#Menu").style.transform =
        "translate(-50.2%, 81%)";
      document.querySelector("#Smenu").style.display = "none";
      setTimeout(() => {
        document.querySelectorAll(".menuBar").forEach((element) => {
          element.style.visibility = "visible";
        });
      }, 440);
    }
  }

  return (
    <div
      className="d-flex justify-content-between align-items-center my-4 mx-2"
      id="SNav"
    >
      <div className="d-flex justify-content-between align-items-center navetop pb-2 pt-3 px-2">
        <Link
          className="d-flex justify-content-center align-items-center gap-2 text-decoration-none"
          to="/home"
        >
          <img src={Data.navIcon} alt="icon" width="25px" />
          <span className="F1">
            <span className="lemon">GALAXY</span>NFT
          </span>
        </Link>
        <HiMenuAlt3 className="IoMenu" onClick={HandelMenu} />
      </div>
      <div id="Smenu" />
      <div className="Menu" id="Menu">
        <div className="row d-flex justify-content-between align-items-center my-1 mx-1">
          <div className="col-2 d-flex justify-content-center  menuBar">
            <NavLink to="/home">
              <BiSolidCastle className="parIcon" />
            </NavLink>
          </div>
          <div className="col-2 d-flex justify-content-center  menuBar">
            <NavLink to="/nfts">
              <GiBrodieHelmet className="parIcon" />
            </NavLink>
          </div>
          <div className="col-2 d-flex justify-content-center colseMenu">
            {menuNav ? (
              <div className="IoClose d-flex justify-content-center align-items-center">
                <MdAdd onClick={HandelMenu} />
              </div>
            ) : (
              <NavLink
                to={"/nftlab"}
                className=" d-flex justify-content-center align-items-center"
              >
                <MdAdd className="IoAdd" />
              </NavLink>
            )}
          </div>
          <div className="col-2 d-flex justify-content-center  menuBar">
            <NavLink to="/Rankings">
              <FaRankingStar className="parIcon" />
            </NavLink>
          </div>
          <div className="col-2 d-flex justify-content-center  menuBar">
            <NavLink to="/account">
              {rowData.Access.accountInfo.userAvatar ? (
                <div className="userAvatar">
                  <img
                    src={rowData.Access.accountInfo.userAvatar}
                    alt="user avatar"
                    width="100%"
                  />
                </div>
              ) : (
                <FaRegCircleUser className="parIcon" />
              )}
            </NavLink>
          </div>
        </div>
        <div className="row mx-1 mb-3 mt-2">
          {Data.navLink.map((item, index) => {
            const NavIcon = item.icon;
            return (
              <div key={index} className="col-4 naveBarLink px-2">
                <NavLink
                  to={item.link}
                  onClick={HandelMenu}
                  className="d-flex justify-content-center align-items-center gap-1 m-0 m-auto py-2 my-2"
                >
                  <NavIcon />
                  <span>{item.name}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="d-flex justify-content-center mb-4">
          <p className="F3">
            © 2024 Galaxy NFT. All Right Reserved by
            <a href="https://ahmedabdalalim.pages.dev" target="_blank">
              <img
                src="https://raw.githubusercontent.com/ahmed-abd-alalim/ahmed-abd-alalim/main/assets/3A.png"
                alt="3A"
                width="18px"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SomleNavbar;
