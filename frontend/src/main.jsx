import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CommittePage from './pages/committePage/committe.jsx'
import TravelGrantPage from './pages/TravelGrantPage/TravelGrant.jsx'
import ContactUsPage from './pages/ContactUs/contactus.jsx'
import SponsorsPage from './pages/SponsorsPage/SponsorsPage.jsx'
import CallForPaperPage from './pages/CallForPaper/CallForPaper.jsx'
import CallForSPLsessionPage from './pages/CallForSPLsession/CallForSPLsession.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/committee" element={<CommittePage />} />
        <Route path="/travel-grant" element={<TravelGrantPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/call-for-paper" element={<CallForPaperPage />} />
        <Route path="/call-for-special-sessions" element={<CallForSPLsessionPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
