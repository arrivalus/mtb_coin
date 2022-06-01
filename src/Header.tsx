import React from "react";
import "./css/style.scss";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function Header(props: any) {
  const heightSizes = [150, 80];
  const topSizes = [35, 0];
  const imgWidthSizes = [300, 150];
  const backgroundVariants = ["", ""];
  const myHeight = useTransform(props.scrollY, props.offSetY, heightSizes);
  const myTop = useTransform(props.scrollY, props.offSetY, topSizes);
  const myImgSize = useTransform(props.scrollY, props.offSetY, imgWidthSizes);
  const myBackground = useTransform(
    props.scrollY,
    // props.offSetY,
    [150, 150],
    backgroundVariants
  );
  return (
    <motion.header
      className="header"
      style={{
        height: myHeight,
        top: myTop,
        background: myBackground,
      }}
    >
      <div className="containerm">
        <div className="headerins">
          <div className="headerins__logo">
            <a href="index.html">
              <motion.img
                animate={{ rotateX: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  repeatType: "reverse",
                  type: "",
                }}
                src="images/logo.png"
                alt=""
                style={{
                  width: myImgSize,
                }}
              />
            </a>
          </div>
          <div className="headerins__right">
            <div className="headerins__menu">
              <ul>
                <li className="active">
                  <a href="index.html">главная</a>
                </li>
                <li>
                  <a href="whitepapers.html">white papers</a>
                </li>
                <li>
                  <a href="markerts.html">Markerts</a>
                </li>
                <li>
                  <a href="products.html">Products</a>
                </li>
                <li>
                  <a href="buynow.html">Buy Now </a>
                </li>
              </ul>
            </div>
            <div className="headerins__lang">
              <div className="headerins__langvisible">
                <div className="headerins__langvisiblevalue">ENG</div>
              </div>
              <div className="headerins__langhiden">
                <ul>
                  <li>
                    <a href="#">ENG</a>
                    <a href="#">RU</a>
                    <a href="#">ENG</a>
                    <a href="#">RU</a>
                    <a href="#">ENG</a>
                    <a href="#">RU</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{
              scale: 1.3,
            }}
            whileTap={{
              background: "lightblue",
            }}
            className="hamburger"
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
