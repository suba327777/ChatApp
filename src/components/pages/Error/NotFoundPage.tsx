/* packages */
import React from "react";
import styled from "styled-components";

export const NotFoundPage: React.VFC = () => (
  <SContainer>
    <STitle>404</STitle>
    <SSubTitle>お探しのページは見つかりませんでした</SSubTitle>
  </SContainer>
);

const SContainer = styled.div`
  text-align: center;
  padding-top: 35%;
`;

const STitle = styled.h1`
  font-size: 40px;
`;

const SSubTitle = styled.h2`
  font-size: 30px;
`;
