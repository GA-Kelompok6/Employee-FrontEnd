import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from "axios";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import jwt_decode from "jwt-decode";


const AllAttendance = () => {
   require('./style.css')
   // require('./bootstrap.min.css')
   const [datatable, setDatatable] = useState("");

   const LinkAPI = "https://arcane-badlands-64583.herokuapp.com/attandence/";

   useEffect(() => {
      console.log(localStorage)
      const user = jwt_decode(localStorage.token)
      console.log(user.role)

      let config = {
         headers: {
            'Authorization': 'Bearer ' + localStorage.token
         }
      }
      axios.get(LinkAPI, config)
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
   // console.log("testcalls")

   const columns = [
      {
         dataField: '_id',
         text: 'No',
         headerStyle: () => {
            return { width: "10%" }
         }
      },
      {
         dataField: 'createdAt',
         text: 'Tanggal Absen'
      }, {
         dataField: 'distance',
         text: 'Jarak Absen Ke Kantor (KM)'
      }];


   const defaultSorted = [{
      dataField: 'name',
      order: 'desc'
   }];
   console.log("testcall2")

   return (
      <div className="containers">
         <br />
         <div className="container-allAttendance">
            <BootstrapTable keyField='id' data={datatable} columns={columns} pagination={paginationFactory()} defaultSorted={defaultSorted} bordered={true} striped hover condensed />
         </div>
      </div>
   )
}

export default AllAttendance
