import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { FaSquareInstagram } from "react-icons/fa6";
import { Toaster, toast } from "react-hot-toast";

import { PulseLoader } from "react-spinners";

const CustomTextField = (props) => {
  return (
    <TextField
      {...props}
      InputLabelProps={{
        sx: {
          color: "white",
          "&.Mui-focused": {
            color: "white", // color of the label when focused
          },
        },
      }}
      InputProps={{
        classes: {
          root: "root",
        },
        autoComplete: "off",
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white", // default border color
          },
          "&:hover fieldset": {
            borderColor: "#8721da", // hover border color
          },
          "&.Mui-focused fieldset": {
            borderColor: "#8721da", // focus border color
          },
          "& .MuiInputBase-input": {
            color: "white", // user input text color
            backgroundColor: "inherit", // ensure background color remains the same
          },
        },
      }}
    />
  );
};

const Contact = () => {
  const form = useRef();
  const [loading, Setloading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    Setloading(true);

    emailjs
      .sendForm("service_j5o6t4m", "template_5ll60oc", form.current, {
        publicKey: "wNINzmQAcxqh5G5vZ",
      })
      .then(
        () => {
          Setloading(false);
          form.current.reset(); // Clear the form fields
          toast.success("Message Sent ", {
            style: {
              border: "1px solid #8721da",
              color: "#000000",
            },
            iconTheme: {
              primary: "#8721da",
              secondary: "#FFFFFF",
            },
          });
        },

        (error) => {
          Setloading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex justify-center mt-5 flex-col items-center"
    >
      <div>
        <Toaster />
      </div>
      <p className="text-3xl text-white font-bold mt-5">
        Contact <span className="bluegradient">Me</span>
      </p>

      <div className="lg:flex lg:flex-row w-full lg:justify-around mt-16 flex flex-col-reverse xl:w-3/4">
        <div className="flex flex-col gap-y-3 ">
          <div className="flex gap-y-5 flex-col p-2">
            <p className="text-4xl text-white font-bold mt-5">
              Get in <span className="bluegradient">Touch</span>
            </p>

            <div className="flex items-center gap-3">
              <MdEmail className="text-white" />
              <p className="text-white">asharma7588@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-white" />
              <p className="text-white">+91 8817687885</p>
            </div>
          </div>

          <div className="flex gap-y-5 flex-col p-2">
            <p className="text-4xl text-white font-bold mt-5">
              Connect With <span className="bluegradient">Me On</span>
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/ayush-sharma-a155a8267/7"
                target="blank"
              >
                <FaLinkedin className="text-white text-3xl" />
              </a>
              <a href="https://github.com/AyushSharma72" target="blank">
                <FaGithubSquare className="text-white text-3xl" />
              </a>
              <a href="https://www.instagram.com/ayush_s_72/" target="blank">
                <FaSquareInstagram className="text-white text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* contact form */}
        <form
          className="form lg:w-1/2 flex flex-col gap-y-5 p-2 w-full "
          ref={form}
          onSubmit={sendEmail}
        >
          <Box
            sx={{ display: "flex" }}
            className="items-start gap-2 justify-center"
          >
            <FaCircleUser className="text-white mt-1" />
            <CustomTextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="w-[90%]"
              name="from_name"
              autoComplete="off"
              required
            />
          </Box>
          <Box
            sx={{ display: "flex" }}
            className="items-start gap-2 justify-center"
          >
            <MdEmail className="text-white mt-1" />
            <CustomTextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="w-[90%]"
              name="from_Email"
              autoComplete="off"
              type="email"
              required
            />
          </Box>
          <Box
            sx={{ display: "flex" }}
            className="items-start gap-2 justify-center"
          >
            <RiMessage2Fill className="text-white mt-1" />
            <CustomTextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              className="w-[90%]"
              multiline
              rows={4}
              type="Email"
              name="message"
              autoComplete="off"
              required
            />
          </Box>
          <Box
            sx={{ display: "flex" }}
            className="items-start gap-2 justify-center lg:justify-start ml-10"
          >
            <button
              className="projectbtns p-2 rounded-md text-white font-semibold flex justify-center items-center w-1/4 gap-2"
              type="submit"
              disabled={loading}
            >
              Send
              {loading ? (
                <PulseLoader color="#ffffff" size={5} speedMultiplier={0.8} />
              ) : (
                <IoIosSend />
              )}
            </button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Contact;
