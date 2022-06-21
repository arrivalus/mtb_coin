import React, { useRef, useState } from "react";
import "./css/style.scss";
import {
  motion,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Link, animateScroll as scroll, Element } from "react-scroll";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollDown from "./components/ScrollDown";
import { leftShiftAnimation, upAnimation, rightShiftAnimation } from "./Main";

function WhitePapers() {
  const { scrollY } = useViewportScroll();
  const offSetY = [0, 150];
  const ref: any = useRef();
  const [scrollItems, setScrollItems] = useState<string[]>([
    "green",
    "",
    "",
    "",
  ]);
  const [menuItemsClass, setMenuItemsClass] = useState<string[]>([
    "",
    "active",
    "",
    "",
    "",
  ]);
  return (
    <>
      <div ref={ref}>
        <motion.div initial="hidden" whileInView="visible" className="wrapper">
          <ScrollDown
            scrollItems={scrollItems}
            setScrollItems={setScrollItems}
            elementsCount={4}
          />
          <div
            className="mainscreen mainscreen_buynow mainscreen_whitee wow fadeIn"
            data-wow-duration="2s"
            style={{ backgroundImage: "url(images/white_1_Bg.jpg)" }}
          >
            <div className="contfoescroll">
              <Header
                offSetY={offSetY}
                scrollY={scrollY}
                menuItemsClass={menuItemsClass}
              />
              <div className="firstmain">
                <Element name="0Container" />
                <div></div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2, once: true }}
                  className="containerm"
                  onMouseEnter={() => setScrollItems(["green", "", "", ""])}
                >
                  <div className="firstmain__left">
                    <motion.h1
                      variants={upAnimation}
                      custom={1}
                      className="firstmain__title wow fadeInUp"
                      style={{ color: "#216bad" }}
                      data-wow-duration="2s"
                    >
                      {" "}
                      white <span>paper</span>
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
                        <span>Buy tokens</span>
                        <img src="images/btn_arrow.png" alt="" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="footerbg">
            <div className="whitecontent secscreenscroll">
              <Element name="1Container" />
              <motion.div
                className="containerm"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                onMouseEnter={() => setScrollItems(["", "green", "", ""])}
              >
                <motion.div
                  variants={upAnimation}
                  custom={1}
                  className="whitecontent__inside wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <h2 className="contents__title wow fadeInUp">
                    заголовок тут
                  </h2>
                  <p>
                    Решение представляемое нами - это облачная архитектура,
                    построенная с применением технологии блокчейн, которая
                    позволяет проводить предельно простую валидацию и контроль
                    экологических параметров, а также обеспечивает сквозной
                    контроль этих параметров на всех этапах пути движения товара
                    от места производства до конечного приобретателя.
                  </p>
                  <p>
                    Преимущества нашей платформы: <br /> Облачная валидация. Все
                    данные по смарт контрактам, а также этапы смены владельца
                    продукции, местонахождение продукции доступны из облака на
                    любом электронном устройстве: компьютер, смартфон, планшет.
                  </p>
                  <p>
                    Основано на технологии блокчейн - обеспечивает неизменность
                    данных по всей цепочке поставок. Благодаря этому невозможно
                    поменять содержание документа без факта фиксации его
                    изменения. Вся история изменений документа сохраняется в
                    блокчейне.
                  </p>
                  <p>
                    Смарт-контракт позволяет осуществить полную автоматизацию
                    исполнения договора между заказчиком продукции и ее
                    производителем.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="containerm"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
              >
                <motion.div
                  variants={leftShiftAnimation}
                  className="whitecontent__imgright wow fadeInRight"
                  data-wow-duration="2s"
                >
                  <p style={{ textAlign: "center" }}>
                    <img src="images/1111.png" alt="" />
                  </p>
                </motion.div>
              </motion.div>

              <Element name="2Container" />
              <motion.div
                className="containerm"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                onMouseEnter={() => setScrollItems(["", "", "green", ""])}
              >
                {/* <div
                  className="whitecontent__inside wow fadeInUp"
                  data-wow-duration="2s"
                > */}
                <motion.div variants={upAnimation} custom={1}>
                  <motion.h2
                    variants={upAnimation}
                    custom={2}
                    className="contents__title wow fadeInUp"
                  >
                    заголовок тут
                  </motion.h2>
                  <p>
                    Решение представляемое нами - это облачная архитектура,
                    построенная с применением технологии блокчейн, которая
                    позволяет проводить предельно простую валидацию и контроль
                    экологических параметров, а также обеспечивает сквозной
                    контроль этих параметров на всех этапах пути движения товара
                    от места производства до конечного приобретателя.
                  </p>
                  <p>
                    Преимущества нашей платформы: <br /> Облачная валидация. Все
                    данные по смарт контрактам, а также этапы смены владельца
                    продукции, местонахождение продукции доступны из облака на
                    любом электронном устройстве: компьютер, смартфон, планшет.
                  </p>
                  <p>
                    Основано на технологии блокчейн - обеспечивает неизменность
                    данных по всей цепочке поставок. Благодаря этому невозможно
                    поменять содержание документа без факта фиксации его
                    изменения. Вся история изменений документа сохраняется в
                    блокчейне.
                  </p>
                  <p>
                    Смарт-контракт позволяет осуществить полную автоматизацию
                    исполнения договора между заказчиком продукции и ее
                    производителем.
                  </p>
                  <p>
                    Преимущества нашей платформы: <br /> Облачная валидация. Все
                    данные по смарт контрактам, а также этапы смены владельца
                    продукции, местонахождение продукции доступны из облака на
                    любом электронном устройстве: компьютер, смартфон, планшет.
                  </p>
                  <p>
                    Основано на технологии блокчейн - обеспечивает неизменность
                    данных по всей цепочке поставок. Благодаря этому невозможно
                    поменять содержание документа без факта фиксации его
                    изменения. Вся история изменений документа сохраняется в
                    блокчейне.
                  </p>
                </motion.div>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2, once: true }}
                >
                  <motion.p
                    variants={rightShiftAnimation}
                    style={{ textAlign: "center" }}
                  >
                    <img src="images/white_img_2.png" alt="" />
                  </motion.p>
                </motion.p>
              </motion.div>

              <Element name="3Container" />
              <motion.div
                className="containerm"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                onMouseEnter={() => setScrollItems(["", "", "", "green"])}
              >
                <motion.div variants={upAnimation} custom={1}>
                  <motion.h2
                    variants={upAnimation}
                    custom={2}
                    className="contents__title wow fadeInUp"
                  >
                    заголовок тут
                  </motion.h2>
                  <p>
                    Решение представляемое нами - это облачная архитектура,
                    построенная с применением технологии блокчейн, которая
                    позволяет проводить предельно простую валидацию и контроль
                    экологических параметров, а также обеспечивает сквозной
                    контроль этих параметров на всех этапах пути движения товара
                    от места производства до конечного приобретателя.
                  </p>
                  <p>
                    Преимущества нашей платформы: <br /> Облачная валидация. Все
                    данные по смарт контрактам, а также этапы смены владельца
                    продукции, местонахождение продукции доступны из облака на
                    любом электронном устройстве: компьютер, смартфон, планшет.
                  </p>
                  <p>
                    Основано на технологии блокчейн - обеспечивает неизменность
                    данных по всей цепочке поставок. Благодаря этому невозможно
                    поменять содержание документа без факта фиксации его
                    изменения. Вся история изменений документа сохраняется в
                    блокчейне.
                  </p>
                  <p>
                    Смарт-контракт позволяет осуществить полную автоматизацию
                    исполнения договора между заказчиком продукции и ее
                    производителем.
                  </p>
                  <p>
                    Преимущества нашей платформы: <br /> Облачная валидация. Все
                    данные по смарт контрактам, а также этапы смены владельца
                    продукции, местонахождение продукции доступны из облака на
                    любом электронном устройстве: компьютер, смартфон, планшет.
                  </p>
                </motion.div>
                {/* </div> */}
              </motion.div>
            </div>

            <Footer />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default WhitePapers;
