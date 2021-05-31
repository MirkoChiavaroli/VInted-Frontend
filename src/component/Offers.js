import { Link } from "react-router-dom";

const Offers = ({ data }) => {
  return (
    <main>
      <div className="offersBlocCard">
        {data.offer.map((offer) => {
          return (
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <div className="offersCard">
                <div className="offersBlocAvatar">
                  {offer.owner.account.avatar ? (
                    <img
                      src={offer.owner.account.avatar.secure_url}
                      alt="/"
                      className="offersAvatar"
                    />
                  ) : null}
                  <span>{offer.owner.account.username}</span>
                </div>

                <div className="offersImg">
                  <img
                    key={offer.product_image.asset_id}
                    src={offer.product_image.secure_url}
                    alt="/"
                    className="offersPic"
                  />
                </div>

                <div>
                  <p>{offer.product_price} €</p>
                  <>
                    {offer.product_details.map((offer, index) => {
                      return offer.TAILLE ? (
                        <p key={index}>{offer.TAILLE}</p>
                      ) : null;
                    })}
                  </>
                  <>
                    {offer.product_details.map((offer, index) => {
                      return offer.MARQUE ? (
                        <p key={index}>{offer.MARQUE}</p>
                      ) : null;
                    })}
                  </>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Offers;
