import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

interface ColumnCheckboxProps {
  columnId: string;
  label: string;
  selectedColumns: string[];
  onCheckboxChange: (columnId: string) => void;
}

const Columncheckbox2: React.FC<ColumnCheckboxProps> = ({ columnId, label, selectedColumns, onCheckboxChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={selectedColumns.includes(columnId)}
          onChange={() => onCheckboxChange(columnId)}
          sx={{
            color: "gray",
            "&.Mui-checked": {
              color: "#B1B11D",
            },
          }}
        />
      }
      label={label}
      sx={{
        margin: 0,
        flex: 1,
      }}
    />
  );
};

export default Columncheckbox2;
