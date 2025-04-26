
import "./components/ThemeSelector.css"

import './App.css'
import Content from './components/Content'
import Navbar from './components/Navbar'
import { ThemeProvider } from './contexts/ThemeContexts'
import HomePage from "./components/HomePage"
function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <HomePage />
      <Content />
    </ThemeProvider>
  )
}

export default App
