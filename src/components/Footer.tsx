import React from "react";
import "../css/style.scss";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function Footer(props: any) {
  const leftShiftAnimation = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };
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

  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const handleClick = () => {
  //   onOpen();
  // };

  return (
    <motion.footer variants={leftShiftAnimation} className="footer ">
      <div className="containerm">
        <div className="footer__top wow fadeInUp" data-wow-duration="2s">
          <div className="footer__left">
            <div className="footer__title">About us</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="footer__menu">
            <div className="footer__title">Social</div>
            <div className="footer__nav">
              <ul>
                <li>
                  <a target="_blank" href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__menu">
            <div className="footer__title">Resources</div>
            <div className="footer__nav">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Whitepapers</a>
                </li>
                <li>
                  <a href="#">Markets</a>
                </li>
                <li>
                  <a href="#">Buy now</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyr wow fadeInUp" data-wow-duration="2s">
          <div className="footer__copyttext">
            Copyright © 2021 Safemoon LLC. | All Rights Reserved
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
