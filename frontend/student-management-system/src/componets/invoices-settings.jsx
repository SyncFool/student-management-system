export default invoiveSettings;
function invoiceSettings(){
    return (<body>
          <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/plugins/icons/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css"/>

<link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"></link>
        <div className="main-wrapper">

        
        
        <div className="page-wrapper">
        <div className="content container-fluid">
        
        
        <div className="row">
        <div className="col-xl-3 col-md-4">
        <div className="widget settings-menu">
        <ul>
        <li className="nav-item">
        <a href="settings.html" className="nav-link active">
        <i className="fe fe-git-commit"></i> <span>General Settings</span>
        </a>
        </li>
        <li className="nav-item">
        <a href="tax-settings.html" className="nav-link">
        <i className="fe fe-bookmark"></i> <span>Tax Settings</span>
        </a>
        </li>
        <li className="nav-item">
        <a href="bank-settings.html" className="nav-link">
        <i className="fas fa-university"></i> <span>Bank Settings</span>
        </a>
        </li>
        </ul>
        </div>
        </div>
        <div className="col-xl-9 col-md-8">
        <div className="card invoices-settings-card">
        <div className="card-header">
        <h5 className="card-title">General Settings</h5>
        </div>
        <div className="card-body">
        
        <form action="#" className="invoices-settings-form">
        <div className="row align-items-center form-group">
        <label for="name" className="col-sm-3 col-form-label input-label">Invoice Status</label>
        <div className="col-sm-9">
        <label className="custom_check">
        <input type="checkbox" name="invoice"/>
        <span className="checkmark"></span> Change invoice status to paid after an order is complete
        </label>
        </div>
        </div>
        <div className="row align-items-center form-group">
        <label for="email" className="col-sm-3 col-form-label input-label">Invoice Amount</label>
        <div className="col-sm-9">
        <input type="text" className="form-control"/>
        </div>
        </div>
        <div className="row align-items-center form-group">
        <label for="phone" className="col-sm-3 col-form-label input-label">Invoice number starts with</label>
        <div className="col-sm-9">
        <input type="text" className="form-control" placeholder="$" value="$"/>
        </div>
        </div>
        <div className="row align-items-center form-group">
        <label for="addressline1" className="col-sm-3 col-form-label input-label">Prefix</label>
        <div className="col-sm-9">
        <input type="text" className="form-control"/>
        </div>
        </div>
        <div className="row align-items-center form-group">
        <label for="addressline2" className="col-sm-3 col-form-label input-label">Number Reset</label>
        <div className="col-sm-9">
        <input type="text" className="form-control"/>
        </div>
        </div>
        <div className="row align-items-center form-group">
        <label for="zipcode" className="col-sm-3 col-form-label input-label">Default Due Time</label>
        <div className="col-sm-9">
        <input type="text" className="form-control"/>
        </div>
        </div>
        <div className="row align-items-center form-group ">
        <label for="zipcode" className="col-sm-3 col-form-label input-label">Default Digital Signatory</label>
        <div className="col-sm-9">
        <div className="invoices-upload-btn">
        <input type="file" accept="image/*" name="image" id="file" onchange="if (!window.__cfRLUnblockHandlers) return false; loadFile(event)" className="hide-input" data-cf-modified-1b7a131e08be610781525c82-/>
        <label for="file" className="upload">
        upload File
        </label>
        </div>
        </div>
        </div>
        <div className="row align-items-center form-group">
        <label for="zipcode" className="col-sm-3 col-form-label input-label">Default Digital Name</label>
        <div className="col-sm-9">
        <input type="text" className="form-control"/>
        </div>
        </div>
        <div className="invoice-setting-btn text-end">
        <button type="submit" className="btn cancel-btn me-2">Cancel</button>
        <button type="submit" className="btn btn-primary-save-bg">Save Changes</button>
        </div>
        </form>
        
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        
        <script src="assets/js/jquery-3.7.1.min.js" type="1b7a131e08be610781525c82-text/javascript"></script>
        
        <script src="assets/js/bootstrap.bundle.min.js" type="1b7a131e08be610781525c82-text/javascript"></script>
        
        <script src="assets/js/feather.min.js" type="1b7a131e08be610781525c82-text/javascript"></script>
        
        <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js" type="1b7a131e08be610781525c82-text/javascript"></script>
        
        <script src="assets/plugins/select2/js/select2.min.js" type="1b7a131e08be610781525c82-text/javascript"></script>
        
        <script src="assets/plugins/moment/moment.min.js" type="1b7a131e08be610781525c82-text/javascript"></script>
        <script src="assets/js/bootstrap-datetimepicker.min.js" type="1b7a131e08be610781525c82-text/javascript"></script>
        
        <script src="assets/js/script.js" type="1b7a131e08be610781525c82-text/javascript"></script>
        <script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="1b7a131e08be610781525c82-|49" defer></script></body>
        )
}