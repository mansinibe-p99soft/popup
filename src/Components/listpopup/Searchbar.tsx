import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchbarProps {
  onSearch: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "400px",
        padding: "4px",
      }}
    >
      <TextField
        placeholder="Search for a data column..."
        variant="standard"
        fullWidth
        onChange={handleSearchChange}
        
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#B0B0B0" }} />
              </InputAdornment>
            ),
            disableUnderline: true,
          },
        }}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: "#F5F5F5",
            borderRadius: "7px",
            padding: "4px 12px",
          },
          "& .MuiInputBase-input": {
            fontSize: "14px",
            color: "#333333",
            height: "auto",
            lineHeight: "20px",
          },
        }}
      />
    </Box>
  );
};

export default Searchbar;
