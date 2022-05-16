import React,{Fragment} from 'react'
import ProductList from '../containers/ProductList'

import '@styles/Header.scss'

export default function Home() {
  return (
    <Fragment>
       <ProductList />
    </Fragment>
  )
}
