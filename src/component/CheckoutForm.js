import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
// import { useState } from "react";

const CheckoutForm = ({ userToken }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // recupero dati carta dal form
      const cardElements = elements.getElement(CardElement);
      // invio a Stripe
      const stripeResponse = await stripe.createToken(cardElements, {
        name: "setUser", // quoi mettre ici ??
      });
      //   console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      // token to server
      const response = await axios.post(
        "https://vinted-backend-first.herokuapp.com/payment",
        {
          token: stripeToken,
          title: response.product_name,
          amount: 1000,
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    // HTML form
    <div className="payment">
      <div className="paymentCard">
        <div className="paymentCommande">
          <h6> Résumé de la commande</h6>
          <div>
            <p>Commande</p>{" "}
          </div>
          <div>
            <p>Frais protecion acheteurs</p>{" "}
          </div>
          <div>
            <p>Frais de port</p>{" "}
          </div>
        </div>
        <div className="paymentTotal">
          <div>
            <p>Total</p> <p>Il ne vous reste ....</p>
          </div>
        </div>
        <div className="paymentCreditCard">
          <form onSubmit={handleSubmit}>
            <CardElement className="paymentNumberCard" />
            <input
              type="submit"
              className="paymentButton"
              type="submit"
              value="Pay"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
