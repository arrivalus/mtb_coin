import React from "react";
import "../css/style.scss";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Header(props: any) {
  const heightSizes = [150, 80];
  const topSizes = [35, 0];
  const imgWidthSizes = [300, 150];
  const backgroundVariants = ["", "white"];
  const myHeight = useTransform(props.scrollY, props.offSetY, heightSizes);
  const myTop = useTransform(props.scrollY, props.offSetY, topSizes);
  const myImgSize = useTransform(props.scrollY, props.offSetY, imgWidthSizes);
  const myBackground = useTransform(
    props.scrollY,
    // props.offSetY,
    [150, 150],
    backgroundVariants
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };

  return (
    <motion.header
      className="header"
      style={{
        height: myHeight,
        top: myTop,
        backgroundColor: myBackground,
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
                  <a href="/">главная</a>
                </li>
                <li>
                  <a href="whitepapers">white papers</a>
                </li>
                <li>
                  <a href="markets">Markerts</a>
                </li>
                <li>
                  <a href="products">Products</a>
                </li>
                <li>
                  <a href="buynow">Buy Now </a>
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
          >
            <div className="hamburger" onClick={() => handleClick()}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* <Hamburger /> */}
          </motion.div>
        </div>
      </div>
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent
          zIndex={20}
          bgGradient={[
            // "linear(to-tr, teal.100, yellow.200)",
            // "linear(to-t, blue.200, teal.500)",
            "linear(to-b, blue.100, teal.100)",
          ]}
        >
          <DrawerCloseButton />
          {/* <DrawerHeader>{`full drawer contents`}</DrawerHeader> */}
          <DrawerBody>
            <div className="headerins__menu" style={{ marginTop: "70px" }}>
              <ul>
                <li className="active">
                  <a href="indexzzz">главная</a>
                </li>
                <li>
                  <a href="whitepapers">white papers</a>
                </li>
                <li>
                  <a href="markerts">Markerts</a>
                </li>
                <li>
                  <a href="products">Products</a>
                </li>
                <li>
                  <a href="buynow">Buy Now </a>
                </li>
              </ul>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </motion.header>
  );
}

export default Header;
