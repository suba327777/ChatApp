import React, { ChangeEvent } from "react";
import { Input } from "@mui/material";

type Props = {
  placeholder: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const TextInput: React.VFC<Props> = ({ placeholder, value, onChange }) => (
  <Input placeholder={placeholder} value={value} onChange={onChange} />
);
