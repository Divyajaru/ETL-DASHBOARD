import React,{useState} from 'react';
import './Sidebar.css';
// import {useState} from 'react';


const Sidebar = () => {
  const[SelectedWorkflow,setSelectedWorkflow]=useState(null);
  const handleworkflowClick=(workflow)=>{
    setSelectedWorkflow(workflow);

  };
 return (
      <div className="sidebar">
       <div className="workflow">
          <h3>Workflow</h3>
          <button onClick={()=>handleworkflowClick('dataselection')}className="workflow-btn" >+DATA SELECTION</button>
          <p>name"Brick Data</p>
          <button className="workflow-btn">+ NEW</button>
          <button className="workflow-btn">+AGGREGATE</button>
          <button className="workflow-btn">+ CLEAN</button>
          <button className="workflow-btn">+DEDUP</button>
          <button onClick={()=>handleworkflowClick('join')} className="workflow-btn" >+ JOIN</button>
         
          <p>type:inner</p>
          <p>extras:[object,object]</p>
          <p>left_columns:territory</p>
          <p>right_columns:territory</p>
          <p></p>
          </div>
        </div>
      // </div>
    );
  };
  export default Sidebar;



      