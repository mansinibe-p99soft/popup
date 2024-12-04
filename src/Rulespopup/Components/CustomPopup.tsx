import React, { useState } from "react";
import VectorIcon from "../assets/Vector.svg";
import { Box, Typography, Button, TextField, IconButton, Dialog } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
interface CustomPopupProps {
  open: boolean;
  onClose: () => void;
  existingRules: string[];
  onSave: (newRules: string[]) => void;
}
const CustomPopup: React.FC<CustomPopupProps> = ({
  open,
  onClose,
  existingRules,
  onSave,
}) => {
  const [rules, setRules] = useState<string[]>([...existingRules]);
  const [newRule, setNewRule] = useState<string>("");
  const handleAddRule = () => {
    if (newRule.trim()) {
      setRules((prev) => [...prev, newRule.trim()]);
      setNewRule("");
    }
  };
  const handleDeleteRule = (index: number) => {
    setRules((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSave = () => {
    onSave(rules);
    onClose();
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddRule();
    }};
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box>
        {/* Title Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "#D6E3C3",
            paddingTop: "9px",
          }} >
          {/* SVG Icon */}
          <Box sx={{ marginRight: "8px", marginLeft: "25px" }}>
            <img src={VectorIcon} alt="vector icon" width="20" height="20" />
          </Box>
          {/* Title Text */}
          <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
            Define Rule Sets with AI Assist
          </Typography>
        </Box>
        {/* New Rule Input Section */}
        <Box sx={{ padding: "16px" }}>
          <Box sx={{ marginBottom: "16px" }}>
            <TextField
              fullWidth
              label="New rule"
              value={newRule}
              onChange={(e) => setNewRule(e.target.value)}
              onKeyPress={handleKeyPress}  
              variant="outlined"/>
            <Button
              onClick={handleAddRule}
              sx={{
                marginTop: "8px",
                backgroundColor: "#D3D3D3",
                color: "white",
                textTransform: "none",
                ":hover": { backgroundColor: "#D3D3D3" },
                "&:focus, &:active": {
                border: "#D3D3D3",
                outline: "none",
                boxShadow: "none",
              },
             }} >
              Add custom rule
            </Button>
          </Box>
          {/* Rule List */}
          <Box sx={{ maxHeight: "300px", overflowY: "auto", marginBottom: "16px" }}>
            {rules.map((rule, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "8px",
                  marginBottom: "8px",
                }}
              > <Typography sx={{ wordWrap: "break-word", maxWidth: "80%" }}>
                  {rule}
                </Typography>
                
                <IconButton onClick={() => handleDeleteRule(index)} sx={{ padding: 0 }}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </Box>

          {/* Footer Buttons */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <Button
              onClick={onClose}
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#808080",
                textTransform: "none",
                ":hover": { backgroundColor: "#e0e0e0" },
                "&:focus, &:active": {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
              }}
            >
              Suggested rules
            </Button>
            <Button
              onClick={onClose}
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#808080",
                textTransform: "none",
                ":hover": { backgroundColor: "#e0e0e0" },
                "&:focus, &:active": {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              sx={{
                backgroundColor: "#D3D3D3",
                color: "white",
                textTransform: "none",
                ":hover": { backgroundColor: "#D3D3D3" },
                "&:focus, &:active": {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CustomPopup;
