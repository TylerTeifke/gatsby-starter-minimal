import * as React from 'react'
import { Link } from 'gatsby'
import { container, button, label } from './layout.module.css'

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
      <button className={button}>Click Me</button>
    </div>
  )
}

const Label = ({children}) => {
  return (
    <div className={label}>{children}</div>
  )
}

export default Layout
export {Label}