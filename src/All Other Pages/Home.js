import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Home.css";
import Notification from "./Notification";
import RotateBlogs from "./RotateBlogs";
import RotateReviews from "./RotateReviews";

class Home extends Component {

     constructor() {
          super();
          this.state = {
               name: "React",
               UpdateNOTE: false
          };
          this.hideComponent = this.hideComponent.bind(this);
     }
     
     hideComponent(varname) {
          console.log(varname);
          switch (varname) {
               case "UpdateNOTE":
                    this.setState({ UpdateNOTE: !this.state.UpdateNOTE });
                    break;
               default: return;
          }
     }
     
     render() {
          const { UpdateNOTE } = this.state;
     return (
          <>
               <div className="sdchome">
                    <div className="sdcnotice">
                         <img src="https://i.ibb.co/BntgjmZ/Announcement.png" alt="Notification icon" onClick={() => this.hideComponent("UpdateNOTE")} className="mybell"/>
                         <div>
                              {UpdateNOTE && <Notification/>}
                         </div>
                    </div>
                    <div className="bannline" data-bs-toggle="modal" data-bs-target="#mymodal">
                         <button className="bannbut">
                              Book Now
                         </button>
                    </div>
                    <div id="mymodal" className="modal fade" role="dialog">
                         <div className="modal-dialog">
                              <div className="modal-content modback">
                                   <div className="modal-header">
                                        <h4 className="modal-title modhead">
                                             Opinion from the Specialist
                                        </h4>
                                        <button className="close" data-bs-dismiss="modal">
                                             &times;
                                        </button>
                                   </div>
                                   <div className="modal-body">
                                        <form action="https://public.herotofu.com/v1/7468b140-7ed7-11ed-b38f-a1ed22f366b1" method="post" encType="multipart/form-data">
                                             <div className="bannform">
                                                  <div className="form-group">
                                                       NAME
                                                       <input type="text" name="Name" className="form-control formebox" placeholder="Enter Name" required/>
                                                  </div>
                                                  <div className="form-group">
                                                       MOBILE NUMBER
                                                       <input type="digits" name="Phone Number" className="form-control formebox" placeholder="Enter mobile no" minLength="10" required/>
                                                  </div>
                                                  <div className="form-group">
                                                       PREFERRED TIME TO CALL
                                                       <input type="time" name="Time to Call" className="form-control formebox" placeholder="Preferred time to call" required/>
                                                  </div>
                                                  <div className="form-group">
                                                       DOCUMENT
                                                       <input type="file" name="Document" className="form-control formebox" placeholder="Browse PDF, DOCX, ETC."/>
                                                  </div>
                                                  <button className="btn btn-primary formebutton" type="submit">
                                                       SUBMIT
                                                  </button>
                                             </div>
                                        </form>
                                   </div>
                                   <div className="modal-footer modhead">
                                        <p>
                                             You will be notified soon about the follow-up.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="row sdcheadlineimage">
                         <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                              <img src="https://i.ibb.co/sbyjgD8/Doctors.jpg" alt="Doctors" className="grouppic"/>
                         </div>
                         <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                              <div className="container-fluid">
                                   <h1 className="line1">
                                        Keep your heart sweet...
                                   </h1>
                                   <p className="line2">
                                        Not Blood
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="servepage">
                    <div className="servepageb">
                         <Link to="/services">
                              <h2 className="serviceline1">
                                   OUR SERVICES
                              </h2>
                         </Link>
                         <p className="serviceline2">
                              We are a team of certified and experienced Doctors and Staff.
                         </p>
                         <div className="mappost">
                              <a href="https://www.google.com/maps/place/Soni+Diabetes+Care+-+Best+Diabetes+Doctor+%2F+Diabetes+Specialist+%2F+Best+Diabetologist+in+Sikar/@27.6267575,75.1054746,12z/data=!4m22!1m16!4m15!1m6!1m2!1s0x396cbbcfd2752c25:0xe22e2da3f2855ced!2ssoni+diabetes+care!2m2!1d75.1755149!2d27.6267751!1m6!1m2!1s0x396cbbcfd2752c25:0xe22e2da3f2855ced!2sSoni+Diabetes+Care+-+Best+Diabetes+Doctor+%2F+Diabetes+Specialist+%2F+Best+Diabetologist+in+Sikar,+Didwana+-+Sikar+Rd,+Dhobiyon+Ka+Mohalla,+Sikar,+Rajasthan+332001!2m2!1d75.1755149!2d27.6267751!3e0!3m4!1s0x396cbbcfd2752c25:0xe22e2da3f2855ced!8m2!3d27.6267751!4d75.1755149" target="_blank" rel="noreferrer noopener">
                                   <img src="https://i.ibb.co/Yc7mQzV/Location.png" alt="Location icon" className="mapicon"/>
                              </a>
                         </div>
                         <div className="container">
                              <div className="row">
                                   <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                                        <Link to="/services">
                                             <img src="https://i.ibb.co/1bZVDsJ/Medical-Store.jpg" alt="Medical Store" className="serviceimg"/>
                                        </Link>
                                   </div>
                                   <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                        <Link to="/services">
                                             <div className="servicepos">
                                                  <h1 className="servemsh1">
                                                       Medical Store
                                                  </h1>
                                                  <p className="servems2">
                                                       After Diet and Physical Activity, you need drugs or insulin to control your blood sugar and prevent future complications.
                                                  </p>
                                             </div>
                                        </Link>
                                   </div>
                                   <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                                        <Link to="/services">
                                             <img src="https://i.ibb.co/MBSRhkf/Lab-Testing.jpg" alt="Lab Testing" className="serviceimg"/>
                                        </Link>
                                   </div>
                                   <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                        <Link to="/services">
                                             <div className="servicepos">
                                                  <h1 className="servemsh1">
                                                       Lab & Testing
                                                  </h1>
                                                  <p className="servems2">
                                                       A quality oriented cost effective Lab facility is available at our center.
                                                  </p>
                                             </div>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="blogback">
                    <div className="blogb">
                         <Link to="/blogs">
                              <h2 className="servicelineb1">
                                   BLOGS ON DIABETES
                              </h2>
                         </Link>
                         <p className="serviceline2">
                              Diabetes is the result of lifestyle failure
                         </p>
                         <RotateBlogs/>
                    </div>
               </div>
               <div className="reviewback" id="homeReview">
                    <div className="reviewb">
                         <Link to="/#homeReview">
                              <h2 className="servicelineb1">
                                   WHAT ARE PATIENTS BELIEVE!
                              </h2>
                         </Link>
                         <p className="serviceline2">
                              Reviews of our patients.
                         </p>
                         <RotateReviews/>
                    </div>
               </div>
          </>
     )
}}

export default Home;