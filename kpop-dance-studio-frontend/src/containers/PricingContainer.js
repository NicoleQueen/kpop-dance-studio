import React from "react";
import "../css/PricingContainer.css";
const PricingContainer = (props) => {
    return (<div >

<div class="container"> 
    <div class="row"> 
        <div class="col-md-4 col-sm-6"> 
            <div class="pricingTable"> 
                <h3 class="title">Standard</h3> 
                <div class="price-value"> 
                    <span class="month">per month</span> 
                    <span class="amount"> 
                        <span class="currency">$</span> 
                        399
                        <span class="value">99</span> 
                    </span> 
                </div> 
                <ul class="pricing-content"> 
                    <li>Unlimited in one month</li> 
                    <li>Tickets are non-transferrable</li> 
                    <li>and cannot be shared with others.</li> 
                    <li>Further inquiries can be made </li> 
                    <li>at the information desk.</li> 
                </ul> 
                {
                    props.user.id ? (
                        
                        <a href="/user/price" class="pricingTable-signup">Purchase</a> 
                        
                      ) : (
                        <a href="/login" class="pricingTable-signup">Purchase</a> 
                      
                      )
                }
                {/* <a href="/user/price" class="pricingTable-signup">Purchase</a>  */}
            </div> 
        </div> 
 
        <div class="col-md-4 col-sm-6"> 
            <div class="pricingTable"> 
                <h3 class="title">1 Class</h3> 
                <div class="price-value"> 
                    <span class="month">per class</span> 
                    <span class="amount"> 
                        <span class="currency">$</span> 
                        49
                        <span class="value">99</span> 
                    </span> 
                </div> 
                <ul class="pricing-content"> 
                    <li>Any one class</li> 
                    <li>Tickets are non-transferrable</li> 
                    <li>and cannot be shared with others.</li> 
                    <li>Further inquiries can be made </li> 
                    <li>at the information desk.</li> 
                </ul> 
                {
                    props.user.id ? (
                        
                        <a href="/user/price" class="pricingTable-signup">Purchase</a> 
                        
                      ) : (
                        <a href="/login" class="pricingTable-signup">Purchase</a> 
                      
                      )
                }
                {/* <a href="/user/price" class="pricingTable-signup">Purchase</a>  */}
            </div> 
        </div> 
        <div class="col-md-4 col-sm-6"> 
            <div class="pricingTable"> 
                <h3 class="title">3 Classes</h3> 
                <div class="price-value"> 
                    <span class="month">3 classes</span> 
                    <span class="amount"> 
                        <span class="currency">$</span> 
                        129 
                        <span class="value">99</span> 
                    </span> 
                </div> 
                <ul class="pricing-content"> 
                    <li>Any three class</li> 
                    <li>Tickets are non-transferrable</li> 
                    <li>and cannot be shared with others.</li> 
                    <li>Further inquiries can be made </li> 
                    <li>at the information desk.</li> 
                </ul> 
                {
                    props.user.id ? (
                        
                        <a href="/user/price" class="pricingTable-signup">Purchase</a> 
                        
                      ) : (
                        <a href="/login" class="pricingTable-signup">Purchase</a> 
                      
                      )
                }
                {/* <a href="/user/price" class="pricingTable-signup">Purchase</a>  */}
            </div> 
        </div> 
    </div> 
</div>
    </div>)
}

export default PricingContainer;