
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Dialog,
} from "@mui/material";
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



  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          Define Rule Sets with AI Assist
        </Typography>

        <Box sx={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            label="New rule"
            value={newRule}
            onChange={(e) => setNewRule(e.target.value)}
            variant="outlined"
          />
          <Button
            onClick={handleAddRule}
            sx={{
              marginTop: "8px",
              backgroundColor: "#808000",
              color: "white",
              textTransform: "none",
              ":hover": { backgroundColor: "#6a6a00" },
            }}
          >
            Add custom rule
          </Button>
        </Box>

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
            >
              <Typography>{rule}</Typography>
              <IconButton onClick={() => handleDeleteRule(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
          

          {/* Existing Buttons */}
          <Button
            onClick={onClose}
            sx={{
              backgroundColor: "#f5f5f5",
              color: "#808080",
              textTransform: "none",
              ":hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            sx={{
              backgroundColor: "#808000",
              color: "white",
              textTransform: "none",
              ":hover": { backgroundColor: "#6a6a00" },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CustomPopup;
