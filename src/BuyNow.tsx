import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import {
  motion,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollDown from "./components/ScrollDown";
import { upAnimation } from "./Main";

function BuyNow() {
  const { scrollY } = useViewportScroll();
  const offSetY = [0, 150];
  const ref: any = useRef();
  const [scrollItems, setScrollItems] = useState<string[]>([
    "green",
    "",
    "",
    "",
    "",
  ]);
  const [menuItemsClass, setMenuItemsClass] = useState<string[]>([
    "",
    "",
    "",
    "",
    "active",
  ]);
  return (
    <>
      <div ref={ref}>
        <div className="wrapper">
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="mainscreen mainscreen_buynow wow fadeIn"
            data-wow-duration="2s"
            style={{ backgroundImage: "url(images/buynow_1_bg.jpg)" }}
          >
            <ScrollDown
              scrollItems={scrollItems}
              setScrollItems={setScrollItems}
              elementsCount={5}
            />
            <div className="contfoescroll">
              <Header offSetY={offSetY} scrollY={scrollY} menuItemsClass={menuItemsClass}/>
              <div className="firstmain">
                <Element name="0Container"></Element>
                <motion.div
                  className="containerm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2, once: true }}
                  onMouseEnter={() => setScrollItems(["green", "", "", "", ""])}
                >
                  <div className="firstmain__left">
                    <motion.h1
                      variants={upAnimation}
                      custom={1}
                      className="firstmain__title wow fadeInUp"
                      style={{ color: "#216bad" }}
                      data-wow-duration="2s"
                    >
                      <span>how to buy</span> mtb coin
                    </motion.h1>
                    <motion.div
                      variants={upAnimation}
                      custom={2}
                      className="firstmain__descr wow fadeInUp"
                      data-wow-duration="2s"
                    >
                      <p style={{ textTransform: "uppercase" }}>
                        A step by step guide on how to buy MTBcoin from
                        Pancakeswap.
                      </p>
                      <p style={{ color: "#4bcfed" }}>
                        Looking for an easier way to buy and sell MTBcoin? See
                        alternative markets!{" "}
                      </p>
                    </motion.div>
                    <motion.div
                      variants={upAnimation}
                      custom={3}
                      className="firstmain__btn wow fadeInUp"
                      data-wow-duration="2s"
                    >
                      <a href="#" className="bluebtn">
                        <span>Markets</span>
                        <img src="images/btn_arrow.png" alt="" />
                      </a>
                      <a
                        href="#"
                        className="bluebtn"
                        style={{ backgroundColor: "#4bd2ed" }}
                      >
                        <span>Buy on pancake</span>
                        <img src="images/btn_arrow.png" alt="" />
                      </a>
                    </motion.div>
                    <p
                      style={{ color: "#4bcfed" }}
                      className="wow fadeInUp"
                      data-wow-duration="2s"
                    >
                      Recommended to read on PC, and follow along on your Phone
                      to make it easier. This will take approximately 15-30
                      minutes if you're new.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="footerbg">
            <div className="buynow secscreenscroll">
              <div className="containerm">
                <div className="buynow__inside">
                  <Element name="1Container"></Element>
                  <div className="buynow__item">
                    <div className="buynow__left">
                      <div
                        className="buynow__img wow fadeInLeft"
                        data-wow-duration="2s"
                      >
                        <img src="images/mac1.png" alt="" />
                      </div>
                    </div>
                    <div className="buynow__right">
                      <h2
                        className="buynow__title wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        Step 1:{" "}
                      </h2>
                      <div
                        className="buynow__subtitle wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        Create a Wallet
                      </div>
                      <div
                        className="buynow__descr wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        <p>
                          Download Trust Wallet and create a wallet. Keep your
                          phrase a secret! Never share it with anyone and store
                          it properly! Make sure to copy the contract address
                          below!
                        </p>
                      </div>
                      <div
                        className="buynow__copy wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        <div className="buynow__copytop">
                          <div className="buynow__copytext">Address</div>
                          <div className="buynow__submit copymade">Copied!</div>
                        </div>
                        <div className="buynow__copyform">
                          <div className="buynow__copyinput">
                            <input
                              id="myInput"
                              type="text"
                              value="0x8076c74c5e3f5852037f31ff0093eeb8c8a..."
                              placeholder="0x8076c74c5e3f5852037f31ff0093eeb8c8a..."
                            />
                          </div>
                          <div className="buynow__copybtn">
                            <button
                              className="bluebtn contentt__copybtn"
                              onClick={() => {}}
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Element name="2Container"></Element>
                  <div className="buynow__item">
                    <div className="buynow__left">
                      <div
                        className="buynow__img wow fadeInLeft"
                        data-wow-duration="2s"
                      >
                        <img src="images/mac2.png" alt="" />
                      </div>
                    </div>
                    <div className="buynow__right">
                      <h2
                        className="buynow__title wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        Step 2:{" "}
                      </h2>
                      <div
                        className="buynow__subtitle wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        добавьте MetaBond в список активов
                      </div>
                      <div
                        className="buynow__descr wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        <p>
                          Tap the icon in the top-right and search for
                          "Safemoon". If it's not there, tap "Add Custom Token".
                        </p>
                        <p>
                          At the top, tap "Ethereum" next to Network, and change
                          it to "Smart Chain". Copy the contract address on this
                          page and put it in the Contract Address box.
                        </p>
                        <p>
                          Next, put "Safemoon" as the name, and the symbol as
                          SFM. Decimals will be 9.
                        </p>
                        <p>
                          Click "Done" at the top and you should now have
                          Safemoon added to your wallet!
                        </p>
                      </div>
                    </div>
                  </div>
                  <Element name="3Container"></Element>
                  <div className="buynow__item">
                    <div className="buynow__left">
                      <div
                        className="buynow__img wow fadeInLeft"
                        data-wow-duration="2s"
                      >
                        <img src="images/mac3.png" alt="" />
                      </div>
                    </div>
                    <div className="buynow__right">
                      <h2
                        className="buynow__title wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        Step 3:{" "}
                      </h2>
                      <div
                        className="buynow__subtitle wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        купить bnb или busd
                      </div>
                      <div
                        className="buynow__descr wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        <p>
                          Tap on "Smart Chain" on the main screen of trust
                          wallet, then tap "Buy" in the top right. This step may
                          require KYC verification, so have documents ready to
                          prove your identity.
                        </p>
                        <p>
                          {" "}
                          If the transaction won't go through, you may need to
                          contact your bank to allow international transactions.
                        </p>
                        <p>
                          After purchasing, there may be a delay while your
                          transaction is processed. Be patient, this is normal!
                        </p>
                      </div>
                    </div>
                  </div>
                  <Element name="4Container"></Element>
                  <div className="buynow__item">
                    <div className="buynow__left">
                      <div
                        className="buynow__img wow fadeInLeft"
                        data-wow-duration="2s"
                      >
                        <img src="images/mac4.png" alt="" />
                      </div>
                    </div>
                    <div className="buynow__right">
                      <h2
                        className="buynow__title wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        Step 4:{" "}
                      </h2>
                      <div
                        className="buynow__subtitle wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        Swap BSC for MTBcoin{" "}
                      </div>
                      <div
                        className="buynow__descr wow fadeInRight"
                        data-wow-duration="2s"
                      >
                        <p>
                          Once your transaction has been cleared, and you have
                          BSC on your Trust Wallet, Go to DApps (or "Browser"
                          for iPhones) at the bottom of the main screen. If the
                          Browser button is not visible at the bottom for
                          iPhone, open Safari and in the URL type
                          trust://browser_enable, then return to trust wallet.
                        </p>
                        <p>
                          Open the DApps, or Browser, section and find
                          PancakeSwap and open it. Connect your Trust Wallet in
                          the top-right. Scroll down a little to the "Exchange"
                          box
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="discl wow fadeInUp" data-wow-duration="2s">
                  <div className="discl__inside">
                    Disclaimer
                    <i>
                      Cryptocurrency trading is extremely volatile and you could
                      lose all your capital in the process. The investment in
                      cryptocurrency involves a significant amount of risk and
                      you should understand all implications involved. Prices
                      may fluctuate on any given day and due to such
                      fluctuations you may lose some or all of your investments.
                      Due to the inherent risks associated with Cryptocurrency
                      you should seek Independent legal or financial advice to
                      understand the nature of your position.
                    </i>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyNow;
