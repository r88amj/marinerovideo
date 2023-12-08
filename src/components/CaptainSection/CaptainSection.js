import React from 'react'
import './CaptainSection.css'

function CaptainSection() {
  return (
    <div className="captainSection">
      <div class="card text-bg-dark">
        <img src="https://marinero.mx/uploads/0000/23/2022/06/09/capitan3000.webp" class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaptainSection
