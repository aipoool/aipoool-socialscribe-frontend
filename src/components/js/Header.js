import React, {useEffect, useState} from 'react'
import "../css/header.css";
import axios from "axios";


const Header = () => {

  return (
    <>
    <header>
      <nav>
        <div className="left">
          <h1>SocialScribe</h1>
        </div>
      </nav>
    </header>
    </>

  )
}

export default Header