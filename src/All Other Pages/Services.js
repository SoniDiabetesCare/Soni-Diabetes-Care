import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import Slider from "./Slider";

const Services = () => {
     return (
          <>
               <Slider/>
               <p className="hs">
                    HOME / SERVICES
               </p>
               <div className="hsback">
                    <div className="topbox">
                         <div>
                              <img src="https://i.ibb.co/1bZVDsJ/Medical-Store.jpg" alt="Medical Store" className="serviceimg"/>
                              <h1 className="servemss1">
                                   Medical Store
                              </h1>
                         </div>
                         <div>
                              <img src="https://i.ibb.co/MBSRhkf/Lab-Testing.jpg" alt="Lab & Testing" className="serviceimg"/>
                              <h1 className="servemss1">
                                   Lab & Testing
                              </h1>
                         </div>
                    </div>
               </div>
               <div className="textbox">
                    <div className="sdcshp11">
                         <h6 className="sdcsh1">
                              Medical Store
                         </h6>
                         <p className="sdcsp1">
                              After Diet and Physical Activity, you need drugs or insulin to control your blood sugar and prevent future complications. We provide our patients best quality drugs in our pharmacy so they can fight against diabetes.
                         </p>
                         <p className="sdcsp1">
                              As we know diabetics need life long drugs so we provide various patient supportive initiative to make our drugs cheaper and affordable without compromising quality of medicine.
                         </p>
                         <Link to="/medicalstore" className="sdcsp11">
                              Photo Gallery <i class="bi bi-arrow-right-circle-fill"></i>
                         </Link>
                    </div>
                    <div className="sdcshp22">
                         <h6 className="sdcsh2">
                              Lab & Testing
                         </h6>
                         <p className="sdcsp2">
                              A quality oriented cost effective Lab facility is available at our center.
                         </p>
                         <Link to="/labtest" className="sdcsp22">
                              Photo Gallery <i class="bi bi-arrow-right-circle-fill"></i>
                         </Link>
                    </div>
               </div>
               <div className="lineback">
                    <p>
                         Life's most persistent and urgent question is,
                    </p>
                    <p>
                         "What are you doing for others?"
                    </p>
               </div>
          </>
     )
}

export default Services;