import React from 'react';
import './App.css';
import Header from './components/Header';
import DataTable from './components/DataTable';
import Sidebar from './components/Sidebar';

function App() {
  return (
    
    <div className="app">
      <Header/>
      <div className="main-content">
        <Sidebar/>
        <DataTable/>
        </div>
        </div>
  )
}
export default App;
