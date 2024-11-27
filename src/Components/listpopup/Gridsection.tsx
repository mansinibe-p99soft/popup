import React from "react";
import { Box } from "@mui/material";
import ColumnCheckbox from "./Columncheckbox2";

interface GridSectionProps {
  columns: { id: string; label: string }[];
  selectedColumns: string[];
  onCheckboxChange: (columnId: string) => void;
}

const Gridsection: React.FC<GridSectionProps> = ({ columns, selectedColumns, onCheckboxChange }) => {
  return (
    <Box sx={{ display: "grid", gap: 1 }}>
      {columns.map((column) => (
        <Box
          key={column.id}
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ColumnCheckbox
            columnId={column.id}
            label={column.label}
            selectedColumns={selectedColumns}
            onCheckboxChange={onCheckboxChange}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Gridsection;
