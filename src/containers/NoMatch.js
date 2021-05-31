import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="noMatch">
      <h1>La page n'existe pas</h1>
      <Link to="/" className="noMatchLink">
        Cette page n'existe plus, retour à la page d'accueil
      </Link>
    </div>
  );
};

export default NoMatch;
