import { Button } from '@mui/material'
import './App.css'
import Collaboratorspopup from './Components/Collaboratorspopup'
import PopupModal from './Components/listpopup/PopupModal'
import Popup from './Components/listpopup/Popup'
import { useState } from 'react'
import RulesPopup from './Rulespopup/RulesPopup'


function App() {
  const [open, setOpen] = useState(false);
  const [openRulesModal, setOpenRulesModal] = useState(false);

  return (
    <div style={{display:"flex", padding: "2rem", gap: "1rem" }}>
      <Collaboratorspopup />
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Popup
      </Button>
      <Button variant="outlined" onClick={() => setOpenRulesModal(true)}>
        Open Rules Popup
      </Button>
      <RulesPopup open={openRulesModal} setOpen={setOpenRulesModal} />
      <PopupModal open={open} onClose={() => setOpen(false)}>
        <Popup />
      </PopupModal>
    </div>
  )
}

export default App
