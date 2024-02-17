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
            <a href="#"
              ><i className="feather-grid"></i> <span> Dashboard</span>
              <span className="menu-arrow"></span
            ></a>
            <ul>
              <li>
                <a href="index.html" className="active">Admin Dashboard</a>
              </li>
              <li>
                <a href="teacher-dashboard.html">Teacher Dashboard</a>
              </li>
              <li>
                <a href="student-dashboard.html">Student Dashboard</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"
              ><i className="fas fa-graduation-cap"></i> <span> Students</span>
              <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><a href="students.html">Student List</a></li>
              <li><a href="student-details.html">Student View</a></li>
              <li><a href="add-student.html">Student Add</a></li>
              <li><a href="edit-student.html">Student Edit</a></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"
              ><i className="fas fa-chalkboard-teacher"></i>
              <span> Teachers</span> <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><a href="teachers.html">Teacher List</a></li>
              <li><a href="teacher-details.html">Teacher View</a></li>
              <li><a href="add-teacher.html">Teacher Add</a></li>
              <li><a href="edit-teacher.html">Teacher Edit</a></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"
              ><i className="fas fa-building"></i> <span> Departments</span>
              <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><a href="departments.html">Department List</a></li>
              <li><a href="add-department.html">Department Add</a></li>
              <li><a href="edit-department.html">Department Edit</a></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"
              ><i className="fas fa-book-reader"></i> <span> Subjects</span>
              <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><a href="subjects.html">Subject List</a></li>
              <li><a href="add-subject.html">Subject Add</a></li>
              <li><a href="edit-subject.html">Subject Edit</a></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"
              ><i className="fas fa-clipboard"></i> <span> Invoices</span>
              <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><a href="invoices.html">Invoices List</a></li>
              <li><a href="add-invoice.html">Add Invoices</a></li>
              <li><a href="edit-invoice.html">Edit Invoices</a></li>
              <li><a href="view-invoice.html">Invoices Details</a></li>
              <li>
                <a href="invoices-settings.html">Invoices Settings</a>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Management</span>
          </li>
          <li className="submenu">
            <a href="#"
              ><i className="fas fa-file-invoice-dollar"></i>
              <span> Accounts</span> <span className="menu-arrow"></span
            ></a>
            <ul>
              <li><a href="fees-collections.html">Fees Collection</a></li>
              <li><a href="add-fees-collection.html">Add Fees</a></li>
            </ul>
          </li>
          <li>
            <a href="holiday.html"
              ><i className="fas fa-holly-berry"></i> <span>Holiday</span></a
            >
          </li>
          <li>
            <a href="exam.html"
              ><i className="fas fa-clipboard-list"></i>
              <span>Exam list</span></a
            >
          </li>
          <li>
            <a href="time-table.html"
              ><i className="fas fa-table"></i> <span>Time Table</span></a
            >
          </li>
          <li>
            <a href="settings.html"
              ><i className="fas fa-cog"></i> <span>Settings</span></a
            >
          </li>
      
          <li className="menu-title">
            <span>Others</span>
          </li>
          <li>
            <a href="hostel.html"
              ><i className="fas fa-hotel"></i> <span>Hostel</span></a
            >
          </li>
          <li>
            <a href="transport.html"
              ><i className="fas fa-bus"></i> <span>Transport</span></a
            >
          </li>
          </ul>
      </div>
    </div>
  </div>
    )
}