
import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

interface ColumnCheckProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const ColumnCheck: React.FC<ColumnCheckProps> = ({ label, checked, onChange }) => (
  <FormControlLabel
    control={<Checkbox checked={checked} onChange={onChange} />}
    label={label}
    sx={{ marginBottom: "8px" }}
  />
);

export default ColumnCheck;
