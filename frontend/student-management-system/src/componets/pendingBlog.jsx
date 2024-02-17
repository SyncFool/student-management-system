export default pendingBlog;
function pendingBlog(){
    return(
        <body>
<link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css"/>

<link rel="stylesheet" href="assets/css/feather.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"/>
        <div className="main-wrapper">
        
        
        
        
        <div className="page-wrapper">
        <div className="content container-fluid">
        
        <div className="row">
        <div className="col-md-9">
        <ul className="list-links mb-4">
        <li><a href="blog.html">Active Blog</a></li>
        <li className="active"><a href="pending-blog.html">Pending Blog</a></li>
        </ul>
        </div>
        <div className="col-md-3 text-md-end">
        <a href="add-blog.html" className="btn btn-primary btn-blog mb-3"><i className="feather-plus-circle me-1"></i> Add New</a>
        </div>
        </div>
        <div className="row">
        
        <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
        <div className="blog grid-blog flex-fill">
        <div className="blog-image">
        <a href="blog-details.html"><img className="img-fluid" src="assets/img/category/blog-6.jpg" alt="Post Image"/></a>
        <div className="blog-views">
        <i className="feather-eye me-1"></i> 225
        </div>
        </div>
        <div className="blog-content">
        <ul className="entry-meta meta-item">
        <li>
        <div className="post-author">
        <a href="profile.html">
        <img src="assets/img/profiles/avatar-01.jpg" alt="Post Author"/>
        <span>
        <span className="post-title">Vincent</span>
        <span className="post-date"><i className="far fa-clock"></i> 4 Dec 2022</span>
        </span>
        </a>
        </div>
        </li>
        </ul>
        <h3 className="blog-title"><a href="blog-details.html">Learning is an objective, Lorem Ipsum is not </a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="row">
        <div className="edit-options">
        <div className="edit-delete-btn">
        <a href="edit-blog.html" className="text-success"><i className="feather-edit-3 me-1"></i> Edit</a>
        <a href="#" className="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="feather-trash-2 me-1"></i> Delete</a>
        </div>
        <div className="status-toggle">
        <input id="rating_4" className="check" type="checkbox" checked/>
        <label for="rating_4" className="checktoggle checkbox-bg">checkbox</label><span>Active</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
        <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
        <div className="blog grid-blog flex-fill">
        <div className="blog-image">
        <a href="blog-details.html"><img className="img-fluid" src="assets/img/category/blog-2.jpg" alt="Post Image"/></a>
        <div className="blog-views">
        <i className="feather-eye me-1"></i> 533
        </div>
        </div>
        <div className="blog-content">
        <ul className="entry-meta meta-item">
        <li>
        <div className="post-author">
        <a href="profile.html">
        <img src="assets/img/profiles/avatar-02.jpg" alt="Post Author"/>
        <span>
        <span className="post-title">Lois A</span>
        <span className="post-date"><i className="far fa-clock"></i> 4 Dec 2022</span>
        </span>
        </a>
        </div>
        </li>
        </ul>
        <h3 className="blog-title"><a href="blog-details.html">Discussion Increase student learning</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="row">
        <div className="edit-options">
        <div className="edit-delete-btn">
        <a href="edit-blog.html" className="text-success"><i className="feather-edit-3 me-1"></i> Edit</a>
        <a href="edit-blog.html" className="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="feather-trash-2 me-1"></i></i> Delete</a>
        </div>
        <div className="status-toggle">
        <input id="rating_5" className="check" type="checkbox" checked/>
        <label for="rating_5" className="checktoggle checkbox-bg">checkbox</label><span>Active</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
        <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
        <div className="blog grid-blog flex-fill">
        <div className="blog-image">
        <a href="blog-details.html"><img className="img-fluid" src="assets/img/category/blog-3.jpg" alt="Post Image"/></a>
        <div className="blog-views">
        <i className="feather-eye me-1"></i> 132
        </div>
        </div>
        <div className="blog-content">
        <ul className="entry-meta meta-item">
        <li>
        <div className="post-author">
        <a href="profile.html">
        <img src="assets/img/profiles/avatar-03.jpg" alt="Post Author"/>
        <span>
        <span className="post-title">Levell Scott</span>
        <span className="post-date"><i className="far fa-clock"></i> 4 Dec 2022</span>
        </span>
        </a>
        </div>
        </li>
        </ul>
        <h3 className="blog-title"><a href="blog-details.html">Music reduces stress,Lorem Ipsum is not</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="row">
        <div className="edit-options">
        <div className="edit-delete-btn">
        <a href="edit-blog.html" className="text-success"><i className="feather-edit-3 me-1"></i> Edit</a>
        <a href="edit-blog.html" className="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="feather-trash-2 me-1"></i></i> Delete</a>
        </div>
        <div className="status-toggle">
        <input id="rating_6" className="check" type="checkbox" checked>
        <label for="rating_6" className="checktoggle checkbox-bg">checkbox</label><span>Active</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
        <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
        <div className="blog grid-blog flex-fill">
        <div className="blog-image">
        <a href="blog-details.html"><img className="img-fluid" src="assets/img/category/blog-4.jpg" alt="Post Image"></a>
        <div className="blog-views">
        <i className="feather-eye me-1"></i> 156
        </div>
        </div>
        <div className="blog-content">
        <ul className="entry-meta meta-item">
        <li>
        <div className="post-author">
        <a href="profile.html">
        <img src="assets/img/profiles/avatar-04.jpg" alt="Post Author">
        <span>
        <span className="post-title">Calvin</span>
        <span className="post-date"><i className="far fa-clock"></i> 4 Dec 2022</span>
        </span>
        </a>
        </div>
        </li>
        </ul>
        <h3 className="blog-title"><a href="blog-details.html">Sports reduced risk of obesity, Lorem Ipsum is not </a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="row">
        <div className="edit-options">
        <div className="edit-delete-btn">
        <a href="edit-blog.html" className="text-success"><i className="feather-edit-3 me-1"></i> Edit</a>
        <a href="edit-blog.html" className="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="feather-trash-2 me-1"></i></i> Delete</a>
        </div>
        <div className="status-toggle">
        <input id="rating_7" className="check" type="checkbox" checked>
        <label for="rating_7" className="checktoggle checkbox-bg">checkbox</label><span>Active</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
        <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
        <div className="blog grid-blog flex-fill">
        <div className="blog-image">
        <a href="blog-details.html"><img className="img-fluid" src="assets/img/category/blog-5.jpg" alt="Post Image"></a>
        <div className="blog-views">
        <i className="feather-eye me-1"></i> 321
        </div>
        </div>
        <div className="blog-content">
        <ul className="entry-meta meta-item">
        <li>
        <div className="post-author">
        <a href="profile.html">
        <img src="assets/img/profiles/avatar-05.jpg" alt="Post Author"/>
        <span>
        <span className="post-title">Aaliyah </span>
        <span className="post-date"><i className="far fa-clock"></i> 4 Dec 2022</span>
        </span>
        </a>
        </div>
        </li>
        </ul>
        <h3 className="blog-title"><a href="blog-details.html">Yoga can ease arthritis symptoms</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="row">
        <div className="edit-options">
        <div className="edit-delete-btn">
        <a href="edit-blog.html" className="text-success"><i className="feather-edit-3 me-1"></i> Edit</a>
        <a href="edit-blog.html" className="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="feather-trash-2 me-1"></i></i> Delete</a>
        </div>
        <div className="status-toggle">
        <input id="rating_8" className="check" type="checkbox" checked>
        <label for="rating_8" className="checktoggle checkbox-bg">checkbox</label><span>Active</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
        <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
        <div className="blog grid-blog flex-fill">
        <div className="blog-image">
        <a href="blog-details.html"><img className="img-fluid" src="assets/img/category/blog-1.jpg" alt="Post Image"></a>
        <div className="blog-views">
        <i className="feather-eye me-1"></i> 754
        </div>
        </div>
        <div className="blog-content">
        <ul className="entry-meta meta-item">
        <li>
        <div className="post-author">
        <a href="profile.html">
        <img src="assets/img/profiles/avatar-06.jpg" alt="Post Author"/>
        <span>
        <span className="post-title">Malynne</span>
        <span className="post-date"><i className="far fa-clock"></i> 4 Dec 2022</span>
        </span>
        </a>
        </div>
        </li>
        </ul>
        <h3 className="blog-title"><a href="blog-details.html">Education gives Greater Sense of Disciplinet</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="row">
        <div className="edit-options">
        <div className="edit-delete-btn">
        <a href="edit-blog.html" className="text-success"><i className="feather-edit-3 me-1"></i> Edit</a>
        <a href="edit-blog.html" className="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="feather-trash-2 me-1"></i> Delete</a>
        </div>
        <div className="status-toggle">
        <input id="rating_9" className="check" type="checkbox" checked>
        <label for="rating_9" className="checktoggle checkbox-bg">checkbox</label><span>Active</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div className="row ">
        <div className="col-md-12">
        <div className="pagination-tab  d-flex justify-content-center">
        <ul className="pagination mb-0">
        <li className="page-item disabled">
        <a className="page-link" href="#" tabindex="-1"><i className="feather-chevron-left mr-2"></i>Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active">
        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
        </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">4</a></li>
        <li className="page-item">
        <a className="page-link" href="#">Next<i className="feather-chevron-right ml-2"></i></a>
        </li>
        </ul>
        </div>
        </div>
        </div>
        
        </div>
        
        <div className="modal fade contentmodal" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content doctor-profile">
        <div className="modal-header pb-0 border-bottom-0  justify-content-end">
        <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><i className="feather-x-circle"></i></button>
        </div>
        <div className="modal-body pt-0">
        <div className="delete-wrap text-center">
        <div className="del-icon"><i className="feather-x-circle"></i></div>
        <h2>Sure you want to delete</h2>
        <div className="submit-section">
        <a href="pending-blog.html" className="btn btn-success me-2">Yes</a>
        <a href="#" className="btn btn-danger" data-bs-dismiss="modal">No</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        </div>
        
        
        <script src="assets/js/jquery-3.7.1.min.js" type="f4c4a7a5acea237e3d0b2763-text/javascript"></script>
        
        <script src="assets/js/bootstrap.bundle.min.js" type="f4c4a7a5acea237e3d0b2763-text/javascript"></script>
        
        <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js" type="f4c4a7a5acea237e3d0b2763-text/javascript"></script>
        
        <script src="assets/plugins/select2/js/select2.min.js" type="f4c4a7a5acea237e3d0b2763-text/javascript"></script>
        
        <script src="assets/js/feather.min.js" type="f4c4a7a5acea237e3d0b2763-text/javascript"></script>
        
        <script src="assets/js/script.js" type="f4c4a7a5acea237e3d0b2763-text/javascript"></script>
        <script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="f4c4a7a5acea237e3d0b2763-|49" defer></script></body>)
}