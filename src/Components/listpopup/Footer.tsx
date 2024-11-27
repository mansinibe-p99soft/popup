import React from "react";
import { Box, Button } from "@mui/material";

const Footer: React.FC = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    mt={3}
    ml={90}
    sx={{
      paddingTop: "16px",
      paddingBottom: "16px",
      width: "303px",
      height: "90px",
      top: "841px",
      left: "990px",
      bottom:"800px",
      gap: "10px",
      marginBottom: "40px",  
      padding: "10px",  
    }}
  >
    <Button
      sx={{
        width: "120px",
        height: "45px",
        borderRadius: "8px",
        backgroundColor: "#ECF0EA",
        color: "#000000",
        fontSize: "14px",
        border: "none",
        textTransform: "none",
        marginBottom: "10px",  
      }}
    >
      Save as draft
    </Button>

    <Button
      variant="contained"
      sx={{
        width: "170px",
        height: "45px",
        borderRadius: "8px",
        padding: "12px 20px",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontSize: "14px",
        textTransform: "none",
        border: "none",
        marginBottom: "10px",  
      }}
    >
      Upload to domain
    </Button>
  </Box>
);

export default Footer;
