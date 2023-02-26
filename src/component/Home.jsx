import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-dark border-0 rounded-0">
        <img src="/assets/hero-bg.jpg" class="image-bg" alt="background" height={770}  />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-semibold mb-0">NEW SEASON ARRIVALS</h5>
            <p class="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
            
          </div>
        </div>
      </div>
      <Products/>
    </div>
  )
}

export default Home