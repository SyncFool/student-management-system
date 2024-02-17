export default teacherGrid;
function teacherGrid(){
    return (<body>
<link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/plugins/datatables/datatables.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"></link>
        <div className="main-wrapper">
        
        
        
        
        <div className="page-wrapper">
        <div className="content container-fluid">
        
        
        <div className="student-group-form">
        <div className="row">
        <div className="col-lg-3 col-md-6">
        <div className="form-group">
        <input type="text" className="form-control" placeholder="Search by ID ..."/>
        </div>
        </div>
        <div className="col-lg-3 col-md-6">
        <div className="form-group">
        <input type="text" className="form-control" placeholder="Search by Name ..."/>
        </div>
        </div>
        <div className="col-lg-4 col-md-6">
        <div className="form-group">
        <input type="text" className="form-control" placeholder="Search by Phone ..."/>
        </div>
        </div>
        <div className="col-lg-2">
        <div className="search-student-btn">
        <button type="btn" className="btn btn-primary">Search</button>
        </div>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-12">
        <div className="card card-table">
        <div className="card-body">
        
        <div className="page-header">
        <div className="row align-items-center">
        <div className="col">
        <h3 className="page-title">Teachers</h3>
        </div>
        <div className="col-auto text-end float-end ms-auto download-grp">
        <a href="teachers.html" className="btn btn-outline-gray me-2"><i className="feather-list"></i></a>
        <a href="teachers-grid.html" className="btn btn-outline-gray me-2 active"><i className="feather-grid "></i></a>
        </div>
        </div>
        </div>
        
        <div className="student-pro-list">
        <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
        <div className="card">
        <div className="card-body">
        <div className="student-box flex-fill">
        <div className="student-img">
        <a href="teacher-details.html">
        <img className="img-fluid" alt="Students Info" src="assets/img/profiles/avatar-06.jpg"/>
        </a>
        </div>
        <div className="student-content pb-0">
        <h5><a href="teacher-details.html">Malynne</a></h5>
        <h6>Teacher</h6>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
        <div className="card">
        <div className="card-body">
        <div className="student-box flex-fill">
        <div className="student-img">
        <a href="teacher-details.html">
        <img className="img-fluid" alt="Students Info" src="assets/img/profiles/avatar-04.jpg"/>
        </a>
        </div>
        <div className="student-content pb-0">
        <h5><a href="teacher-details.html">Levell Scott</a></h5>
        <h6>Teacher</h6>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
        <div className="card">
        <div className="card-body">
        <div className="student-box flex-fill">
        <div className="student-img">
        <a href="teacher-details.html">
        <img className="img-fluid" alt="Students Info" src="assets/img/profiles/avatar-03.jpg"/>
        </a>
        </div>
        <div className="student-content pb-0">
        <h5><a href="teacher-details.html">Minnie</a></h5>
        <h6>Teacher</h6>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
        <div className="card">
        <div className="card-body">
        <div className="student-box flex-fill">
        <div className="student-img">
        <a href="teacher-details.html">
        <img className="img-fluid" alt="Students Info" src="assets/img/profiles/avatar-02.jpg"/>
        </a>
        </div>
        <div className="student-content pb-0">
        <h5><a href="teacher-details.html">Lois A</a></h5>
        <h6>Teacher</h6>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
        <div className="card">
        <div className="card-body">
        <div className="student-box flex-fill">
        <div className="student-img">
        <a href="teacher-details.html">
        <img className="img-fluid" alt="Students Info" src="assets/img/profiles/avatar-08.jpg"/>
        </a>
        </div>
        <div className="student-content pb-0">
        <h5><a href="teacher-details.html">Calvin</a></h5>
        <h6>Teacher</h6>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
        <div className="card">
        <div className="card-body">
        <div className="student-box flex-fill">
        <div className="student-img">
        <a href="teacher-details.html">
        <img className="img-fluid" alt="Students Info" src="assets/img/profiles/avatar-09.jpg"/>
        </a>
        </div>
        <div className="student-content pb-0">
        <h5><a href="teacher-details.html">Charles Dickens</a></h5>
        <h6>Teacher</h6>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
        <div className="card">
        <div className="card-body">
        <div className="student-box flex-fill">
        <div className="student-img">
        <a href="teacher-details.html">
        <img className="img-fluid" alt="Students Info" src="assets/img/profiles/avatar-10.jpg"/>
        </a>
        </div>
        <div className="student-content pb-0">
        <h5><a href="teacher-details.html">Joe Kelley</a></h5>
        <h6>Teacher</h6>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
        <div className="card">
        <div className="card-body">
        <div className="student-box flex-fill">
        <div className="student-img">
        <a href="teacher-details.html">
        <img className="img-fluid" alt="Students Info" src="assets/img/profiles/avatar-08.jpg"/>
        </a>
        </div>
        <div className="student-content pb-0">
        <h5><a href="teacher-details.html">Charles Dickens</a></h5>
        <h6>Teacher</h6>
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
        
        
        </div>
        
        </div>
        
        
        <script src="assets/js/jquery-3.7.1.min.js" type="d6348d595bc4ec35bad0013b-text/javascript"></script>
        
        <script src="assets/js/bootstrap.bundle.min.js" type="d6348d595bc4ec35bad0013b-text/javascript"></script>
        
        <script src="assets/js/feather.min.js" type="d6348d595bc4ec35bad0013b-text/javascript"></script>
        
        <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js" type="d6348d595bc4ec35bad0013b-text/javascript"></script>
        
        <script src="assets/plugins/datatables/datatables.min.js" type="d6348d595bc4ec35bad0013b-text/javascript"></script>
        
        <script src="assets/js/script.js" type="d6348d595bc4ec35bad0013b-text/javascript"></script>
        <script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="d6348d595bc4ec35bad0013b-|49" defer></script></body>)
}