import React from "react";
import Boats from "./boat.jfif";
import Asuss from "./asus.jpg";
import { NavLink } from "react-router-dom";
function Carousel()
{
    return(
        <>
         <div id="demo1" className="carousel slide"  data-ride="carousel">
        <ul className="carousel-indicators">
            <li data-target="#demo1" data-slide-to="0" className="active" ></li>
            <li data-target="#demo1" data-slide-to="1" ></li>
            <li data-target="#demo1" data-slide-to="2"></li>
            
        </ul>
        
         
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638965101/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2021/HP_iPhone13Series_8Dec_rapza1.jpg/mxw_2048,f_auto" alt="cnicm" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src={Boats} alt="kdm" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src={Asuss} alt="snsnik" height="345" width="100%"/>
            </div>
           
          </div>
        
        
          <a className="carousel-control-prev" href="#demo1" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo1" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
    
    </div>
        </>
    );
}
export default Carousel;