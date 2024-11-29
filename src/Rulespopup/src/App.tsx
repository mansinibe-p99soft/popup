
import React, { useState } from "react";
import Definerules from "./Components/Definerules";
import Rulesadded from "./Components/Rulesadded";
import PopupLayout from "./Components/Popuplayout";

const App: React.FC = () => {
  const [open, setOpen] = useState(true); // Controls popup visibility
  const [showRulesAdded, setShowRulesAdded] = useState(false); // Toggle between rule editing/viewing
  const [rules, setRules] = useState<string[]>([
    "Ensure that promotion_id is unique for every entry to avoid duplication of promotion records.",
    "Validate promotion_id format to avoid conflicts.",
  ]);
  const [newRule, setNewRule] = useState<string>(""); // Tracks the new custom rule input
  const [showCustomInput, setShowCustomInput] = useState(false); // Toggles input box visibility

  // Handles adding a new custom rule
  const handleAddCustomRule = () => {
    if (newRule.trim()) {
      setRules([...rules, newRule.trim()]);
      setNewRule(""); // Clear the input box
      setShowCustomInput(false); // Hide input box after submission
    }
  };

  // Handles deleting an existing rule
  const handleDeleteRule = (index: number) => {
    setRules(rules.filter((_, i) => i !== index));
  };

  // Toggles the input box for adding custom rules
  const toggleCustomInput = () => {
    setShowCustomInput(!showCustomInput);
  };

  // Handler for the "New Action" button
  const handleNewActionClick = () => {
    console.log("New Action Clicked!");
    // Implement the action here
  };

  return (
    <PopupLayout
      open={open}
      title="Define Rule Sets with AI Assist"
      primaryButtonText={showRulesAdded ? "Update" : "Save"} // Save or Update button
      primaryButtonClick={() => setShowRulesAdded(!showRulesAdded)} // Toggles rule view
      secondaryButtonText="Cancel"
      secondaryButtonClick={() => setOpen(false)} // Closes popup
      tertiaryButtonText={showRulesAdded ? "undefined" : "View Rules"} // Show "View Rules" when adding rules
      tertiaryButtonClick={() => setShowRulesAdded(!showRulesAdded)} // Toggles view between adding/viewing rules
      // newActionButtonText="New Action"
      // newActionButtonClick={handleNewActionClick} // New Action button functionality
    >
      {showRulesAdded ? (
        <Rulesadded
          rules={rules}
          onDelete={handleDeleteRule}
          onSave={(newRules: string[]) => setRules(newRules)} // Save updated rules
          onNewActionClick={handleNewActionClick} // Pass the "New Action" handler
        />
      ) : (
        <Definerules
          rules={rules}
          onAddCustomRule={toggleCustomInput} // Pass toggle for "Add Custom Rule"
        />
      )}

      {/* Show input box if "Add Custom Rule" is triggered */}
      {showCustomInput && (
        <div style={{ marginTop: "10px" }}>
          <input
            type="text"
            placeholder="Write your custom rule..."
            value={newRule}
            onChange={(e) => setNewRule(e.target.value)} // Track input changes
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleAddCustomRule} // Add the rule on button click
            style={{
              padding: "8px 12px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add Rule
          </button>
        </div>
      )}
    </PopupLayout>
  );
};

export default App;
