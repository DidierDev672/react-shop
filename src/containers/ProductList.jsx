import React,{ Fragment } from 'react'
import ProductItem from '../components/ProductItem'

import '@styles/ProductList.scss'

export default function ProductList() {
  return (
    <Fragment>
        <section className="main-container">
            <div className="ProductList">
                <ProductItem />
            </div>
        </section>
    </Fragment>
  )
}
