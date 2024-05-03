import React from "react";
import "./MyOrders.css";
import Product from "../../modules/Product/Product";

const MyOrders = () => {
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  console.log(carts);

  return (
    <div className="ordersmain-div">
      <div className="ordermain-box">
        <div className="order-box">
          <div className="order-header-main">
            <div className="order-header">
              {/* <div className="orderImage">
                            <p>OrderImage</p>
                        </div> */}
              <div className="orderId">
                <p>Order Id</p>
              </div>
              <div className="myordercategory">
                <p>Category</p>
              </div>
              <div className="myorderqty">
                <p>Quantity</p>
              </div>
              <div className="myorderprice">
                <p>Price</p>
              </div>
            </div>
          </div>

          <div className="my-orders-main">
            {carts.length > 0 ? (
              carts.map((product) => {
                return (
                  <>
                    <table>
                      <tr>
                        <td>

                          <table>

                            <tr>
                              <td>
                                <div className="myorderId">
                                  <p>{product?.id}</p>
                                </div>
                                </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="myordercategory">
                                  <p>{product?.category}</p>
                                </div>
                                </td>
                                </tr>

                               
                                <tr>
                                    <td>
                                    <div className="myorderqty">
                                  <p>{product?.quantity}</p>
                                </div>
                                    </td>
                                </tr>


                               <tr>
                                <td>
                                <div className="myorderprice">
                                  <p>{product?.price}</p>
                                </div>
                                </td>
                               </tr>
                            
                          </table>

                        </td>
                      </tr>
                    </table>
                  </>
                );
              })
            ) : (
              <h1
                style={{
                  fontFamily: "Poppins",
                  textAlign: "center",
                  marginTop: "6rem",
                }}
              >
                No Orders Yet
              </h1>
            )}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyOrders;
