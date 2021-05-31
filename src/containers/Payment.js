import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../component/CheckoutForm";

const Payment = () => {
  // Envoyer ma clé publique à l'API Stripe
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X"); // mettre la cles que je trouve sur Stripe.com
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
