import { useViewportScroll } from "framer-motion";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function WhitePapers() {
  const { scrollY } = useViewportScroll();
  const offSetY = [0, 150];
  const [menuItemsClass, setMenuItemsClass] = useState<string[]>([
    "",
    "active",
    "",
    "",
    "",
  ]);
  return (
    <>
      <div className="wrapper">
        <div
          className="mainscreen mainscreen_buynow mainscreen_whitee wow fadeIn"
          data-wow-duration="2s"
          style={{ backgroundImage: "url(images/white_1_Bg.jpg)" }}
        >
          <div className="contfoescroll">
            <Header offSetY={offSetY} scrollY={scrollY} menuItemsClass={menuItemsClass}/>
            <div className="firstmain">
              <div
                className="firstmain__scroll wow fadeIn"
                data-wow-duration="2s"
              >
                <div className="firstmain__scrolltext">Scroll Down</div>
                <div className="firstmain__scrollbottom">
                  <img src="images/scroll.png" alt="" />
                  <span className="green"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="containerm">
                <div className="firstmain__left">
                  <h1
                    className="firstmain__title wow fadeInUp"
                    style={{ color: "#216bad" }}
                    data-wow-duration="2s"
                  >
                    {" "}
                    white <span>paper</span>
                  </h1>
                  <div
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
                  </div>
                  <div
                    className="firstmain__btn wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <a href="#" className="bluebtn">
                      <span>Buy tokens</span>
                      <img src="images/btn_arrow.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerbg">
          <div className="whitecontent secscreenscroll">
            <div className="containerm">
              <div
                className="whitecontent__inside wow fadeInUp"
                data-wow-duration="2s"
              >
                <h2>заголовок тут</h2>
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
              </div>
            </div>
            <div
              className="whitecontent__imgright wow fadeInRight"
              data-wow-duration="2s"
            >
              <p style={{ textAlign: "center" }}>
                <img src="images/1111.png" alt="" />
              </p>
            </div>
            <div className="containerm">
              <div
                className="whitecontent__inside wow fadeInUp"
                data-wow-duration="2s"
              >
                <h2>заголовок тут</h2>
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
                <p style={{ textAlign: "center" }}>
                  <img src="images/white_img_2.png" alt="" />
                </p>

                <h2>заголовок тут</h2>
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
              </div>
            </div>
          </div>

          <Footer/>
        </div>
      </div>
    </>
  );
}

export default WhitePapers;
