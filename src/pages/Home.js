import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { motion } from "framer-motion";
import Power from "../service/calculator";

function Home() {
  const { weatherData, setWeatherData } = useContext(GlobalContext);
  const { data } = weatherData;
  const [wingLengh, setWingLengh] = useState(100);
  const [efficient, setEfficient] = useState(100);
  const [speed, setSpeed] = useState(1);
  const [power, setPower] = useState();

  useEffect(() => {
    if (data) {
      const res = Power.getPower(
        data.main.temp,
        data.main.pressure,
        wingLengh / 100,
        speed,
        efficient / 100
      );
      setPower(res);
    }
    console.log(data);
  }, [data, efficient, wingLengh, speed]);

  const spinnerStyle = {
    animation: `spin 5s linear infinite`,
  };
  const wingStyle = {
    height: `${Number(wingLengh)}px`,
    width: `${Math.max(wingLengh * 0.1, 2)}px`,
  };
  console.log(power);

  return (
    <motion.div
      className="wavesBg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <div className="stick"></div>
      <div className="dot" style={spinnerStyle}>
        <div className="mill1"></div>
        <div className="mill2"></div>
        <div className="mill3"></div>
      </div>
      <div className="mills"></div>
      <div
        style={{
          width: "450px",
          position: "relative",
          left: "10%",
          top: "10%",
        }}
      >
        {" "}
        <h4>
          {data && (
            <>
              <h1>{power && power.toFixed(3)} kW/H</h1>
            </>
          )}
          "Her şey enerjiden ibarettir; <br /> evren, hayatımız, düşüncelerimiz
          ve hareketlerimiz. Bu yüzden enerjimize iyi bakmalıyız ve onu pozitif
          yönde kullanarak hayatımızda daha çok sevgi, mutluluk ve başarıya yer
          açmalıyız."
        </h4>
        <div className="m-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-around">
              <label className="">
                <h5>Pervane Uzunlugu</h5>
              </label>
              <input
                className="range"
                type="range"
                max="1000"
                min="0"
                value={wingLengh}
                onChange={(e) => {
                  setWingLengh(e.target.value);
                }}
              />
            </div>
            <h4 className="me-5 m-3 mt-3">{wingLengh / 100}M</h4>
          </div>
          <div className="d-flex justify-content-between ">
            <div className="d-flex justify-content-around ">
              <label className="me-5 ">
                <h5 className="align-items-center">Turbin Verimi</h5>
              </label>
              <input
                className="range"
                type="range"
                max="100"
                min="1"
                value={efficient}
                onChange={(e) => {
                  setEfficient(e.target.value);
                }}
              />
            </div>
            <h4 className="me-5 m-3 mt-3">{efficient / 100}η</h4>
          </div>
          <div className="d-flex justify-content-between ">
            <div className="d-flex justify-content-around ">
              <label className="me-5 ">
                <h5 className="align-items-center">Ruzgar Hizi</h5>
              </label>
              <input
                type="range"
                max="50"
                min="0"
                value={speed}
                onChange={(e) => {
                  setSpeed(e.target.value);
                }}
              />
            </div>
            <h4 className="me-5 m-3 mt-3">{speed}m/s</h4>
          </div>
        </div>
      </div>
      <div className="sun"></div>
    </motion.div>
  );
}

export default Home;
