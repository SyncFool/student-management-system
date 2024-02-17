import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
export default students;
function students() {
  return (
    <body>
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

      <link rel="stylesheet" href="assets/plugins/feather/feather.css" />

      <link rel="stylesheet" href="assets/plugins/icons/flags/flags.css" />

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
        href="assets/plugins/datatables/datatables.min.css"
      />

      <link rel="stylesheet" href="assets/css/style.css"></link>
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="student-group-form">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by ID ..."
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by Name ..."
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by Phone ..."
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="search-student-btn">
                    <button type="btn" className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table comman-shadow">
                  <div className="card-body">
                    <div className="page-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="page-title">Students</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <a
                            href="students.html"
                            className="btn btn-outline-gray me-2 active"
                          >
                            <i className="feather-list"></i>
                          </a>
                          <a
                            href="students-grid.html"
                            className="btn btn-outline-gray me-2"
                          >
                            <i className="feather-grid"></i>
                          </a>
                          <a href="#" className="btn btn-outline-primary me-2">
                            <i className="fas fa-download"></i> Download
                          </a>
                          <a
                            href="add-student.html"
                            className="btn btn-primary"
                          >
                            <i className="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                        <thead className="student-thread">
                          <tr>
                            <th>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="something"
                                />
                              </div>
                            </th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>DOB</th>
                            <th>Parent Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="something"
                                />
                              </div>
                            </td>
                            <td>PRE2209</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="student-details.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-01.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="student-details.html">Vivek Singh</a>
                              </h2>
                            </td>
                            <td>MCA 1C</td>
                            <td>2 Feb 2002</td>
                            <td>Harbhajan Singh</td>
                            <td>91 8006441903   </td>
                            <td>Aurangabad Khadar Mathura</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a
                                  href="javascript:;"
                                  className="btn btn-sm bg-success-light me-2 "
                                >
                                  <i className="feather-eye"></i>
                                </a>
                                <a
                                  href="edit-student.html"
                                  className="btn btn-sm bg-danger-light"
                                >
                                  <i className="feather-edit"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="something"
                                />
                              </div>
                            </td>
                            <td>PRE2213</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="student-details.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="student-details.html">Sprite Sisodia</a>
                              </h2>
                            </td>
                            <td>MCA 1A</td>
                            <td>3 June 2002</td>
                            <td>Dharmendra Singh</td>
                            <td>+91 8254685758</td>
                            <td>Absra Hills Dubai</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a
                                  href="javascript:;"
                                  className="btn btn-sm bg-success-light me-2 "
                                >
                                  <i className="feather-eye"></i>
                                </a>
                                <a
                                  href="edit-student.html"
                                  className="btn btn-sm bg-danger-light"
                                >
                                  <i className="feather-edit"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="something"
                                />
                              </div>
                            </td>
                            <td>PRE2143</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="student-details.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="student-details.html">Lakshita Beniwal</a>
                              </h2>
                            </td>
                            <td>MCA 1A</td>
                            <td>12 Apr 2002</td>
                            <td>Sunil Kumar</td>
                            <td>026 7318 4366</td>
                            <td>Sadbad , UP</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a
                                  href="javascript:;"
                                  className="btn btn-sm bg-success-light me-2 "
                                >
                                  <i className="feather-eye"></i>
                                </a>
                                <a
                                  href="edit-student.html"
                                  className="btn btn-sm bg-danger-light"
                                >
                                  <i className="feather-edit"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="something"
                                />
                              </div>
                            </td>
                            <td>PRE2431</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="student-details.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="student-details.html">Sociam</a>
                              </h2>
                            </td>
                            <td>MCA 1A</td>
                            <td>24 Feb 2000</td>
                            <td>Mahesh Ramya</td>
                            <td>+91 87958254563</td>
                            <td>Goverdhan Chaurah , Mathura</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a
                                  href="javascript:;"
                                  className="btn btn-sm bg-success-light me-2 "
                                >
                                  <i className="feather-eye"></i>
                                </a>
                                <a
                                  href="edit-student.html"
                                  className="btn btn-sm bg-danger-light"
                                >
                                  <i className="feather-edit"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="something"
                                />
                              </div>
                            </td>
                            <td>PRE1534</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="student-details.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-04.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="student-details.html">Radhika Rani </a>
                              </h2>
                            </td>
                            <td>MCA 1C</td>
                            <td>22 Jul 2006</td>
                            <td>Chandrapal Singh</td>
                            <td>+91 7485647892</td>
                            <td>Chatikara , Mathura</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a
                                  href="javascript:;"
                                  className="btn btn-sm bg-success-light me-2 "
                                >
                                  <i className="feather-eye"></i>
                                </a>
                                <a
                                  href="edit-student.html"
                                  className="btn btn-sm bg-danger-light"
                                >
                                  <i className="feather-edit"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="something"
                                />
                              </div>
                            </td>
                       
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
