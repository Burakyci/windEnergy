import React, { useEffect } from "react";
import { useFormik } from "formik";
import logo from "../assets/logo.jpg";

import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

import Power from "../service/calculator";

import { motion } from "framer-motion";
import { Button } from "bootstrap";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <motion.div
      className="bgBlack d-flex justify-content-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <div
        className="d-flex m-2"
        style={{
          padding: "0px",
          height: "600px",
          borderRadius: "10px",
        }}
      >
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div>
            <img src={logo} alt="" style={{ height: "390px" }} />
          </div>
          <div className="icons">
            <img className="icon m-4" src={github} alt="" />
          </div>
        </div>
        <form className="m-5" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <input
              placeholder="isim"
              className="m-2 form-control"
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <input
              placeholder="soy isim"
              className="m-2 form-control"
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <div>
              <input
                placeholder="Email"
                className="m-2 form-control"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />{" "}
              <input
                placeholder="Konu"
                className="m-2 form-control"
                id="subject"
                name="subject"
                type="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
              />{" "}
            </div>

            <textarea
              cols="51"
              rows="10"
              placeholder="message"
              className="m-2 form-control"
              id="message"
              name="message"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
          </div>
          <button
            className="btn btn-danger"
            type="submit"
            style={{ width: "100%" }}
          >
            Gonder
          </button>
        </form>
      </div>
    </motion.div>
  );
};
export default Contact;

{
  /* <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.1153364304478!2d29.116962915314396!3d40.978955229177885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac61683bb6657%3A0x9f5fa73679c870cb!2sEryaz%20Bilgi%20Teknolojileri!5e0!3m2!1str!2str!4v1679082595358!5m2!1str!2str"
  style={{ width: "600px", height: "450px" }}
  ></iframe> */
}
