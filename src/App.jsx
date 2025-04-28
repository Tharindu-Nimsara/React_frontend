import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'
import NotFoundPage from './pages/NotFound'
import AdminPage from './pages/adminPage'

function App() {
  

  return (
    <BrowserRouter>
        <div >
          <Header>  </Header>
          <Routes path="/*">  {/* localhost:5172/ */} 
            <Route path="/" element={<HomePage />} />         {/* localhost:5172/home */} 
            <Route path="/login" element={<LoginPage />} />     {/* localhost:5172/login */}
            <Route path="/signup" element={<SignupPage />} />   {/* localhost:5172/signup */}
            <Route path="/admin/*" element={<AdminPage />} />   {/* localhost:5172/admin */}
            
            <Route path="/*" element={<NotFoundPage></NotFoundPage>} />       {/* localhost:5172/anything */}
          </Routes>
        </div>
    
    
    
    </BrowserRouter>
    
  )
}

export default App
 