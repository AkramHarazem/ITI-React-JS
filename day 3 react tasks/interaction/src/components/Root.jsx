import React, { useState } from "react";
import FormInp from "./FormInp";
import Users from "./Users";
import { v4 as uuid } from "uuid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Root = () => {
  const [data, setData] = useState([]);

  const adduserParnet = (formData) => {
    console.log(formData);
    setData([...data, formData ]);
    console.log(data);
  };
  return (
    <div>
        <h1>Add User</h1>
      <FormInp addUser={adduserParnet}></FormInp>
      <h1>U&nbsp;s&nbsp;e&nbsp;r&nbsp;s</h1>
      <TableContainer sx={{ display: "flex", justifyContent: "center" }}>
        <Table sx={{ maxWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {data.map((u) => (
        <Users key={uuid()} name={u.name} age={u.age}></Users>
      ))}
      {/* <Users ></Users> */}
    </div>
  );
};

export default Root;
