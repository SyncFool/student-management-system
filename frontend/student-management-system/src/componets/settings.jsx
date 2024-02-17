export default settings;
function settings(){
    return(<body>

      
        <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/css/feather.css"/>

<link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"/>
 
<div className="main-wrapper">

        
        <div className="page-wrapper">
        <div className="content container-fluid">
    
        
        <div className="settings-menu-links">
        <ul className="nav nav-tabs menu-tabs">
        <li className="nav-item active">
        <a className="nav-link" href="settings.html">General Settings</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="localization-details.html">Localization</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="payment-settings.html">Payment Settings</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="email-settings.html">Email Settings</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="social-settings.html">Social Media Login</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="social-links.html">Social Links</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="seo-settings.html">SEO Settings</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="others-settings.html">Others</a>
        </li>
        </ul>
        </div>
        
        <div className="row">
        <div className="col-md-6">
        <div className="card">
        <div className="card-header">
        <h5 className="card-title">Website Basic Details</h5>
        </div>
        <div className="card-body pt-0">
        <form>
        <div className="settings-form">
        <div className="form-group">
        <label>Website Name <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="Enter Website Name"/>
        </div>
        <div className="form-group">
        <p className="settings-label">Logo <span className="star-red">*</span></p>
        <div className="settings-btn">
        <input type="file" accept="image/*" name="image" id="file" onchange="if (!window.__cfRLUnblockHandlers) return false; loadFile(event)" className="hide-input" data-cf-modified-6925dbd10a02195fc217549c-/>
        <label for="file" className="upload">
        <i className="feather-upload"></i>
        </label>
        </div>
        <h6 className="settings-size">Recommended image size is <span>150px x 150px</span></h6>
        <div className="upload-images">
        <img src="assets/img/logo.png" alt="Image"/>
        <a href="javascript:void(0);" className="btn-icon logo-hide-btn">
        <i className="feather-x-circle"></i>
        </a>
        </div>
        </div>
        <div className="form-group">
        <p className="settings-label">Favicon <span className="star-red">*</span></p>
        <div className="settings-btn">
        <input type="file" accept="image/*" name="image" id="file" onchange="if (!window.__cfRLUnblockHandlers) return false; loadFile(event)" className="hide-input" data-cf-modified-6925dbd10a02195fc217549c-/>
        <label for="file" className="upload">
        <i className="feather-upload"></i>
        </label>
        </div>
        <h6 className="settings-size">
        Recommended image size is <span>16px x 16px or 32px x 32px</span>
        </h6>
        <h6 className="settings-size mt-1">Accepted formats: only png and ico</h6>
        <div className="upload-images upload-size">
        <img src="assets/img/favicon.png" alt="Image"/>
        <a href="javascript:void(0);" className="btn-icon logo-hide-btn">
        <i className="feather-x-circle"></i>
        </a>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-5 col-md-6">
        <div className="form-group">
        <div className="status-toggle d-flex justify-content-between align-items-center">
        <p className="mb-0">RTL</p>
        <input type="checkbox" id="status_1" className="check"/>
        <label for="status_1" className="checktoggle">checkbox</label>
        </div>
        </div>
        </div>
        </div>
        <div className="form-group mb-0">
        <div className="settings-btns">
        <button type="submit" className="btn btn-orange">Update</button>
        <button type="submit" className="btn btn-grey">Cancel</button>
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
        <div className="col-md-6">
        <div className="card">
        <div className="card-header">
        <h5 className="card-title">Address Details</h5>
        </div>
        <div className="card-body pt-0">
        <form>
        <div className="settings-form">
        <div className="form-group">
        <label>Address Line 1 <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="Enter Address Line 1"/>
        </div>
        <div className="form-group">
        <label>Address Line 2 <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="Enter Address Line 2"/>
        </div>
        <div className="row">
        <div className="col-md-6">
        <div className="form-group">
        <label>City <span className="star-red">*</span></label>
        <input type="text" className="form-control"/>
        </div>
        </div>
        <div className="col-md-6">
        <div className="form-group">
        <label>State/Province <span className="star-red">*</span></label>
        <select className="select form-control">
        <option selected="selected">Select</option>
        <option>California</option>
        <option>Tasmania</option>
        <option>Auckland</option>
        <option>Marlborough</option>
        </select>
        </div>
        </div>
        <div className="col-md-6">
        <div className="form-group">
        <label>Zip/Postal Code <span className="star-red">*</span></label>
        <input type="text" className="form-control"/>
        </div>
        </div>
        <div className="col-md-6">
        <div className="form-group">
        <label>Country <span className="star-red">*</span></label>
        <select className="select form-control">
        <option selected="selected">Select</option>
        <option>India</option>
        <option>London</option>
        <option>France</option>
        <option>USA</option>
        </select>
        </div>
        </div>
        </div>
        <div className="form-group mb-0">
        <div className="settings-btns">
        <button type="submit" className="btn btn-orange">Update</button>
        <button type="submit" className="btn btn-grey">Cancel</button>
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
        
        
        <script src="assets/js/jquery-3.7.1.min.js" type="6925dbd10a02195fc217549c-text/javascript"></script>
        
        <script src="assets/js/bootstrap.bundle.min.js" type="6925dbd10a02195fc217549c-text/javascript"></script>
        
        <script src="assets/js/feather.min.js" type="6925dbd10a02195fc217549c-text/javascript"></script>
        
        <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js" type="6925dbd10a02195fc217549c-text/javascript"></script>
        
        <script src="assets/js/moment.min.js" type="6925dbd10a02195fc217549c-text/javascript"></script>
        <script src="assets/plugins/daterangepicker/daterangepicker.js" type="6925dbd10a02195fc217549c-text/javascript"></script>
        
        <script src="assets/plugins/select2/js/select2.min.js" type="6925dbd10a02195fc217549c-text/javascript"></script>
        
        <script src="assets/js/script.js" type="6925dbd10a02195fc217549c-text/javascript"></script>
        <script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="6925dbd10a02195fc217549c-|49" defer></script></body>)
}