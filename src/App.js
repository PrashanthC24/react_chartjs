import React from 'react';
import NormalNav from './components/NormalNav'
import Table from './components/Table';
import Charts from './components/Charts';
import Footer from './components/Footer';
import './App.css';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';

const App = () => {
  return(
  <div>
      <NormalNav/>
      <Table/>
      <Charts/> 
      <Footer/>
  </div>
  )
}
export default App;


