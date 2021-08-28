import React from 'react'
import './index.css'
import Card from './Card'
// import Carddata from './Carddata'
import Sdata from './Sdata'
import Greet from './Greet'
import Ifelse from './Ifelse'
import Hooks from './Hooks'
const App =() => {
   function ncard(val){
     return(
      <Card   
      imgscr={val.imgscr}
      link={val.link}
      title={val.title} 
      stream={val.stream}
      />
     )
   }
  return (
    <>
    <h1>Series List</h1>
         {/* <Card /> */}
         
         
         {Sdata.map(ncard)};
         {/* <Card 
         imgscr="https://i.pinimg.com/474x/3f/71/59/3f7159db35d2989e231b161adf5635b9.jpg"
         link="https://www.netflix.com/in/title/81278456"
         title="Jujutsu Kiasen"
         stream="Netflix"
         /> */}
         <Hooks />
         <Ifelse />
         <Greet id="Ken"/>
         <Greet id="cage"/>
         <Greet id="romen"/>
    </>
  )
}

export default App

