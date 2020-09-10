import React from "react";
import "../App.css";
const Footer = (props) => {
  return (
   
    <footer class="page-footer font-small special-color-dark pt-4">
    
   
      <div class="container">
    
      
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1">
              <i class="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1">
              <i class="fab fa-twitter"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1">
              <i class="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1">
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-dribbble mx-1">
              <i className="fab fa-instagram"> </i>
            </a>
          </li>
        </ul>
    
    
      </div>
      
    
    
      <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> KpopDanceStudio.com</a>
      </div>
      <a class="nav-link" href="#about" id={"about"}>
            About
          </a>
      
    
    </footer>
   
  )
}

export default Footer;