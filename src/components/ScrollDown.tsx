import React, { Dispatch, SetStateAction, useState } from "react";
import "../css/style.scss";
import { Link, animateScroll as scroll, Element } from "react-scroll";
type Iprops = {
  scrollItems: string[];
  setScrollItems: Dispatch<SetStateAction<string[]>>;
  elementsCount: number;
};
function ScrollDown(props: Iprops) {
  return (
    <div
      className="firstmain__scroll wow fadeIn"
      data-wow-duration="2s"
      style={{
        position: "fixed",
        top: "200px",
      }}
    >
      <div className="firstmain__scrolltext">
        Scroll Down
        <div className="mouse">
          <span></span>
        </div>
      </div>

      <div className="firstmain__scrollbottom">
        <img src="images/scroll.png" alt="" />
        {props.scrollItems.map((elem, index) => (
          <Link
            key={index}
            activeClass="active"
            to={`${index}Container`}
            spy={true}
            smooth={true}
            // smooth='linear'
            duration={1500}
            onClick={() => {
              const tempArray: string[] = [];
              for (let i =0; i<props.elementsCount; i++){
                tempArray[i]="";
              }
              tempArray[index] = "green";
              props.setScrollItems(tempArray);
            }}
          >
            <span className={props.scrollItems[index]}></span>
          </Link>
        )
        )}
      </div>
    </div>
  );
}

export default ScrollDown;
