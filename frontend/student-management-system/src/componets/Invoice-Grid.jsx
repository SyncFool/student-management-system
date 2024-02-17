export default InvoiceGrid;
function InvoiceGrid(){
    return (
        <body>
            <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/css/feather.css"/>

<link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css"/>

<link rel="stylesheet" href="assets/plugins/datatables/datatables.min.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"></link>

<div className="main-wrapper">




<div className="page-wrapper">
<div className="content container-fluid">




<div className="page-header">
<div className="row align-items-center">
<div className="col"></div>
<div className="col-auto">
<a href="invoices.html" className="invoices-links">
<i className="feather feather-list"></i>
</a>
<a href="invoice-grid.html" className="invoices-links active">
<i className="feather feather-grid"></i>
</a>
</div>
</div>
</div>


<div className="card report-card">
<div className="card-body pb-0">
<div className="row">
<div className="col-md-12">
<ul className="app-listing">
<li>
<div className="multipleSelection">
<div className="selectBox">
<p className="mb-0"><i className="fas fa-user-plus me-1 select-icon"></i> Select User</p>
<span className="down-icon"><i className="fas fa-chevron-down"></i></span>
</div>
<div id="checkBoxes">
<form action="#">
<p className="checkbox-title">Customer Search</p>
<div className="form-custom">
<input type="text" className="form-control bg-grey" placeholder="Enter Customer Name"/>
</div>
<div className="selectBox-cont">
<label className="custom_check w-100">
<input type="checkbox" name="username"/>
<span className="checkmark"></span> Brian Johnson
</label>
<label className="custom_check w-100">
<input type="checkbox" name="username"/>
<span className="checkmark"></span> Russell Copeland
</label>
<label className="custom_check w-100">
<input type="checkbox" name="username"/>
<span className="checkmark"></span> Greg Lynch
</label>
<label className="custom_check w-100">
<input type="checkbox" name="username"/>
<span className="checkmark"></span> John Blair
</label>
<label className="custom_check w-100">
<input type="checkbox" name="username"/>
<span className="checkmark"></span> Barbara Moore
</label>
<label className="custom_check w-100">
<input type="checkbox" name="username"/>
<span className="checkmark"></span> Hendry Evan
</label>
<label className="custom_check w-100">
<input type="checkbox" name="username"/>
<span className="checkmark"></span> Richard Miles
</label>
</div>
<button type="submit" className="btn w-100 btn-primary">Apply</button>
<button type="reset" className="btn w-100 btn-grey">Reset</button>
</form>
</div>
</div>
</li>
<li>
<div className="multipleSelection">
<div className="selectBox">
<p className="mb-0"><i className="fas fa-calendar me-1 select-icon"></i> Select Date</p>
<span className="down-icon"><i className="fas fa-chevron-down"></i></span>
</div>
<div id="checkBoxes">
<form action="#">
<p className="checkbox-title">Date Filter</p>
<div className="selectBox-cont selectBox-cont-one h-auto">
<div className="date-picker">
<div className="form-custom cal-icon">
<input className="form-control datetimepicker" type="text" placeholder="Form"/>
</div>
</div>
<div className="date-picker pe-0">
<div className="form-custom cal-icon">
<input className="form-control datetimepicker" type="text" placeholder="To"/>
</div>
</div>
<div className="date-list">
<ul>
<li><a href="#" className="btn date-btn">Today</a></li>
<li><a href="#" className="btn date-btn">Yesterday</a></li>
<li><a href="#" className="btn date-btn">Last 7 days</a></li>
<li><a href="#" className="btn date-btn">This month</a></li>
<li><a href="#" className="btn date-btn">Last month</a></li>
</ul>
</div>
</div>
</form>
</div>
</div>
</li>
<li>
<div className="multipleSelection">
<div className="selectBox">
<p className="mb-0"><i className="fas fa-book-open me-1 select-icon"></i> Select Status</p>
<span className="down-icon"><i className="fas fa-chevron-down"></i></span>
</div>
<div id="checkBoxes">
<form action="#">
<p className="checkbox-title">By Status</p>
<div className="selectBox-cont">
<label className="custom_check w-100">
<input type="checkbox" name="name" checked/>
<span className="checkmark"></span> All Invoices
</label>
<label className="custom_check w-100">
<input type="checkbox" name="name"/>
<span className="checkmark"></span> Paid
</label>
<label className="custom_check w-100">
<input type="checkbox" name="name"/>
<span className="checkmark"></span> Overdue
</label>
<label className="custom_check w-100">
<input type="checkbox" name="name"/>
<span className="checkmark"></span> Draft
</label>
<label className="custom_check w-100">
<input type="checkbox" name="name"/>
<span className="checkmark"></span> Recurring
</label>
<label className="custom_check w-100">
<input type="checkbox" name="name"/>
<span className="checkmark"></span> Cancelled
</label>
</div>
<button type="submit" className="btn w-100 btn-primary">Apply</button>
<button type="reset" className="btn w-100 btn-grey">Reset</button>
</form>
</div>
</div>
</li>
<li>
<div className="multipleSelection">
<div className="selectBox">
<p className="mb-0"><i className="fas fa-bookmark me-1 select-icon"></i> By Category</p>
<span className="down-icon"><i className="fas fa-chevron-down"></i></span>
</div>
<div id="checkBoxes">
<form action="#">
<p className="checkbox-title">Category</p>
<div className="form-custom">
<input type="text" className="form-control bg-grey" placeholder="Enter Category Name"/>
</div>
<div className="selectBox-cont">
<label className="custom_check w-100">
<input type="checkbox" name="category"/>
<span className="checkmark"></span> Advertising
</label>
<label className="custom_check w-100">
<input type="checkbox" name="category"/>
<span className="checkmark"></span> Food
</label>
<label className="custom_check w-100">
<input type="checkbox" name="category"/>
<span className="checkmark"></span> Marketing
</label>
<label className="custom_check w-100">
<input type="checkbox" name="category"/>
<span className="checkmark"></span> Repairs
</label>
<label className="custom_check w-100">
<input type="checkbox" name="category"/>
<span className="checkmark"></span> Software
</label>
<label className="custom_check w-100">
<input type="checkbox" name="category"/>
<span className="checkmark"></span> Stationary
</label>
<label className="custom_check w-100">
<input type="checkbox" name="category"/>
<span className="checkmark"></span> Travel
</label>
</div>
<button type="submit" className="btn w-100 btn-primary">Apply</button>
<button type="reset" className="btn w-100 btn-grey">Reset</button>
</form>
</div>
</div>
</li>
<li>
<div className="report-btn">
<a href="#" className="btn">
<img src="assets/img/icons/invoices-icon5.png" alt className="me-2"/> Generate report
</a>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="card invoices-tabs-card border-0">
<div className="card-body card-body pt-0 pb-0">
<div className="invoices-main-tabs border-0 pb-0">
<div className="row align-items-center">
<div className="col-lg-12 col-md-12">
<div className="invoices-settings-btn invoices-settings-btn-one">
<a href="invoices-settings.html" className="invoices-settings-icon">
<i className="feather feather-settings"></i>
</a>
<a href="add-invoice.html" className="btn">
<i className="feather feather-plus-circle"></i> New Invoice
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
<div className="card invoices-grid-card w-100">
<div className="card-header d-flex justify-content-between align-items-center">
<a href="view-invoice.html" className="invoice-grid-link">IN093439#@09</a>
<div className="dropdown dropdown-action">
<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
<a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
<a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
</div>
</div>
</div>
<div className="card-middle">
<h2 className="card-middle-avatar">
<a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-04.jpg" alt="User Image"/> Barbara Moore</a>
</h2>
</div>
<div className="card-body">
<div className="row align-items-center">
<div className="col">
<span><i className="far fa-money-bill-alt"></i> Amount</span>
<h6 className="mb-0">$1,54,220</h6>
</div>
<div className="col-auto">
<span><i className="far fa-calendar-alt"></i> Due Date</span>
<h6 className="mb-0">23 Mar, 2022</h6>
</div>
</div>
</div>
<div className="card-footer">
<div className="row align-items-center">
<div className="col-auto">
<span className="badge bg-success-dark">Paid</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
<div className="card invoices-grid-card w-100">
<div className="card-header d-flex justify-content-between align-items-center">
<a href="view-invoice.html" className="invoice-grid-link">IN093439#@10</a>
<div className="dropdown dropdown-action">
<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
<a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
<a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
</div>
</div>
</div>
<div className="card-middle">
<h2 className="card-middle-avatar">
<a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-06.jpg" alt="User Image"/> Karlene Chaidez</a>
</h2>
</div>
<div className="card-body">
<div className="row align-items-center">
<div className="col">
<span><i className="far fa-money-bill-alt"></i> Amount</span>
<h6 className="mb-0">$1,222</h6>
</div>
<div className="col-auto">
<span><i className="far fa-calendar-alt"></i> Due Date</span>
<h6 className="mb-0">18 Mar 2022</h6>
</div>
</div>
</div>
<div className="card-footer">
<div className="row align-items-center">
<div className="col-auto">
<span className="badge bg-danger-dark">Overdue</span>
</div>
<div className="col text-end">
<span className="text-danger text-sm">Overdue 14 days</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
<div className="card invoices-grid-card w-100">
<div className="card-header d-flex justify-content-between align-items-center">
<a href="view-invoice.html" className="invoice-grid-link">IN093439#@11</a>
<div className="dropdown dropdown-action">
<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
<a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
<a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
</div>
</div>
</div>
<div className="card-middle">
<h2 className="card-middle-avatar">
<a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-08.jpg" alt="User Image"/> Russell Copeland</a>
</h2>
</div>
<div className="card-body">
<div className="row align-items-center">
<div className="col">
<span><i className="far fa-money-bill-alt"></i> Amount</span>
<h6 className="mb-0">$3,470</h6>
</div>
<div className="col-auto">
<span><i className="far fa-calendar-alt"></i> Due Date</span>
<h6 className="mb-0">10 Mar 2022</h6>
</div>
</div>
</div>
<div className="card-footer">
<div className="row align-items-center">
<div className="col-auto">
<span className="badge bg-secondary-dark">Cancelled</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
<div className="card invoices-grid-card w-100">
<div className="card-header d-flex justify-content-between align-items-center">
<a href="view-invoice.html" className="invoice-grid-link">IN093439#@12</a>
<div className="dropdown dropdown-action">
<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
<a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
<a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
</div>
</div>
</div>
<div className="card-middle">
<h2 className="card-middle-avatar">
<a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-10.jpg" alt="User Image"/> Joseph Collins</a>
</h2>
</div>
<div className="card-body">
<div className="row align-items-center">
<div className="col">
<span><i className="far fa-money-bill-alt"></i> Amount</span>
<h6 className="mb-0">$8,265</h6>
</div>
<div className="col-auto">
<span><i className="far fa-calendar-alt"></i> Due Date</span>
<h6 className="mb-0">30 Mar 2022</h6>
</div>
</div>
</div>
<div className="card-footer">
<div className="row align-items-center">
<div className="col-auto">
<span className="badge bg-primary-dark">Sent</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
<div className="card invoices-grid-card w-100">
<div className="card-header d-flex justify-content-between align-items-center">
<a href="view-invoice.html" className="invoice-grid-link">IN093439#@13</a>
<div className="dropdown dropdown-action">
<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
<a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
<a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
</div>
</div>
</div>
<div className="card-middle">
<h2 className="card-middle-avatar">
<a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-11.jpg" alt="User Image"/> Jennifer Floyd</a>
</h2>
</div>
<div className="card-body">
<div className="row align-items-center">
<div className="col">
<span><i className="far fa-money-bill-alt"></i> Amount</span>
<h6 className="mb-0">$5,200</h6>
</div>
<div className="col-auto">
<span><i className="far fa-calendar-alt"></i> Due Date</span>
<h6 className="mb-0">20 Mar 2022</h6>
</div>
</div>
</div>
<div className="card-footer">
<div className="row align-items-center">
<div className="col-auto">
<span className="badge bg-secondary-dark">Cancelled</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
<div className="card invoices-grid-card w-100">
<div className="card-header d-flex justify-content-between align-items-center">
<a href="view-invoice.html" className="invoice-grid-link">IN093439#@14</a>
<div className="dropdown dropdown-action">
<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
<a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
<a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
</div>
</div>
</div>
<div className="card-middle">
<h2 className="card-middle-avatar">
<a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-09.jpg" alt="User Image"/> Leatha Bailey</a>
</h2>
</div>
<div className="card-body">
<div className="row align-items-center">
<div className="col">
<span><i className="far fa-money-bill-alt"></i> Amount</span>
<h6 className="mb-0">$480</h6>
</div>
<div className="col-auto">
<span><i className="far fa-calendar-alt"></i> Due Date</span>
<h6 className="mb-0">15 Mar 2022</h6>
</div>
</div>
</div>
<div className="card-footer">
<div className="row align-items-center">
<div className="col-auto">
<span className="badge bg-primary-dark">Sent</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
<div className="card invoices-grid-card w-100">
<div className="card-header d-flex justify-content-between align-items-center">
<a href="view-invoice.html" className="invoice-grid-link">IN093439#@15</a>
<div className="dropdown dropdown-action">
<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
<a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
<a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
</div>
</div>
</div>
<div className="card-middle">
<h2 className="card-middle-avatar">
<a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-12.jpg" alt="User Image"/> Alex Campbell</a>
</h2>
</div>
<div className="card-body">
<div className="row align-items-center">
<div className="col">
<span><i className="far fa-money-bill-alt"></i> Amount</span>
<h6 className="mb-0">$1,999</h6>
</div>
<div className="col-auto">
<span><i className="far fa-calendar-alt"></i> Due Date</span>
<h6 className="mb-0">08 Mar 2022</h6>
</div>
</div>
</div>
<div className="card-footer">
<div className="row align-items-center">
<div className="col-auto">
<span className="badge bg-danger-dark">Overdue</span>
</div>
<div className="col text-end">
<span className="text-danger text-sm">Overdue 10 days</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
<div className="card invoices-grid-card w-100">
<div className="card-header d-flex justify-content-between align-items-center">
<a href="view-invoice.html" className="invoice-grid-link">IN093439#@016</a>
<div className="dropdown dropdown-action">
<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
<a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
<a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
</div>
</div>
</div>
<div className="card-middle">
<h2 className="card-middle-avatar">
<a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt="User Image"/> Marie Canales</a>
</h2>
</div>
<div className="card-body">
<div className="row align-items-center">
<div className="col">
<span><i className="far fa-money-bill-alt"></i> Amount</span>
<h6 className="mb-0">$2,700</h6>
</div>
<div className="col-auto">
<span><i className="far fa-calendar-alt"></i> Due Date</span>
<h6 className="mb-0">18 Mar, 2022</h6>
</div>
</div>
</div>
<div className="card-footer">
<div className="row align-items-center">
<div className="col-auto">
<span className="badge bg-success-dark">Paid</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-lg-12">
<div className="invoice-load-btn">
<a href="#" className="btn">
<span className="spinner-border text-primary"></span> Load more
</a>
</div>
</div>
</div>
</div>
</div>

</div>


<script src="assets/js/jquery-3.7.1.min.js" type="73d46a4f09f14659311bd314-text/javascript"></script>

<script src="assets/js/bootstrap.bundle.min.js" type="73d46a4f09f14659311bd314-text/javascript"></script>

<script src="assets/js/feather.min.js" type="73d46a4f09f14659311bd314-text/javascript"></script>

<script src="assets/plugins/slimscroll/jquery.slimscroll.min.js" type="73d46a4f09f14659311bd314-text/javascript"></script>

<script src="assets/plugins/select2/js/select2.min.js" type="73d46a4f09f14659311bd314-text/javascript"></script>

<script src="assets/plugins/datatables/jquery.dataTables.min.js" type="73d46a4f09f14659311bd314-text/javascript"></script>
<script src="assets/plugins/datatables/datatables.min.js" type="73d46a4f09f14659311bd314-text/javascript"></script>

<script src="assets/plugins/moment/moment.min.js" type="73d46a4f09f14659311bd314-text/javascript"></script>
<script src="assets/js/bootstrap-datetimepicker.min.js" type="73d46a4f09f14659311bd314-text/javascript"></script>

<script src="assets/js/script.js" type="73d46a4f09f14659311bd314-text/javascript"></script>
<script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="73d46a4f09f14659311bd314-|49" defer></script></body>

    )
}