import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import BuyNow from "./BuyNow";
import Markets from "./Markets";
import Products from "./Products";
import WhitePapers from "./WhitePapers";
import Layout from "./Layout";

function App() {
  return (
    <>
    {/* <Layout/> */}
      <BrowserRouter>
      {/* <Layout/> */}
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Main />} />
           
          </Route>
          <Route path="/buynow" element={<BuyNow />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/products" element={<Products />} />
          <Route path="/whitepapers" element={<WhitePapers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
