import React, { useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomPopup from "./Addcustomrules"; // Import the CustomPopup component

interface RulesAddedProps {
  rules: string[];
  onDelete: (index: number) => void;
  onSave: (newRules: string[]) => void; // Function to save new rules
  onNewActionClick: () => void; // Function for the "New Action" button
}

const Rulesadded: React.FC<RulesAddedProps> = ({ rules, onDelete, onSave }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility
  const [updatedRules, setUpdatedRules] = useState(rules); // Store updated rules

  const handleOpenPopup = () => {
    setIsPopupOpen(true); // Open the popup when "Add Custom" is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const handleAddCustomRule = (newRules: string[]) => {
    setUpdatedRules(newRules); // Update the rules when new rules are added
    onSave(newRules); // Save the new rules via the onSave prop
  };

  return (
    <Box sx={{ padding: "16px" }}>
      {/* Container for the heading and the "Add Custom" button */}
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
          {/* "Add Custom" button */}
          <Button
            onClick={handleOpenPopup} // Open the popup on click
            sx={{
              color: "#808000",
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
              flexDirection: "column", // Align elements vertically
              gap: "8px", // Gap between the rule name + delete icon and the description
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            {/* Flex container for rule name and delete icon */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center", // Align rule name and delete icon in one line
              }}
            >
              <Typography variant="body1">Rule {index + 1}</Typography>
              <IconButton onClick={() => onDelete(index)}>
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
