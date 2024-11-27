
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ColumnCheck from "./Columncheckbox";
interface ColumnSelectorsProps {
  columns: string[];
}

const ColumnSelectors: React.FC<ColumnSelectorsProps> = ({ columns }) => {
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  const handleSelect = (column: string) => {
    setSelectedColumns((prev) =>
      prev.includes(column)
        ? prev.filter((col) => col !== column)
        : [...prev, column]
    );
  };

  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "16px",
          fontWeight: 500,
          color: "#757575",
        }}
      >
        Selected columns: {selectedColumns.length}
      </Typography>
      {columns.map((column) => (
        <ColumnCheck
          key={column}
          label={column}
          checked={selectedColumns.includes(column)}
          onChange={() => handleSelect(column)}
        />
      ))}
    </Box>
  );
};

export default ColumnSelectors;
