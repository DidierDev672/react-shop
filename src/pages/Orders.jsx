import React, { Fragment } from "react";
import OrderItem from "../components/OrderItem";

import "@styles/Order.scss";

export default function Orders() {
  return (
    <Fragment>
      <div className="Orders">
        <div className="Orders-container">
          <h1 className="title">My orders</h1>
          <div className="Orders-content">
            <OrderItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
