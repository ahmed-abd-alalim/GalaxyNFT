import "./SignUp.css";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { MdMedicalInformation } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { MdFileDownloadDone } from "react-icons/md";

const SignUp = ({ setData }) => {
  const [formState, setFormState] = useState(0);

  const [handelProgressSteps, setHandelProgressSteps] = useState(1);

  const [userInput, setUserInput] = useState({
    userName: "",
    emaIl: "",
    passWord: "",
    passWordAgain: "",
    avatar: "",
  });

  const [messageInbutHandler, setMessageInbutHandler] = useState({
    InbutPasswordNotMatch: "",
  });

  const [avatar, setAvatar] = useState([
    {
      id: 1,
      avatarImg: "/images/access/avatar/characterZero.png",
      avatarBio: "characterZero",
      avatarActive: "",
    },
    {
      id: 2,
      avatarImg: "/images/access/avatar/characterOne.png",
      avatarBio: "characterOne",
      avatarActive: "",
    },
    {
      id: 3,
      avatarImg: "/images/access/avatar/characterTow.png",
      avatarBio: "characterTow",
      avatarActive: "",
    },
    {
      id: 4,
      avatarImg: "/images/access/avatar/characterThree.png",
      avatarBio: "characterThree",
      avatarActive: "",
    },
    {
      id: 5,
      avatarImg: "/images/access/avatar/characterFore.png",
      avatarBio: "characterFore",
      avatarActive: "",
    },
    {
      id: 6,
      avatarImg: "/images/access/avatar/characterFive.png",
      avatarBio: "characterFive",
      avatarActive: "",
    },
  ]);

  const HandelInput = (event) => {
    event.preventDefault();
    if (
      !userInput.userName ||
      !userInput.emaIl ||
      !userInput.passWord ||
      !userInput.passWordAgain
    ) {
      setMessageInbutHandler({
        InbutRequerd: true,
      });
    } else if (userInput.passWord != userInput.passWordAgain) {
      setMessageInbutHandler({
        InbutPasswordNotMatch: true,
      });
    } else if (formState != 2) {
      setFormState((preData) => preData + 1);
      setHandelProgressSteps((preData) => preData + 1);
    } else {
      setHandelProgressSteps((prvData) => prvData + 1);
      setTimeout(() => {
        setData((prvData) => ({
          ...prvData,
          Access: {
            ...prvData.Access,
            haveaccess: "true",
            accountInfo: {
              ...prvData.Access.accountInfo,
              userName: userInput.userName,
              userEmail: userInput.emaIl,
              userPassword: userInput.passWord,
              userAvatar: userInput.avatar,
            },
          },
        }));
      }, 800);
    }
  };

  const HandelActiveAvatar = (index) => {
    const updateActiveAvatar = avatar.map((jsonItem) => {
      return jsonItem.id === index
        ? { ...jsonItem, avatarActive: "active" }
        : { ...jsonItem, avatarActive: "" };
    });

    setAvatar(updateActiveAvatar);

    setUserInput((prvData) => ({
      ...prvData,
      avatar: avatar
        .filter((item) => item.id === index)
        .map((item) => item.avatarImg)
        .toString(),
    }));
  };

  useEffect(() => {
    if (formState > 0) {
      const circles = document.querySelectorAll(".circle");
      const progress = document.getElementById("progress");

      // Update circle classes based on the current progress step
      circles.forEach((circle, ind) => {
        if (ind < handelProgressSteps) {
          circle.classList.add("ProgressStepsActive");
        } else {
          circle.classList.remove("ProgressStepsActive");
        }
      });
      const updatedActives = document.querySelectorAll(".ProgressStepsActive");
      progress.style.width =
        ((updatedActives.length - 1) / (circles.length - 1)) * 100 + "%";
    }
  }, [handelProgressSteps, formState]);

  return (
    <>
      <Helmet>
        <title>Galaxy NFT | SignUp</title>
        <meta name="description" content="Galaxy NFT | SignUp" />
      </Helmet>
      <section id="SignUp" className="pt-0 pt-lg-1 pb-4">
        <div className="container">
          <div className="row my-5 mx-2">
            <div className="col-12 col-lg-6 order-1 order-lg-0 my-4 d-flex justify-content-center align-items-center">
              <div className="signupBudy px-lg-4">
                {formState > 0 ? (
                  <div className="progress-container mb-4">
                    <div className="progress" id="progress" />
                    <div className="circle active">
                      <MdMedicalInformation />
                    </div>
                    <div className="circle">
                      <ImUser />
                    </div>
                    <div className="circle">
                      <MdFileDownloadDone />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {formState === 0 ? (
                  <div className="zeroState">
                    <div className="text-center FORMhED pb-2">
                      <span className="F1 d-block">Welcome</span>
                      <span className="F4">
                        We are glad to see you join to us
                      </span>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <div
                        className="w-100 sochialButtonComponant py-2 gap-2"
                        onClick={() => setFormState(1)}
                      >
                        <SiGmail className="sochialIcon my-1" />
                        <div className="sochialButtonComponantTitle gap-1">
                          <span className="F4">Signup with</span>
                          <span className="F1">Gmail</span>
                        </div>
                      </div>
                    </div>
                    <div className="hrStyle gap-1">
                      <span className="F1">Signup</span>
                      <span className="F4">with Others</span>
                    </div>
                    <div>
                      <div className="d-flex justify-content-center mt-4">
                        <div className="w-100 sochialButtonComponant py-2 gap-2">
                          <FaGoogle className="sochialIcon my-1" />
                          <div className="sochialButtonComponantTitle gap-1">
                            <span className="F4">Signup with</span>
                            <span className="F1">Google</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <div className="w-100 sochialButtonComponant py-2 gap-2">
                          <FaSquareFacebook className="sochialIcon" />
                          <div className="sochialButtonComponantTitle gap-1">
                            <span className="F4">Signup with</span>
                            <span className="F1">Facebook</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hrStyle gap-1 mt-4">
                      <Link to="/login">
                        <span className="F1">Login</span>
                      </Link>
                    </div>
                  </div>
                ) : formState === 1 ? (
                  <form onSubmit={HandelInput}>
                    <span className="d-flex justify-content-center F3">
                      Input your info
                    </span>
                    <div className="mt-4">
                      <div className="w-100 position-relative inputComponant">
                        <input
                          className="w-100 py-2"
                          type="text"
                          required
                          minLength={6}
                          value={userInput.userName}
                          onChange={(inputValue) =>
                            setUserInput({
                              ...userInput,
                              userName: inputValue.target.value,
                            })
                          }
                        />
                        {!userInput.userName ? (
                          <div className="F4 inputContant">
                            <FiUser className="FiUser" />
                            <span>Username</span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-100 position-relative inputComponant">
                        <input
                          className="w-100 py-2"
                          type="email"
                          required
                          value={userInput.emaIl}
                          onChange={(inputValue) =>
                            setUserInput({
                              ...userInput,
                              emaIl: inputValue.target.value,
                            })
                          }
                        />
                        {!userInput.emaIl ? (
                          <div className="F4 inputContant">
                            <MdOutlineMail className="FiUser" />
                            <span>Email</span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-100 position-relative inputComponant">
                        <input
                          className="w-100 py-2"
                          type="text"
                          required
                          minLength={8}
                          value={userInput.passWord}
                          onChange={(inputValue) =>
                            setUserInput({
                              ...userInput,
                              passWord: inputValue.target.value,
                            })
                          }
                        />
                        {!userInput.passWord ? (
                          <div className="F4 inputContant">
                            <FiLock className="FiUser" />
                            <span>Password</span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-100 position-relative inputComponant">
                        <input
                          className="w-100 py-2"
                          type="text"
                          required
                          minLength={8}
                          value={userInput.passWordAgain}
                          onChange={(inputValue) =>
                            setUserInput({
                              ...userInput,
                              passWordAgain: inputValue.target.value,
                            })
                          }
                        />
                        {!userInput.passWordAgain ? (
                          <div className="F4 inputContant">
                            <FiLock className="FiUser" />
                            <span>Password again</span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    {messageInbutHandler.InbutPasswordNotMatch ? (
                      <div
                        style={{
                          color: "red",
                          textAlign: "center",
                          fontSize: ".8rem",
                        }}
                        className="mt-3"
                      >
                        <span>*The password and password again not match</span>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="mt-4">
                      {userInput.userName &&
                      userInput.emaIl &&
                      userInput.passWord &&
                      userInput.passWordAgain ? (
                        <button
                          className={
                            "w-100 position-relative buttonInputComponant py-2 Active"
                          }
                        >
                          <span>NEXT</span>
                        </button>
                      ) : (
                        <button
                          className={
                            "w-100 position-relative buttonInputComponant py-2 NotActive"
                          }
                          disabled
                        >
                          <span>NEXT</span>
                        </button>
                      )}
                    </div>
                  </form>
                ) : (
                  <div className="towState">
                    <div>
                      <span className="d-flex justify-content-center F3">
                        Choose Your Avatar
                      </span>
                      <div className="d-flex flex-wrap justify-content-center gap-2 mt-3 mt-lg-4">
                        {avatar.map((item) => (
                          <img
                            src={item.avatarImg}
                            alt={item.avatarBio}
                            width="28%"
                            key={item.id}
                            className={`${item.avatarActive}`}
                            onClick={() => HandelActiveAvatar(item.id)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 mb-2">
                      <button
                        className={
                          userInput.avatar
                            ? "w-100 position-relative buttonInputComponant py-2 Active"
                            : "w-100 position-relative buttonInputComponant py-2 NotActive"
                        }
                        onClick={userInput.avatar ? HandelInput : null}
                      >
                        <span>NEXT</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-6 order-0 order-lg-1 formeImg my-4">
              <img
                src="/images/access/areYouRady.png"
                alt="signup img"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
