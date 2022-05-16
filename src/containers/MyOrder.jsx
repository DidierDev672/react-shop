import React,{ Fragment } from 'react'
import OrderItem from '../components/OrderItem'

import '@styles/MyOrder.scss'
import flechita from '@icons/flechita.svg'

export default function MyOrder() {
  return (
    <Fragment>
        <aside className="MyOrder">
            <div className="title-container">
                <img src={flechita} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                <OrderItem />
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560.00</p>
                    <button className="primary-button">
                        Checkout
                    </button>
                </div>
            </div>
        </aside>
    </Fragment>
  )
}
