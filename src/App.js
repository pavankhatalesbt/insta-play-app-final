import React from "react";
import Navbar from "./Component/Navbar/Navbar";

import Private from "./Component/Private/Private";
import { Home } from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Info from "./Pages/Movieinfo/Info";
import Loginpagee from "./Pages/LoginPagee/Loginpagee";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpagee />} />
        <Route path="/home" element={<Private Component={Home} />} />
        <Route path='/moviei/:id' element={<Private Component={Info} />} />
        {/* <Route path='/:id' element={<Private Component={Info} />} /> */}
      </Routes>

    </>
  );
};
