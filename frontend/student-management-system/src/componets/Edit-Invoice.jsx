export default EditInvoice;
function EditInvoice(){
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

<div class="main-wrapper"/>






<div class="page-wrapper"/>
<div class="content container-fluid"/>

<div class="page-header invoices-page-header">
<div class="row align-items-center">
<div class="col">
<ul class="breadcrumb invoices-breadcrumb">
<li class="breadcrumb-item invoices-breadcrumb-item">
<a href="invoices.html">
<i class="fe fe-chevron-left"></i> Back to Invoice List
</a>
</li>
</ul>
</div>
<div class="col-auto">
<div class="invoices-create-btn">
<a class="invoices-preview-link" href="#" data-bs-toggle="modal" data-bs-target="#invoices_preview"><i class="fe fe-eye"></i> Preview</a>
<a href="#" data-bs-toggle="modal" data-bs-target="#delete_invoices_details" class="btn delete-invoice-btn">
Delete Invoice
</a>
<a href="#" data-bs-toggle="modal" data-bs-target="#save_invocies_details" class="btn save-invoice-btn">
Save Draft
</a>
</div>
</div>
</div>
</div>

<div class="row"/>
<div class="col-md-12"/>
<div class="card invoices-add-card">
<div class="card-body">
<form action="#" class="invoices-form"/>
<div class="invoices-main-form">
<div class="row">
<div class="col-xl-4 col-md-6 col-sm-12 col-12">
<div class="form-group">
<label>Customer Name</label>
<div class="multipleSelection">
<div class="selectBox">
<p class="mb-0">Select Customer</p>
<span class="down-icon"><i class="fas fa-chevron-down"></i></span>
</div>
<div id="checkBoxes-one">
<p class="checkbox-title">Customer Search</p>
<div class="form-custom">
<input type="text" class="form-control bg-grey" placeholder="Enter Customer Name"/>
</div>
<div class="selectBox-cont">
<label class="custom_check w-100">
<input type="checkbox" name="username"/>
<span class="checkmark"></span> Brian Johnson
</label>
<label class="custom_check w-100">
<input type="checkbox" name="username"/>
<span class="checkmark"></span> Russell Copeland
</label>
<label class="custom_check w-100">
<input type="checkbox" name="username"/>
<span class="checkmark"></span> Greg Lynch
</label>
<label class="custom_check w-100">
<input type="checkbox" name="username"/>
<span class="checkmark"></span> John Blair
</label>
<label class="custom_check w-100">
<input type="checkbox" name="username"/>
<span class="checkmark"></span> Barbara Moore
</label>
<label class="custom_check w-100">
<input type="checkbox" name="username"/>
<span class="checkmark"></span> Hendry Evan
</label>
<label class="custom_check w-100">
<input type="checkbox" name="username"/>
<span class="checkmark"></span> Richard Miles
</label>
</div>
<button type="submit" class="btn w-100 btn-primary">Apply</button>
<button type="reset" class="btn w-100 btn-grey">Reset</button>
</div>
</div>
</div>
<div class="form-group">
<label>Po Number</label>
<input class="form-control" type="text" placeholder="Enter Reference Number"/>
</div>
</div>
<div class="col-xl-5 col-md-6 col-sm-12 col-12">
<h4 class="invoice-details-title">Invoice details</h4>
<div class="invoice-details-box">
<div class="invoice-inner-head">
<span>Invoice No. <a href="view-invoice.html">IN093439#@09</a></span>
</div>
<div class="invoice-inner-footer">
<div class="row align-items-center">
<div class="col-lg-6 col-md-6">
<div class="invoice-inner-date">
<span>
Date <input class="form-control datetimepicker" type="text" placeholder="15/02/2022"/>
</span>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="invoice-inner-date invoice-inner-datepic">
<span>
Due Date <input class="form-control datetimepicker" type="text" placeholder="Select"/>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-3 col-md-12 col-sm-12 col-12">
<div class="inovices-month-info">
<div class="form-group mb-0">
<label class="custom_check w-100">
<input type="checkbox" id="enableTax" name="invoice"/>
<span class="checkmark"></span> Enable tax
</label>
<label class="custom_check w-100">
<input type="checkbox" id="chkYes" name="invoice"/>
<span class="checkmark"></span> Recurring Invoice
</label>
</div>
<div id="show-invoices">
<div class="row">
<div class="col-md-6">
<div class="form-group">
<select class="select">
<option>By month</option>
<option>March</option>
<option>April</option>
<option>May</option>
<option>June</option>
<option>July</option>
</select>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<input class="form-control" type="text" placeholder="Enter Months"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="invoice-item">
<div class="row">
<div class="col-xl-4 col-lg-6 col-md-6">
<div class="invoice-info">
<strong class="customer-text">Invoice From <a class="small" href="edit-invoice.html">Edit Address</a></strong>
<p class="invoice-details invoice-details-two">
Darren Elder <br>
806 Twin Willow Lane, Old Forge,<br>
Newyork, USA <br>
</p>
</div>
</div>
<div class="col-xl-4 col-lg-6 col-md-6">
<div class="invoice-info">
<strong class="customer-text">Invoice To</strong>
<p class="invoice-details invoice-details-two"/>
Walter Roberson <br>
299 Star Trek Drive, Panama City, <br>
Florida, 32405, USA <br>
</p>
</div>
</div>
</div>
</div>
<div class="invoice-add-table">
<h4>Item Details</h4>
<div class="table-responsive">
<table class="table table-center add-table-items">
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
<tr class="table-form-control add-row">
<td>
<input type="text" class="form-control" placeholder="Item Name"/>
</td>
<td>
<input type="text" class="form-control" placeholder="Category Name"/>
</td>
<td>
<input type="text" class="form-control" placeholder="2"/>
</td>
<td>
<input type="text" class="form-control" placeholder="$10"/>
</td>
<td>
<input type="text" class="form-control" placeholder="$20"/>
</td>
<td>
<input type="text" class="form-control" placeholder="4%"/>
</td>
<td class="add-remove text-end">
<a href="javascript:void(0);" class="add-btn me-2"><i class="fas fa-plus-circle"></i></a>
<a href="#" class="copy-btn me-2"><i class="fe fe-copy"></i></a><a href="javascript:void(0);" class="remove-btn"><i class="fe fe-trash-2"></i></a>
</td>
</tr>
<tr class="table-form-control add-row">
<td>
<input type="text" class="form-control" placeholder="Item Name"/>
</td>
<td>
<input type="text" class="form-control" placeholder="Category Name"/>
</td>
<td>
<input type="text" class="form-control" placeholder="4"/>
</td>
<td>
<input type="text" class="form-control" placeholder="$10"/>
</td>
<td>
<input type="text" class="form-control" placeholder="$40"/>
</td>
<td>
<input type="text" class="form-control" placeholder="6%"/>
</td>
<td class="add-remove text-end">
<a href="javascript:void(0);" class="add-btn me-2"><i class="fas fa-plus-circle"></i></a>
<a href="#" class="copy-btn me-2"><i class="fe fe-copy"></i></a><a href="javascript:void(0);" class="remove-btn"><i class="fe fe-trash-2"></i></a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="row">
<div class="col-lg-7 col-md-6">
<div class="invoice-fields">
<h4 class="field-title">More Fields</h4>
<div class="field-box">
<p>Payment Details</p>
<div class="payment-details">
<p>Debit Card XXXXXXXXXXXX-2541 HDFC Bank</p>
<a href="#" data-bs-toggle="modal" data-bs-target="#delete_bank_details"><i class="fe fe-trash-2"></i></a>
</div>
</div>
</div>
<div class="invoice-faq">
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
<div class="faq-tab">
<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingTwo">
<p class="panel-title">
<a class="collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<i class="fas fa-plus-circle me-1"></i> Add Terms & Conditions
</a>
</p>
</div>
<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" data-bs-parent="#accordion">
<div class="panel-body">
<textarea class="form-control"></textarea>
</div>
</div>
</div>
</div>
<div class="faq-tab">
<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingThree">
<p class="panel-title">
<a class="collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
<i class="fas fa-plus-circle me-1"></i> Add Notes
</a>
</p>
</div>
<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" data-bs-parent="#accordion">
<div class="panel-body">
<textarea class="form-control"></textarea>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-5 col-md-6">
<div class="invoice-total-card">
<h4 class="invoice-total-title">Summary</h4>
<div class="invoice-total-box">
<div class="invoice-total-inner">
<p>Taxable Amount <span>$21</span></p>
<p>Round Off
<input type="checkbox" id="status_1" class="check"/>
<label for="status_1" class="checktoggle">checkbox</label>
<span>$54</span>
</p>
<div class="links-info-one">
<div class="links-info">
</div>
</div>
<a href="javascript:void(0);" class="add-links add-links-bg">
<i class="fas fa-plus-circle me-1"></i> Additional Charges
</a>
<div class="links-info-discount">
<div class="links-cont-discount">
<a href="javascript:void(0);" class="add-links-one">
<i class="fas fa-plus-circle me-1"></i> Add more Discount
</a>
</div>
</div>
</div>
<div class="invoice-total-footer">
<h4>Total Amount <span>$ 894.00</span></h4>
</div>
</div>
</div>
<div class="upload-sign">
<div class="form-group service-upload">
<span>Upload Sign</span>
<input type="file" multiple/>
</div>
<div class="form-group">
<input type="text" class="form-control" placeholder="Name of the Signatuaory"/>
</div>
<div class="form-group float-end mb-0">
<button class="btn btn-primary" type="submit">Save Invoice</button>
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


<div class="modal custom-modal fade invoices-preview" id="invoices_preview" role="dialog">
<div class="modal-dialog modal-dialog-centered modal-xl">
<div class="modal-content">
<div class="modal-body">
<div class="row justify-content-center">
<div class="col-lg-12">
<div class="card invoice-info-card">
<div class="card-body pb-0">
<div class="invoice-item invoice-item-one">
<div class="row">
<div class="col-md-6">
<div class="invoice-logo">
<img src="assets/img/logo.png" alt="logo">
</div>
</div>
<div class="col-md-6">
<div class="invoice-info">
<div class="invoice-head">
<h2 class="text-primary">Invoice</h2>
<p>Invoice Number : In983248782</p>
</div>
</div>
</div>
</div>
</div>

<div class="invoice-item invoice-item-bg">
<div class="invoice-circle-img">
<img src="assets/img/invoice-circle1.png" alt class="invoice-circle1">
<img src="assets/img/invoice-circle2.png" alt class="invoice-circle2">
</div>
<div class="row">
<div class="col-lg-4 col-md-12">
<div class="invoice-info">
<strong class="customer-text-one">Billed to</strong>
<h6 class="invoice-name">Customer Name</h6>
<p class="invoice-details invoice-details-two">
9087484288 <br>
Address line 1, <br>
Address line 2 <br>
Zip code ,City - Country
</p>
</div>
</div>
<div class="col-lg-4 col-md-12">
<div class="invoice-info">
<strong class="customer-text-one">Invoice From</strong>
<h6 class="invoice-name">Company Name</h6>
<p class="invoice-details invoice-details-two">
9087484288 <br>
Address line 1, <br>
Address line 2 <br>
Zip code ,City - Country
</p>
</div>
</div>
<div class="col-lg-4 col-md-12">
<div class="invoice-info invoice-info-one border-0">
<p>Issue Date : 27 Jul 2022</p>
<p>Due Date : 27 Aug 2022</p>
<p>Due Amount : $ 1,54,22 </p>
<p>Recurring Invoice : 15 Months</p>
<p class="mb-0">PO Number : 54515454</p>
</div>
</div>
</div>
</div>


<div class="invoice-item invoice-table-wrap">
<div class="row">
<div class="col-md-12">
<div class="table-responsive">
<table class="invoice-table table table-center mb-0">
<thead>
<tr>
<th>Description</th>
<th>Category</th>
<th>Rate/Item</th>
<th>Quantity</th>
<th>Discount (%)</th>
<th class="text-end">Amount</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dell Laptop</td>
<td>Laptop</td>
<td>$1,110</td>
<th>2</th>
<th>2%</th>
<td class="text-end">$400</td>
</tr>
<tr>
<td>HP Laptop</td>
<td>Laptop</td>
<td>$1,500</td>
<th>3</th>
<th>6%</th>
<td class="text-end">$3,000</td>
</tr>
<tr>
<td>Apple Ipad</td>
<td>Ipad</td>
<td>$11,500</td>
<th>1</th>
<th>10%</th>
<td class="text-end">$11,000</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div class="row align-items-center justify-content-center">
<div class="col-lg-6 col-md-6">
<div class="invoice-payment-box">
<h4>Payment Details</h4>
<div class="payment-details">
<p>Debit Card XXXXXXXXXXXX-2541 HDFC Bank</p>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="invoice-total-card">
<div class="invoice-total-box">
<div class="invoice-total-inner">
<p>Taxable <span>$6,660.00</span></p>
<p>Additional Charges <span>$6,660.00</span></p>
<p>Discount <span>$3,300.00</span></p>
<p class="mb-0">Sub total <span>$3,300.00</span></p>
</div>
<div class="invoice-total-footer">
<h4>Total Amount <span>$143,300.00</span></h4>
</div>
</div>
</div>
</div>
</div>
<div class="invoice-sign-box">
<div class="row">
<div class="col-lg-8 col-md-8">
<div class="invoice-terms">
<h6>Notes:</h6>
<p class="mb-0">Enter customer notes or any other details</p>
</div>
<div class="invoice-terms mb-0">
<h6>Terms and Conditions:</h6>
<p class="mb-0">Enter customer notes or any other details</p>
</div>
</div>
<div class="col-lg-4 col-md-4">
<div class="invoice-sign text-end">
<img class="img-fluid d-inline-block" src="assets/img/signature.png" alt="sign">
<span class="d-block">Harristemp</span>
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


<div class="modal custom-modal fade" id="delete_bank_details" role="dialog">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-body">
<div class="form-header">
<h3>Delete Bank Details</h3>
<p>Are you sure want to delete?</p>
</div>
<div class="modal-btn delete-action">
<div class="row">
<div class="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary paid-continue-btn">Delete</a>
</div>
<div class="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary paid-cancel-btn">Cancel</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div class="modal custom-modal fade" id="delete_invoices_details" role="dialog">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-body">
<div class="form-header">
<h3>Delete Invoice Details</h3>
<p>Are you sure want to delete?</p>
</div>
<div class="modal-btn delete-action">
<div class="row">
<div class="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary paid-continue-btn">Delete</a>
</div>
<div class="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary paid-cancel-btn">Cancel</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div class="modal custom-modal fade" id="save_invocies_details" role="dialog">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-body">
<div class="form-header">
<h3>Save Invoice Details</h3>
<p>Are you sure want to save?</p>
</div>
<div class="modal-btn delete-action">
<div class="row">
<div class="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary paid-continue-btn">Save</a>
</div>
<div class="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary paid-cancel-btn">Cancel</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>


<script src="assets/js/jquery-3.7.1.min.js" type="4f4f74fa62e9c86ae536c0e5-text/javascript"></script>

<script src="assets/js/bootstrap.bundle.min.js" type="4f4f74fa62e9c86ae536c0e5-text/javascript"></script>

<script src="assets/js/feather.min.js" type="4f4f74fa62e9c86ae536c0e5-text/javascript"></script>

<script src="assets/plugins/slimscroll/jquery.slimscroll.min.js" type="4f4f74fa62e9c86ae536c0e5-text/javascript"></script>

<script src="assets/plugins/select2/js/select2.min.js" type="4f4f74fa62e9c86ae536c0e5-text/javascript"></script>

<script src="assets/plugins/moment/moment.min.js" type="4f4f74fa62e9c86ae536c0e5-text/javascript"></script>
<script src="assets/js/bootstrap-datetimepicker.min.js" type="4f4f74fa62e9c86ae536c0e5-text/javascript"></script>

<script src="assets/js/script.js" type="4f4f74fa62e9c86ae536c0e5-text/javascript"></script>
<script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="4f4f74fa62e9c86ae536c0e5-|49" defer></script></body>


    )
}