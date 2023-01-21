import React from "react";
import '../style/footer.css';

function Footer(){
  
    return(
        <>
        <footer>
      <div class="footer-container">
        <div class="left-col">
          <img src="logo.png" alt="abhi lagana hai" class="logo"/>
          <div class="social-media">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <p class="rights-text">© 2021 Created By <b>FantacyDesigns</b>  All Rights Reserved.</p>
        </div>
 
        <div class="right-col">
          <h1>Our Curd Operation in using React</h1>
          <div class="border"></div>
          <p>Enter Your Email to get our crud and updates.</p>
          <form action="" class="newsletter-form">
            <input type="text" class="txtb" placeholder="Enter Your Email"/>
            <input type="submit" class="btn1" value="submit"/>
          </form>
        </div>
      </div>
    </footer>
    <div className="row footer1">
        <div className="col-sm-6 text-center"> &copy;  Develop By Jitendra yadav</div>
        <div className="col-sm-6 text-center">&larr;Created By Jitendra yadav &rarr;</div>
    </div>
        </>
    );
}
export default Footer;