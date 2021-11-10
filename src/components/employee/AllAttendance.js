import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from "axios";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import jwt_decode from "jwt-decode";
import DataTable from 'react-data-table-component';


const AllAttendance = () => {
   require('./style.css')
   // require('./bootstrap.min.css')
   const [datatable, setDatatable] = useState("");
   const [LinkAPI, setLinkAPI] = useState("")
   const [columns2, setColumns2] = useState([])
   const [isAdmin, setIsAdmin] = useState()
   


   useEffect(() => {
      const user = jwt_decode(localStorage.token);

      const idUser = user.sub;

      if (user.role == "Admin") {
         setLinkAPI("https://arcane-badlands-64583.herokuapp.com/attandence/"); //Admin
         setColumns2([
            {
               name: 'No',
               cell: (row, index) => index,
               grow: 0
            }, {
               name: 'User Absen',
               selector: row => row.userId,
               sortable: true
            }, {
               name: 'Tanggal Absen',
               selector: row => row.Date,
               sortable: true
            }, {
               name: 'Jarak Absen Ke Kantor (KM)',
               selector: row => row.distance,
               sortable: true
            }])
         setIsAdmin(true)
      } else {
         setLinkAPI("https://arcane-badlands-64583.herokuapp.com/attandence/userId/" + idUser); //User
         setColumns2([
            {
               name: 'No',
               cell: (row, index) => index,
               grow: 0
            }, {
               name: 'Tanggal Absen',
               selector: row => row.Date,
               sortable: true
            }, {
               name: 'Jarak Absen Ke Kantor (KM)',
               selector: row => row.distance,
               sortable: true
            }])
         setIsAdmin(false)
      }


      // console.log(localStorage)
      // console.log(user.role)

      let config = {
         headers: {
            'Authorization': 'Bearer ' + localStorage.token
         }
      }
      axios.get(LinkAPI, config)
         .then(response => {
            // console.log(response.data);
            setDatatable(response.data);
         }).catch(error => {
            console.log(error)
         })
   }, [LinkAPI])

   const columns = [
      {
         dataField: 'id',
         text: 'No',
         headerStyle: () => {
            return { width: "10%" }
         }
      },
      {
         dataField: 'Date',
         text: 'Tanggal Absen'
      }, {
         dataField: 'distance',
         text: 'Jarak Absen Ke Kantor (KM)'
      }];
   
   // const columns2 = [
   //    {
   //       name: 'No',
   //       cell: (row, index) => index,
   //       grow: 0,
   //    }, {
   //       name: 'User Absen',
   //       selector: row => row.userId
   //    }, {
   //       name: 'Tanggal Absen',
   //       selector: row => row.Date,
   //    }, {
   //       name: 'Jarak Absen Ke Kantor (KM)',
   //       selector: row => row.distance,
   //    }];

   const defaultSorted = [{
      dataField: 'name',
      order: 'desc'
   }];

   // console.log("testcall2")

   const customStyles = {
      rows: {
          style: {
            fontSize: '15px', 
         },
      },
      headCells: {
          style: {
            fontSize: '15px', 
            paddingLeft: '8px',
            paddingRight: '8px',
         },
      },
      cells: {
          style: {
            fontSize: '15px', 
            paddingLeft: '8px',
            paddingRight: '8px',
         },
      },
   };

   return (
      <div className="containers">
         <br />
         <div className="container-allAttendance customScrollBar" style={ isAdmin ? {maxHeight:"85vh", overflowY: "scroll"} : {maxHeight:"70vh", overflowY: "scroll"}}>
            {/* <BootstrapTable keyField='id' data={datatable} columns={columns} pagination={paginationFactory()} defaultSorted={defaultSorted} bordered={true} striped hover condensed /> */}
            <DataTable columns={columns2} data={datatable} pagination customStyles={customStyles}/>
         </div>
      </div>
   )
}

export default AllAttendance
