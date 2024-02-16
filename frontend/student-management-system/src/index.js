import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './componets/Header';

import Footer from './componets/Footer';
import AddBook from './componets/Add-Book';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
 
     <AddBook/>
    <Footer/>
  </React.StrictMode>
);

