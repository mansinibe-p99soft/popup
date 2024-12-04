
import React, { useState } from "react";
import Definerules from "./Components/Definerules";
import Rulesadded from "./Components/Rulesadded";
import PopupLayout from "./Components/Popuplayout";

const RulesPopup = ({open,setOpen}:{open: boolean,setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [showRulesAdded, setShowRulesAdded] = useState(false);  
  const [rules, setRules] = useState<string[]>([
    "Ensure that promotion_id is unique for every entry to avoid duplication of promotion records.",
    "Validate promotion_id format to avoid conflicts.",
    "Ensure that promotion_id is unique for every entry to avoid duplication of promotion records.",
    "Validate promotion_id format to avoid conflicts.",
    "Ensure that promotion_id is unique for every entry to avoid duplication of promotion records.",
    "Validate promotion_id format to avoid conflicts.",
  ]);
  const [newRule, setNewRule] = useState<string>("");  
  const [showCustomInput, setShowCustomInput] = useState(false);  

  const handleAddCustomRule = () => {
    if (newRule.trim()) {
      setRules([...rules, newRule.trim()]);
      setNewRule(""); 
      setShowCustomInput(false); 
    }
  };

  const handleDeleteRule = (index: number) => {
    setRules(rules.filter((_, i) => i !== index));
  };

  const toggleCustomInput = () => {
    setShowCustomInput(!showCustomInput);
  };

  const handleNewActionClick = () => {
    console.log("New Action Clicked!");
  };

  return (
    <PopupLayout 
      open={open}
      title="Define Rule Sets with AI Assist"
      primaryButtonText={showRulesAdded ? "Update" : "Save"}
      primaryButtonClick={() => setShowRulesAdded(!showRulesAdded)} 
      secondaryButtonText="Cancel"
      secondaryButtonClick={() => setOpen(false)} 
      tertiaryButtonText={showRulesAdded ? "Suggested rules" : "View rules"} 
      tertiaryButtonClick={() => setShowRulesAdded(!showRulesAdded)} 
      
    >
      {showRulesAdded ? (
        <Rulesadded
          rules={rules}
          onDelete={handleDeleteRule}
          onSave={(newRules: string[]) => setRules(newRules)} 
          onNewActionClick={handleNewActionClick} 
        />
      ) : (
        <Definerules
          rules={rules}
          onAddCustomRule={toggleCustomInput} 
        />
      )}

      {showCustomInput && (
        <div style={{ marginTop: "10px", flexWrap:"wrap" }}>
          <input
            type="text"
            placeholder="Write your custom rule..."
            value={newRule}
            onChange={(e) => setNewRule(e.target.value)} 
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleAddCustomRule} 
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

export default RulesPopup;
