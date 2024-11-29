import React from "react";
import { Box, Button } from "@mui/material";

interface FooterProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  onTertiaryClick?: () => void;
  primaryText: string;
  secondaryText: string;
  tertiaryText?: string;
}

const Footer: React.FC<FooterProps> = ({
  onPrimaryClick,
  onSecondaryClick,
  onTertiaryClick,
  primaryText,
  secondaryText,
  tertiaryText,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "200px" }}>
      <Button variant="text" onClick={onSecondaryClick}>
        {secondaryText}
      </Button>
      <Box>
        {tertiaryText && (
          <Button
            variant="outlined"
            onClick={onTertiaryClick}
            sx={{ marginRight: "8px" }}
          >
            {tertiaryText}
          </Button>
        )}
        <Button variant="contained" onClick={onPrimaryClick}>
          {primaryText}
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
