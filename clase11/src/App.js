import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import * as BS from "react-bootstrap";
import Cards from './components/Card';
import Movies from './components/movies/Movies';
import img1 from './assets/img1.jpg'
import img2 from './assets/img1.jpg'
import img3 from './assets/img1.jpg'
import img4 from './assets/img1.jpg'
import img5 from './assets/img1.jpg'

const myData = [
    {Framework:"bootstrap"},
    {Framework:"Material"},
    {Framework:"Tailwind"},
    {Framework:"next"},]

const myImg = [
  {img:{img1}},
  {img:{img2}},
  {img:{img3}},
  {img:{img4}},
  {img:{img5}}

]

const words = ['spray','limit', 'elite', 'exuberant', 'destruction', 'present'];


    
function App() {

      
      const filterResult = words.filter (word=>word.length>8 );
      const myDataList = myData.map ((element)=> {
       return(<h2>{element.Framework}</h2>)
     });

     const myImgList = myImg.map ((picture)=>{
      return(<img src={picture} />)
     })
     
      return (
    <div className="App">



      <BS.Alert variant="primary" className='text-center display-2 mt-1'>Lista de Framework</BS.Alert>
      <h2>{myDataList}</h2>
      <Movies data= {filterResult} />
      <BS.Alert variant="primary" className='text-center display-2 mt-1'>Lista de imagenes</BS.Alert>

      <Cards/>
      <myImgList/>

      



          
    </div>
  
  );
}

export default App;
