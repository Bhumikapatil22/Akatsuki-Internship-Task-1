import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Blog from './components/Blog'
import Container from './components/Container'
import "./App.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'ionicons/icons'; 
import Data from './Data'
import Footer from './components/Footer'


function App() {
  const [container,setContainer]=useState(Data);

  return (
    <>
      <Header />
      <Hero />
      <Container blogs={container} ></Container>
      <Footer />
    </>
  )
}

export default App
