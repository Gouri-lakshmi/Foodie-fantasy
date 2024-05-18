import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Foodie Fantasy</h5>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-light me-2">Privacy Policy</a>
            <a href="#" className="text-light me-2">Terms of Service</a>
            <a href="#" className="text-light">Contact Us</a>
          </div>
        </div>
        <div className='footer-bootom'>
        <p>© 2024 Foodie Fantasy. All rights reserved.</p>
        </div>
      </div>  
    </footer>      
    </div>
  )
}

export default Footer;