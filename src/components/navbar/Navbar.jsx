import LargNavbar from "./largNavbar/LargNavbar";
import SomleNavbar from "./somleNavbar/SomleNavbar";

const Navbar = ({ Data, setData }) => {
  return (
    <>
      <div className="d-none d-lg-block">
        <LargNavbar rowData={Data} setData={setData} />
      </div>
      <div className="d-block d-lg-none">
        <SomleNavbar rowData={Data} />
      </div>
    </>
  );
};

export default Navbar;
