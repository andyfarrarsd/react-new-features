import React, { useState, useEffect } from 'react';

// Custom Hook
const useMousePosition = () => {
   const [position, setPosition] = useState( { x:0, y:0 })
 
   useEffect(() => {
     const handleMouseMove = (e) => {
       setPosition( {
         x: e.pageX,
         y: e.pageY
       })
     }
 
     document.addEventListener('mousemove', handleMouseMove)
 
     return () => {
       document.removeEventListener('mousemove', handleMouseMove)
     }
   }, []) // only register listener once
   return position
 }

 export { useMousePosition as default }