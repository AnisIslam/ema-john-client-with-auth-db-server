import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeP0aGAXMWqMHsB43Sg4de6LUidbPKVRhT1vMvPZ1sX3mjUpLfROkvrHwXYkru18al6XOZq150L8SymFKWJBv8H00mYivrcsK');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment= {handlePayment}> </SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;