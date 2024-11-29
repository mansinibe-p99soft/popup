import React, { ReactNode } from "react";
import { Dialog, Box, Button } from "@mui/material";
import Header from "./Header"; // Import the Header component

interface PopupLayoutProps {
  open: boolean;
  title: string;
  children: ReactNode;
  primaryButtonText: string;
  primaryButtonClick: () => void;
  secondaryButtonText: string;
  secondaryButtonClick: () => void;
  tertiaryButtonText?: string;
  tertiaryButtonClick?: () => void;
  newActionButtonText?: string;  // New action button text
  newActionButtonClick?: () => void;  // New action button click handler
}

const PopupLayout: React.FC<PopupLayoutProps> = ({
  open,
  title,
  children,
  primaryButtonText,
  primaryButtonClick,
  secondaryButtonText,
  secondaryButtonClick,
  tertiaryButtonText,
  tertiaryButtonClick,
  // Accept newActionButtonClick from props
}) => {
   

  return (
    <Dialog
      open={open}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { padding: "0px", borderRadius: "8px" } }}
    >
      <Box>
        {/* Title Section with Header Component */}
        <Header title={title} />

        {/* Children Section */}
        <Box sx={{ padding: "16px" }}>{children}</Box>

        {/* Footer Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Box for the Tertiary Button */}
            {tertiaryButtonText && (
              <Box sx={{ padding: "4px 12px", borderRadius: "1px" }}>
                <Button
                  variant="text"
                  onClick={tertiaryButtonClick}
                  sx={{
                    marginRight: "8px",
                    color: "#000000",
                    border: "1px solid",
                    borderColor: "#D3D3D3",
                    transition: "none",
                    outline: "none", // Ensures no outline on focus
                    "&:focus, &:active": {
                      border: "1px solid #D3D3D3", // Prevents border color change on focus
                      outline: "none", // No outline on focus or active state
                    },
                    ":hover": {
                      boxShadow: "#ECF0EA",
                      borderColor: "#ECF0EA",
                    },
                  }}
                >
                  {tertiaryButtonText}
                </Button>
              </Box>
            )}

            {/* Box for the Secondary Button */}
            <Box sx={{ padding: "4px 20px", marginLeft: "230px"  ,marginRight:"20px"}}>
              <Button
                variant="outlined"
                onClick={secondaryButtonClick}
                sx={{
                  background: "#ECF0EA",
                  color: "#000000",
                  border: "1px solid",
                  borderColor: "#ECF0EA",
                  transition: "none",
                  "&:focus, &:active": {
                    borderColor: "#ECF0EA", // Keeps border color the same when focused or active
                    outline: "#ECF0EA", // Removes outline
                    boxShadow: "none", // Removes any shadow effect
                  },
                  ":hover": {
                    boxShadow: "#ECF0EA",
                    borderColor: "#ECF0EA", // Ensures no hover shadow
                  },
                }}
              >
                {secondaryButtonText}
              </Button>
            </Box>
          </Box>

          <Box>
            {/* Primary Button */}
            <Button
              variant="contained"
              onClick={primaryButtonClick}
              sx={{
                backgroundColor: "#D3D3D3",
                transition: "none",
                boxShadow: "none",
                "&:focus, &:active": {
                  border: "none", // Ensures no border on focus or active state
                  outline: "none", // Removes focus outline
                  boxShadow: "none", // Removes box-shadow on active/focus
                },
                ":hover": {
                  boxShadow: "none", // Removes shadow on hover
                },
              }}
            >
              {primaryButtonText}
            </Button>
          </Box>

          
          
        </Box>
      </Box>
    </Dialog>
  );
};

export default PopupLayout;
