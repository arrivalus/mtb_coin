import React, { useRef, useState } from "react";
import "./css/style.scss";
import {
  motion,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Link, animateScroll as scroll, Element } from "react-scroll";
import Header from "./components/Header";
import Footer from "./components/Footer";

const upAnimation = {
  hidden: (custom: any) => ({
    y: (1 / custom) * 200,
    opacity: 0,
  }),
  visible: (custom: any) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: (custom - 0.8) * 0.3,
      // delayChildren: 0.8,
      duration: 1,
    },
  }),
};

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

const rightShiftAnimation = {
  hidden: {
    x: 300,
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

const upSingleAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 1.5,
    },
  },
};

const scrollToTop = () => {
  scroll.scrollToTop();
};

function Main() {
  const { scrollY } = useViewportScroll();
  const offSetY = [0, 150];
  const ref: any = useRef();
  const { scrollYProgress } = useElementScroll(ref);
  const [scrollItems, setScrollItems] = useState<string[]>([
    "green",
    "",
    "",
    "",
    "",
  ]);
  return (
    <div ref={ref}>
      <motion.div initial="hidden" whileInView="visible" className="wrapper">
        <div
          className="firstmain__scroll wow fadeIn"
          data-wow-duration="2s"
          // style={{ scaleY: scrollYProgress }}
          style={{
            position: "fixed",
            top: "200px"
          }}
        >
          <div className="firstmain__scrolltext">
            Scroll Down
            <div className="mouse">
              <span></span>
            </div>
            {/* </Link> */}
          </div>

          <div className="firstmain__scrollbottom">
            <img src="images/scroll.png" alt="" />
            <Link
              activeClass="active"
              to="0Container"
              spy={true}
              smooth={true}
              duration={250}
              onClick={() => setScrollItems(["green", "", "", "", ""])}
            >
              <span className={scrollItems[0]}></span>
            </Link>
            <Link
              activeClass="active"
              to="1Container"
              spy={true}
              smooth={true}
              duration={250}
              onClick={() => setScrollItems(["", "green", "", "", ""])}
            >
              <span className={scrollItems[1]}></span>
            </Link>
            <Link
              activeClass="active"
              to="2Container"
              spy={true}
              smooth={true}
              duration={250}
              onClick={() => setScrollItems(["", "", "green", "", ""])}
            >
              <span className={scrollItems[2]}></span>
            </Link>
            <Link
              activeClass="active"
              to="3Container"
              spy={true}
              smooth={true}
              duration={250}
              onClick={() => setScrollItems(["", "", "", "green", ""])}
            >
              <span className={scrollItems[3]}></span>
            </Link>
            <Link
              activeClass="active"
              to="4Container"
              spy={true}
              smooth={true}
              duration={250}
              onClick={() => setScrollItems(["", "", "", "", "green"])}
            >
              <span className={scrollItems[4]}></span>
            </Link>
          </div>
        </div>
        <div
          className="mainscreen wow fadeIn"
          data-wow-duration="2s"
          style={{ backgroundImage: "url(images/bg1.jpg)" }}
        >
          <div className="contfoescroll">
            <Header offSetY={offSetY} scrollY={scrollY} />

            {/* <motion.div
              style={{ scaleY: scrollYProgress, color: 'black', marginTop: '400px' }}
            >
              scaleY: scrollYProgress
            </motion.div> */}

            <div className="firstmain">
              <Element name="0Container"></Element>

              {/* <Link to="section1">Link</Link> */}
              {/* <button onClick={scrollToTop}>Scroll UP</button> */}

             
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className="containerm"
              >
                <div className="firstmain__left">
                  <motion.h1
                    variants={upAnimation}
                    custom={1}
                    className="firstmain__title wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    mtb coin realise
                  </motion.h1>
                  <motion.div
                    variants={upAnimation}
                    custom={2}
                    className="firstmain__descr wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <p>
                      Тут кокойто текст для текстового блока. Во всем мире
                      растет запрос на экологически чистые экологичнве решения
                      тут сельскохозяйственных товаров. Экологическая повестка в
                      ближайшие 10-20 лет будут являться одним из локомотивов
                      экономики.
                    </p>
                  </motion.div>
                  <motion.div
                    variants={upAnimation}
                    custom={3}
                    className="firstmain__btn wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <a href="#" className="bluebtn">
                      <span>Buy tokens</span>
                      <img src="images/btn_arrow.png" alt="" />
                    </a>
                  </motion.div>
                </div>
                <div className="bottomblocks">
                  <div className="bottomblocks__top">
                    <div
                      className="firstmain__thin wow fadeInUp"
                      data-wow-duration="2s"
                    >
                      Funs collected
                    </div>
                    <div
                      className="firstmain__thingreen wow fadeInUp"
                      data-wow-duration="2s"
                    >
                      1 234 898.00 <span>usd</span>
                    </div>
                  </div>
                  <div
                    className="firstmain__icons wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <div className="firstmain__icon">
                      <img src="images/icon1.png" alt="" />
                    </div>
                    <div className="firstmain__icon">
                      <img src="images/icon2.png" alt="" />
                    </div>
                    <div className="firstmain__icon">
                      <img src="images/icon3.png" alt="" />
                    </div>
                    <div className="firstmain__icon">
                      <img src="images/icon4.png" alt="" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <Element name="1Container"></Element>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          // className="secscreen secscreenscroll wow fadeInLeft" data-wow-duration="2s"
        >
          <motion.div
            variants={leftShiftAnimation}
            className="secscreen secscreenscroll wow fadeInLeft"
            data-wow-duration="2s"
          >
            <div className="containerm">
              <div className="secscreen__inside">
                <div className="secscreen__leftimg">
                  <img src="images/img_bg_2.png" alt="" />
                </div>
                <div className="secscreen__right">
                  <div className="contents">
                    <motion.h2
                      variants={upAnimation}
                      custom={1}
                      className="contents__title wow fadeInUp"
                      data-wow-duration="2s"
                    >
                      SCAN QR CODE
                    </motion.h2>
                    <motion.p
                      variants={upAnimation}
                      custom={2}
                      className="wow fadeInUp"
                      data-wow-duration="2s"
                    >
                      Тут кокойто текст для текстового блока. Во всем мире
                      растет запрос на экологически чистые экологичнве решения
                      тут сельскохозяйственных товаров.
                      <br /> Экологическая повестка в ближайшие 10-20 лет будут
                      являться одним из локомотивов экономики одним из
                      локомотивов экономики.
                    </motion.p>
                    <motion.div
                      variants={upAnimation}
                      custom={3}
                      className="contents__products wow fadeInUp"
                      data-wow-duration="2s"
                    >
                      <div className="contents__productitem">
                        <div className="contents__productitemimg">
                          <img src="images/i1.png" alt="" />
                        </div>
                        <div className="contents__productitemhide">
                          <div className="contents__productitemtext">
                            Фрукты
                          </div>
                        </div>
                      </div>
                      <div className="contents__productitem">
                        <div className="contents__productitemimg">
                          <img src="images/i2.png" alt="" />
                        </div>
                        <div className="contents__productitemhide">
                          <div className="contents__productitemtext">
                            Фрукты
                          </div>
                        </div>
                      </div>
                      <div className="contents__productitem">
                        <div className="contents__productitemimg">
                          <img src="images/i3.png" alt="" />
                        </div>
                        <div className="contents__productitemhide">
                          <div className="contents__productitemtext">
                            Фрукты
                          </div>
                        </div>
                      </div>
                      <div className="contents__productitem">
                        <div className="contents__productitemimg">
                          <img src="images/i4.png" alt="" />
                        </div>
                        <div className="contents__productitemhide">
                          <div className="contents__productitemtext">
                            Фрукты
                          </div>
                        </div>
                      </div>
                      <div className="contents__productitem">
                        <div className="contents__productitemimg">
                          <img src="images/i5.png" alt="" />
                        </div>
                        <div className="contents__productitemhide">
                          <div className="contents__productitemtext">
                            Фрукты
                          </div>
                        </div>
                      </div>
                      <div className="contents__productitem">
                        <div className="contents__productitemimg">
                          <img src="images/i6.png" alt="" />
                        </div>
                        <div className="contents__productitemhide">
                          <div className="contents__productitemtext">
                            Фрукты
                          </div>
                        </div>
                      </div>
                      <div className="contents__productitem">
                        <div className="contents__productitemimg">
                          <img src="images/i7.png" alt="" />
                        </div>
                        <div className="contents__productitemhide">
                          <div className="contents__productitemtext">
                            Фрукты
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <Element name="2Container"></Element>
          <motion.div
            variants={rightShiftAnimation}
            className="best wow fadeInRight"
            data-wow-duration="2s"
          >
            <div className="best__top wow fadeInLeft" data-wow-duration="2s">
              <div className="best__wave">
                <img src="images/wave.png" alt="" />
              </div>
            </div>
            <div className="best__content">
              <div className="containerm">
                <div className="best__inside">
                  <div className="best__left">
                    <div className="contents">
                      <motion.h2
                        variants={upAnimation}
                        custom={1}
                        className="contents__title wow fadeInUp"
                        data-wow-duration="2s"
                      >
                        преимущества
                      </motion.h2>
                      <motion.p
                        variants={upAnimation}
                        custom={2}
                        className="wow fadeInUp"
                        data-wow-duration="2s"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the.
                      </motion.p>
                      <motion.div
                        variants={upAnimation}
                        custom={3}
                        className="best__line wow fadeInUp"
                        data-wow-duration="2s"
                      >
                        <div className="best__lineimg">
                          <img src="images/best_icon.png" alt="" />
                        </div>
                        <div className="best__lineright">
                          <div className="best__linetitle">
                            Marketing strategies
                          </div>
                          <div className="best__linedescr">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        variants={upAnimation}
                        custom={4}
                        className="best__line wow fadeInUp"
                        data-wow-duration="2s"
                      >
                        <div className="best__lineimg">
                          <img src="images/best_icon.png" alt="" />
                        </div>
                        <div className="best__lineright">
                          <div className="best__linetitle">
                            Marketing strategies
                          </div>
                          <div className="best__linedescr">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="best__right">
                    <div className="best__rightimg">
                      <img src="images/img_bg_3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="roadmap wow fadeIn"
          data-wow-duration="2s"
        >
          <Element name="3Container"></Element>
          <div className="containerm">
            <div className="roadmap__inside">
              <motion.h3
                variants={upAnimation}
                custom={1}
                className="roadmap__titletop wow fadeInUp"
                data-wow-duration="2s"
              >
                Roadmap
              </motion.h3>

              <div className="roadmap__row">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2, once: true }}
                >
                  <motion.div
                    variants={upAnimation}
                    custom={1}
                    className="roadmap__item roadmap__item-blue wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <div className="roadmap__top">
                      <div className="roadmap__topleft">
                        <div className="roadmap__date">Jun - Nov 2020</div>
                        <div className="roadmap__title">
                          The Bitmin Idea is born
                        </div>
                      </div>
                      <div className="roadmap__topright">
                        <div className="roadmap__status">completed</div>
                      </div>
                    </div>
                    <div className="roadmap__bottom">
                      Development of points based loyalty system CryptoMailCoin
                      designed to blockchain technology.
                    </div>
                    <div className="roadmap__dot"></div>
                  </motion.div>
                </motion.div>
                {/* <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                        > */}
                <motion.div
                  variants={upAnimation}
                  custom={1}
                  className="roadmap__item roadmap__item-blue wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="roadmap__top">
                    <div className="roadmap__topleft">
                      <div className="roadmap__date">Dec 2020 - Feb 2021</div>
                      <div className="roadmap__title">Exchange Listing</div>
                    </div>
                    <div className="roadmap__topright">
                      <div className="roadmap__status">completed</div>
                    </div>
                  </div>
                  <div className="roadmap__bottom">
                    We are already in contact with leading crypto exchanges to
                    get CryptoMailCoin listed. After the ITS ends the digital
                    currency will be available for public trading.
                  </div>
                  <div className="roadmap__dot"></div>
                </motion.div>
                {/* </motion.div> */}
                {/* <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                        > */}
                <motion.div
                  variants={upAnimation}
                  custom={1}
                  className="roadmap__item roadmap__item-green wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="roadmap__top">
                    <div className="roadmap__topleft">
                      <div className="roadmap__date">May - Jul 2021</div>
                      <div className="roadmap__title">
                        Full-functioning CryptoMail
                      </div>
                    </div>
                    <div className="roadmap__topright">
                      <div className="roadmap__status">current stage</div>
                    </div>
                  </div>
                  <div className="roadmap__bottom">
                    The full-functioning rewards and loyalty platform
                    cryptowallet tied to the loyalty program of BITMIN.
                  </div>
                  <div className="roadmap__dot"></div>
                </motion.div>
                {/* </motion.div> */}
                {/* <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                        > */}
                <motion.div
                  variants={upAnimation}
                  custom={1}
                  className="roadmap__item wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="roadmap__top">
                    <div className="roadmap__topleft">
                      <div className="roadmap__date">Sep - Nov 2021</div>
                      <div className="roadmap__title">
                        Customer’s Mobile app with crypto-wallet
                      </div>
                    </div>
                    <div className="roadmap__topright">
                      <div className="roadmap__status"></div>
                    </div>
                  </div>
                  <div className="roadmap__bottom">
                    We will launch a desktop and mobile wallet for
                    CryptoMailCoin
                  </div>
                  <div className="roadmap__dot"></div>
                </motion.div>
                {/* </motion.div> */}
                {/* <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                        > */}
                <motion.div
                  variants={upAnimation}
                  custom={1}
                  className="roadmap__item wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="roadmap__top">
                    <div className="roadmap__topleft">
                      <div className="roadmap__date">Dec 2021 - Jul 2021</div>
                      <div className="roadmap__title">Beta Test Launch</div>
                    </div>
                    <div className="roadmap__topright">
                      <div className="roadmap__status"></div>
                    </div>
                  </div>
                  <div className="roadmap__bottom">
                    The beta test of the payment solution will be ready for
                    release. The beta version will become available to
                  </div>
                  <div className="roadmap__dot"></div>
                </motion.div>
                {/* </motion.div> */}
                {/* <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                        > */}
                <motion.div
                  variants={upAnimation}
                  custom={1}
                  className="roadmap__item wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="roadmap__top">
                    <div className="roadmap__topleft">
                      <div className="roadmap__date">Sep 2021 - May 2021</div>
                      <div className="roadmap__title">
                        Bitmin Payment Solution Release
                      </div>
                    </div>
                    <div className="roadmap__topright">
                      <div className="roadmap__status"></div>
                    </div>
                  </div>
                  <div className="roadmap__bottom">
                    The CryptoMailCoin payment solution platform will be
                    launched. By this point, we will have made additional
                    agreements with top entertainment industry businesses to
                    begin using CryptoMailCoin.
                  </div>
                  <div className="roadmap__dot"></div>
                </motion.div>
                {/* </motion.div> */}
                {/* <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                        > */}
                <motion.div
                  variants={upAnimation}
                  custom={1}
                  className="roadmap__item wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="roadmap__top">
                    <div className="roadmap__topleft">
                      <div className="roadmap__date">Jul 2021</div>
                      <div className="roadmap__title">Expand Client Base</div>
                    </div>
                    <div className="roadmap__topright">
                      <div className="roadmap__status"></div>
                    </div>
                  </div>
                  <div className="roadmap__bottom">
                    Our aim is to have partnered with a minimum of 200
                    businesses and individuals from the entertainment industry.
                  </div>
                  <div className="roadmap__dot"></div>
                </motion.div>
                {/* </motion.div> */}
                {/* <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                        > */}
                <motion.div
                  variants={upAnimation}
                  custom={1}
                  className="roadmap__item wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="roadmap__top">
                    <div className="roadmap__topleft">
                      <div className="roadmap__date">Dec 2021</div>
                      <div className="roadmap__title">Market Share Grows</div>
                    </div>
                    <div className="roadmap__topright">
                      <div className="roadmap__status"></div>
                    </div>
                  </div>
                  <div className="roadmap__bottom">
                    The beta test of the payment solution will be ready for
                    release. The beta version will become available to
                  </div>
                  <div className="roadmap__dot"></div>
                </motion.div>
                {/* </motion.div> */}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="footerbg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <Element name="4Container"></Element>
            <motion.div variants={upSingleAnimation} className="team">
              <div className="containerm">
                <div className="team__inside">
                  <h2
                    className="team__title wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    our team
                  </h2>
                  <p className="wow fadeInUp" data-wow-duration="2s">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting{" "}
                  </p>
                  <div
                    className="team__slider wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <Swiper
                      breakpoints={{
                        // when window width is >= 640px
                        640: {
                          // width: 640,
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          // width: 768,
                          slidesPerView: 3,
                        },
                      }}
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      // slidesPerView={3}
                      navigation
                      pagination={{ clickable: true }}
                      // scrollbar={{ draggable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide>
                        <div className="team__item">
                          <div className="team__iteminside">
                            <div className="team__img">
                              <div
                                className="team__photo"
                                style={{
                                  backgroundImage: "url(images/team1.jpg)",
                                }}
                              ></div>
                            </div>
                            <div className="team__name">John Karony</div>
                            <div className="team__special">
                              Super programmer
                            </div>
                            <div className="team__social">
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/twitter.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/linkedin.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/fb.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="team__item">
                          <div className="team__iteminside">
                            <div className="team__img">
                              <div
                                className="team__photo"
                                style={{
                                  backgroundImage: "url(images/team2.jpg)",
                                }}
                              ></div>
                            </div>
                            <div className="team__name">emiliya klark</div>
                            <div className="team__special">
                              Super programmer
                            </div>
                            <div className="team__social">
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/twitter.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/linkedin.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/fb.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="team__item">
                          <div className="team__iteminside">
                            <div className="team__img">
                              <div
                                className="team__photo"
                                style={{
                                  backgroundImage: "url(images/team3.jpg)",
                                }}
                              ></div>
                            </div>
                            <div className="team__name">jessika Karony</div>
                            <div className="team__special">
                              Super programmer
                            </div>
                            <div className="team__social">
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/twitter.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/linkedin.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/fb.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="team__item">
                          <div className="team__iteminside">
                            <div className="team__img">
                              <div
                                className="team__photo"
                                style={{
                                  backgroundImage: "url(images/team1.jpg)",
                                }}
                              ></div>
                            </div>
                            <div className="team__name">John Karony</div>
                            <div className="team__special">
                              Super programmer
                            </div>
                            <div className="team__social">
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/twitter.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/linkedin.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/fb.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="team__item">
                          <div className="team__iteminside">
                            <div className="team__img">
                              <div
                                className="team__photo"
                                style={{
                                  backgroundImage: "url(images/team2.jpg)",
                                }}
                              ></div>
                            </div>
                            <div className="team__name">emiliya klark</div>
                            <div className="team__special">
                              Super programmer
                            </div>
                            <div className="team__social">
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/twitter.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/linkedin.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/fb.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="team__item">
                          <div className="team__iteminside">
                            <div className="team__img">
                              <div
                                className="team__photo"
                                style={{
                                  backgroundImage: "url(images/team3.jpg)",
                                }}
                              ></div>
                            </div>
                            <div className="team__name">jessika Karony</div>
                            <div className="team__special">
                              Super programmer
                            </div>
                            <div className="team__social">
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/twitter.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/linkedin.png" alt="" />
                                </a>
                              </div>
                              <div className="team__solialitem">
                                <a href="#" target="_blank">
                                  <img src="images/fb.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <Footer />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Main;
