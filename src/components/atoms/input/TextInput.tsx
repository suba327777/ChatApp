/* packages */
import React, { ChangeEvent } from "react";
import { Input } from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  placeholder: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = styled(Input)({
  width: "60%",
  fontSize: "15px",
  margin: "0 20px",
});

export const TextInput: React.VFC<Props> = ({ placeholder, value, onChange }) => (
  <CustomInput placeholder={placeholder} value={value} onChange={onChange} />
);
