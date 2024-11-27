import React from "react";
import { Box, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 500,
            color: "#000000",
          }}
        >
          Select required columns for your report
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 300,
            color: "#757575",
          }}
        >
          Finance data table
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#000000",
          marginTop:"-19px"
        }}
      >
        Step 2 / 2
      </Typography>
    </Box>
  );
};

export default Header;
