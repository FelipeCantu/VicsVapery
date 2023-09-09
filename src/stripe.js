import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51IZPS1G1eA0Mjg1e3nQb6GGRhCgHEzxi3RiGhYxaLFxSZSQcOnZNIdKp0BqKCA2qJd2t7rvFYV6wUL5fVzM9gzvj00hRr0Eys1');

export default stripePromise;