import React from "react";
import "../css/style.scss";
// import { motion, useTransform, useViewportScroll } from "framer-motion";

function Hamburger(props: any) {
  // const heightSizes = [150, 80];
  // const topSizes = [35, 0];
  // const imgWidthSizes = [300, 150];
  // const backgroundVariants = ["", "white"];
  // const myHeight = useTransform(props.scrollY, props.offSetY, heightSizes);
  // const myTop = useTransform(props.scrollY, props.offSetY, topSizes);
  // const myImgSize = useTransform(props.scrollY, props.offSetY, imgWidthSizes);
  // const myBackground = useTransform(
  //   props.scrollY,
  //   // props.offSetY,
  //   [150, 150],
  //   backgroundVariants
  // );
  return (
    <div
      // whileHover={{
      //   scale: 1.3,
      // }}
      // whileTap={{
      //   background: "lightblue",
      // }}
      className="hamburger"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Hamburger;
