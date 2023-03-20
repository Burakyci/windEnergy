import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { motion } from "framer-motion";

function Home() {
  const hiz = 1;
  const [rotateValue, setRotateValue] = React.useState(0);
  const { weatherConp, setWeatherConp } = useContext(GlobalContext);
  const [windSpeed, setspeed] = useState(0);

  return (
    <motion.div
      className="wavesBg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <div
        style={{
          width: "450px",
          position: "relative",
          left: "10%",
          top: "10%",
        }}
      >
        <h4>
          "Her şey enerjiden ibarettir; <br /> evren, hayatımız, düşüncelerimiz
          ve hareketlerimiz. Bu yüzden enerjimize iyi bakmalıyız ve onu pozitif
          yönde kullanarak hayatımızda daha çok sevgi, mutluluk ve başarıya yer
          açmalıyız."
        </h4>
      </div>
      <div className="sun"></div>
      <div className="windmill">
        <div className="mill4"></div>
        <motion.div
          animate={{ rotate: 1440 * 3, duration: Infinity }}
          transition={{
            repeat: Infinity,
            duration: 62,
          }}
          className="fix"
        >
          <div className="mill1"></div>
          <div className="mill2"></div>
          <div className="mill3"></div>
        </motion.div>
        <div className="dot"></div>
      </div>
      <div className="windmill2">
        <div className="mill4"></div>
        <motion.div
          animate={{ rotate: 1440 * 1, duration: Infinity }}
          transition={{
            repeat: Infinity,
            duration: 50,
          }}
          className="fix"
        >
          <div className="mill1"></div>
          <div className="mill2"></div>
          <div className="mill3"></div>
        </motion.div>
        <div className="dot"></div>
      </div>
    </motion.div>
  );
}

export default Home;
