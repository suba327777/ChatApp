/* packages */
import React from "react";
import { useLoading, Oval } from "@agney/react-loading";
import styled from "styled-components";

export const Loading = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: (
      <div>
        <Oval width="150" color="#fff" />
      </div>
    ),
  });
  return (
    <SLoadingContainer>
      <section {...containerProps}>{indicatorEl}</section>
    </SLoadingContainer>
  );
};

const SLoadingContainer = styled.div`
  text-align: center;
  padding-top: 35%;
`;
