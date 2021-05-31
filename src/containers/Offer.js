import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

const Offer = ({ setUser, userToken }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <main className="offerPage">
        <div className="offerPic">
          <div className="offerPicCarousel">
            {data.product_pictures.length > 0 ? (
              <div className="carousel">
                {data.product_pictures.map((elem) => {
                  return (
                    <img
                      key={elem.asset_id}
                      src={elem.secure_url}
                      alt="/"
                      className="offerImg"
                    />
                  );
                })}
              </div>
            ) : (
              <div key={data.product_image.asset_id} className="carousel">
                <img src={data.product_image.secure_url} alt="/" />
              </div>
            )}
          </div>

          <div className="offerDescr">
            <div className="offerPrice">
              <p>{data.product_price} €</p>
              <spam>
                Sois couvert·e par notre Protection acheteurs Mirted, qui inclut
                notre politique de remboursement.
              </spam>
            </div>

            <div className="offerBloc">
              <div className="offerDataFix">
                <p>MARQUE</p>
                <p>TAILLE</p>
                <p>ÉTAT</p>
                <p>COULEUR</p>
                <p>EMPLACEMENT</p>
              </div>
              <div className="offerData">
                {data.product_details.map((elem, index) => {
                  return elem.MARQUE ? (
                    <div key={index}>
                      <p>{elem.MARQUE}</p>
                    </div>
                  ) : null;
                })}

                {data.product_details.map((elem, index) => {
                  return elem.TAILLE ? (
                    <div key={index}>
                      <p>{elem.TAILLE}</p>
                    </div>
                  ) : null;
                })}

                {data.product_details.map((elem, index) => {
                  return elem.ÉTAT ? (
                    <div key={index}>
                      <p>{elem.ÉTAT}</p>
                    </div>
                  ) : null;
                })}

                {data.product_details.map((elem, index) => {
                  return elem.COULEUR ? (
                    <div key={index}>
                      <p>{elem.COULEUR}</p>
                    </div>
                  ) : null;
                })}

                {data.product_details.map((elem, index) => {
                  return elem.EMPLACEMENT ? (
                    <div key={index}>
                      <p>{elem.EMPLACEMENT}</p>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            <div>
              <p className="offerName">{data.product_name}</p>
              <p className="offerProductDescr">{data.product_description}</p>
              <div className="offerProfile">
                {data.owner.account.avatar ? (
                  <img
                    src={data.owner.account.avatar.secure_url}
                    alt="/"
                    className="offerAvatar"
                  />
                ) : null}
                <p>{data.owner.account.username}</p>
              </div>
            </div>

            {/* vedere se è registrato (history.push("/payment",) o no (history.push("/login",) */}
            {userToken ? (
              <Link
                className="offerButton"
                onClick={() => {
                  setUser(userToken);
                  history.push("/payment", {
                    title: data.product_name,
                    amount: data.product_price,
                    name: data.owner._id,
                  });
                }}
              >
                Acheter
              </Link>
            ) : (
              <Link
                className="offerButton"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Acheter
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Offer;

// {history.push("/payment", { title: data.title })}
