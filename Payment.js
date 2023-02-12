import React, { useEffect, useState } from 'react'
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
//import CheckoutProduct from './CheckoutProduct';
import {Link} from "react-router-dom";
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { useNavigate } from 'react-router-dom'; 
import {db} from "./firebase"
function Payment() {

  const [{basket, user}, dispatch]=useStateValue();
  const navigate=useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded]=useState(false);
  const [processing, setProcessing]=useState("");
  const [error, setError]=useState(null);
  const [disabled, setDisabled]=useState(true);
  const [clientSecret, SetClienSecret]=useState(true);


  useEffect (() =>{
        const getClientSecret=async () =>{
            const response=await axios({
                method: 'post',
                url: `/payment/create?total= ${getBasketTotal(basket) * 100}`
            });
            SetClienSecret(response.data.clientSecret)
        }
        getClientSecret();
  }, [basket])

  const handleSubmit=async event => {
        event.preventDefault();
        setProcessing(true);

        const payload=await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) =>{
            //payment confirmation
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders')
        })
  }
  const handleChange=event=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
  }

  return (
    <div className='payment'>
      <div className="payment__container">
        <h1>
            Checkout (<Link to='/checkout'>{basket.length} items</Link> )
        </h1>

        {/* delivery address */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery Address</h3>
            </div>
            <div className="ppayment__address">
                {/* <p>{user.email} </p> */}
                <p>T03 Tiyi</p>
                <p>NIT Nagaland</p>
            </div>
        </div>
            {/* review items */}
        
        <div className="payment__section">
            <div className="payment__title">
                <h3>Review items and delivery</h3>
                <div className="payment__items">
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
        
            {/* payment method */}
        <div className="payment__section">
            <div className="payment__method">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                {/* stripe will go here */}
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange} />
                        
                        <div className="payment__priceContainer">
                            <CurrencyFormat
                            renderText={(value)=>(
                                <h3>Order Total: {value} </h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                            />
                            <button disabled={processing || disabled || succeeded} >
                                <span>{processing ? <p>Processing</p> : "Buy Now" }</span>
                            </button>
                        </div>

                        {error && <div>{error} </div>  }
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
