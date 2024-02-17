export default invoice;
function invoices(){
    return(<body>
<link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/css/feather.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css"/>

<link rel="stylesheet" href="assets/plugins/datatables/datatables.min.css"/>

<link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"/>

        <div className="main-wrapper">
        
    
        <div className="page-wrapper">
        <div className="content container-fluid">
              
        
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
        <div className="invoices-main-tabs">
        <div className="row align-items-center">
        <div className="col-lg-8 col-md-8">
        <div className="invoices-tabs">
        <ul>
        <li><a href="invoices.html" className="active">All Invoice</a></li>
        <li><a href="invoices-paid.html">Paid</a></li>
        <li><a href="invoices-overdue.html">Overdue</a></li>
        <li><a href="invoices-draft.html">Draft</a></li>
        <li><a href="invoices-recurring.html">Recurring</a></li>
        <li><a href="invoices-cancelled.html">Cancelled</a></li>
        </ul>
        </div>
        </div>
        <div className="col-lg-4 col-md-4">
        <div className="invoices-settings-btn">
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
        <div className="col-xl-3 col-sm-6 col-12">
        <div className="card inovices-card">
        <div className="card-body">
        <div className="inovices-widget-header">
        <span className="inovices-widget-icon">
        <img src="assets/img/icons/invoices-icon1.svg" alt/>
        </span>
        <div className="inovices-dash-count">
        <div className="inovices-amount">$8,78,797</div>
        </div>
        </div>
        <p className="inovices-all">All Invoices <span>50</span></p>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
        <div className="card inovices-card">
        <div className="card-body">
        <div className="inovices-widget-header">
        <span className="inovices-widget-icon">
        <img src="assets/img/icons/invoices-icon2.svg" alt/>
        </span>
        <div className="inovices-dash-count">
        <div className="inovices-amount">$4,5884</div>
        </div>
        </div>
        <p className="inovices-all">Paid Invoices <span>60</span></p>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
        <div className="card inovices-card">
        <div className="card-body">
        <div className="inovices-widget-header">
        <span className="inovices-widget-icon">
        <img src="assets/img/icons/invoices-icon3.svg" alt/>
        </span>
        <div className="inovices-dash-count">
        <div className="inovices-amount">$2,05,545</div>
        </div>
        </div>
        <p className="inovices-all">Unpaid Invoices <span>70</span></p>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
        <div className="card inovices-card">
        <div className="card-body">
        <div className="inovices-widget-header">
        <span className="inovices-widget-icon">
        <img src="assets/img/icons/invoices-icon4.svg" alt/>
        </span>
        <div className="inovices-dash-count">
        <div className="inovices-amount">$8,8,797</div>
        </div>
        </div>
        <p className="inovices-all">Cancelled Invoices <span>80</span></p>
        </div>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-12">
        <div className="card card-table">
        <div className="card-body">
        <div className="table-responsive">
        <table className="table table-stripped table-hover datatable">
        <thead className="thead-light">
        <tr>
        <th>Invoice ID</th>
        <th>Category</th>
        <th>Created on</th>
        <th>Invoice to</th>
        <th>Amount</th>
        <th>Due date</th>
        <th>Status</th>
        <th className="text-end">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>
        <label className="custom_check">
        <input type="checkbox" name="invoice"/>
        <span className="checkmark"></span>
        </label>
        <a href="view-invoice.html" className="invoice-link">IN093439#@09</a>
        </td>
        <td>Advertising</td>
        <td>16 Mar 2022</td>
        <td>
        <h2 className="table-avatar">
        <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-04.jpg" alt="User Image"/> Barbara Moore</a>
        </h2>
        </td>
        <td className="text-primary">$1,54,220</td>
        <td>23 Mar 2022</td>
        <td><span className="badge bg-success-light">Paid</span></td>
        <td className="text-end">
        <div className="dropdown dropdown-action">
        <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
        <div className="dropdown-menu dropdown-menu-end">
        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-check-circle me-2"></i>Mark as sent</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-paper-plane me-2"></i>Send Invoice</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-copy me-2"></i>Clone Invoice</a>
        </div>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <label className="custom_check">
        <input type="checkbox" name="invoice"/>
        <span className="checkmark"></span>
        </label>
        <a href="view-invoice.html" className="invoice-link">IN093439#@10</a>
        </td>
        <td>Food</td>
        <td>14 Mar 2022</td>
        <td>
        <h2 className="table-avatar">
        <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-06.jpg" alt="User Image"/> Karlene Chaidez</a>
        </h2>
        </td>
        <td className="text-primary">$1,222</td>
        <td>18 Mar 2022</td>
        <td><span className="badge bg-danger-light">Overdue</span></td>
        <td className="text-end">
        <div className="dropdown dropdown-action">
        <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
        <div className="dropdown-menu dropdown-menu-end">
        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-check-circle me-2"></i>Mark as sent</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-paper-plane me-2"></i>Send Invoice</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-copy me-2"></i>Clone Invoice</a>
        </div>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <label className="custom_check">
        <input type="checkbox" name="invoice"/>
        <span className="checkmark"></span>
        </label>
        <a href="view-invoice.html" className="invoice-link">IN093439#@11</a>
        </td>
        <td>Marketing</td>
        <td>7 Mar 2022</td>
        <td>
        <h2 className="table-avatar">
        <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-08.jpg" alt="User Image"/> Russell Copeland</a>
        </h2>
        </td>
        <td className="text-primary">$3,470</td>
        <td>10 Mar 2022</td>
        <td><span className="badge bg-primary-light">Cancelled</span></td>
        <td className="text-end">
        <div className="dropdown dropdown-action">
        <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
        <div className="dropdown-menu dropdown-menu-end">
        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-check-circle me-2"></i>Mark as sent</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-paper-plane me-2"></i>Send Invoice</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-copy me-2"></i>Clone Invoice</a>
        </div>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <label className="custom_check">
        <input type="checkbox" name="invoice"/>
        <span className="checkmark"></span>
        </label>
        <a href="view-invoice.html" className="invoice-link">IN093439#@12</a>
        </td>
        <td>Repairs</td>
        <td>24 Mar 2022</td>
        <td>
        <h2 className="table-avatar">
        <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-10.jpg" alt="User Image"/> Joseph Collins</a>
        </h2>
        </td>
        <td className="text-primary">$8,265</td>
        <td>30 Mar 2022</td>
        <td><span className="badge bg-success-light">Paid</span></td>
        <td className="text-end">
        <div className="dropdown dropdown-action">
        <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
        <div className="dropdown-menu dropdown-menu-end">
        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-check-circle me-2"></i>Mark as sent</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-paper-plane me-2"></i>Send Invoice</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-copy me-2"></i>Clone Invoice</a>
        </div>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <label className="custom_check">
        <input type="checkbox" name="invoice"/>
        <span className="checkmark"></span>
        </label>
        <a href="view-invoice.html" className="invoice-link">IN093439#@13</a>
        </td>
        <td>Software</td>
        <td>17 Mar 2022</td>
        <td>
        <h2 className="table-avatar">
        <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="assets/img/profiles/avatar-11.jpg" alt="User Image"/> Jennifer Floyd</a>
        </h2>
        </td>
        <td className="text-primary">$5,200</td>
        <td>20 Mar 2022</td>
        <td><span className="badge bg-danger-light">Overdue</span></td>
        <td className="text-end">
        <div className="dropdown dropdown-action">
        <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
        <div className="dropdown-menu dropdown-menu-end">
        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2"></i>Edit</a>
        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2"></i>View</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2"></i>Delete</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-check-circle me-2"></i>Mark as sent</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-paper-plane me-2"></i>Send Invoice</a>
        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-copy me-2"></i>Clone Invoice</a>
        </div>
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
        
        
        <script src="assets/js/jquery-3.7.1.min.js" type="dd6762d868f903e2871f2dc3-text/javascript"></script>
        
        <script src="assets/js/bootstrap.bundle.min.js" type="dd6762d868f903e2871f2dc3-text/javascript"></script>
        
        <script src="assets/js/feather.min.js" type="dd6762d868f903e2871f2dc3-text/javascript"></script>
        
        <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js" type="dd6762d868f903e2871f2dc3-text/javascript"></script>
        
        <script src="assets/plugins/select2/js/select2.min.js" type="dd6762d868f903e2871f2dc3-text/javascript"></script>
        
        <script src="assets/plugins/datatables/jquery.dataTables.min.js" type="dd6762d868f903e2871f2dc3-text/javascript"></script>
        <script src="assets/plugins/datatables/datatables.min.js" type="dd6762d868f903e2871f2dc3-text/javascript"></script>
        
        <script src="assets/plugins/moment/moment.min.js" type="dd6762d868f903e2871f2dc3-text/javascript"></script>
        <script src="assets/js/bootstrap-datetimepicker.min.js" type="dd6762d868f903e2871f2dc3-text/javascript"></script>
        
        <script src="assets/js/script.js" type="dd6762d868f903e2871f2dc3-text/javascript"></script>
        <script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="dd6762d868f903e2871f2dc3-|49" defer></script></body>
        )
}
