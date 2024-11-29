import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CircleIcon from "@mui/icons-material/Circle";
import CustomPopup from "./Addcustomrules"; // Import your CustomPopup component

interface DefineRulesProps {
  rules: string[];
  onAddCustomRule: (newRule: string) => void;
}

const Definerules: React.FC<DefineRulesProps> = ({
  rules
   
}) => {
  const rulesContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // To control the popup visibility
  const [updatedRules, setUpdatedRules] = useState(rules); // Store the updated rules

  const rulesPerView = 2; // Number of rules visible at a time

  const handleScrollRight = () => {
    if (rulesContainerRef.current) {
      const scrollAmount = rulesContainerRef.current.clientWidth;
      rulesContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      const maxScrollLeft =
        rulesContainerRef.current.scrollWidth - rulesContainerRef.current.clientWidth;
      const newScrollLeft = rulesContainerRef.current.scrollLeft + scrollAmount;

      const newIndex = Math.min(
        Math.floor((newScrollLeft / maxScrollLeft) * (rules.length / rulesPerView)),
        Math.ceil(rules.length / rulesPerView) - 1
      );
      setActiveDotIndex(newIndex);
    }
  };

  const handleScrollLeft = () => {
    if (rulesContainerRef.current) {
      const scrollAmount = rulesContainerRef.current.clientWidth;
      rulesContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });

      const maxScrollLeft =
        rulesContainerRef.current.scrollWidth - rulesContainerRef.current.clientWidth;
      const newScrollLeft = rulesContainerRef.current.scrollLeft - scrollAmount;

      const newIndex = Math.max(
        Math.floor((newScrollLeft / maxScrollLeft) * (rules.length / rulesPerView)),
        0
      );
      setActiveDotIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (rulesContainerRef.current) {
        const maxScrollLeft =
          rulesContainerRef.current.scrollWidth - rulesContainerRef.current.clientWidth;
        const newScrollLeft = rulesContainerRef.current.scrollLeft;

        const newIndex = Math.round(
          (newScrollLeft / maxScrollLeft) * (rules.length / rulesPerView)
        );
        setActiveDotIndex(newIndex);
      }
    };

    const currentRef = rulesContainerRef.current;
    currentRef?.addEventListener("scroll", handleScroll);

    return () => {
      currentRef?.removeEventListener("scroll", handleScroll);
    };
  }, [rules.length]);

  const handleAddCustomRule = (newRules: string[]) => {
    setUpdatedRules(newRules); // Update rules with the new ones from the popup
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "16px",
          ml: "2%",
          fontSize: "20px",
          fontWeight: 500,
          marginLeft: "16px",
        }}
      >
        Here are some suggested rule sets for this domain
      </Typography>

      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "16px",
          marginLeft: "3%",
          fontWeight: 500,
          fontSize: "20px",
          marginTop: "-17px",
        }}
      >
        <span>sets for this domain</span>
        <Button
          onClick={handleOpenPopup} // Open the popup on click
          sx={{
            marginLeft: "auto",
            fontSize: { xs: "12px", sm: "14px" },
            textTransform: "none",
            color: "#808000",
            background: "#ffffff",
            alignItems: "end",
            textAlign: "left",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "#f8f8f8",
            },
          }}
        >
          Add Custom
        </Button>
      </Typography>

      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <div
          ref={rulesContainerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "16px",
            scrollBehavior: "smooth",
            padding: "16px",
          }}
        >
          {updatedRules.map((rule, index) => (
            <Box
              key={index}
              sx={{
                padding: "16px",
                background: "#6994931C",
                borderRadius: "8px",
                minWidth: "200px",
                textAlign: "left",
                position: "relative",
                height: "275px",
              }}
            >
              <Typography sx={{ fontWeight: 500, marginBottom: "4px" }}>
                Rule {index + 1}:
              </Typography>
              <Typography>{rule}</Typography>

              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                }}
              >
                <Button
                  sx={{
                    padding: "8px 1px",
                    fontSize: { xs: "12px", sm: "14px" },
                    textTransform: "none",
                    color: "#808000",
                  }}
                >
                  Add
                </Button>
              </Box>
            </Box>
          ))}
        </div>

        <IconButton
          onClick={handleScrollLeft}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            display: { xs: "none", sm: "block" },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <IconButton
          onClick={handleScrollRight}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            marginTop: "8px",
          }}
        >
          {Array.from(
            { length: Math.ceil(updatedRules.length / rulesPerView) },
            (_, index) => (
              <CircleIcon
                key={index}
                sx={{
                  fontSize: "12px",
                  color: index === activeDotIndex ? "#BABABA" : "#E0E0E0",
                }}
              />
            )
          )}
        </Box>
      </Box>

      {/* CustomPopup Dialog */}
      <CustomPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
        existingRules={updatedRules}
        onSave={handleAddCustomRule}
      />
    </Box>
  );
};

export default Definerules;
