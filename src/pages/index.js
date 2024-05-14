import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p>
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" placeholder="John" required autofocus></input>
        </p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage