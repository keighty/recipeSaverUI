import React from 'react'

export const LandingPage = () => {
  return (
    <div className="section hero">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h4 className="hero-heading">Stop losing track of recipes you love.</h4>
            <label htmlFor="emailInput">Your email</label>
            <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="email" />
            <label htmlFor="emailInput">Your password</label>
            <input className="u-full-width" type="text" placeholder="********" id="password" />
            <input className="button-primary" type="submit" value="Signup" />
          </div>
          <div className="one-half column phones">
            <img className="phone" src="images/recipe-card.jpg" alt="Recipe card." />
          </div>
        </div>
      </div>
    </div>
)}
