/* packages */
import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
/* components */
import { ChatPage } from "./components/pages/ChatPage";

export const App = () => (
  <>
    <GlobalStyle />
    <ChatPage />
  </>
);

const GlobalStyle = createGlobalStyle`
${reset}
`;
