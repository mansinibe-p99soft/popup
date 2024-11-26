import React from "react";
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from "@mui/material";

const collaborators = [
  { name: "Emma Taylor", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Ryan Carter", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Scott Simmons", avatar: "" }, 
];

const Collaboratorslist: React.FC = () => {
  return (
    <Box sx={{ mb: 3 }}>
      {/* Header */}
      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500, fontSize: "0.9rem", color: "#6B6B6B" , font:"Reddit Sans"}}>
        {collaborators.length} Collaborators are on this domain
      </Typography>
      
      {/* List */}
      <List sx={{ padding: 0, font:"Reddit Sans" }}>
        {collaborators.map((collaborator, index) => (
          <React.Fragment key={index}>
            <ListItem sx={{ padding: "8px 0" }}>
              <ListItemAvatar>
                {collaborator.avatar ? (
                  <Avatar src={collaborator.avatar} sx={{ width: 32, height: 32 , }} />
                ) : (
                  <Avatar sx={{ width: 32, height: 32, bgcolor: "#F25A5A", fontSize: "0.9rem", font:"Reddit Sans" }}>
                    {collaborator.name.charAt(0)}
                  </Avatar>
                )}
              </ListItemAvatar>
              <ListItemText
                primary={collaborator.name}
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#000",
                  marginLeft:"-14px",
                  marginTop:"5px"
                }}
              />
            </ListItem>
            {/* {index < collaborators.length - 1 && <Divider sx={{ marginY: 1 }} />} */}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Collaboratorslist;
