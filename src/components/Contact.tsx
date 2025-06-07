import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { message } from "antd";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name !== "" && email !== "" && message !== "") {
      var templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs
        .send(
          "service_j3dl50a",
          "template_qhl3gmc",
          templateParams,
          "XlfvIU6gzFsW1lHGG"
        )
        .then(
          (response: any) => {
            setOpenSnackbar(true); // Show success Snackbar
            setName("");
            setEmail("");
            setMessage("");
          },
          (error: any) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required !text-black"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#fff", // or your custom background
                },
                "& textarea": {
                  padding: "10px", // reduce padding
                  backgroundColor: "#fff", // optional
                },
              }}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </Box>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            onClose={() => setOpenSnackbar(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <MuiAlert
              onClose={() => setOpenSnackbar(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              Email sent successfully!
            </MuiAlert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;
