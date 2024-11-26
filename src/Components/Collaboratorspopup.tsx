import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import CollaboratorsHeader from "./Collaboratorsheader";
import CollaboratorsList from "./Collaboratorslist";
import CollaboratorsFooter from "./Collaboratorsfooter";

const Collaboratorspopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen}>Open Popup</button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
          }}
        >
          <CollaboratorsHeader />
          <CollaboratorsList />
          <CollaboratorsFooter onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default Collaboratorspopup;
