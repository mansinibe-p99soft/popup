import React, { ReactNode } from "react";
import { Dialog, Box, Button } from "@mui/material";
import Header from "./Header";  

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
  newActionButtonText?: string;   
  newActionButtonClick?: () => void;   
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
}) => {
  return (
    <Dialog
      open={open}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { padding: "0px", borderRadius: "8px" } }}
    >
      <Box>
        <Header title={title} />
        <Box sx={{ padding: "16px" }}>{children}</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "16px",
            flexWrap: "wrap",
            marginRight:"4%"
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "",
              alignItems: "center",
              flexWrap: "wrap",
              
            }}
          >
             {tertiaryButtonText && (
              <Box sx={{  }}>
                <Button
                  variant="text"
                  onClick={tertiaryButtonClick}
                  sx={{
                    marginRight: "8px",
                    color: "#000000",
                    border: "1px solid",
                    borderColor: "#D3D3D3",
                    transition: "none",
                    textTransform: "none",
                    outline: "none", 
                    "&:focus, &:active": {
                      border: "1px solid #D3D3D3",  
                      outline: "none",  
                    },
                    ":hover": {
                      boxShadow: "#ECF0EA",
                      borderColor: "#ECF0EA",
                      textTransform:"lowercase"
                    },
                  }}
                >
                  {tertiaryButtonText}
                </Button>
              </Box>
            )}
            <Box sx={{ display: "flex", gap: "8px"  }}>
              <Button
                variant="outlined"
                onClick={secondaryButtonClick}
                sx={{
                  background: "#ECF0EA",
                  color: "#000000",
                  border: "1px solid",
                  borderColor: "#ECF0EA",
                  textTransform: "none",
                  transition: "none",
                  "&:focus, &:active": {
                    borderColor: "#ECF0EA", 
                    outline: "#ECF0EA",  
                    boxShadow: "none",  
                  },
                  ":hover": {
                    boxShadow: "#ECF0EA",
                    borderColor: "#ECF0EA",  
                  },
                }}
              >
                {secondaryButtonText}
              </Button>

              <Button
                variant="contained"
                onClick={primaryButtonClick}
                sx={{
                  backgroundColor: "#D3D3D3",

                  transition: "none",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:focus, &:active": {
                    border: "none", 
                    outline: "none",  
                    boxShadow: "none", 
                  },
                  ":hover": {
                    boxShadow: "none",  
                  },
                }}
              >
                {primaryButtonText}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default PopupLayout;
