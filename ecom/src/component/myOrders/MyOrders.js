
import React from "react";
import './MyOrders.css'

const MyOrders = () => 
{

    const carts = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div  className="ordersmain-div">
        <div className="ordermain-box">
            <div className="order-box">
                <div className="order-header-main">
                    <div className="order-header">
                        <div className="orderId">
                            <p>Order Id</p>
                        </div>
                        <div className="orderstatus">
                            <p>Status</p>
                        </div>
                        <div className="orderqty">
                            <p>Quantity</p>
                        </div>
                        <div className="orderamount">
                            <p>Amount</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default MyOrders