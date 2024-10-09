import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './component/Footer';
import Header from './component/Header';
import Body from './component/Body';
import { Outlet } from 'react-router-dom';

function App() {
  return <>
    <Header/>
    <Outlet></Outlet>
    <Footer/>
  </>
}


export default App;