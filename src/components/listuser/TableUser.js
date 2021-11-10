import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import jwt_decode from "jwt-decode";
import DataTable from 'react-data-table-component';

const TableUser = () => {
  require("./style.css");
  const [datatable, setDatatable] = useState("");

  useEffect(() => {

    const LinkAPI = "https://arcane-badlands-64583.herokuapp.com/users/";

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.token,
      },
    };
    axios
      .get(LinkAPI, config)
      .then((response) => {
        const convertData = Object.values(response.data)
        setDatatable(convertData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      dataField: "id",
      text: "No",
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "username",
      text: "Username",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "role",
      text: "Role",
    },
  ];

  const columns2 = [
    {
      name: 'No',
      cell: (row, index) => index,
      grow: 0,
    },
    {
      name: 'Username',
      selector: row => row.username,
      sortable: true
    }, {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    }, {
      name: 'Role',
      selector: row => row.role,
      sortable: true
    }];

  const defaultSorted = [
    {
      dataField: "username",
      order: "desc",
    },
  ];

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
      <div className="container-allAttendance customScrollBar" style={{maxHeight:"85vh", overflowY: "scroll"}}>
        {/* <BootstrapTable keyField="id" data={datatable} columns={columns} pagination={paginationFactory()} defaultSorted={defaultSorted} bordered={true} striped hover condensed /> */}
        <DataTable columns={columns2} data={datatable} pagination customStyles={customStyles}/>
      </div>
    </div>
  );
};

export default TableUser;
