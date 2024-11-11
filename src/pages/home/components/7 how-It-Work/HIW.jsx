import "./HIW.css";

const HIW = ({ Data }) => {
  return (
    <section id="howItWork" className="mb-5 mt-5 mt-md-0">
      <div className="container">
        <div className="mx-3 d-flex justify-content-between align-items-center mb-2  mb-md-4">
          <div>
            <span className="d-block F2">
              <span className="lemon">How</span> it works
            </span>
            <span className="mt-2 F4">
              Don’t worry, here’s the beginner's guide to the NFT world
            </span>
          </div>
        </div>
        <div className="row mx-1">
          {Data.HIW.slice(0, 3).map((item, index) => (
            <div key={index} className="col-12 col-md-4 my-3 my-md-0">
              <div className="card-img-style pb-4 px-4">
                <div className="d-flex justify-content-center">
                  <img src={item.img} alt="#" />
                </div>
                <div className="text-start text-md-center text-center">
                  <span className="d-block mt-2 mb-1 F3">{item.title}</span>
                  <span className="F4">{item.paregraf}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HIW;
