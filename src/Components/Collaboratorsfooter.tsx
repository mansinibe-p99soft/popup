import React from "react";
import { Box, Button } from "@mui/material";

interface FooterProps {
  onClose: () => void;
}

const Collaboratorsfooter: React.FC<FooterProps> = ({ onClose }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        mt: 2,
        borderTop: "1px solid #E0E0E0",
        paddingTop: 2,
      }}
    >
      <Button
        onClick={onClose}
        variant="outlined"
        sx={{
          textTransform: "none",
          fontSize: "0.875rem",
          fontWeight: 500,
          font: "Reddit Sans",
          bgcolor: "#F7F7F7",
          color: "#000",
          border: "none", // Removed border
          marginRight: 1,
          width: 80,
          height: 36,

        }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        disableRipple // Disables the ripple effect
        sx={{
          textTransform: "none",
          fontSize: "0.875rem",
          font: "Reddit Sans",
          fontWeight: 500,
          bgcolor: "#DADADA",
          color: "#FFF",
          border: "none", // Removed border
          width: 80,
          height: 36,
          boxShadow: "none", // Removed shadow
          "&:hover": {
            // bgcolor: "#CBCBCB", // Only color change on hover
            boxShadow: "none", // Ensures no shadow on hover
          },
          "&:focus": {
            outline: "none", // Removes focus outline
            boxShadow: "none", // No shadow on focus
          },
        }}
      >
        Invite
      </Button>

    </Box>
  );
};

export default Collaboratorsfooter;
