import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import TeamMatches from "./components/TeamMatches"
import NotFound from "./components/NotFound"
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-matches/:id" element={<TeamMatches />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
