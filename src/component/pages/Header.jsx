import React from "react";
import '../style/header.css';
function Header(){
    return(
        <>
       <div className="container-fluid">
            <div className="row  header">
                <div className="col-sm-4 text-center fst-italic">Helpline No:8928519020</div>
                <div className="col-sm-4 text-center fst-italic">mailto:Jitendrayadav@gmail.com</div>
                <div className="col-sm-4 text-center fst-italic">
                <div class="social-media">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
                </div>
            </div>
        </div>
        </>
    );

}
export default Header;