import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'

function App() {
  

  return (
    <BrowserRouter>
        <div >
          <Header>  </Header>
          <Routes path="/*">
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
    
    
    
    </BrowserRouter>
    
  )
}

export default App
 