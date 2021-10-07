import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import jwt_decode from "jwt-decode";

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

  const defaultSorted = [
    {
      dataField: "username",
      order: "desc",
    },
  ];


  return (
    <div className="containers">
      <br />
      <div className="container-allAttendance">
        <BootstrapTable keyField="id" data={datatable} columns={columns} pagination={paginationFactory()} defaultSorted={defaultSorted} bordered={true} striped hover condensed />
      </div>
    </div>
  );
};

export default TableUser;
