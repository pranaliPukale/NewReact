/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import MainScreen from './MainScreen'

function Website1() {
  return (
    <div>
        <h1>Assignment 1: React Routing</h1>
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
           <a class="navbar-brand" href="#">CODEMIND</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
          </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HTML</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CSS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Javascript</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">React</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
        </div>
      <MainScreen/>  
    </div>
  )
}

export default Website1
