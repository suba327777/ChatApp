/* packages */
import React from "react";
import styled from "styled-components";

type Props = {
  photoUrl: string;
};
export const Icon: React.VFC<Props> = ({ photoUrl }) => (
  <SImage src={photoUrl} alt="プロフィール画像" />
);

const SImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  padding: 4px 4px 0;
  border-radius: 50%;
`;
