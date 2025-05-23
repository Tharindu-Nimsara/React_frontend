import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import NotFoundPage from './pages/NotFound'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/registerPage'


function App() {
  

  return (
    <BrowserRouter>
        <div >
          <Toaster position='top-right'></Toaster> 
          <Header>  </Header>
          <Routes path="/*">  {/* localhost:5172/ */} 
            <Route path="/" element={<HomePage />} />         {/* localhost:5172/home */} 
            <Route path="/login" element={<LoginPage />} />     {/* localhost:5172/login */}
            <Route path="/signup" element={<RegisterPage />} />   {/* localhost:5172/signup */}
            <Route path="/admin/*" element={<AdminPage />} />   {/* localhost:5172/admin */}
            <Route path="/test" element={<TestPage/>} />       {/* localhost:5172/test */}
            
            
            <Route path="/*" element={<NotFoundPage></NotFoundPage>} />       {/* localhost:5172/anything */}
          </Routes>
        </div>
    
    
    
    </BrowserRouter>
    
  )
}

export default App
 

// https://jzqzeilcxzrwxlenxqvv.supabase.co   URL


//anon public key
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6cXplaWxjeHpyd3hsZW54cXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMDgyOTksImV4cCI6MjA2MzU4NDI5OX0.92o8pafDH-KLl9qJIkiWhi4yYolN8tC71bHeV_mPx6s