import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default TeacherAdd;

function TeacherAdd() {
  const [teacherId, setTeacherId] = useState("");
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [joiningDate, setjoiningDate] = useState("");
  const [qualifications, setqualifications] = useState("");
  const [experience, setexperience] = useState("");
  const [username, setusername] = useState("");
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [country, setcountry] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const addTeacher = {teacherId, name,gender,dob,mobileNo,joiningDate,qualifications,experience,username,emailId,password,address,city,state,zipcode,country}
    
    const teacher = await fetch("http://localhost:5000/addTeacher",{
      method:"POST",
      body: JSON.stringify(addTeacher),
      headers :{
        "Content-Type": "application/json",
      },
    });

    

  }
  return (
    <body>
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

      <link rel="stylesheet" href="assets/plugins/feather/feather.css" />

      <link rel="stylesheet" href="assets/plugins/icons/flags/flags.css" />

      <link
        rel="stylesheet"
        href="assets/css/bootstrap-datetimepicker.min.css"
      />

      <link
        rel="stylesheet"
        href="assets/plugins/fontawesome/css/fontawesome.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/plugins/fontawesome/css/all.min.css"
      />

      <link
        rel="stylesheet"
        href="assets/plugins/select2/css/select2.min.css"
      />

      <link rel="stylesheet" href="assets/css/style.css"></link>
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Bread curms */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="form-title">
                            <span>Basic Details</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Teacher ID <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Teacher ID"
                              value={teacherId}
                              onClick ={(e)=>{
                                setTeacherId(e.target.value) 
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Name <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name"
                              value={name}
                              onClick ={(e)=>{
                                setname(e.target.value) 
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Gender <span className="login-danger">*</span>
                            </label>
                            <select className="form-control select"  value={gender}
                              onClick ={(e)=>{
                                setgender(e.target.value) 
                              }}>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Others</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms calendar-icon">
                            <label>
                              Date Of Birth{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control datetimepicker"
                              type="text"
                              placeholder="DD-MM-YYYY"
                              value={dob}
                              onClick ={(e)=>{
                                setdob(e.target.value) 
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Mobile <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Phone"

                              value={mobileNo} onClick={(e)=>{setmobileNo(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms calendar-icon">
                            <label>
                              Joining Date{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control datetimepicker"
                              type="text"
                              placeholder="DD-MM-YYYY"
                              value={joiningDate}
                              onClick ={(e)=>{
                                setjoiningDate(e.target.value) 
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4 local-forms">
                          <div className="form-group">
                            <label>
                              Qualification{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Joining Date"
                              value={qualifications} onClick={(e)=>{setqualifications(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Experience <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Experience"
                              value={experience} onClick={(e)=>{setexperience(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <h5 className="form-title">
                            <span>Login Details</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Username <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Username"
                              value={username} onClick={(e)=>{setusername(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Email ID <span className="login-danger">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Mail Id"
                              value={emailId} onClick={(e)=>{setemailId(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Password <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Password"
                              value={password} onClick={(e)=>{setpassword(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Repeat Password{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Repeat Password"
                            
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <h5 className="form-title">
                            <span>Address</span>
                          </h5>
                        </div>
                        <div className="col-12">
                          <div className="form-group local-forms">
                            <label>
                              Address <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter address"
                              value={address} onClick={(e)=>{setaddress(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              City <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter City"
                              value={city} onClick={(e)=>{setcity(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              State <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter State"
                              value={state} onClick={(e)=>{setstate(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Zip Code <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Zip"
                              value={zipcode} onClick={(e)=>{setzipcode(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Country <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Country"
                              value={country} onClick={(e)=>{setcountry(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="student-submit">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
