import "./NMAT.css";
import { MdOutlineEmail } from "react-icons/md";

const NMAT = ({ Data }) => {
  return (
    <section id="joinOur" className="my-5 pt-2">
      <div className="container">
        <div className="row mx-3 mx-md-0 mx-lg-3 py-2 py-md-0">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3 p-md-4  p-lg-5">
            <div
              className=" w-100 h-100 d-none d-md-block img"
              style={{
                backgroundImage: `url('${Data.NMAT.img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <img
              src={Data.NMAT.img}
              alt="img"
              width="100%"
              className="d-block d-md-none"
            />
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3 p-md-4 p-lg-5">
            <div className="text-center text-md-start">
              <span className="d-block F2 mb-2">
                <span className="lemon">Never</span> miss a thing
              </span>
              <span className="F4 mb-xl-5 mb-lg-4 d-flex">
                Join our community of NFT enthusiasts and get exclusive access
                to drops, promos, and updates.
              </span>

              <div className="d-none d-lg-flex emailComponant">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="ps-3"
                />
                <button className="btnTemp py-3">
                  <MdOutlineEmail />
                  Subscribe
                </button>
              </div>
              <div className="d-block d-lg-none mt-4 emailComponantSmole">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="py-2 ps-3"
                />
                <button className="btnTemp mt-3 py-2">
                  <MdOutlineEmail />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NMAT;
