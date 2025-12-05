import React from 'react'
import './Banner.css'
function Banner({pageName, bannerImage,title,text,buttonText,btnClassName}) {
  return (
    <div className={pageName}>
        <img src={bannerImage} alt="banner-image" />
        <div className="banner-text">
            <h1>{title}</h1>
            <p>{text}</p>
            <button className={btnClassName}>{buttonText}</button>
        </div>
    </div>
  )
}

export default Banner