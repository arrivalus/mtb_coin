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

function Markets() {
  const { scrollY } = useViewportScroll();
  const offSetY = [0, 150];
  const ref: any = useRef();
  const [scrollItems, setScrollItems] = useState<string[]>(["green", ""]);
  const [menuItemsClass, setMenuItemsClass] = useState<string[]>([
    "",
    "",
    "active",
    "",
    "",
  ]);
  return (
    <>
      <motion.div initial="hidden" whileInView="visible" className="wrapper">
        <div
          className="mainscreen wow fadeIn"
          data-wow-duration="2s"
          style={{ backgroundImage: "url(images/market_1_bg.jpg)" }}
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

            <div className="firstmain firstmainmarket">
              <Element name="0Container"></Element>
              <div className="containerm">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2, once: true }}
                  onMouseEnter={() => setScrollItems(["green", ""])}
                  className="firstmain__left"
                >
                  <motion.h1
                    variants={upAnimation}
                    custom={1}
                    className="firstmain__title wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    markets
                  </motion.h1>
                  <motion.div
                    variants={upAnimation}
                    custom={2}
                    className="firstmain__descr wow fadeInUp"
                    data-wow-duration="2s"
                    style={{ textTransform: "uppercase" }}
                  >
                    <p>
                      A list of exchanges that have Safemoon currently listed.
                    </p>
                  </motion.div>
                  <motion.h2
                    variants={upAnimation}
                    custom={3}
                    className="market72 wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    BitMart
                  </motion.h2>
                  <motion.div
                    variants={upAnimation}
                    custom={4}
                    className=" wow fadeInUp"
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
                    custom={5}
                    className="firstmain__btn wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <a href="#" className="bluebtn">
                      <span>Start trading</span>
                      <img src="images/btn_arrow.png" alt="" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="footerbg">
          <div className="formmarket secscreenscroll">
            <Element name="1Container"></Element>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              onMouseEnter={() => setScrollItems(["", "green"])}
              className="containerm"
            >
              <div className="formmarket__inside">
                <div className="formmarket__form">
                  <motion.div
                    variants={upAnimation}
                    custom={1}
                    className="formmarket__header wow slideInUp"
                    data-wow-duration="2s"
                  >
                    <div className="formmarket__name"> NAME </div>
                    <div className="formmarket__trade">TRADE PAIR</div>
                    <div className="formmarket__listed">LISTED</div>
                  </motion.div>
                  <motion.div variants={upAnimation} custom={2}>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo1.png" alt="" />
                        </div>
                        <div className="formmarket__title">BitMart</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo2.png" alt="" />
                        </div>
                        <div className="formmarket__title">WhiteBit</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo3.png" alt="" />
                        </div>
                        <div className="formmarket__title">Gate.IO</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo4.png" alt="" />
                        </div>
                        <div className="formmarket__title">Burency</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo1.png" alt="" />
                        </div>
                        <div className="formmarket__title">BitMart</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo2.png" alt="" />
                        </div>
                        <div className="formmarket__title">WhiteBit</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo3.png" alt="" />
                        </div>
                        <div className="formmarket__title">Gate.IO</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo4.png" alt="" />
                        </div>
                        <div className="formmarket__title">Burency</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo1.png" alt="" />
                        </div>
                        <div className="formmarket__title">BitMart</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo2.png" alt="" />
                        </div>
                        <div className="formmarket__title">WhiteBit</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo3.png" alt="" />
                        </div>
                        <div className="formmarket__title">Gate.IO</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                    <div
                      className="formmarket__line wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <div className="formmarket__name">
                        <div className="formmarket__logo">
                          <img src="images/logo4.png" alt="" />
                        </div>
                        <div className="formmarket__title">Burency</div>
                        <div className="formmarket__check">
                          <img src="images/link.png" alt="" />
                        </div>
                      </div>
                      <div className="formmarket__trade">USDT</div>
                      <div className="formmarket__listed">4.5.2021</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default Markets;
