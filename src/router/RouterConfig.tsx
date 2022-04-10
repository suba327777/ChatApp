/* packages */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* components */
import { ChatPage, NotFoundPage } from "../components/pages/index";

export const RouterConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<ChatPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
