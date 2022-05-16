import React,{Fragment} from 'react'

import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';
const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';


export default function OrderItem() {
  return (
    <Fragment>
        <div className="OrderItem">
            <figure>
                <img src={bike} alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,000</p>
            <img src={close} alt="close"/>
        </div>
    </Fragment>
  )
}
