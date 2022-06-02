import React from "react";
import "./css/style.scss";
import { motion, useTransform, useViewportScroll } from "framer-motion";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Header from "./Header";
import { Heading } from "@chakra-ui/react";

import { Link, animateScroll as scroll, Element } from "react-scroll";

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
  return (
    <>
      <motion.div initial="hidden" whileInView="visible" className="wrapper">
        <div
          className="mainscreen wow fadeIn"
          data-wow-duration="2s"
          style={{ backgroundImage: "url(images/bg1.jpg)" }}
        >
          <div className="contfoescroll">
            <Header offSetY={offSetY} scrollY={scrollY} />
            {/* <header className="header">
                    <div className="containerm">
                        <div className="headerins">
                                <div className="headerins__logo">
                                <a href="index.html">
                                    <motion.img 
                                        animate = {{rotateX: 360, }}
                                        transition= {{ 
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                            repeatType: 'reverse',
                                            type: ''
                                        }}
                                        
                                        src="images/logo.png" alt=""/>
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
                                        <div className="headerins__langvisiblevalue">
                                            ENG
                                        </div>
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
                                    scale: 1.3
                                }}
                                whileTap={{
                                    background: 'lightblue'
                                }}
                                className="hamburger">
                                <span></span><span></span><span></span>
                            </motion.div>
                        </div>
                    </div>
                </header> */}

            <div className="firstmain">
              {/* <Link to="section1">Link</Link> */}
              {/* <button onClick={scrollToTop}>Scroll UP</button>

              <Link
                // activeClass="active"
                to="secondInsideContainer"
                spy={true}
                smooth={true}
                duration={250}
                // containerId="containerElement"
                style={{ display: "inline-block", margin: "20px" }}
              >
                Go to second element inside container
              </Link> */}

              <div
                className="firstmain__scroll wow fadeIn"
                data-wow-duration="2s"
              >
                <div className="firstmain__scrolltext">
                  <Link
                    // activeClass="active"
                    to="secondInsideContainer"
                    spy={true}
                    smooth={true}
                    duration={250}
                    // containerId="containerElement"
                    // style={{ display: "inline-block", margin: "20px" }}
                  >
                    Scroll Down
                    <div className="cont">
                      <div className="mouse">
                        <span></span>
                      </div>
                    </div>
                  </Link>
                  {/* Scroll Down */}
                  {/* <div className="cont">
                    <div className="mouse">
                      <span></span>
                    </div>
                  </div> */}
                </div>

                <div className="firstmain__scrollbottom">
                  <img src="images/scroll.png" alt="" />
                  {/* <div className="cont">
                    <div className="mouse">
                      <span></span>
                    </div>
                  </div> */}

                  <span className="green"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
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
                    // style={{ fontSize: "120px", fontWeight: "900" }}
                    data-wow-duration="2s"
                  >
                    {/* <Heading as="h1"> */}
                    mtb coin realise
                    {/* </Heading> */}
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

        <Element
          name="secondInsideContainer"
          // style={{
          //   marginBottom: "200px",
          // }}
        >
          second element inside container
        </Element>

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
            <motion.footer variants={leftShiftAnimation} className="footer ">
              <div className="containerm">
                <div
                  className="footer__top wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="footer__left">
                    <div className="footer__title">About us</div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard.
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
                <div
                  className="footer__copyr wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="footer__copyttext">
                    Copyright © 2021 Safemoon LLC. | All Rights Reserved
                  </div>
                </div>
              </div>
            </motion.footer>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Main;
