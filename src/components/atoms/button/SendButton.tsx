/* packages */
import React from "react";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";

type Props = {
  onClick: () => void;
};

const CustomButton = styled(SendIcon)({
  color: "#7AC2FF",
  paddingTop: "5px",
});

export const SendButton: React.VFC<Props> = ({ onClick }) => <CustomButton onClick={onClick} />;
