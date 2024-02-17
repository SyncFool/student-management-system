export default AddInvoice;

function AddInvoice() {
  return (
    <body>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/plugins/icons/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css"/>

<link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"></link>

<div classname="main-wrapper">






<div classname="page-wrapper">
<div classname="content container-fluid">



<div classname="row">
<div classname="col-md-12">
<div classname="card invoices-add-card">
<div classname="card-body">
<form action="#" classname="invoices-form"/>
<div classname="invoices-main-form">
<div classname="row">
<div classname="col-xl-4 col-md-6 col-sm-12 col-12">
<div classname="form-group">
<label>Customer Name</label>
<div classname="multipleSelection">
<div classname="selectBox">
<p classname="mb-0">Select Customer</p>
<span classname="down-icon"><i classname="fas fa-chevron-down"></i></span>
</div>
<div id="checkBoxes-one">
<p classname="checkbox-title">Customer Search</p>
<div classname="form-custom">
<input type="text" classname="form-control bg-grey" placeholder="Enter Customer Name"/>
</div>
<div classname="selectBox-cont">
<label classname="custom_check w-100">
<input type="checkbox" name="username"/>
<span classname="checkmark"></span> Brian Johnson
</label>
<label classname="custom_check w-100">
<input type="checkbox" name="username"/>
<span classname="checkmark"></span> Russell Copeland
</label>
<label classname="custom_check w-100">
<input type="checkbox" name="username"/>
<span classname="checkmark"></span> Greg Lynch
</label>
<label classname="custom_check w-100">
<input type="checkbox" name="username"/>
<span classname="checkmark"></span> John Blair
</label>
<label classname="custom_check w-100">
<input type="checkbox" name="username"/>
<span classname="checkmark"></span> Barbara Moore
</label>
<label classname="custom_check w-100">
<input type="checkbox" name="username"/>
<span classname="checkmark"></span> Hendry Evan
</label>
<label classname="custom_check w-100">
<input type="checkbox" name="username"/>
<span classname="checkmark"></span> Richard Miles
</label>
</div>
<button type="submit" classname="btn w-100 btn-primary">Apply</button>
<button type="reset" classname="btn w-100 btn-grey">Reset</button>
</div>
</div>
</div>
<div classname="form-group">
<label>Po Number</label>
<input classname="form-control" type="text" placeholder="Enter Reference Number"/>
</div>
</div>
<div classname="col-xl-5 col-md-6 col-sm-12 col-12">
<h4 classname="invoice-details-title">Invoice details</h4>
<div classname="invoice-details-box">
<div classname="invoice-inner-head">
<span>Invoice No. <a href="view-invoice.html">IN093439#@09</a></span>
</div>
<div classname="invoice-inner-footer">
<div classname="row align-items-center">
<div classname="col-lg-6 col-md-6">
<div classname="invoice-inner-date">
<span>
Date <input classname="form-control datetimepicker" type="text" placeholder="15/02/2022"/>
</span>
</div>
</div>
<div classname="col-lg-6 col-md-6">
<div classname="invoice-inner-date invoice-inner-datepic">
<span>
Due Date <input classname="form-control datetimepicker" type="text" placeholder="Select"/>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div classname="col-xl-3 col-md-12 col-sm-12 col-12">
<div classname="inovices-month-info">
<div classname="form-group mb-0">
<label classname="custom_check w-100">
<input type="checkbox" id="enableTax" name="invoice"/>
<span classname="checkmark"></span> Enable tax
</label>
<label classname="custom_check w-100">
<input type="checkbox" id="chkYes" name="invoice"/>
<span classname="checkmark"></span> Recurring Invoice
</label>
</div>
<div id="show-invoices">
<div classname="row">
<div classname="col-md-6">
<div classname="form-group">
<select classname="select">
<option>By month</option>
<option>March</option>
<option>April</option>
<option>May</option>
<option>June</option>
<option>July</option>
</select>
</div>
</div>
<div classname="col-md-6">
<div classname="form-group">
<input classname="form-control" type="text" placeholder="Enter Months"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div classname="invoice-item">
<div classname="row">
<div classname="col-xl-4 col-lg-6 col-md-6">
<div classname="invoice-info">
<strong classname="customer-text">Invoice From <a classname="small" href="edit-invoice.html">Edit Address</a></strong>
<p classname="invoice-details invoice-details-two"/>
Darren Elder <br/>
806 Twin Willow Lane, Old Forge,<br/>
Newyork, USA <br>
</p>
</div>
</div>
<div classname="col-xl-4 col-lg-6 col-md-6">
<div classname="invoice-info">
<strong classname="customer-text">Invoice To</strong>
<p classname="invoice-details invoice-details-two"/>
Walter Roberson <br/>
299 Star Trek Drive, Panama City, <br/>
Florida, 32405, USA <br>
</p>
</div>
</div>
</div>
</div>
<div classname="invoice-add-table">
<h4>Item Details</h4>
<div classname="table-responsive">
<table classname="table table-center add-table-items">
<thead>
<tr>
<th>Items</th>
<th>Category</th>
<th>Quantity</th>
<th>Price</th>
<th>Amount</th>
<th>Discount</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
<tr classname="add-row">
<td>
<input type="text" classname="form-control"/>
</td>
<td>
<input type="text" classname="form-control"/>
</td>
<td>
<input type="text" classname="form-control"/>
</td>
<td>
<input type="text" classname="form-control"/>
</td>
<td>
<input type="text" classname="form-control"/>
</td>
<td>
<input type="text" classname="form-control"/>
</td>
<td classname="add-remove text-end">
<a href="javascript:void(0);" classname="add-btn me-2"><i classname="fas fa-plus-circle"></i></a>
<a href="#" classname="copy-btn me-2"><i classname="fe fe-copy"></i></a><a href="javascript:void(0);" classname="remove-btn"><i classname="fe fe-trash-2"></i></a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div classname="row">
<div classname="col-lg-7 col-md-6">
<div classname="invoice-fields">
<h4 classname="field-title">More Fields</h4>
<div classname="field-box">
<p>Payment Details</p>
<a classname="btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#bank_details"><i classname="fas fa-plus-circle me-2"></i>Add Bank Details</a>
</div>
</div>
<div classname="invoice-faq">
<div classname="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
<div classname="faq-tab">
<div classname="panel panel-default">
<div classname="panel-heading" role="tab" id="headingTwo">
<p classname="panel-title">
<a classname="collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<i classname="fas fa-plus-circle me-1"></i> Add Terms & Conditions
</a>
</p>
</div>
<div id="collapseTwo" classname="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" data-bs-parent="#accordion">
<div classname="panel-body">
<textarea classname="form-control"></textarea>
</div>
</div>
</div>
</div>
<div classname="faq-tab">
<div classname="panel panel-default">
<div classname="panel-heading" role="tab" id="headingThree">
<p classname="panel-title">
<a classname="collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
<i classname="fas fa-plus-circle me-1"></i> Add Notes
</a>
</p>
</div>
<div id="collapseThree" classname="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" data-bs-parent="#accordion">
<div classname="panel-body">
<textarea classname="form-control"></textarea>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div classname="col-lg-5 col-md-6">
<div classname="invoice-total-card">
<h4 classname="invoice-total-title">Summary</h4>
<div classname="invoice-total-box">
<div classname="invoice-total-inner">
<p>Taxable Amount <span>$21</span></p>
<p>Round Off
<input type="checkbox" id="status_1" classname="check"/>
<label for="status_1" classname="checktoggle">checkbox</label>
<span>$54</span>
</p>
<div classname="links-info-one">
<div classname="links-info">
</div>
</div>
<a href="javascript:void(0);" classname="add-links add-links-bg">
<i classname="fas fa-plus-circle me-1"></i> Additional Charges
</a>
<div classname="links-info-discount">
<div classname="links-cont-discount">
<a href="javascript:void(0);" classname="add-links-one">
<i classname="fas fa-plus-circle me-1"></i> Add more Discount
</a>
</div>
</div>
</div>
<div classname="invoice-total-footer">
<h4>Total Amount <span>$ 894.00</span></h4>
</div>
</div>
</div>
<div classname="upload-sign">
<div classname="form-group service-upload">
<span>Upload Sign</span>
<input type="file" multiple/>
</div>
<div classname="form-group">
<input type="text" classname="form-control" placeholder="Name of the Signatuaory"/>
</div>
<div classname="form-group float-end mb-0">
<button classname="btn btn-primary" type="submit">Save Invoice</button>
</div>
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


<div classname="modal custom-modal fade invoices-preview" id="invoices_preview" role="dialog">
<div classname="modal-dialog modal-dialog-centered modal-xl">
<div classname="modal-content">
<div classname="modal-body">
<div classname="row justify-content-center">
<div classname="col-lg-12">
<div classname="card invoice-info-card">
<div classname="card-body pb-0">
<div classname="invoice-item invoice-item-one">
<div classname="row">
<div classname="col-md-6">
<div classname="invoice-logo">
<img src="assets/img/logo.png" alt="logo"/>
</div>
</div>
<div classname="col-md-6">
<div classname="invoice-info">
<div classname="invoice-head">
<h2 classname="text-primary">Invoice</h2>
<p>Invoice Number : In983248782</p>
</div>
</div>
</div>
</div>
</div>

<div classname="invoice-item invoice-item-bg">
<div classname="invoice-circle-img">
<img src="assets/img/invoice-circle1.png" alt classname="invoice-circle1"/>
<img src="assets/img/invoice-circle2.png" alt classname="invoice-circle2"/>
</div>
<div classname="row">
<div classname="col-lg-4 col-md-12">
<div classname="invoice-info">
<strong classname="customer-text-one">Billed to</strong>
<h6 classname="invoice-name">Customer Name</h6>
<p classname="invoice-details invoice-details-two">
9087484288 <br>
Address line 1, <br>
Address line 2 <br>
Zip code ,City - Country
</p>
</div>
</div>
<div classname="col-lg-4 col-md-12">
<div classname="invoice-info">
<strong classname="customer-text-one">Invoice From</strong>
<h6 classname="invoice-name">Company Name</h6>
<p classname="invoice-details invoice-details-two">
9087484288 <br/>
Address line 1, <br>
Address line 2 <br>
Zip code ,City - Country
</p>
</div>
</div>
<div classname="col-lg-4 col-md-12">
<div classname="invoice-info invoice-info-one border-0">
<p>Issue Date : 27 Jul 2022</p>
<p>Due Date : 27 Aug 2022</p>
<p>Due Amount : $ 1,54,22 </p>
<p>Recurring Invoice : 15 Months</p>
<p classname="mb-0">PO Number : 54515454</p>
</div>
</div>
</div>
</div>


<div classname="invoice-item invoice-table-wrap">
<div classname="row">
<div classname="col-md-12">
<div classname="table-responsive">
<table classname="invoice-table table table-center mb-0">
<thead>
<tr>
<th>Description</th>
<th>Category</th>
<th>Rate/Item</th>
<th>Quantity</th>
<th>Discount (%)</th>
<th classname="text-end">Amount</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dell Laptop</td>
<td>Laptop</td>
<td>$1,110</td>
<th>2</th>
<th>2%</th>
<td classname="text-end">$400</td>
</tr>
<tr>
<td>HP Laptop</td>
<td>Laptop</td>
<td>$1,500</td>
<th>3</th>
<th>6%</th>
<td classname="text-end">$3,000</td>
</tr>
<tr>
<td>Apple Ipad</td>
<td>Ipad</td>
<td>$11,500</td>
<th>1</th>
<th>10%</th>
<td classname="text-end">$11,000</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div classname="row align-items-center justify-content-center">
<div classname="col-lg-6 col-md-6">
<div classname="invoice-payment-box">
<h4>Payment Details</h4>
<div classname="payment-details">
<p>Debit Card XXXXXXXXXXXX-2541 HDFC Bank</p>
</div>
</div>
</div>
<div classname="col-lg-6 col-md-6">
<div classname="invoice-total-card">
<div classname="invoice-total-box">
<div classname="invoice-total-inner">
<p>Taxable <span>$6,660.00</span></p>
<p>Additional Charges <span>$6,660.00</span></p>
<p>Discount <span>$3,300.00</span></p>
<p classname="mb-0">Sub total <span>$3,300.00</span></p>
</div>
<div classname="invoice-total-footer">
<h4>Total Amount <span>$143,300.00</span></h4>
</div>
</div>
</div>
</div>
</div>
<div classname="invoice-sign-box">
<div classname="row">
<div classname="col-lg-8 col-md-8">
<div classname="invoice-terms">
<h6>Notes:</h6>
<p classname="mb-0">Enter customer notes or any other details</p>
</div>
<div classname="invoice-terms mb-0">
<h6>Terms and Conditions:</h6>
<p classname="mb-0">Enter customer notes or any other details</p>
</div>
</div>
<div classname="col-lg-4 col-md-4">
<div classname="invoice-sign text-end">
<img classname="img-fluid d-inline-block" src="assets/img/signature.png" alt="sign"/>
<span classname="d-block">Harristemp</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div classname="modal custom-modal fade bank-details" id="bank_details" role="dialog">
<div classname="modal-dialog modal-dialog-centered modal-lg">
<div classname="modal-content">
<div classname="modal-header">
<div classname="form-header text-start mb-0">
<h4 classname="mb-0">Add Bank Details</h4>
</div>
<button type="button" classname="close" data-bs-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div classname="modal-body">
<div classname="bank-inner-details">
<div classname="row">
<div classname="col-lg-6 col-md-6">
<div classname="form-group">
<label>Account Holder Name</label>
<input type="text" classname="form-control" placeholder="Add Name"/>
</div>
</div>
<div classname="col-lg-6 col-md-6">
<div classname="form-group">
<label>Bank name</label>
<input type="text" classname="form-control" placeholder="Add Bank name"/>
</div>
</div>
<div classname="col-lg-6 col-md-6">
<div classname="form-group">
<label>IFSC Code</label>
<input type="text" classname="form-control"/>
</div>
</div>
<div classname="col-lg-6 col-md-6">
<div classname="form-group">
<label>Account Number</label>
<input type="text" classname="form-control"/>
</div>
</div>
</div>
</div>
</div>
<div classname="modal-footer">
<div classname="bank-details-btn">
<a href="javascript:void(0);" data-bs-dismiss="modal" classname="btn bank-cancel-btn me-2">Cancel</a>
<a href="javascript:void(0);" classname="btn bank-save-btn">Save Item</a>
</div>
</div>
</div>
</div>
</div>


<div classname="modal custom-modal fade" id="delete_invoices_details" role="dialog">
<div classname="modal-dialog modal-dialog-centered">
<div classname="modal-content">
<div classname="modal-body">
<div classname="form-header">
<h3>Delete Invoice Details</h3>
<p>Are you sure want to delete?</p>
</div>
<div classname="modal-btn delete-action">
<div classname="row">
<div classname="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" classname="btn btn-primary paid-continue-btn">Delete</a>
</div>
<div classname="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" classname="btn btn-primary paid-cancel-btn">Cancel</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div classname="modal custom-modal fade" id="save_invocies_details" role="dialog">
<div classname="modal-dialog modal-dialog-centered">
<div classname="modal-content">
<div classname="modal-body">
<div classname="form-header">
<h3>Save Invoice Details</h3>
<p>Are you sure want to save?</p>
</div>
<div classname="modal-btn delete-action">
<div classname="row">
<div classname="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" classname="btn btn-primary paid-continue-btn">Save</a>
</div>
<div classname="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" classname="btn btn-primary paid-cancel-btn">Cancel</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>


<script src="assets/js/jquery-3.7.1.min.js" type="02350a7ac32daa64d2569482-text/javascript"></script>

<script src="assets/js/bootstrap.bundle.min.js" type="02350a7ac32daa64d2569482-text/javascript"></script>

<script src="assets/js/feather.min.js" type="02350a7ac32daa64d2569482-text/javascript"></script>

<script src="assets/js/feather.min.js" type="02350a7ac32daa64d2569482-text/javascript"></script>

<script src="assets/plugins/slimscroll/jquery.slimscroll.min.js" type="02350a7ac32daa64d2569482-text/javascript"></script>

<script src="assets/plugins/select2/js/select2.min.js" type="02350a7ac32daa64d2569482-text/javascript"></script>

<script src="assets/plugins/moment/moment.min.js" type="02350a7ac32daa64d2569482-text/javascript"></script>
<script src="assets/js/bootstrap-datetimepicker.min.js" type="02350a7ac32daa64d2569482-text/javascript"></script>

<script src="assets/js/script.js" type="02350a7ac32daa64d2569482-text/javascript"></script>
<script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="02350a7ac32daa64d2569482-|49" defer></script></body>
)
}