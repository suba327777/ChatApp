/* packages */
import React from "react";
import styled from "styled-components";

export const Header: React.VFC = () => (
  <SHeaderContainer>
    <STitle>Realtime Chat</STitle>
    <SSubTitle>React / React Redux / Firebase Realtime Database</SSubTitle>
  </SHeaderContainer>
);

const SHeaderContainer = styled.div`
  background-color: #222a41;
  text-align: center;
  color: white;
  position: relative;
`;

const STitle = styled.h1`
  font-size: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SSubTitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  padding-bottom: 20px;
`;
