import Header from "./Header";
import Sidebar from './Sidebar';
export default AddBook;

function AddBook() {
  return (
    <body>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css" />

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css" />

<link
  rel="stylesheet"
  href="assets/plugins/fontawesome/css/fontawesome.min.css"
/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css" />

<link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css" />

<link rel="stylesheet" href="assets/css/style.css"/>
      <div className="main-wrapper">
        <Header />
        <Sidebar/>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="form-title">
                            <span>Book Information</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Book ID <span className="login-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Book Name
                              <span className="login-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
        
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Language <span className="login-danger">*</span>
                            </label>
                            <select className="form-control select">
                              <option>Select Language</option>
                              <option>English</option>
                              <option>Turkish</option>
                              <option>Chinese</option>
                              <option>Spanish</option>
                              <option>Arabic</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Department
                              <span className="login-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>className</label>
                            <select className="form-control select">
                              <option>
                                Select className <span className="login-danger">*</span>
                              </option>
                              <option>LKG</option>
                              <option>UKG</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Type <span className="login-danger">*</span>
                            </label>
                            <select className="form-control select">
                              <option>Select Type</option>
                              <option>Book</option>
                              <option>DVD</option>
                              <option>CD</option>
                              <option>Newspaper</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Status <span className="login-danger">*</span>
                            </label>
                            <select className="form-control select">
                              <option>Select Status</option>
                              <option>In Stock</option>
                              <option>Out of Stock</option>
                            </select>
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
