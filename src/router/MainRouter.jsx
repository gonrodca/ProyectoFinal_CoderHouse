import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Item, Category } from "../pages";
import { NavBar } from "../components";

//https://coderhouse.zoom.us/rec/play/NYVjKWk2vUDpQozh7JoLXaUCkZO1aWbhJd7qbXL2PHw7hpu3VUggojX1_XzrPZu6YDJhN_wABUK3yg9u.X02AuyOgrO5_H4i2?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fcoderhouse.zoom.us%2Frec%2Fshare%2FksdYEMoeIxB_1Lpjj18ZhxPgPFqRf_WN3dv3D5Jyghzn6fWy99Iy6GAQG_n0yGSO.0bKRREh5QbhOCyuz
export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/item/:id" element={<Item></Item>}></Route>
        <Route path="/Category/:id" element={<Category></Category>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
