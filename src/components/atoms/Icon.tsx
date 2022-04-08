/* packages */
import React from "react";
import styled from "styled-components";

type Props = {
  photoUrl: string;
};
export const Icon: React.VFC<Props> = ({ photoUrl }) => (
  <div>
    <SImage src={photoUrl} alt="プロフィール画像" />
  </div>
);

const SImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  padding: 13px 2px 0;
  border-radius: 50%;
`;
