
import React, { useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomPopup from "./CustomPopup";

interface RulesAddedProps {
  rules: string[];
  onDelete: (index: number) => void;
  onSave: (newRules: string[]) => void;
  onNewActionClick: () => void;
}

const Rulesadded: React.FC<RulesAddedProps> = ({ rules, onDelete, onSave }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [updatedRules, setUpdatedRules] = useState(rules);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddCustomRule = (newRules: string[]) => {
    setUpdatedRules(newRules);
    onSave(newRules);
  };

  const handleDeleteRule = (index: number) => {
    const newRules = [...updatedRules];  
    newRules.splice(index, 1); 
    setUpdatedRules(newRules); 
    onDelete(index);  
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Typography>{`${updatedRules.length} rules added`}</Typography>
        <Box>
          <Button
            onClick={handleOpenPopup}
            sx={{
              color: "#808000",
              transition: "none",
              boxShadow: "none",
              "&:focus, &:active": {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
              marginLeft: "auto",
              fontSize: { xs: "12px", sm: "14px" },
              textTransform: "none",
              background: "#ffffff",
              alignItems: "end",
              textAlign: "left",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "#f8f8f8",
              },
            }}
          >
            Add Custom
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {updatedRules.map((rule, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body1">Rule {index + 1}</Typography>
              <IconButton onClick={() => handleDeleteRule(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>

            <Box>
              <Typography variant="body2"> {rule}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <CustomPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
        existingRules={updatedRules}
        onSave={handleAddCustomRule}
      />
    </Box>
  );
};

export default Rulesadded;
