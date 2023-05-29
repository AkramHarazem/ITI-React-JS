import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Grid } from "@mui/material";


const FormInp = ({ addUser }) => {
  const [dataAdd, setDataAdd] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setDataAdd({ ...dataAdd, [name]: value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    addUser(dataAdd);
    console.log(dataAdd);
    setDataAdd({ name: "", age: "" });
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        {/* <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" value={dataAdd.name} onChange={handleChange}/>
        <br /><br/>
        <label htmlFor="age">Age: </label>
        <input type="text" name="age" id="age" value={dataAdd.age} onChange={handleChange} />
        <br /><br/> */}
        {/* <input type="submit" /> */}
        {/* <InputDeviceInfo labe={"name"} value={dataAdd.name} onChange={handleChange}></InputDeviceInfo>
        <InputDeviceInfo labe={"age"} value={dataAdd.age} onChange={handleChange}></InputDeviceInfo> */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="name"
                variant="standard"
                name="name"
                value={dataAdd.name}
                onChange={handleChange}
              />
            </Box>
          </Box>

          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="age"
                variant="standard"
                name="age"
                value={dataAdd.age}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Button type="submit" variant="outlined" sx={{ m: 3 }}>
            Add User
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default FormInp;
