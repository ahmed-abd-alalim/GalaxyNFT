import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Heder from "./heder/Heder";
import Items from "./items/Items";
import NFTsProduct from "./nftsProduct/NFTsProduct";
import FilterSlider from "./filterSlider/filterSlider";

const NFTs = ({ Data, setData }) => {
  const [vuierState, serVuierState] = useState("NFTs");
  const [filterButtonHandel, setFilterButtonHandel] = useState({
    display: "none",
    size: 12,
  });

  return (
    <>
      <Helmet>
        <title>Galaxy NFT | NFTs</title>
        <meta name="description" content="Galaxy NFT | NFTs" />
      </Helmet>
      <FilterSlider Data={Data} setData={setData} />
      <Heder
        filterButtonHandel={filterButtonHandel}
        setFilterButtonHandel={setFilterButtonHandel}
      />
      <hr className="MarketplaceHR" />
      <Items Data={Data} serVuierState={serVuierState} />
      <NFTsProduct
        NfsData={Data}
        setNfsData={setData}
        vuierState={vuierState}
        filterButtonHandel={filterButtonHandel}
        setFilterButtonHandel={setFilterButtonHandel}
      />
      <hr className="MarketplaceHRtow p-0 m-0" />
    </>
  );
};

export default NFTs;
