import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GetWay_Pk)
const Payment = () => {
    return (
        <div className='w-[800px] mt-20 mx-10'>
            <p className='uppercase text-3xl text-center font-semibold'>payment</p>
            <div className='mt-9'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;