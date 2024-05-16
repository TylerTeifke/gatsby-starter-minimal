import * as React from 'react'
import Layout from '../components/layout'
import Button from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <p>
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" placeholder="John" required autofocus></input>
      </p>
      <p>
            <label for="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName" placeholder="Smith" required autofocus></input>
        </p>

        <p>
            <label for="color">Favorite Color:</label>
            <select name="color" id="color">
                <optgroup label="primary">
                    <option value="R">Red</option>
                    <option value="B">Blue</option>
                    <option value="G">Green</option>
                </optgroup>
                <optgroup label="secondary">
                    <option value="Y">Yellow</option>
                    <option value="P">Purple</option>
                    <option value="B">Black</option>
                </optgroup>
                <option value="O">Other</option>
            </select>
        </p>

        <fieldset>
            <legend>Send Me A Message</legend>
            <label for="message">Your Message</label>
            <br></br>
            <textarea name="message" id="message" cols="30" rows="10" 
            placeholder="Type your message here"></textarea>
        </fieldset>
        <Button>
            Click Me
        </Button>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage