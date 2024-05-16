import * as React from 'react'
import { Link } from 'gatsby'
import { container, button } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

const Button = (children) => {
  return (
    <button className={button}>{children}</button>
  )
}

export default Layout
export {Button}