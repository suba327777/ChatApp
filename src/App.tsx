/* paclages */
import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
/* components */
import { ChatPage } from "./components/pages/ChatPage";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ChatPage />;
    </>
  );
};

const GlobalStyle = createGlobalStyle`
${reset}
`;
