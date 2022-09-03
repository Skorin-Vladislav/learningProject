import React, { useState } from "react";

import "../../App.css";
import "./Form.css";
import { Button } from "../Button/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import InputMask from "react-input-mask";
const contactVariants = [
  {
    value: "Telephone",
    label: "Telephone",
  },
  {
    value: "Email",
    label: "Email",
  },
];

export default function SignUp() {
  const [contactType, setContact] = useState("Telephone");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setContact(event.target.value);
  };

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleClick3 = () => {
    setOpenError(true);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  const handleClick2 = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const submit = (e) => {
    if (telephone.trim().length < 18) {
      handleClick3();
      e.preventDefault();
      return;
    } else {
      handleClick2();
      setEmail("");
      setTelephone("");
      setContact("Telephone");

      e.preventDefault();
    }
  };

  return (
    <>
      <div className="sign-up">
        <h1>Sign up</h1>
        <div className="flexContainer">
          <div className="formBackground ">
            <h2>We will contact you</h2>
            <form id="contact" onSubmit={submit} className="form">
              <TextField
                className="inputColor"
                label="Email"
                variant="filled"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // sx={{
                //   width: 300,
                //   color: "success.main",

                //   "& .MuiSlider-thumb": {},
                //   "& label.Mui-focused": {
                //     color: "green",
                //   },
                //   "& .MuiInput-underline:after": {
                //     borderBottomColor: "green",
                //   },
                //   "& fieldset": {
                //     borderColor: "red",
                //   },
                //   "&:hover fieldset": {
                //     borderColor: "yellow",
                //   },
                //   "&.Mui-focused fieldset": {
                //     borderColor: "green",
                //   },
                // }}
              ></TextField>

              <InputMask
                mask="+999 (99) 999 9999"
                className="inputColor"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                disabled={false}
                maskChar=" "
              >
                {() => (
                  <TextField
                    label="Phone number"
                    className="inputColor"
                    variant="filled"
                    required
                    fullWidth
                  />
                )}
              </InputMask>
              <TextField
                id="select-contact"
                select
                className="inputColor"
                label="Preferable way of contact"
                variant="filled"
                value={contactType}
                onChange={handleChange}
              >
                {contactVariants.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Button type="submit" className="submitBtn">
                Call me
              </Button>

              <Snackbar
                open={openSuccess}
                autoHideDuration={6000}
                onClose={handleCloseSuccess}
              >
                <Alert
                  onClose={handleCloseSuccess}
                  severity="success"
                  sx={{ width: "100%" }}
                  variant="filled"
                >
                  This is a success message!
                </Alert>
              </Snackbar>

              <Snackbar
                open={openError}
                autoHideDuration={6000}
                onClose={handleCloseError}
              >
                <Alert
                  onClose={handleCloseError}
                  severity="error"
                  sx={{ width: "100%" }}
                  variant="filled"
                >
                  This is an error message!
                </Alert>
              </Snackbar>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
