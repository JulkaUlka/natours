/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51QAtCFCHK1fhW7oXeKut2Ka5hQVIxfkTqWFzEpLWQERluHUEdVRLRAAg8aGVuhP1iUh6NM97Gf1GcU22oZFUJL3q00ihIUnV3W',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
