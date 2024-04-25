
import './App.css'
import HeroSection from './components/HeroSection'
import Landing from './components/Landing'
import { Routes, Route} from 'react-router-dom'
import { MarkdownProvider } from './components/Markdown'

function App() {

  return (
    <MarkdownProvider>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/editor" element={<HeroSection />} />
    </Routes>
    </MarkdownProvider>
  )
}

export default App
