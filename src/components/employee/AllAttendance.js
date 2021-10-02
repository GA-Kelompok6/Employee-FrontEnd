import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from "axios";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const AllAttendance = () => {
   require('./style.css')
   const [datatable, setDatatable] = useState("");

   const LinkAPI = "https://613618d38700c50017ef53e3.mockapi.io/Absensi/";

   axios.get(LinkAPI)
      .then(response => {
         console.log(response.data);
         setDatatable(response.data);
      })
      .catch(error => {
         console.log(error)
      })
   console.log("testcalls")

   const columns = [{
      dataField: 'id',
      text: 'No',
      headerStyle: () => {
         return { width: "10%" }
      }
   }, {
      dataField: 'tanggalabsen',
      text: 'Tanggal Absen'
   }, {
      dataField: 'jarak',
      text: 'Jarak Absen Ke Kantor (KM)'
   }];
   console.log("testcall2")

   return (
      <div className="container">
         <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
            <BootstrapTable keyField='id' data={datatable} columns={columns} />
         </div>
      </div>
   )
}

export default AllAttendance
