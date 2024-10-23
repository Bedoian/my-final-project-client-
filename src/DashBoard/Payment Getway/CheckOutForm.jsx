import { CardElement, useElements, useStripe, } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from '../../hooks/useCart'
import useAxiousSecure from "../../hooks/useAxiousSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const CheckOutForm = () => {
    const stripe = useStripe()
    const { user } = useAuth()
    const elements = useElements()
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState()
    const [cart] = useCart()
    const axiosSecure = useAxiousSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (totalPrice) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('error occured', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError('')
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonimous',
                    name: user?.displayName || 'anonimous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error happened');
        }
        else {
            if (paymentIntent.status === "succeeded") {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your transiction has been successded",
                    text: `Transiction id : ${paymentIntent.id}`,
                    showConfirmButton: true
                });
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(),
                    transictionId: paymentIntent.id,
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data);

            }
        }

        // payment

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />

            <div className="flex justify-center">
                <button onClick={handleSubmit} className="btn px-28 btn-primary  mt-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
            {
                error && <p className="text-center mt-4 text-red-600 text-lg">{error}....</p>
            }
        </form>
    );
};

export default CheckOutForm;