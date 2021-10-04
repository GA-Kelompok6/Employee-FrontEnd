import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from "axios";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

const AllAttendance = () => {
   require('./style.css')
   // require('./bootstrap.min.css')
   const [datatable, setDatatable] = useState("");

   const LinkAPI = "https://613618d38700c50017ef53e3.mockapi.io/Absensi/";

   useEffect(() => {
      axios.get(LinkAPI)
         .then(response => {
            console.log(response.data);
            setDatatable(response.data);
         }).catch(error => {
            console.log(error)
         })
   }, [])

   // axios.get(LinkAPI)
   //    .then(response => {
   //       console.log(response.data);
   //       setDatatable(response.data);
   //    })
   //    .catch(error => {
   //       console.log(error)
   //    })
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
      <div className="containers">
         <br />
         <div className="container-allAttendance">
            <BootstrapTable keyField='id' data={datatable} columns={columns} pagination={paginationFactory()} bordered={true} striped hover condensed />
         </div>
      </div>
   )
}

export default AllAttendance
