import React,{Fragment} from 'react'

import '@styles/Menu.scss'

export default function Menu() {
  return (
    <Fragment>
        <ul>
            <li>
                <a href="/" className="title">My Orders</a>
            </li>
            <li>
                <a href="/">My account</a>
            </li>
            <li>
                <a href="/">Sign out</a>
            </li>
        </ul>
    </Fragment>
  )
}
