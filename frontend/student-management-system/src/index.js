import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './componets/Header';
import Sidebar from './componets/Sidebar';
import Footer from './componets/Footer';
import TeacherAdd from  './componets/TeacherAdd';
// import AddBook from './componets/Add-Book';
import Login from './componets/Login';
import Dashboard from './componets/Dashboard';
import TeacherDashboard from './componets/TeacherDashboard';
import StudentDashboard from './componets/studentDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/dashboard' element={<Dashboard/>}></Route>
    <Route exact path='/teacher-dashboard' element={<TeacherDashboard/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
    <Route exact path='/student-dashboard' element={<StudentDashboard/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
    <Route exact path='/add-teacher' element={<TeacherAdd/>}></Route>
  </Routes>
  
</BrowserRouter>
  </React.StrictMode>
);

