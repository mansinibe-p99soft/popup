import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import Buttoncomponent from "./Buttoncomponent";

const Collaboratorsheader: React.FC = () => {
  return (
    <Box sx={{ mb: 3 }}>
      {/* Title */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1}}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500, font:"Reddit Sans", height:"23px", width:"290px" , fontSize:"18", color:"#000000"}}>
          Invite collaborators for this domain
        </Typography>
        <Buttoncomponent />
      </Box>

      {/* Subtitle */}
      <Typography
        variant="body2"
        sx={{ color: "#6B6B6B", fontSize: "0.875rem", mb: 2, font:"Reddit Sans", marginTop:"-10px"}}
      >
        Enter email or send this link to collaborate
      </Typography>

      {/* Email Input */}
      <TextField
        fullWidth
        placeholder="Enter email"
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            backgroundColor: "#F7F7F7",
            font:"Reddit Sans",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E0E0E0",
            border: "none"
          },
          "& .MuiOutlinedInput-input": {
            fontSize: "0.875rem",
            padding: "10px 12px",
          },
        }}
      />
    </Box>
  );
};

export default Collaboratorsheader;
