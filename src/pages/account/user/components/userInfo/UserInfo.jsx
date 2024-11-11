import "./UserInfo.css";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiDiscordLogoLight } from "react-icons/pi";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

const UserInfo = ({ rowData, serBodyComponant }) => {
  return (
    <section id="userAcount">
      <div
        className="profilePanner mb-5"
        style={{
          backgroundImage: `url('${rowData.Access.systemRequerd.userPanar}')`,
        }}
      >
        <div className="colorLayr" />
        <div>
          <img
            src={rowData.Access.accountInfo.userAvatar}
            alt="user Img"
            className="d-block d-md-none smimg"
          />
        </div>
        <div>
          <img
            src={rowData.Access.accountInfo.userAvatar}
            alt="user Img"
            className="d-none d-md-block  Lgimg"
          />
        </div>
      </div>
      <div className="container">
        <div className="row pt-4 mx-1">
          <div className="col-12 col-md-6 userInfoSection">
            <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-2">
              <span>{rowData.Access.accountInfo.userName}</span>
              {rowData.Access.systemRequerd.Verified === 1 && (
                <MdVerified className="VerifiedIcon" />
              )}
            </div>
            <div className="d-block d-md-none smbuttonSection mt-3 pb-1">
              <div className="btnSection d-flex justify-content-center align-items-center gap-2 py-3">
                <FaRegCopy className="reactIcons" />
                <span>{rowData.Access.systemRequerd.userID}</span>
              </div>
              <div
                className="btnSectionoutLone d-flex justify-content-center align-items-center gap-2 py-3 mt-3"
                onClick={() => serBodyComponant(1)}
              >
                <IoSettingsOutline className="reactIcons lemon" />
                <span>Setting</span>
              </div>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start text-center text-md-start gap-5 userState mt-4">
              <div className=" me-lg-3">
                <span className="d-block stateNumper">
                  {rowData.Access.systemRequerd.userAcountDetalise.Volume}+
                </span>
                <span className="stateName">Volume</span>
              </div>
              <div className="mx-lg-3">
                <span className="d-block stateNumper">
                  {rowData.Access.systemRequerd.userAcountDetalise.NFTsSold}+
                </span>
                <span className="stateName">NFTs Sold</span>
              </div>
              <div className="mx-lg-3">
                <span className="d-block stateNumper">
                  {rowData.Access.systemRequerd.userAcountDetalise.Followers}+
                </span>
                <span className="stateName">Followers</span>
              </div>
            </div>
            {rowData.Access.accountInfo.userBio.length > 0 && (
              <div className="userBio mt-4">
                <span className="d-block bioTitle">Bio</span>
                <span className="bioContant d-flex mt-2">
                  {rowData.Access.accountInfo.userBio}
                </span>
              </div>
            )}
            {Object.values(rowData.Access.accountInfo.userLinks).filter(
              (value) => value.length != 0
            ).length && (
              <div className="userLinks mt-4">
                <span className="d-block Title">Links</span>
                <span className="Contant d-flex mt-2 align-items-center">
                  {rowData.Access.accountInfo.userLinks.FaceBookLink.length !=
                    0 && (
                    <a
                      href={rowData.Access.accountInfo.userLinks.FaceBookLink}
                      className="linkIcon me-2"
                      target="_blank"
                    >
                      <PiFacebookLogoLight />
                    </a>
                  )}
                  {rowData.Access.accountInfo.userLinks.disCordLink.length !=
                    0 && (
                    <a
                      href={rowData.Access.accountInfo.userLinks.disCordLink}
                      className="linkIcon me-2"
                      target="_blank"
                    >
                      <PiDiscordLogoLight />
                    </a>
                  )}
                  {rowData.Access.accountInfo.userLinks.youtubeLink.length !=
                    0 && (
                    <a
                      href={rowData.Access.accountInfo.userLinks.youtubeLink}
                      className="linkIcon me-2"
                      target="_blank"
                    >
                      <PiYoutubeLogoLight />
                    </a>
                  )}
                  {rowData.Access.accountInfo.userLinks.xLink.length != 0 && (
                    <a
                      href={rowData.Access.accountInfo.userLinks.xLink}
                      className="linkIcon me-2"
                      target="_blank"
                    >
                      <FaXTwitter />
                    </a>
                  )}
                  {rowData.Access.accountInfo.userLinks.instgramLink.length !=
                    0 && (
                    <a
                      href={rowData.Access.userInfo.userLinks.instgramLink}
                      className="linkIcon me-2"
                      target="_blank"
                    >
                      <IoLogoInstagram />
                    </a>
                  )}
                </span>
              </div>
            )}
          </div>
          <div className="col-md-6 d-none d-md-block buttonSection ">
            <div className="d-flex justify-content-end gap-3">
              <div className="btnSection d-flex justify-content-center align-items-center gap-2 py-3 px-3">
                <FaRegCopy className="reactIcons" />
                <span>{rowData.Access.systemRequerd.userID}</span>
              </div>
              <div
                className="btnSectionoutLone d-flex justify-content-center align-items-center gap-1 py-3 px-3"
                onClick={() => serBodyComponant(1)}
              >
                <IoSettingsOutline className="reactIcons lemon" />
                <span>Setting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-3 mt-4" />
    </section>
  );
};

export default UserInfo;
