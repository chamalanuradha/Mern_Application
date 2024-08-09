import React from 'react'
import './navbar.css'

export default function navbar() {
  return (
    <nav className ="navbar navbar-expand-lg">
  <div className ="container-fluid">
    <a className ="navbar-brand" href="/">Daily Master</a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

