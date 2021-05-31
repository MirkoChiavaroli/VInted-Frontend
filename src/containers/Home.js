// IMPORT AXIOS E ADD AXIOS IN TERMINAL (yarn add axos)
import axios from "axios";
// IMPORT STATE et ROUTE
import { useState, useEffect } from "react";

// IMPORT COMPOSANT
import Offers from "../component/Offers";
import Hero from "../component/Hero";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vinted-backend-first.herokuapp.com/offer"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Hero />
      <Offers data={data} />
    </div>
  );
};

export default Home;
