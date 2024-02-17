export default modal;
function modal(){
    return(
        <body>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"></link>
        <div className="main-wrapper login-body">
        <div className="login-wrapper">
        <div className="container">
        <div className="loginbox">
        <div className="login-left">
        <img className="img-fluid" src="assets/img/login.png" alt="Logo"/>
        </div>
        <div className="login-right">
        <div className="login-right-wrap">
        <h1>Welcome to Preskool</h1>
        <p className="account-subtitle">Need an account? <a href="register.html">Sign Up</a></p>
        <h2>Sign in</h2>
        
        <form action="https://preschool.dreamstechnologies.com/template/index.html">
        <div className="form-group">
        <label>Username <span className="login-danger">*</span></label>
        <input className="form-control" type="text"/>
        <span className="profile-views"><i className="fas fa-user-circle"></i></span>
        </div>
        <div className="form-group">
        <label>Password <span className="login-danger">*</span></label>
        <input className="form-control pass-input" type="text"/>
        <span className="profile-views feather-eye toggle-password"></span>
        </div>
        <div className="forgotpass">
        <div className="remember-me">
        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Remember me
        <input type="checkbox" name="radio"/>
        <span className="checkmark"></span>
        </label>
        </div>
        <a href="forgot-password.html">Forgot Password?</a>
        </div>
        <div className="form-group">
        <button className="btn btn-primary btn-block" type="submit">Login</button>
        </div>
        </form>
        
        <div className="login-or">
        <span className="or-line"></span>
        <span className="span-or">or</span>
        </div>
        
        <div className="social-login">
        <a href="#"><i className="fab fa-google-plus-g"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
        <script src="assets/js/jquery-3.7.1.min.js" type="b126cc56cdda79851e4eddfb-text/javascript"></script>
        
        <script src="assets/js/bootstrap.bundle.min.js" type="b126cc56cdda79851e4eddfb-text/javascript"></script>
        
        <script src="assets/js/feather.min.js" type="b126cc56cdda79851e4eddfb-text/javascript"></script>
        
        <script src="assets/js/script.js" type="b126cc56cdda79851e4eddfb-text/javascript"></script>
        <script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="b126cc56cdda79851e4eddfb-|49" defer></script></body> 
    )
}