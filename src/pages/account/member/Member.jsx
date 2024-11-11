import { UserInfo, UserProducts } from "./components/memberComponents";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Member = ({ Data, userName }) => {
  const navigate = useNavigate();

  const [userInfromation, setUserInfromation] = useState("");

  useEffect(() => {
    if (Data.creators.filter((item) => item.userName === userName).length) {
      const userData = Data.creators.filter(
        (item) => item.userName === userName
      );
      setUserInfromation(userData[0]);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Galaxy NFT | {userName} Account</title>
        <meta name="description" content="Galaxy NFT | Account" />
      </Helmet>
      <UserInfo userInfromation={userInfromation} />
      <UserProducts rowData={Data} userInfromation={userInfromation} />
    </>
  );
};

export default Member;
