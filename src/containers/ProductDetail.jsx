import React,{Fragment} from 'react'
import ProductInfo from '../components/ProductInfo'

import '@styles/ProductDetail.scss'
import close from '@icons/icon_close.png'

export default function ProductDetail() {
  return (
    <Fragment>
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
                <img src={close} alt="close" />
            </div>
            <ProductInfo />
        </aside>
    </Fragment>
  )
}
