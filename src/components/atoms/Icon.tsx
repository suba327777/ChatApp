/* packages */
import React from "react";
import styled from "styled-components";
/* slice */
import { useImageUrlDataSelector } from "../../store/slices/imageUrlDataSlice";

type Props = {
  photoUrl: string;
};
export const Icon: React.VFC<Props> = ({ photoUrl }) => {
  return (
    <SImageContainer>
      <img src={photoUrl} alt="プロフィール画像" />
    </SImageContainer>
  );
};

const SImageContainer = styled.div`
  border-radius: 50%;
  width: 180px;
  height: 180px;
`;
