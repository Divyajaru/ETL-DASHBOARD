import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
import './Header.css'


const Header = () => {
  return (
    <div className="header">
    <div className="top-nav">
     <h4><span>⏺️</span>Data</h4>
     <h4><span>📊</span>Summary</h4>
     <h4><span>🪵</span>Logs</h4>
     <h4><span>⬇️</span>Download</h4>
     </div>
    <div className='bottom-nav'>
        <h4><span><button>🅿️project_Name</button></span>  ETL New Demo 2</h4>
        <h4><span><button>🎡Output_Data</button></span>  ETL_N_D2</h4>
        <h4><span><button>🥈LastRun</button></span>  Not Available</h4>
        </div>
        </div>
  );
};


export default Header;