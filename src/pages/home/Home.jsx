import { Helmet } from "react-helmet-async";
import {
  Hero,
  TCo,
  TCr,
  BC,
  DNN,
  MM,
  HIW,
  NMAT,
} from "./components/components";

const Home = ({ Data }) => {
  return (
    <>
      <Helmet>
        <title>Galaxy NFT | Home</title>
        <meta name="description" content="Galaxy NFT | Home" />
      </Helmet>
      <Hero Data={Data.Home} />
      <TCo Data={Data} />
      <TCr Data={Data} />
      <BC Data={Data.Home} />
      <DNN Data={Data} />
      <MM Data={Data.Home} />
      <HIW Data={Data.Home} />
      <NMAT Data={Data.Home} />
    </>
  );
};

export default Home;
