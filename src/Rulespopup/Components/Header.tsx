import React from "react";
import { Box, Typography } from "@mui/material";
import VectorIcon from "../assets/Vector.svg"; // Import the vector icon

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "16px",
        paddingBottom: "8px",
        borderBottom: "1px solid #ddd",
        backgroundColor:"#D6E3C3",
        paddingTop:"9px",
        
       
      }}
    >
      {/* SVG Icon */}
      <Box sx={{ marginRight: "8px" , marginLeft:"25px"}}>
        <img src={VectorIcon} alt="vector icon" width="20" height="20" />
      </Box>

      {/* Title Text */}
      <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
