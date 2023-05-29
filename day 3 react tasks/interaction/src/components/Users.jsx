import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";

const Users = (props) => {
  console.log(props);

//   const [data] = useState({ ...props });
  return (
    <>
      {/* {data.map((u) => {
        return ( */}
      {/* <div  className="" >
            <div key={uuid()}>
              Name: {data.name}
            </div>
            <div className="" >
              Age: {data.age}
            </div>
          </div> */}
      {/* );
      })} */}

      <TableContainer sx={{ display: "flex", justifyContent: "center" }}>
        <Table sx={{ maxWidth: 200 }} aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {props.name}
              </TableCell>
              <TableCell align="right">{props.age}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users;
