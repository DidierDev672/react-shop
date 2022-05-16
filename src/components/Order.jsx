import React, { Fragment } from "react";

import "@styles/Order.scss";
import flechita from '@icons/flechita.svg'

export default function Order() {
  return (
    <Fragment>
      <div className="Order">
        <p>
          <span>03.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src={flechita} alt="arrow" />
      </div>
    </Fragment>
  );
}
