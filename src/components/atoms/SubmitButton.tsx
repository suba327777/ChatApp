import React from "react";
import { Button } from "@mui/material";

type Props = {
  onClick: () => void;
};

export const SubmitButton: React.VFC<Props> = ({ onClick }) => (
  <Button variant="contained" onClick={onClick}>
    送信
  </Button>
);
