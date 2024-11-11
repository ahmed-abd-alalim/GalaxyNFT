import "./UserInfo.css";
import { MdAdd } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiDiscordLogoLight } from "react-icons/pi";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

const UserInfo = ({ userInfromation }) => {
  const userLinksIcon = {
    faceBook: PiFacebookLogoLight,
    YouTube: PiYoutubeLogoLight,
    Discord: PiDiscordLogoLight,
    Instagram: IoLogoInstagram,
    Twitter: FaXTwitter,
  };

  return (
    <section id="memberAcount">
      <div
        className="profilePanner mb-5"
        style={{ backgroundImage: `url('${userInfromation.userPanar}')` }}
      >
        <div className="colorLayr" />
        <div>
          <img
            src={userInfromation.userImg}
            alt="user Img"
            className="d-block d-md-none smimg"
          />
        </div>
        <div>
          <img
            src={userInfromation.userImg}
            alt="user Img"
            className="d-none d-md-block  Lgimg"
          />
        </div>
      </div>
      <div className="container">
        <div className="row pt-4 mx-1">
          <div className="col-12 col-md-6 userInfoSection">
            <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-2">
              <span>{userInfromation.userName}</span>
              {userInfromation.Verified === 1 && (
                <MdVerified className="VerifiedIcon" />
              )}
            </div>
            <div className="d-block d-md-none smbuttonSection mt-3 pb-1">
              <div className="btnSection d-flex justify-content-center align-items-center gap-2 py-3">
                <FaRegCopy className="reactIcons" />
                <span>{userInfromation.userID}</span>
              </div>
              <div className="btnSectionoutLone d-flex justify-content-center align-items-center gap-2 py-3 mt-3">
                <MdAdd className="reactIcons lemon" />
                <span>Follow</span>
              </div>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start text-center text-md-start gap-5 userState mt-4">
              <div className=" me-lg-3">
                <span className="d-block stateNumper">
                  {userInfromation.Volume}+
                </span>
                <span className="stateName">Volume</span>
              </div>
              <div className="mx-lg-3">
                <span className="d-block stateNumper">
                  {userInfromation.NFTsSold}+
                </span>
                <span className="stateName">NFTs Sold</span>
              </div>
              <div className="mx-lg-3">
                <span className="d-block stateNumper">
                  {userInfromation.Followers}+
                </span>
                <span className="stateName">Followers</span>
              </div>
            </div>
            {userInfromation?.bio?.length > 0 && (
              <div className="userBio mt-4">
                <span className="d-block bioTitle">Bio</span>
                <span className="bioContant d-flex mt-2">
                  {userInfromation.bio}
                </span>
              </div>
            )}
            {userInfromation?.userLinks?.length > 0 && (
              <div className="userLinks mt-4">
                <span className="d-block Title">Links</span>
                <span className="Contant d-flex mt-2 align-items-center">
                  {userInfromation.userLinks.map((iconName, index) => {
                    const ReactIconName = userLinksIcon[iconName];
                    return (
                      <ReactIconName key={index} className="linkIcon me-2" />
                    );
                  })}
                </span>
              </div>
            )}
          </div>
          <div className="col-md-6 d-none d-md-block buttonSection ">
            <div className="d-flex justify-content-end gap-3">
              <div className="btnSection d-flex justify-content-center align-items-center gap-2 py-3 px-3">
                <FaRegCopy className="reactIcons" />
                <span>{userInfromation.userID}</span>
              </div>
              <div className="btnSectionoutLone d-flex justify-content-center align-items-center gap-2 py-3 px-3">
                <MdAdd className="reactIcons lemon" />
                <span>Follow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
