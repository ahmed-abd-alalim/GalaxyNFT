import "./Setting.css";
import $ from "jquery";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { PiCameraBold } from "react-icons/pi";
import { IoChevronDown } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiDiscordLogoLight } from "react-icons/pi";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";

const Setting = ({ rowData, setData, serBodyComponant }) => {
  const [dropmenuButtonState, setDropmenuButtonState] = useState(0);

  const [userInfo, setUserInfo] = useState({
    userAvatar: "",
    userName: "",
    userEmail: "",
    userLinks: {
      FaceBookLink: "",
      disCordLink: "",
      youtubeLink: "",
      xLink: "",
      instgramLink: "",
    },
    userBio: "",
    userPassword: "",
  });

  useEffect(() => {
    setUserInfo(rowData.Access.accountInfo);
  }, []);

  const HandeVisualMenu = () => {
    $(".itemsMenu").toggleClass("show");
    $(".triangle-up").toggleClass("show");
    setDropmenuButtonState(dropmenuButtonState === 0 ? 1 : 0);
  };

  const HandelSaveBotton = () => {
    const itemsMenu = document.querySelector(".itemsMenu");
    const triangleUp = document.querySelector(".triangle-up");
    if (
      itemsMenu.classList.contains("show") &&
      triangleUp.classList.contains("show")
    ) {
      itemsMenu.classList.remove("show");
      triangleUp.classList.remove("show");
      setDropmenuButtonState(0);
    }
    setData((prvData) => ({
      ...prvData,
      Access: {
        ...prvData.Access,
        accountInfo: userInfo,
      },
    }));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section id="Setting">
      <nav className="SettingtNave">
        <div className="container">
          <div className="row d-flex align-items-center mb-2 mx-1">
            <div className="col-6 d-flex align-items-center gap-2">
              <IoSettingsOutline className="settingIcon" />
              <span>Setting</span>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div
                className="LeftIcon d-flex justify-content-center align-items-center"
                onClick={() => serBodyComponant(0)}
              >
                <TbArrowBigRightLinesFilled />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="settingBodyComponant py-4">
        <div className="cintainer">
          <div className="row imageSection mx-2 mt-2">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="position-relative">
                <img
                  src={rowData.Access.accountInfo.userAvatar}
                  alt="user Img"
                  className="d-block d-md-none smimg"
                />
                <div className="imgLyre d-flex justify-content-center align-items-center">
                  <PiCameraBold />
                </div>
              </div>
              <div className="position-relative">
                <img
                  src={rowData.Access.accountInfo.userAvatar}
                  alt="user Img"
                  className="d-none d-md-block Lgimg"
                />
                <div className="imgLyre d-flex justify-content-center align-items-center">
                  <PiCameraBold />
                </div>
              </div>
            </div>
          </div>
          <div className="row formSection m-4">
            <div className="col-12 col-md-6">
              <div className="mt-3">
                <span className="d-flex mb-2">UserName</span>
                <input
                  type="text"
                  className="d-block w-100 py-2 ps-2"
                  value={userInfo.userName}
                  onChange={(inbutValue) =>
                    setUserInfo((prvDate) => ({
                      ...prvDate,
                      userName: inbutValue.target.value,
                    }))
                  }
                />
              </div>
              <div className="mt-3">
                <span className="d-flex mb-2">Email</span>
                <input
                  type="text"
                  className="d-block w-100 py-2 ps-2"
                  value={userInfo.userEmail}
                  onChange={(inbutValue) =>
                    setUserInfo((prvDate) => ({
                      ...prvDate,
                      userEmail: inbutValue.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mt-3 collectionCustomComponant">
                <span className="d-flex mb-2">Links</span>
                <div onClick={HandeVisualMenu}>
                  <div
                    type="text"
                    className="w-100 ps-2 collectionCustomComponantinput d-flex align-items-center gap-2"
                  >
                    {userInfo.userLinks.FaceBookLink.length != 0 && (
                      <PiFacebookLogoLight />
                    )}
                    {userInfo.userLinks.disCordLink.length != 0 && (
                      <PiDiscordLogoLight />
                    )}
                    {userInfo.userLinks.youtubeLink.length != 0 && (
                      <PiYoutubeLogoLight />
                    )}
                    {userInfo.userLinks.xLink.length != 0 && <FaXTwitter />}
                    {userInfo.userLinks.instgramLink.length != 0 && (
                      <IoLogoInstagram />
                    )}
                  </div>
                  {dropmenuButtonState ? (
                    <IoClose className="IoChevronDown" />
                  ) : (
                    <IoChevronDown className="IoChevronDown" />
                  )}
                </div>
                <div className="triangle-up" />
                <div className="w-100 itemsMenu py-2 px-2">
                  <ul className="p-0 m-0">
                    <li className="p-2 mb-2 d-flex gap-2">
                      <div className="inbutIcon d-flex justify-content-center align-items-center">
                        <PiFacebookLogoLight
                          className={
                            userInfo.userLinks.FaceBookLink.length != 0 &&
                            "lemon"
                          }
                        />
                      </div>
                      <input
                        type="text"
                        value={userInfo.userLinks.FaceBookLink}
                        onChange={(linkInbut) =>
                          setUserInfo((prvData) => ({
                            ...prvData,
                            userLinks: {
                              ...prvData.userLinks,
                              FaceBookLink: linkInbut.target.value,
                            },
                          }))
                        }
                      />
                    </li>
                    <li className="p-2 mb-2 d-flex gap-2">
                      <div className="inbutIcon d-flex justify-content-center align-items-center">
                        <PiDiscordLogoLight
                          className={
                            userInfo.userLinks.disCordLink.length != 0 &&
                            "lemon"
                          }
                        />
                      </div>
                      <input
                        type="text"
                        value={userInfo.userLinks.disCordLink}
                        onChange={(linkInbut) =>
                          setUserInfo((prvData) => ({
                            ...prvData,
                            userLinks: {
                              ...prvData.userLinks,
                              disCordLink: linkInbut.target.value,
                            },
                          }))
                        }
                      />
                    </li>
                    <li className="p-2 mb-2 d-flex gap-2">
                      <div className="inbutIcon d-flex justify-content-center align-items-center">
                        <PiYoutubeLogoLight
                          className={
                            userInfo.userLinks.youtubeLink.length != 0 &&
                            "lemon"
                          }
                        />
                      </div>
                      <input
                        type="text"
                        value={userInfo.userLinks.youtubeLink}
                        onChange={(linkInbut) =>
                          setUserInfo((prvData) => ({
                            ...prvData,
                            userLinks: {
                              ...prvData.userLinks,
                              youtubeLink: linkInbut.target.value,
                            },
                          }))
                        }
                      />
                    </li>
                    <li className="p-2 mb-2 d-flex gap-2">
                      <div className="inbutIcon d-flex justify-content-center align-items-center">
                        <FaXTwitter
                          className={
                            userInfo.userLinks.xLink.length != 0 && "lemon"
                          }
                        />
                      </div>
                      <input
                        type="text"
                        value={userInfo.userLinks.xLink}
                        onChange={(linkInbut) =>
                          setUserInfo((prvData) => ({
                            ...prvData,
                            userLinks: {
                              ...prvData.userLinks,
                              xLink: linkInbut.target.value,
                            },
                          }))
                        }
                      />
                    </li>
                    <li className="p-2 mb-2 d-flex gap-2">
                      <div className="inbutIcon d-flex justify-content-center align-items-center">
                        <IoLogoInstagram
                          className={
                            userInfo.userLinks.instgramLink.length != 0 &&
                            "lemon"
                          }
                        />
                      </div>
                      <input
                        type="text"
                        value={userInfo.userLinks.instgramLink}
                        onChange={(linkInbut) =>
                          setUserInfo((prvData) => ({
                            ...prvData,
                            userLinks: {
                              ...prvData.userLinks,
                              instgramLink: linkInbut.target.value,
                            },
                          }))
                        }
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-3">
                <span className="d-flex mb-2">Password</span>
                <input
                  type="text"
                  className="d-block w-100 py-2 ps-2"
                  value={userInfo.userPassword}
                  onChange={(inbutValue) =>
                    setUserInfo((prvDate) => ({
                      ...prvDate,
                      userPassword: inbutValue.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="mt-3">
              <span className="d-flex mb-2">Bio</span>
              <textarea
                name="description"
                id="description"
                className="w-100 px-2 py-2"
                value={userInfo.userBio}
                onChange={(inbutValue) =>
                  setUserInfo((prvDate) => ({
                    ...prvDate,
                    userBio: inbutValue.target.value,
                  }))
                }
              ></textarea>
            </div>
            <div className="d-block d-md-none">
              <div className="mt-4">
                {userInfo != rowData.Access.accountInfo ? (
                  <div
                    onClick={HandelSaveBotton}
                    className="doneButton py-3 px-4 w-100 text-center active"
                  >
                    Save
                  </div>
                ) : (
                  <div
                    className="doneButton py-3 px-4 w-100 text-center"
                    disabled
                  >
                    Save
                  </div>
                )}
              </div>
              <div className="mt-3">
                <Link
                  to="/home"
                  className="logOutButton py-3 px-4 active w-100 d-flex justify-content-center align-items-center gap-2"
                  onClick={() =>
                    setData((prvData) => ({
                      ...prvData,
                      Access: {
                        ...prvData.Access,
                        haveaccess: "",
                        accountInfo: {
                          userAvatar: "",
                          userName: "",
                          userEmail: "",
                          userLinks: {
                            FaceBookLink: "",
                            disCordLink: "",
                            youtubeLink: "",
                            xLink: "",
                            instgramLink: "",
                          },
                          userBio: "",
                          userPassword: "",
                        },
                      },
                    }))
                  }
                >
                  <IoLogOutOutline className="logOutIcon" />
                  LogOut
                </Link>
              </div>
            </div>
            <div className="d-none d-md-flex align-items-center justify-content-between">
              <div className="mt-4">
                <Link
                  to="/home"
                  className="logOutButton py-3 px-4 active d-flex justify-content-center align-items-center gap-2"
                  onClick={() =>
                    setData((prvData) => ({
                      ...prvData,
                      Access: {
                        ...prvData.Access,
                        haveaccess: "",
                      },
                    }))
                  }
                >
                  <IoLogOutOutline className="logOutIcon" />
                  LogOut
                </Link>
              </div>
              <div className="mt-4">
                {userInfo != rowData.Access.accountInfo ? (
                  <div
                    className="doneButton py-3 px-5 active"
                    onClick={HandelSaveBotton}
                  >
                    Save
                  </div>
                ) : (
                  <div className="doneButton py-3 px-5" disabled>
                    Save
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setting;
