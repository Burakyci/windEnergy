import React from "react";
import { useNavigate } from "react-router-dom";
import photo1 from "../assets/enerji.jpg";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

function About() {
  const navi = useNavigate();
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="d-flex flex-column bgBlack align-items-center"
    >
      <h1 className="m-2"> Hakkımızda</h1>
      <div className=" d-flex justify-content-center">
        <div className="card m-3" style={{ width: "18rem", height: "500px" }}>
          <img src={photo1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lorem, ipsum.</h5>
            <p className="card-text" style={{ color: "black" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
              vel.
            </p>
            <Button
              className="m-3"
              variant="dark"
              onClick={() => {
                navi("/contact");
              }}
            >
              iletisim
            </Button>
          </div>
        </div>{" "}
        <div className="card m-3" style={{ width: "18rem", height: "500px" }}>
          <img src={photo1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lorem, ipsum.</h5>
            <p className="card-text" style={{ color: "black" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
              vel.
            </p>
            <Button
              className="m-3"
              variant="dark"
              onClick={() => {
                navi("/contact");
              }}
            >
              iletisim
            </Button>
          </div>
        </div>{" "}
        <div className="card m-3" style={{ width: "18rem", height: "500px" }}>
          <img src={photo1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lorem, ipsum.</h5>
            <p className="card-text" style={{ color: "black" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
              vel.
            </p>
            <Button
              className="m-3"
              variant="dark"
              onClick={() => {
                navi("/contact");
              }}
            >
              iletisim
            </Button>
          </div>
        </div>{" "}
        <div className="card m-3" style={{ width: "18rem", height: "500px" }}>
          <img src={photo1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lorem, ipsum.</h5>
            <p className="card-text" style={{ color: "black" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
              vel.
            </p>
            <Button
              className="m-3"
              variant="dark"
              onClick={() => {
                navi("/contact");
              }}
            >
              iletisim
            </Button>
          </div>
        </div>{" "}
      </div>
    </motion.div>
  );
}

export default About;
