import * as React from 'react'
import Layout from '../components/layout'
import Label from '../components/layout'

//Code for the form gotten from https://www.youtube.com/watch?v=mJgBOIoGihA

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <form action="https://httpbin.org/get" method="get">
        <fieldset>
            <legend>Personal Info</legend> 
            <p>
                <label for="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" placeholder="John" required autofocus></input>
            </p>

            <p>
                <label for="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" placeholder="Doe" required></input>
            </p>
            <p>
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="password" required></input>
            </p>
            <p>
                <label for="phone">Phone:</label>
                <input type="tel" name="phone" id="phone" placeholder="555-555-5555"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required></input>
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
        </fieldset>
        <br></br>
        <fieldset>
            <legend>Send Me A Message</legend>
            <label for="message">Your Message</label>
            <br></br>
            <textarea name="message" id="message" cols="30" rows="10" 
            placeholder="Type your message here"></textarea>
        </fieldset>
        <br></br>
        <button type="submit" formaction="https://httpbin.org/post" formmethod="post">Post</button>
        </form>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage