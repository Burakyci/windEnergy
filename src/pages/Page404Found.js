import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Page404Found() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="bg"
    >
      <div className="d-flex align-items-center justify-content-center vh-100 bgBlack">
        <div className="text-center row">
          <div className=" col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className=" col-md-6 mt-5">
            <p className="fs-3">
              {" "}
              <span className="text-danger">Opps!</span> Sayfa Bulunamadı
            </p>
            <p className="lead">Aradığınız sayfa mevcut değil.</p>
            <Button>
              <Link to="/">Geri Dön</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Page404Found;
