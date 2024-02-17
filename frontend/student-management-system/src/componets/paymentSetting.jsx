export default paymnetSetting;
function paymnetSetting(){
    return(<body>
<link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/css/feather.css"/>

<link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"></link>
        <div className="main-wrapper">
        
       
        
        
        <div className="page-wrapper">
        <div className="content container-fluid">
      

        <div className="row">
        <div className="col-lg-12">
        
        <div className="settings-menu-links">
        <ul className="nav nav-tabs menu-tabs">
        <li className="nav-item">
        <a className="nav-link" href="settings.html">General Settings</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="localization-details.html">Localization</a>
        </li>
        <li className="nav-item active">
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
        <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title">Paypal</h5>
        <div className="status-toggle d-flex justify-content-between align-items-center">
        <input type="checkbox" id="status_1" className="check"/>
        <label for="status_1" className="checktoggle">checkbox</label>
        </div>
        </div>
        <div className="card-body pt-0">
        <form>
        <div className="settings-form">
        <div className="form-group">
        <p className="pay-cont">Paypal Option</p>
        <label className="custom_radio me-4">
        <input type="radio" name="budget" value="Yes" checked/>
        <span className="checkmark"></span> Sandbox
        </label>
        <label className="custom_radio">
        <input type="radio" name="budget" value="Yes"/>
        <span className="checkmark"></span> Live
        </label>
        </div>
        <div className="form-group form-placeholder">
        <label>Braintree Tokenization key <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8"/>
        </div>
        <div className="form-group form-placeholder">
        <label>Braintree Merchant ID <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="pd6gznv7zbrx9hb8"/>
        </div>
        <div className="form-group form-placeholder">
        <label>Braintree Public key <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="h8bydrz7gcjkp7d4"/>
        </div>
        <div className="form-group form-placeholder">
        <label>Braintree Private key <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8"/>
        </div>
        <div className="form-group form-placeholder">
        <label>Paypal APP ID <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="pd6gznv7zbrx9hb8"/>
        </div>
        <div className="form-group form-placeholder">
        <label>Paypal Secret Key <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="h8bydrz7gcjkp7d4"/>
        </div>
        <div className="form-group mb-0">
        <div className="settings-btns">
        <button type="submit" className="btn btn-orange">Save</button>
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
        <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title">Stripe</h5>
        <div className="status-toggle d-flex justify-content-between align-items-center">
        <input type="checkbox" id="status_2" className="check" checked/>
        <label for="status_2" className="checktoggle">checkbox</label>
        </div>
        </div>
        <div className="card-body pt-0">
        <form>
        <div className="settings-form">
        <div className="form-group">
        <p className="pay-cont">Stripe Option</p>
        <label className="custom_radio me-4">
        <input type="radio" name="budget" value="Yes" checked/>
        <span className="checkmark"></span> Sandbox
        </label>
        <label className="custom_radio">
        <input type="radio" name="budget" value="Yes"/>
        <span className="checkmark"></span> Live
        </label>
        </div>
        <div className="form-group form-placeholder">
        <label>Gateway Name <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="Stripe"/>
        </div>
        <div className="form-group form-placeholder">
        <label>API Key <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr"/>
        </div>
        <div className="form-group form-placeholder">
        <label>Rest Key <span className="star-red">*</span></label>
        <input type="text" className="form-control" placeholder="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3"/>
        </div>
        <div className="form-group mb-0">
        <div className="settings-btns">
        <button type="submit" className="btn btn-orange">Save</button>
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
        </div>
        
        </div>
        
        
        <script src="assets/js/jquery-3.7.1.min.js" type="af3ffdea8fa3b30880c8c788-text/javascript"></script>
        
        <script src="assets/js/bootstrap.bundle.min.js" type="af3ffdea8fa3b30880c8c788-text/javascript"></script>
        
        <script src="assets/js/feather.min.js" type="af3ffdea8fa3b30880c8c788-text/javascript"></script>
        
        <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js" type="af3ffdea8fa3b30880c8c788-text/javascript"></script>
        
        <script src="assets/plugins/select2/js/select2.min.js" type="af3ffdea8fa3b30880c8c788-text/javascript"></script>
        
        <script src="assets/js/script.js" type="af3ffdea8fa3b30880c8c788-text/javascript"></script>
        <script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="af3ffdea8fa3b30880c8c788-|49" defer></script></body>)
}