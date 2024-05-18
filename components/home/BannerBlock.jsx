import React from 'react'

const BannerBlock = () => {
  return (
    <div className="banner row" style={{ height: "650px" , padding:"1rem"}}>
    <div className="col-md-6">
      <img src="./menu.jpg" alt="Left Image" className="img-fluid" style={{ height: "650px" }} />
    </div>
    <div className="col-md-6 d-flex flex-column justify-content-between" style={{ height: "650px" }}>
      <img src="./chef.webp" alt="Right Image 1" className="img-fluid mb-3" style={{ height: "calc(50% - 0.5rem)", width: "100%" }} />
      <img src="./noodles.webp" alt="Right Image 2" className="img-fluid" style={{ height: "calc(50% - 0.5rem)", width: "100%" }} />
    </div>
  </div>
  )   
}           

export default BannerBlock

     
   

     