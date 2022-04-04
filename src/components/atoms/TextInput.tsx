import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";

type Props = {
  label: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const TextInput: React.VFC<Props> = ({ label, value, onChange }) => (
  <TextField label={label} value={value} onChange={onChange} />
);
