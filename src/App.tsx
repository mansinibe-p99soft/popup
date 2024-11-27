import { Button } from '@mui/material'
import './App.css'
import Collaboratorspopup from './Components/Collaboratorspopup'
import PopupModal from './Components/listpopup/PopupModal'
import Popup from './Components/listpopup/Popup'
import { useState } from 'react'


function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ padding: "2rem" }}>
      <Collaboratorspopup />
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Popup
      </Button>
      <PopupModal open={open} onClose={() => setOpen(false)}>
        <Popup />
      </PopupModal>
    </div>
        
    </>
  )
}

export default App
