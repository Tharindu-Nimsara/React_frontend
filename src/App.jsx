import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
      <Header></Header>
      <h1>hello</h1> 
      <ProductCard name="Appel Laptop" price="1000" description="dfhaskhfaksjdhakjfa" picture="https://picsum.photos/id/1/200/300"/>
      <ProductCard name="Asus Laptop" price="800" description="keiwwerupweiropweirwprw" picture="https://picsum.photos/id/3/200/300"/>
    </>
  )
}

export default App
 