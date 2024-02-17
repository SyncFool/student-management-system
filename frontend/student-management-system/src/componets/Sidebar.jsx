import {Link} from 'react-router-dom';
export default Sidebar;

function Sidebar(){
    return(
        <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className="menu-title">
            <span>Main Menu</span>
          </li>
          <li className="submenu active">
            <a href=""
              ><i className="feather-grid"></i> <span> Dashboard</span>
              <span className="menu-arrow"></span
            ></a>
            <ul>
              <li>
                <Link to="/dashboard" className="active">Admin Dashboard</Link>
              </li>
              <li>
                <Link to="/teacher-dashboard">Teacher Dashboard</Link>
              </li>
              <li>
                <Link to="/student-dashboard">Student Dashboard</Link>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href=""
              ><i className="fas fa-graduation-cap"></i> <span> Students</span>
              <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><Link to="/students">Student List</Link></li>
              <li><Link to="/student-details">Student View</Link></li>
              <li><Link to="/add-student">Student Add</Link></li>
              <li><Link to="/edit-student">Student Edit</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <a href=""
              ><i className="fas fa-chalkboard-teacher"></i>
              <span> Teachers</span> <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><Link to="/teachers">Teacher List</Link></li>
              <li><Link to="/teacher-details">Teacher View</Link></li>
              <li><Link to="/add-teacher">Teacher Add</Link></li>
              <li><Link to="/edit-teacher">Teacher Edit</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <a href=""
              ><i className="fas fa-building"></i> <span> Departments</span>
              <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><Link to="/departments">Department List</Link></li>
              <li><Link to="/add-department">Department Add</Link></li>
              <li><Link to="/edit-department">Department Edit</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <a href=""
              ><i className="fas fa-book-reader"></i> <span> Subjects</span>
              <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><Link to="/subjects">Subject List</Link></li>
              <li><Link to="/add-subject">Subject Add</Link></li>
              <li><Link to="/edit-subject">Sub/ject Edit</Link></li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Management</span>
          </li>
          <li className="submenu">
            <a href=""
              ><i className="fas fa-file-invoice-dollar"></i>
              <span> Accounts</span> <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><Link to="/fees-collections">Fees Collection</Link></li>
              <li><Link to="/add-fees-collection">Add Fees</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/holiday"
              ><i className="fas fa-holly-berry"></i> <span>Holiday</span></Link>
          </li>
          <li>
            <Link to="/exam"
              ><i className="fas fa-clipboard-list"></i>
              <span>Exam list</span></Link
            >
          </li>
          <li>
            <Link to="/time-table"
              ><i className="fas fa-table"></i> <span>Time Table</span></Link
            >
          </li>
          <li>
            <Link to="/settings"><i className="fas fa-cog"></i> <span>Settings</span></Link>
          </li>
      
          <li className="menu-title">
            <span>Others</span>
          </li>
          
          <li>
            <Link to="/hostel"><i className="fas fa-hotel"></i> <span>Hostel</span></Link>
          </li>
          <li>
            <Link to="/transport"><i className="fas fa-bus"></i> <span>Transport</span></Link>
          </li>
          </ul>
      </div>
    </div>
  </div>
    )
}