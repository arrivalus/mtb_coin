import React, { useRef, useState } from "react";
import "./css/style.scss";
import {
  motion,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Element } from "react-scroll";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollDown from "./components/ScrollDown";
import { upAnimation } from "./Main";

function Products() {
  const { scrollY } = useViewportScroll();
  const offSetY = [0, 150];
  const ref: any = useRef();
  const [scrollItems, setScrollItems] = useState<string[]>(["green", ""]);
  const [menuItemsClass, setMenuItemsClass] = useState<string[]>([
    "",
    "",
    "",
    "active",
    "",
  ]);
  return (
    <>
      <motion.div initial="hidden" whileInView="visible" className="wrapper">
        <div
          className="mainscreen mainscreen_product wow fadeIn"
          data-wow-duration="2s"
          style={{ backgroundImage: "url(images/product_1_bg.jpg)" }}
        >
          <ScrollDown
            scrollItems={scrollItems}
            setScrollItems={setScrollItems}
            elementsCount={2}
          />
          <div className="contfoescroll">
            <Header
              offSetY={offSetY}
              scrollY={scrollY}
              menuItemsClass={menuItemsClass}
            />
            <div className="firstmain">
              <Element name="0Container"></Element>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                onMouseEnter={() => setScrollItems(["green", ""])}
                className="containerm"
              >
                <div className="firstmain__left">
                  <motion.h1
                    variants={upAnimation}
                    custom={1}
                    className="firstmain__title wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    mtb coin products
                  </motion.h1>
                  <motion.div
                    variants={upAnimation}
                    custom={2}
                    className="firstmain__descr wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <p>
                      The most trusted cryptocurrency trading platform which
                      provides real-time trading services including Bitcoin
                      (BTC), Ethereum (ETH) and Tether (USDT) trading. Safemoon
                      can easily be bought and sold on BitMart using USDT.
                    </p>
                  </motion.div>
                  <motion.div
                    variants={upAnimation}
                    custom={3}
                    className="firstmain__btn wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <a href="#" className="bluebtn">
                      <span>Start trading</span>
                      <img src="images/btn_arrow.png" alt="" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="footerbg">
          <div className="products secscreenscroll">
            <Element name="1Container"></Element>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              onMouseEnter={() => setScrollItems(["", "green"])}
              className="containerm"
            >
              <motion.div
                className="products__row"
                variants={upAnimation}
                custom={1}
              >
                <a href="#" className="products__item">
                  <div className="products__name">MTB COIN WALLET</div>
                  <div
                    className="products__img"
                    style={{ backgroundImage: "url(images/prod1.jpg)" }}
                  ></div>
                  <div className="products__descr">
                    A secure place to store and trade your Safemoon. Some
                    features include Simplex integration, dark mode, contacts
                    list, hold to cancel
                  </div>
                  <div className="products__status">
                    Beta is Signup is now Closed
                  </div>
                </a>

                <a href="#" className="products__item">
                  <div className="products__name">Exchange</div>
                  <div
                    className="products__img"
                    style={{ backgroundImage: "url(images/prod2.jpg)" }}
                  ></div>
                  <div className="products__descr">
                    The SafeMoon exchange is a revolutionary new idea that will
                    bring tokenomics to all of crypto on it's platform. We call
                    this Cryptonomics.
                  </div>
                  <div className="products__status">Coming Soon</div>
                </a>

                <a href="#" className="products__item">
                  <div className="products__name">Hardware Wallet</div>
                  <div
                    className="products__img"
                    style={{ backgroundImage: "url(images/prod3.jpg)" }}
                  ></div>
                  <div className="products__descr">
                    The SafeMoon exchange is a revolutionary new idea that will
                    bring tokenomics to all of crypto on it's platform. We call
                    this Cryptonomics.
                  </div>
                  <div className="products__status">Coming Soon</div>
                </a>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className="pagination"
              >
                <motion.ul variants={upAnimation} custom={2}>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>...</li>

                  <li>
                    <a href="#">9</a>
                  </li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default Products;
