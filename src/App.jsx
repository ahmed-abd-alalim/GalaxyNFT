import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Footer,
  ScrollToTop,
  Presentation,
} from "./components/Components";
import {
  Home,
  NFTs,
  Rankings,
  Support,
  SignUp,
  LogIn,
  User,
  Member,
  NFTLab,
  Product,
} from "./pages/Pages";
import RawData from "./data/data.json";

function App() {
  const [data, setData] = useState(RawData);
  const HadelMemberPage = () => {
    const { userName } = useParams();
    return <Member Data={data} userName={userName} />;
  };

  const HadelProductPage = () => {
    const { productName } = useParams();
    return <Product Data={data} productName={productName} />;
  };

  return (
    <div className="app-container">
      <Router>
        <Presentation />
        <Navbar Data={data} setData={setData} />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home Data={data} />} />
            <Route
              path="/nfts"
              element={<NFTs Data={data.NFTsMarket} setData={setData} />}
            />
            <Route path="/rankings" element={<Rankings Data={data} />} />
            <Route path="/support" element={<Support />} />
            <Route
              path="/signup"
              element={
                !data.Access.haveaccess ? (
                  <SignUp setData={setData} />
                ) : (
                  <Navigate to="/account" replace />
                )
              }
            />
            <Route
              path="/login"
              element={
                !data.Access.haveaccess ? (
                  <LogIn Data={data.Access} setData={setData} />
                ) : (
                  <Navigate to="/account" replace />
                )
              }
            />
            <Route
              path="/account"
              element={
                data.Access.haveaccess ? (
                  <User Data={data} setData={setData} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/user/:userName" element={<HadelMemberPage />} />
            <Route path="/NFT/:productName" element={<HadelProductPage />} />
            <Route
              path="/nftlab"
              element={
                data.Access.haveaccess ? (
                  <NFTLab Data={data} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
