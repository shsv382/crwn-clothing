import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K95YRHeje1UZIIVXzHBjDyOTur4i33UTYhfHFaG7yukJIJ9O7ZKvSu19g5h4KL7BWxSNw4q21xnNLBuuO0rXd6K0055Lskx0S';

//  ----- Both URL's are for test mode! -----
    let url = 'https://crwn-clothing-api-1991.herokuapp.com/';

    if(process.env.NODE_ENV === 'development') {
        url = 'https://localhost:5000/payment';
    }
//  -----------------------------------------

    const onToken = token => {
        // console.log(token);
        // alert('Payment Successful!')

        axios({
            url,
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successfull!')
        }).catch(error => {
            console.error('Payment error ', JSON.parse(error));
            alert('Payment error! Please check your credit card!')
        })
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;