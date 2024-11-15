import React,{useEffect, useState} from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { MagicSpinner  } from "react-spinners-kit";
import "./App.css" 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home'
import NavBar from './component/NavBar'
import Projects from './component/Projects';
import Game from './component/Game';



const App = () => {

    const [loading , setLoading]= useState(false);
    
      useEffect(()=>{
          setLoading(true);

          setTimeout(()=>{
              setLoading(false)
          },1000)


      }, [])


  return (
    <BrowserRouter>

        <div>
        <NavBar/>
        </div>

        {loading ?
        <div className='preloaderr'>
         <MagicSpinner  size={200} color="#fff"/>

          </div>
          :
          <>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Projects' element={<Projects />}/>
            <Route path='/Game' element={<Game/>}/>
            
         
            
          </Routes></>
      }

        
      
    

      

    </BrowserRouter>
  )
}

export default App