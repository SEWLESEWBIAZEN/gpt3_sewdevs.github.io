import { CTA,Navbar,Brand } from './components'
import {Features,Blog, Footer, Header,Possibility,WhatGPT3} from './containers'

import './App.css'

function App() { 

  return (
    
      <div className='App'>
       <div className='gradient__bg'>
        <Navbar/>
        <Header/>       

       </div>
       <div className='gradient__text'>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
       </div>
      </div>
      

  )
}

export default App
