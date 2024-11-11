import PigHero from "./pigHero/pigHero";
import SmoleHero from "./smoleHero/smoleHero";

const Hero = ({ Data }) => {
  return (
    <>
      <div className="d-none d-lg-block">
        <PigHero Data={Data.Hero} />
      </div>
      <div className="d-block d-lg-none">
        <SmoleHero Data={Data.Hero} />
      </div>
    </>
  );
};

export default Hero;
