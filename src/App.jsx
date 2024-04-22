import { useState,useEffect } from 'react'

import './App.css'


function useMousePosition(){
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
      setPosition({ x : e.clientX, y : e.clientY });
    })

    return ()=>{
      window.removeEventListener('mousemove',(e)=>{
        setPosition({ x : e.clientX, y : e.clientY });
      })
    }
  },[])

  return position
}
function App() {
  const position = useMousePosition()

  return (
    <>
      <div>
        {position.x},{position.y}
      </div>
    </>
  )
}

export default App
