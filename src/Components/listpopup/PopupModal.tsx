import React from "react";
import { Box, Modal } from "@mui/material";

interface PopupModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PopupModal: React.FC<PopupModalProps> = ({ open, onClose, children }) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        height:"80%",
        bgcolor: "background.paper",
        borderRadius: "8px",
        boxShadow: 24,
        padding: "24px",
        overflowY:"scroll",
      }}
    >
      {children}
    </Box>
  </Modal>
);

export default PopupModal;
