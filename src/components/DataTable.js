import React from 'react';
// import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import "./DataTable.css"

const DataTable = () => {
    const rows = [
    { Row:'01',territory: 'Brick 001', date: '2021-01-01', units: 298, average_unit: 5.7819, tv_total: 0.0, video_on_demand: 0.0, proof_of_con: 0.0, print_spend: 0.0 , Online_Display:0 , FSI_Coupon:0.0,Feature:0.0 , Display:0.0827, Price_Reduction:0.0 , Feat_and_Disp:0.0 , Pct_Discount:0.0016,Competitor_Distribution_1:38,Competitor_Distribution_2:14,Competition_Units:4675},
    { Row:'02',territory: 'Brick 002', date: '2021-02-01', units: 327, average_unit: 5.8471, tv_total: 94.1656, video_on_demand: 0.0, proof_of_con: 0.0, print_spend: 0.0 , Online_Display:0 , FSI_Coupon:0.0,Feature:0.0 , Display:0.0854, Price_Reduction:0.0 , Feat_and_Disp:0.0 , Pct_Discount:0.0016,Competitor_Distribution_1:37,Competitor_Distribution_2:19,Competition_Units:4888},
    { Row:'03',territory: 'Brick 003', date: '2021-03-01', units: 296, average_unit: 5.8209, tv_total: 122.7687, video_on_demand: 0.0, proof_of_con: 0.0, print_spend: 0.0 , Online_Display:0 , FSI_Coupon:0.0,Feature:0.0 , Display:0.0289, Price_Reduction:0.0 , Feat_and_Disp:0.0 , Pct_Discount:0.0107,Competitor_Distribution_1:41,Competitor_Distribution_2:17,Competition_Units:4444},
    { Row:'04',territory: 'Brick 004', date: '2021-04-01', units: 288, average_unit: 5.9425, tv_total: 129.9336, video_on_demand: 0.0, proof_of_con: 0.0, print_spend: 0.0 , Online_Display:0 , FSI_Coupon:0.0,Feature:0.0847 , Display:0.1469, Price_Reduction:0.18 , Feat_and_Disp:0.0 , Pct_Discount:0.0048,Competitor_Distribution_1:36,Competitor_Distribution_2:21,Competition_Units:4192},
    { Row:'05',territory: 'Brick 005', date: '2021-05-01', units: 288, average_unit: 5.9479, tv_total: 125.567, video_on_demand: 0.0, proof_of_con: 0.0, print_spend: 0.0 , Online_Display:0 , FSI_Coupon:0.0,Feature:0.0842 , Display:0.0, Price_Reduction:0.0 , Feat_and_Disp:0.0 , Pct_Discount:0.0045,Competitor_Distribution_1:38,Competitor_Distribution_2:24,Competition_Units:4190},

  ];

  return (
    <div className="table-container">
      <table>
        <thead>
            <tr>
              <th>Row</th>
            <th>Territory </th>
            <th>Date </th>
            <th>Units</th>
            <th>Average_Unit</th>
            <th>TV_Total</th>
            <th>Video_on_Demand</th>
            <th>Proof_of_Con</th>
            <th>Print_Spend</th>
            <th>Online_Display</th>
            <th>FSI_Coupon</th>
            <th>Feature</th>
            <th>Display</th>
            <th>Price_Reduction</th>
            <th>Feat_and_Disp</th>
            <th>Pct_Discount</th>
            <th>Competitor_Distribution_1 </th>
            <th>Competitor_Distribution_2</th>
            <th>Competition_Units</th>
          </tr>
        </thead>
        <tr 
            className="data-types">
              <td>int</td>
                <td>Object</td>
                <td>Object</td>
                <td>int</td>
                <td>float</td>
                <td>float</td>
                <td>float</td>
                <td>float</td>
                <td>float</td>
                <td>int</td>
                <td>float</td>
                <td>float</td>
                <td>float</td>
                <td>float</td>
                <td>float</td>
                <td>int</td>
                <td>int</td>
                <td>int</td>
                <td>int</td>
                </tr>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.Row}</td>
              <td>{row.territory}</td>
              <td>{row.date}</td>
              <td>{row.units}</td>
              <td>{row.average_unit}</td>
              <td>{row.tv_total}</td>
              <td>{row.video_on_demand}</td>
              <td>{row.proof_of_con}</td>
              <td>{row.print_spend}</td>
              <td>{row.Online_Display}</td>
              <td>{row.FSI_Coupon}</td>
              <td>{row.Feature}</td>
              <td>{row.Display}</td>
              <td>{row.Price_Reduction}</td>
              <td>{row.Feat_and_Disp}</td>
              <td>{row.Pct_Discount}</td>
              <td>{row.Competitor_Distribution_1}</td>
              <td>{row.Competitor_Distribution_2}</td>
              <td>{row.Competition_Units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    // </div>
  )
}


export default DataTable;