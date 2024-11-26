import React from "react";
import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Buttoncomponent: React.FC = () => {
  return (
    <Button
      variant="text"
      startIcon={< ContentCopyIcon sx={{height:"24px", width:"24px"}}  /> }
      sx={{
        textTransform: "none",
        color: "#808000",
        fontSize: "0.875rem",
        fontWeight: 700,
        padding: 1,
        minWidth: "auto",
        font:"Reddit Sans",
        marginLeft:"-10px",
        
        
      }}
    >
      Copy link
    </Button>
  );
};

export default Buttoncomponent;
