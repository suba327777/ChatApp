/* packages */
import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
/* components */
import { Header } from "./components/template/Header";
import { RouterConfig } from "./router/RouterConfig";

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <RouterConfig />
  </>
);

const GlobalStyle = createGlobalStyle`
${reset}
`;
