import hero from "../assets/img/hero-banner.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="heroBlock">
      <img className="heroPict" src={hero} alt="Banner" />
      <div>
        <div className="hero">
          <h1 className="heroH1">Prêts à faire du tri dans vos plaquards ?</h1>
          <Link to="/publish" className="putSell">
            {" "}
            Commencer à vendre{" "}
          </Link>
          <Link className="rules">Découvrir comment ça marche</Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
