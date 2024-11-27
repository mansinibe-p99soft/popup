import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Divider } from "@mui/material";
import GridSection from "./Gridsection";

interface SelectorsProps {
  searchQuery: string;
}

const Selectors: React.FC<SelectorsProps> = ({ searchQuery }) => {
  const columns1 = [
    { id: "Transaction_ID1", label: "Transaction_ID" },
    { id: "Account_ID1", label: "Account_ID" },
    { id: "Transaction_type1", label: "Transaction_type" },
    { id: "Date1", label: "Date" },
    { id: "Amoun1", label: "Amoun" },
    { id: "Payment_method1", label: "Payment_method" },
  ];

  const columns2 = [
    { id: "Transaction_ID2", label: "Transaction_ID" },
    { id: "Account_ID2", label: "Account_ID" },
    { id: "Transaction_type2", label: "Transaction_type" },
    { id: "Date2", label: "Date" },
    { id: "Amoun2", label: "Amoun" },
    { id: "Payment_method2", label: "Payment_method" },
  ];

  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleCheckboxChange = (columnId: string) => {
    setSelectedColumns((prevSelected) =>
      prevSelected.includes(columnId)
        ? prevSelected.filter((id) => id !== columnId)
        : [...prevSelected, columnId]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedColumns([]);
    } else {
      const allColumns = [...columns1, ...columns2].map((col) => col.id);
      setSelectedColumns(allColumns);
    }
    setSelectAll(!selectAll);
  };

  // Filter columns based on the search query
  const filteredColumns1 = columns1.filter((col) =>
    col.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredColumns2 = columns2.filter((col) =>
    col.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ transition: "none" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        {/* Left Section */}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectAll}
                onChange={handleSelectAll}
                name="selectAll"
                sx={{
                  color: "#B1B11D",
                  "&.Mui-checked": {
                    color: "#B1B11D",
                  },
                }}
              />
            }
            label="Select all"
            sx={{ marginLeft: "6px" }}
          />
          <GridSection
            columns={filteredColumns1}
            selectedColumns={selectedColumns}
            onCheckboxChange={handleCheckboxChange}
          />
        </Box>

        {/* Right Section */}
        <Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", marginBottom: "16px" }}
          >
            Selected columns: {selectedColumns.length}
          </Typography>
          <GridSection
            columns={filteredColumns2}
            selectedColumns={selectedColumns}
            onCheckboxChange={handleCheckboxChange}
          />
        </Box>
      </Box>

      <Divider sx={{ margin: "16px 0", color: "#000000", mt: 5 }} />
    </div>
  );
};

export default Selectors;
