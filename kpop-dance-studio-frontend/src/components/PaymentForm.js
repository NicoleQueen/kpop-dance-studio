import React, {useState} from "react"
import StripeCheckout from 'react-stripe-checkout';
import "../css/PaymentForm.css";
import OrderSuccess from "./OrderSuccess";
import { Redirect } from "react-router-dom";

function PaymentForm(props) {
  const [product, setProduct] = useState({
    name: "kpop dance",
    price: props.payment,
    productBy:'kpop'
  })
  // console.log(process.env.REACT_APP_GOOGLE_KEY)
  const [success, setSuccess] = useState(false);
  // console.log(success)

  const makePayment = token => {
    const body = {
      token,
      product
    }
    // console.log(token)

    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:3000/secret`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      // console.log("RESPONSE", response)
      const {status} = response
      setSuccess(true)
      // console.log("STATUS", status)
    })
    .catch(error => console.log(error))
  }

  if (success) {
    setSuccess(false)
    // console.log(props)
    // console.log(success)
    props.addPackage_db(product.price)

    return props.history.push("/user/success")
    // return (
    //   <div>
    //     <Redirect to={'/user/success'}/>
    //     {/* <OrderSuccess/> */}
    //   </div>
    // )
    // return <Redirect to={'/user/success'}/>
  } else {

    return (
      <div className="Payment">
        <div className="order">
        Your order totals {product.price} $ 
        </div>
        <StripeCheckout
          token={makePayment}
          stripeKey=""
          name="Kpop Dance Studio ^@^"
          amount={product.price * 100}
        >
          <button className="pricingTable-signup">Purchase</button>
        </StripeCheckout>
        <div className="list">
        <li className="item">
            All tickets must be used within one month from your first class date (EX 2020/9/1 ~ 2020/9/31)</li>
        <li className="item">
            If a ticket is never used after the purchase, the starting date will automatically be set as the date of the purchase.</li>
        <li className="item">Tickets are non-transferrable and cannot be shared with others.</li>
        <li className="item">Please note that classes are on a reservation system and admission may be restricted due to excess capacity.

        </li>
        <li className="item">Some instructors may not be available for private lessons.</li>
        <li className="item">Further inquiries can be made at the information desk.</li>
        </div>
      </div>
    )
  }
   

  

}

export default PaymentForm