import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import BuyNow from "./BuyNow";
import Markets from "./Markets";
import Products from "./Products";
import WhitePapers from "./WhitePapers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  motion,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";

function Layout() {
  const ref: any = useRef();

  return (
    <>
      <div ref={ref}>
        {/* <motion.div initial="hidden" whileInView="visible" className="wrapper"> */}
          <Header />
          {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Main />} />
            </Route>
            <Route path="/buynow" element={<BuyNow />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/products" element={<Products />} />
            <Route path="/whitepapers" element={<WhitePapers />} />
          </Routes>
          {/* </BrowserRouter> */}
          <Footer />
        {/* </motion.div> */}
      </div>
    </>
  );
}

export default Layout;
